#!/usr/bin/env python3
"""Generate gap-targeted articles with Groq (openai/gpt-oss-120b) using the
proven WebDevWorker guide template. Template-locked: same 6-section structure,
FAQ schema, real tool slugs only (validated against tools/).

Usage:
    GROQ_API_KEY=... python3 generate_articles.py \
        --gaps seo/gap_report.json --ledger seo/keywords.json --max 2

Reads TEMPLATE_SHELL from .github/scripts/article_shell.json (head/premain/
postmain extracted from a proven article) and writes articles/<slug>.html.

Schema updates are done by parsing the JSON-LD (never by regex), so the
FAQPage/Article blocks stay valid JSON.
"""
import argparse, datetime, html as htmlmod, json, os, re, sys, urllib.request

MODEL = "openai/gpt-oss-120b"
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

SECTION_SPECS = [
    ("overview", "1. {kw} Overview: What It Is and Why It Matters"),
    ("syntax", "2. How It Works: Syntax, Format & Specification"),
    ("workflow", "3. Step-by-Step: Using the Free Online Tool"),
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
- Internal links: 3-5 to REAL WebDevWorker tools from this list only: {tools}. Format: <a href="/tools/SLUG.html">Name</a>.
- Mention "WebDevWorker" 3-4 times; emphasize 100% client-side, no signup, no data leaves the browser.
- Each non-FAQ section 250-450 words of specific, useful content. No filler. Escape & as &amp;.
- Total body copy MUST exceed 800 words. Write exactly 6 FAQ items — never fewer. Do not truncate, summarize, or stop early; finish all 6 sections completely.
"""

def groq(prompt, api_key):
    body = json.dumps({
        "model": MODEL,
        "temperature": 0.7,
        "max_tokens": 16000,
        "reasoning_effort": "low",
        "messages": [
            {"role": "system", "content": "You are an elite SEO technical writer for WebDevWorker.com. Output ONLY raw HTML. Never markdown, never code fences, never commentary."},
            {"role": "user", "content": prompt},
        ],
    }).encode()
    req = urllib.request.Request(GROQ_URL, data=body, method="POST",
                                 headers={"Authorization": f"Bearer {api_key}",
                                          "Content-Type": "application/json",
                                          "User-Agent": "WebDevWorker-SEO-Agent/2.0"})
    with urllib.request.urlopen(req, timeout=180) as r:
        data = json.load(r)
    content = data["choices"][0]["message"]["content"].strip()
    if content.startswith("```"):
        content = content.split("\n", 1)[1]
        if content.rstrip().endswith("```"):
            content = content.rstrip()[:-3]
    return content.strip()

def esc(s):
    return htmlmod.escape(s, quote=True)

def update_jsonld(head, cfg, canon, today, faqs):
    """Rewrite the Article/FAQPage nodes inside the JSON-LD block by parsing
    the JSON (never by regex) so the schema stays valid."""
    m = re.search(r'<script type="application/ld\+json">\s*(\{.*?\})\s*</script>',
                  head, flags=re.S)
    if not m:
        raise RuntimeError("JSON-LD block not found in shell head")
    data = json.loads(m.group(1))
    graph = data.get("@graph", [])
    found = set()
    for node in graph:
        t = node.get("@type")
        if t == "Article":
            node["headline"] = cfg["title"]
            node["description"] = cfg["meta_description"]
            node["mainEntityOfPage"] = canon
            node["datePublished"] = today
            node["dateModified"] = today
            found.add("Article")
        elif t == "FAQPage":
            node["mainEntity"] = [
                {"@type": "Question", "name": q,
                 "acceptedAnswer": {"@type": "Answer", "text": a}}
                for q, a in faqs
            ]
            found.add("FAQPage")
    if found != {"Article", "FAQPage"}:
        raise RuntimeError(f"JSON-LD missing nodes: found={found}")
    new_json = json.dumps(data, indent=2, ensure_ascii=False)
    return head[:m.start(1)] + "\n" + new_json + "\n" + head[m.end(1):]

def assemble(cfg, sections, shell):
    slug = cfg["slug"]
    canon = f"https://webdevworker.com/articles/{slug}"
    today = datetime.date.today().isoformat()
    head = shell["head"]
    head = re.sub(r"<title>.*?</title>", f"<title>{esc(cfg['title_tag'])}</title>", head, count=1, flags=re.S)
    head = re.sub(r'<meta name="description" content=".*?"',
                  f'<meta name="description" content="{esc(cfg["meta_description"])}"', head, count=1)
    head = re.sub(r'<link rel="canonical" href=".*?"', f'<link rel="canonical" href="{canon}"', head, count=1)
    for prop in ["og:title", "og:description", "og:url"]:
        val = {"og:title": cfg["title_tag"], "og:description": cfg["meta_description"], "og:url": canon}[prop]
        head = re.sub(rf'<meta property="{prop}" content=".*?"',
                      f'<meta property="{prop}" content="{esc(val)}"', head, count=1)

    faqs = re.findall(r"<summary[^>]*>(.*?)</summary>\s*<p[^>]*>(.*?)</p>", sections, flags=re.S)
    clean_faqs = []
    for q, a in faqs:
        q = re.sub(r"<[^>]+>", "", q).strip()
        a = re.sub(r"<[^>]+>", "", a).strip()
        if q and a:
            clean_faqs.append((q, a))
    if len(clean_faqs) < 5:
        raise RuntimeError(f"only {len(clean_faqs)} FAQs extracted from generated sections")
    head = update_jsonld(head, cfg, canon, today, clean_faqs[:6])

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

    made = 0
    for g in gaps.get("recommended", [])[: a.max]:
        if g["slug"] in published or g["slug"] in existing:
            print(f"skip {g['slug']} (already published)")
            continue
        if g["tool"] not in tools:
            print(f"skip {g['slug']} (unknown tool slug: {g['tool']})")
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
        open(out, "w", encoding="utf-8").write(html)
        ledger.setdefault("published", []).append(
            {"slug": g["slug"], "keyword": kw, "date": datetime.date.today().isoformat()})
        made += 1
        print(f"  wrote {out} ({len(html)} bytes)")
    json.dump(ledger, open(a.ledger, "w"), indent=2)
    print(f"done: {made} articles")

if __name__ == "__main__":
    main()
