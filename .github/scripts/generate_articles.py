#!/usr/bin/env python3
"""Generate gap-targeted articles with Groq (openai/gpt-oss-120b) using the
proven WebDevWorker guide template. Template-locked: same 6-section structure,
FAQ schema, real tool slugs only (validated against tools/).

v2.1 fix (2026-10-19): the v2.0 generator wrote articles straight to disk and
the validator (also v2.0) rejected whole runs on the legacy v1 articles. This
version self-checks every assembled article against the strict validator BEFORE
writing: it normalizes <section> attribute order, unwraps broken internal
links, and skips (does not write / does not ledger) any article that still
fails — so one bad LLM output can never again fail the whole 6-hourly run.

Usage:
    GROQ_API_KEY=... python3 generate_articles.py \
        --gaps seo/gap_report.json --ledger seo/keywords.json --max 2 \
        [--manifest /tmp/new_articles.txt]

Reads TEMPLATE_SHELL from .github/scripts/article_shell.json (head/premain/
postmain extracted from a proven article) and writes articles/<slug>.
"""
import argparse, html as htmlmod, json, os, re, sys, urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import validate_articles

MODEL = "openai/gpt-oss-120b"
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

SECTION_SPECS = [
    ("overview", "1. {kw} Overview: What It Is and Why It Matters"),
    ("syntax", "2. How It Works: Syntax, Format & Specification"),
    ("workflow", "3. Step-By-Step: Using the Free Online Tool"),
    ("code", "4. Code Examples You Can Copy-Paste"),
    ("benchmarks", "5. Best Practices, Limits & Benchmarks"),
    ("faqs", "6. Frequently Asked Questions (FAQs)"),
]

PROMPT = """Write ONLY the inner HTML for 6 <section> blocks of a developer guide article on WebDevWorker.com.
Target keyword: "{keyword}". Article H1: "{title}". Featured tool slug: {tool} (link as /tools/{tool}.html).

Output EXACTLY these 6 sections in order, each opening with <section id="ID" class="guide-section"> and an <h2> with the EXACT title:
{h2list}

Rules:
- Pure HTML only. No markdown, no code fences, no commentary.
- Use <p>, <ul>/<li>, <strong>, <code>, <pre><code> for 2-4 real copy-pasteable examples, <table> for comparisons/reference.
- faqs section: <div class="faq-list"> with exactly 6 FAQ items in this EXACT markup:
  <div class="faq-item" style="background:var(--bg-surface); border:1px solid var(--border); border-radius:10px; margin-bottom:12px; overflow:hidden;">
    <details style="padding:14px 18px;">
      <summary style="font-weight:700; color:var(--text-main); cursor:pointer; font-size:0.95rem;">QUESTION</summary>
      <p style="margin-top:10px; color:var(--text-muted); font-size:0.9rem; line-height:1.65;">ANSWER</p>
    </details>
  </div>
  FAQs must target real "People Also Ask" queries containing the keyword.
- Internal links: 3-5 to REAL WebDevWorker tools from this list only: {tools}. Format: <a href="/tools/SLUG.html">Name</a>. Do NOT link to /articles/ pages.
- Mention "WebDevWorker" 3-4 times; emphasize 100% client-side, no signup, no data leaves the browser.
- Each non-FAQ section 250-450 words of specific, useful content. No filler. Escape & as &amp;.
"""


def groq(prompt, api_key):
    body = json.dumps({
        "model": MODEL,
        "temperature": 0.7,
        "max_tokens": 8000,
        "reasoning_effort": "low",
        "messages": [
            {"role": "system", "content": "You are an elite SEO technical writer for WebDevWorker.com. Output ONLY raw HTML. Never markdown, never code fences, never commentary."},
            {"role": "user", "content": prompt},
        ],
    }).encode()
    req = urllib.request.Request(GROQ_URL, data=body, method="POST",
                                 headers={"Authorization": f"Bearer {api_key}",
                                          "Content-Type": "application/json",
                                          "User-Agent": "WebDevWorker-SEO-Agent/2.1"})
    with urllib.request.urlopen(req, timeout=180) as r:
        data = json.load(r)
    content = data["choices"][0]["message"]["content"].strip()
    # robust fence stripping (```html, ```HTML, leading/trailing fences)
    content = re.sub(r"^```[a-zA-Z]*\s*\n", "", content)
    content = re.sub(r"\n?```\s*$", "", content)
    return content.strip()


def esc(s):
    return htmlmod.escape(s, quote=True)


def replace_faq_entities(head, ents):
    """Replace the FAQPage JSON-LD object with fresh entities, whatever the
    shell's indentation. Brace-counts from the object start. If no FAQPage
    block exists, returns head unchanged."""
    m = re.search(r'"@type"\s*:\s*"FAQPage"', head)
    if not m:
        return head
    start = head.rfind("{", 0, m.start())
    if start < 0:
        return head
    depth = 0
    i = start
    in_str = False
    escape = False
    while i < len(head):
        c = head[i]
        if in_str:
            if escape:
                escape = False
            elif c == "\\":
                escape = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    break
        i += 1
    if depth != 0:
        return head  # unbalanced; leave untouched rather than corrupt
    fresh = '{"@type": "FAQPage", "mainEntity": [%s]}' % ", ".join(ents)
    return head[:start] + fresh + head[i + 1:]


def normalize_sections(html):
    """Force <section id="..." class="guide-section"> attribute order so the
    validator's exact-match check passes regardless of LLM attribute order."""
    def fix(m):
        attrs = m.group(1)
        im = re.search(r'id="([a-z]+)"', attrs)
        if not im:
            return m.group(0)
        rest = re.sub(r'\s*id="[a-z]+"', "", attrs).strip()
        rest = f" {rest}" if rest else ""
        return f'<section id="{im.group(1)}"{rest}>'
    return re.sub(r"<section\s+([^>]*?)>", fix, html)


def drop_broken_links(html):
    """Unwrap <a> tags pointing at /tools/ or /articles/ slugs that do not
    exist in the repo; keeps the link text."""
    def fix(m):
        kind, slug, text = m.group(1), m.group(2), m.group(3)
        if not os.path.exists(os.path.join(kind, slug)):
            return text
        return m.group(0)
    return re.sub(r'<a\s+href="/(tools|articles)/([a-z0-9\-]+\.html)"[^>]*>(.*?)</a>',
                  fix, html, flags=re.S)


def self_check(path, html):
    """Run the strict validator on assembled HTML (via temp file). Returns
    (ok, errors, repaired_html)."""
    import tempfile
    html = normalize_sections(html)
    html = drop_broken_links(html)
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False,
                                     encoding="utf-8") as t:
        t.write(html)
        tmp = t.name
    # point validator at repo root: replicate path-dependent checks by
    # temporarily writing beside a fake path — simplest: write to the real
    # target path check via a temp dir mirroring repo layout is overkill;
    # instead validate text directly with a shim.
    os.unlink(tmp)
    errs = _validate_text(path, html)
    return (not errs), errs, html


def _validate_text(path, html):
    """validate_articles.validate() against in-memory HTML for the not-yet-
    written target path."""
    base = os.path.basename(path)
    errs = []
    h = html
    if not re.search(r"<title>.{20,120}</title>", h):
        errs.append("bad <title>")
    m = re.search(r'<meta name="description" content="([^"]+)"', h)
    if not m or not (50 <= len(m.group(1)) <= 300):
        errs.append("bad meta description")
    if f'<link rel="canonical" href="https://webdevworker.com/articles/{base}"' not in h:
        errs.append("canonical mismatch")
    for sid in validate_articles.REQUIRED_SECTIONS:
        if f'<section id="{sid}"' not in h:
            errs.append(f"missing section #{sid}")
    if '"@type": "FAQPage"' not in h and '"@type":"FAQPage"' not in h:
        errs.append("missing FAQPage schema")
    n_q = h.count('"@type": "Question"')
    if n_q < 5:
        errs.append(f"only {n_q} FAQ questions (<5)")
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<[^>]+>", " ", h, flags=re.S)
    words = len(re.findall(r"[A-Za-z]{2,}", body))
    if words < validate_articles.MIN_WORDS:
        errs.append(f"thin content: {words} words (<{validate_articles.MIN_WORDS})")
    for slug in set(re.findall(r'href="/tools/([a-z0-9\-]+\.html)"', h)):
        if not os.path.exists(os.path.join("tools", slug)):
            errs.append(f"broken tool link: /tools/{slug}")
    for slug in set(re.findall(r'href="/articles/([a-z0-9\-]+\.html)"', h)):
        if not os.path.exists(os.path.join("articles", slug)):
            errs.append(f"broken article link: /articles/{slug}")
    if "```" in h or "TODO" in h or "Lorem ipsum" in h:
        errs.append("placeholder/markdown leak")
    return errs


def assemble(cfg, sections, shell):
    slug = cfg["slug"]
    canon = f"https://webdevworker.com/articles/{slug}"
    today = __import__("datetime").date.today().isoformat()
    head = shell["head"]
    head = re.sub(r"<title>.*?</title>", f"<title>{esc(cfg['title_tag'])}</title>", head, count=1, flags=re.S)
    head = re.sub(r'<meta name="description" content=".*?"',
                  f'<meta name="description" content="{esc(cfg["meta_description"])}"', head, count=1)
    head = re.sub(r'<link rel="canonical" href=".*?"', f'<link rel="canonical" href="{canon}"', head, count=1)
    for prop in ["og:title", "og:description", "og:url"]:
        val = {"og:title": cfg["title_tag"], "og:description": cfg["meta_description"], "og:url": canon}[prop]
        head = re.sub(rf'<meta property="{prop}" content=".*?"',
                      f'<meta property="{prop}" content="{esc(val)}"', head, count=1)
    head = re.sub(r'"headline": ".*?"', f'"headline": "{cfg["title"]}"', head, count=1)
    head = re.sub(r'"mainEntityOfPage": ".*?"', f'"mainEntityOfPage": "{canon}"', head, count=1)
    head = re.sub(r'"datePublished": "\d{4}-\d{2}-\d{2}"', f'"datePublished": "{today}"', head)
    head = re.sub(r'"dateModified": "\d{4}-\d{2}-\d{2}"', f'"dateModified": "{today}"', head)
    faqs = re.findall(r"<summary[^>]*>(.*?)</summary>\s*<p[^>]*>(.*?)</p>", sections, flags=re.S)
    ents = []
    for q, a in faqs:
        q = re.sub(r"<[^>]+>", "", q).strip().replace('"', "'")
        a = re.sub(r"<[^>]+>", "", a).strip().replace('"', "'")
        ents.append('{"@type": "Question", "name": "%s", "acceptedAnswer": {"@type": "Answer", "text": "%s"}}' % (q, a))
    head = replace_faq_entities(head, ents)
    toc = "\n".join(
        f'<li><a href="#{sid}" style="color:var(--brand-primary);">{t}</a></li>'
        for sid, t in [(s, h.format(kw=cfg["keyword"])) for s, h in SECTION_SPECS])
    inner = f"""<article class="guide-article-wrap">
        <nav aria-label="Breadcrumb" style="margin-bottom: 20px; font-size: 0.82rem; color: var(--text-dim);">
          <a href="/" style="color: var(--brand-primary); text-decoration: none;">Home</a>
          <span style="margin: 0 8px; color: var(--border);">/</span>
          <a href="/articles/" style="color: var(--brand-primary); text-decoration: none;">Guides Hub</a>
          <span style="margin: 0 8px; color: var(--border);">/</span>
          <span style="color: var(--text-muted);">{esc(cfg["title"])}</span>
        </nav>
        <header class="guide-hero">
          <div class="guide-badge">🧰 Code, Data &amp; APIs</div>
          <h1 class="guide-title">{esc(cfg["title"])}</h1>
          <div class="guide-meta-strip">
            <span>📅 Updated {today[:7]}</span>
            <span style="color: #10b981; font-weight:700;">✓ 100% Client-Side Sandbox</span>
            <span>⏱️ 8 min read</span>
            <span>🏢 Zaviyan LLC</span>
          </div>
        </header>
        <div class="tool-embed-banner">
          <h3><span>🧰</span> Live Developer Workstation</h3>
          <p>Try it live: the free client-side {esc(cfg["tool"].replace("-", " "))} tool. No signup, no data leaves your browser.</p>
          <a href="/tools/{cfg["tool"]}.html" class="tool-launch-btn">Launch the Free Tool →</a>
        </div>
        <nav class="toc-box"><h3>Guide Sections</h3><ul>{toc}</ul></nav>
{sections}
        <div class="tool-embed-banner" style="margin-top: 48px;">
          <h3>Ready to accelerate your workflow?</h3>
          <p>Launch the interactive zero-telemetry utility in your browser right now.</p>
          <a href="/tools/{cfg["tool"]}.html" class="tool-launch-btn">Launch Now →</a>
        </div>
      </article>"""
    return head + "</head>" + shell["premain"] + '<main class="page-container">\n      ' + inner + "\n    " + shell["postmain"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gaps", required=True)
    ap.add_argument("--ledger", required=True)
    ap.add_argument("--max", type=int, default=2)
    ap.add_argument("--manifest", default=None,
                    help="write one articles/<slug> path per generated article")
    a = ap.parse_args()
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        sys.exit("GROQ_API_KEY missing")
    gaps = json.load(open(a.gaps))
    ledger = json.load(open(a.ledger)) if os.path.exists(a.ledger) else {"published": []}
    shell = json.load(open(".github/scripts/article_shell.json"))
    tools = sorted(s[:-5] for s in os.listdir("tools") if s.endswith(".html"))
    published = {p["slug"] for p in ledger.get("published", [])}
    existing = set(os.listdir("articles")) if os.path.isdir("articles") else set()

    made = []
    for g in gaps.get("recommended", [])[: a.max]:
        if g["slug"] in published or g["slug"] in existing:
            continue
        kw, title, tool = g["keyword"], g["title"], g["tool"]
        h2list = "\n".join(f'- id="{sid}" H2: "{h.format(kw=kw)}"' for sid, h in SECTION_SPECS)
        prompt = PROMPT.format(keyword=kw, title=title, tool=tool,
                               h2list=h2list, tools=", ".join(tools[:60]))
        print(f"generating {g['slug']} ...", flush=True)
        sections = groq(prompt, api_key)
        meta = (f"{title.split('(')[0].strip()}: free online tool, step-by-step workflow, "
                f"code examples & FAQs. 100% client-side, no signup. (2026 guide)")
        cfg = {"slug": g["slug"], "title": title, "keyword": kw, "tool": tool,
               "title_tag": f"{title} | WebDevWorker", "meta_description": meta[:300]}
        html = assemble(cfg, sections, shell)
        out = os.path.join("articles", g["slug"])
        ok, errs, html = self_check(out, html)
        if not ok:
            print(f"  SKIP {g['slug']}: fails strict self-check, not writing "
                  f"(will retry next run): {'; '.join(errs)}")
            continue
        open(out, "w", encoding="utf-8").write(html)
        ledger.setdefault("published", []).append(
            {"slug": g["slug"], "keyword": kw, "date": __import__("datetime").date.today().isoformat()})
        made.append(out)
        print(f"  wrote {out} ({len(html)} bytes)")
    json.dump(ledger, open(a.ledger, "w"), indent=2)
    if a.manifest:
        with open(a.manifest, "w") as mf:
            mf.write("\n".join(made) + ("\n" if made else ""))
    print(f"done: {len(made)} articles")


if __name__ == "__main__":
    main()
