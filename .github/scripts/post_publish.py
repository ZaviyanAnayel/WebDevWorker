#!/usr/bin/env python3
"""Post-publish wiring for newly generated guide articles (repo root as CWD).

For every NEW article file in articles/ (untracked or staged, excluding
index.html), this script:
  1. Adds a card to the Guides Hub (articles/index.html) and bumps the
     "All Guides (N)" + category filter-chip counts.
  2. Injects a "Related Guides" section into the matching tool page so every
     tool links to its guide (fixes the 0/96 tool->guide internal links).

New articles are detected via `git status --porcelain articles/`.
Category is derived from the tool slug: ai-* tools -> "Code, Data & APIs".

Usage: python3 .github/scripts/post_publish.py [--gaps seo/gap_report.json]
"""
import argparse, html as htmlmod, json, os, re, subprocess, sys

HUB = os.path.join("articles", "index.html")
FILTER_ORDER = ["CSS & Visual UI", "Code, Data & APIs", "Security & Cryptography",
                "DevOps & Webmaster", "Media, Assets & Viral"]

CARD_TMPL = """
        <article class="article-card" data-category="{cat_attr}">
          <span class="card-tag">🤖 {cat_html}</span>
          <h2><a href="/articles/{slug}">{title}</a></h2>
          <p class="card-desc">{desc}</p>
          <div class="card-footer">
            <span>⏱️ 8 min read</span>
            <a href="/articles/{slug}" class="btn-read">Read Guide →</a>
          </div>
        </article>"""

RELATED_TMPL = """
      <!-- Related Guides (SEO internal linking) -->
      <section class="related-guides" style="background:var(--bg-surface);border:1px solid var(--border);border-radius:16px;padding:28px 32px;margin:40px 0 8px;">
        <h2 style="font-size:1.25rem;font-weight:800;color:var(--text-main);margin-bottom:14px;">📖 Related Guides</h2>
        <ul style="margin:0 0 0 20px;color:var(--text-muted);line-height:1.7;">
          <li style="margin-bottom:8px;"><a href="/articles/{slug}" style="color:var(--brand-primary);text-decoration:none;font-weight:600;">{title} →</a></li>
        </ul>
      </section>
"""


def new_articles():
    out = subprocess.run(["git", "status", "--porcelain", "articles/"],
                         capture_output=True, text=True, timeout=30).stdout
    files = []
    for line in out.splitlines():
        m = re.search(r"([^\s]+\.html)$", line.strip())
        if m:
            f = m.group(1)
            if f.startswith("articles/") and os.path.basename(f) != "index.html":
                files.append(f)
    return sorted(set(files))


def article_meta(path):
    s = open(path, encoding="utf-8").read()
    t = re.search(r"<title>(.*?)</title>", s, re.S)
    title = htmlmod.unescape(t.group(1)).strip() if t else os.path.basename(path)
    title = re.sub(r"\s*\|\s*WebDevWorker.*$", "", title).strip()
    d = re.search(r'<meta name="description" content="([^"]+)"', s)
    desc = htmlmod.unescape(d.group(1)).strip() if d else title
    tm = re.search(r'href="/tools/([a-z0-9\-]+)\.html"', s)
    tool = tm.group(1) if tm else None
    return title, desc, tool


def bump_counts(s, counts):
    # "All Guides (97)" and 'data-filter="X">X (N)' chips
    def repl_all(m):
        return f"All Guides ({int(m.group(1)) + counts.get('all', 0)})"
    s = re.sub(r"All Guides \((\d+)\)", repl_all, s)
    for cat in FILTER_ORDER:
        n = counts.get(cat, 0)
        if not n:
            continue
        # chip label looks like: >Code, Data &amp; APIs (34)</button>
        s = re.sub(r"(" + re.escape(cat.replace("&", "&amp;")) + r") \((\d+)\)",
                   lambda m: f"{m.group(1)} ({int(m.group(2)) + n})", s, count=1)
    return s


def inject_tool_link(tool, slug, title):
    p = os.path.join("tools", tool + ".html")
    if not os.path.exists(p):
        print(f"  warn: tool page missing: {p}")
        return False
    s = open(p, encoding="utf-8").read()
    if f"/articles/{slug}" in s:
        return False  # already linked
    block = RELATED_TMPL.format(slug=slug, title=htmlmod.escape(title))
    for marker in ['<footer class="enterprise-footer"', "</main>", "</body>"]:
        if marker in s:
            s = s.replace(marker, block + ("    " if marker.startswith("<footer") else "") + marker, 1)
            open(p, "w", encoding="utf-8").write(s)
            return True
    print(f"  warn: no insertion point in {p}")
    return False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gaps", default=os.path.join("seo", "gap_report.json"))
    a = ap.parse_args()

    gap_tools = {}
    if os.path.exists(a.gaps):
        try:
            gaps = json.load(open(a.gaps))
            for g in gaps.get("recommended", []):
                gap_tools[g["slug"]] = g.get("tool")
        except Exception as e:
            print(f"warn: could not read gaps: {e}")

    files = new_articles()
    if not files:
        print("post_publish: no new articles, nothing to do")
        return
    print(f"post_publish: wiring {len(files)} new article(s)")

    counts = {"all": 0}
    hub = open(HUB, encoding="utf-8").read()
    for f in files:
        slug = os.path.basename(f)
        title, desc, tool = article_meta(f)
        tool = gap_tools.get(slug) or tool
        category = "Code, Data & APIs"  # AI-studio guides land here
        if tool and not tool.startswith("ai-"):
            # keep default; generator currently only emits AI guides
            pass
        if f"/articles/{slug}" not in hub:
            cat_attr = category.replace("&", "&amp;")
            card = CARD_TMPL.format(slug=slug, title=htmlmod.escape(title),
                                    desc=htmlmod.escape(desc[:220]),
                                    cat_attr=cat_attr, cat_html=cat_attr)
            marker = '<div class="articles-grid" id="articlesGrid">'
            hub = hub.replace(marker, marker + card, 1)
            counts["all"] += 1
            counts[category] = counts.get(category, 0) + 1
            print(f"  hub card added: {slug}")
        else:
            print(f"  hub already links: {slug}")
        if tool:
            if inject_tool_link(tool, slug, title):
                print(f"  tool link injected: {tool}.html -> {slug}")
            else:
                print(f"  tool link already present or skipped: {tool}.html")
        else:
            print(f"  warn: no tool detected for {slug}")
    hub = bump_counts(hub, counts)
    # keep the search-box placeholder count in sync too
    if counts.get("all"):
        hub = re.sub(r"Search all \d+ developer guides",
                     lambda m: f"Search all {int(re.search(r'\d+', m.group(0)).group(0)) + counts['all']} developer guides",
                     hub, count=1)
    open(HUB, "w", encoding="utf-8").write(hub)
    print(f"post_publish done: hub +{counts['all']} cards")


if __name__ == "__main__":
    main()
