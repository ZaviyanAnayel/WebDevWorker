#!/usr/bin/env python3
"""Update sitemap.xml with any articles/*.html missing from it.

Scans articles/ for HTML files whose canonical URL is not yet in sitemap.xml
and inserts them before </urlset>, preserving the existing XML formatting.
Prints added URLs to seo/added_urls.txt (one per line) for the IndexNow step.

Usage (repo root as CWD): python3 .github/scripts/update_sitemap.py
"""
import datetime, os, re, sys

SITEMAP = "sitemap.xml"
ARTICLES_DIR = "articles"
ADDED_LIST = os.path.join("seo", "added_urls.txt")

ENTRY_TMPL = """  <url>
    <loc>https://webdevworker.com/articles/{slug}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
"""

def main():
    if not os.path.exists(SITEMAP):
        sys.exit(f"{SITEMAP} not found")
    if not os.path.isdir(ARTICLES_DIR):
        sys.exit(f"{ARTICLES_DIR} not found")
    xml = open(SITEMAP, encoding="utf-8").read()
    if "</urlset>" not in xml:
        sys.exit("sitemap.xml has no </urlset> closing tag")

    existing_locs = set(re.findall(r"<loc>(https?://[^<]+)</loc>", xml))
    today = datetime.date.today().isoformat()
    added = []
    for f in sorted(os.listdir(ARTICLES_DIR)):
        if not f.endswith(".html"):
            continue
        url = f"https://webdevworker.com/articles/{f}"
        if url in existing_locs:
            continue
        xml = xml.replace("</urlset>", ENTRY_TMPL.format(slug=f, today=today) + "</urlset>", 1)
        existing_locs.add(url)
        added.append(url)
        print(f"added to sitemap: {url}")

    open(SITEMAP, "w", encoding="utf-8").write(xml)
    os.makedirs("seo", exist_ok=True)
    open(ADDED_LIST, "w", encoding="utf-8").write("\n".join(added) + ("\n" if added else ""))
    print(f"sitemap updated: {len(added)} new article URLs")

if __name__ == "__main__":
    main()
