#!/usr/bin/env python3
"""Competitor sitemap watch -> keyword gap report.

Fetches competitor sitemaps, diffs against previously seen URLs, and emits
seo/gap_report.json with topic gaps our articles/ directory doesn't cover.
Also merges a curated list of high-intent evergreen keyword opportunities.

Evergreen gaps are skipped when:
  - the exact slug is already published / exists in articles/, or
  - an existing article slug already covers the same core topic tokens
    (avoids near-duplicate guides, e.g. a second "yaml to json" article).

Usage: python3 competitor_watch.py --out seo/gap_report.json --ledger seo/keywords.json
"""
import argparse, json, os, re, urllib.request
from xml.etree import ElementTree as ET

COMPETITORS = {
    "it-tools": "https://it-tools.tech/sitemap.xml",
    "smalldev": "https://smalldev.tools/sitemap.xml",
    "10015": "https://10015.io/sitemap.xml",
    "codebeautify": "https://codebeautify.org/sitemap.xml",
}

STOPWORDS = {"online", "free", "tool", "guide", "2026", "the", "a", "an", "to",
             "and", "with", "for", "explained", "complete", "best", "top", "how"}

# Evergreen high-intent keywords mapped to article slugs we will own.
EVERGREEN_GAPS = [
    {"keyword": "json formatter online", "slug": "json-formatter-online-free-tool-2026.html",
     "title": "JSON Formatter Online: Free Tool + Complete Guide (2026)", "tool": "json-formatter-validator"},
    {"keyword": "jwt decoder online", "slug": "jwt-decoder-online-free-2026.html",
     "title": "JWT Decoder Online: Free, Private & Instant (2026 Guide)", "tool": "jwt-decoder"},
    {"keyword": "regex tester online", "slug": "regex-tester-online-free-2026.html",
     "title": "Regex Tester Online: Free Live Debugger (2026 Guide)", "tool": "regex-tester"},
    {"keyword": "base64 decode online", "slug": "base64-decode-online-2026.html",
     "title": "Base64 Decode Online: Free Decoder + How It Works (2026)", "tool": "base64-encoder-decoder"},
    {"keyword": "password generator strong random", "slug": "strong-password-generator-guide-2026.html",
     "title": "Strong Password Generator: How Random Passwords Work (2026)", "tool": "password-generator"},
    {"keyword": "uuid generator v4 online", "slug": "uuid-generator-v4-online-2026.html",
     "title": "UUID Generator v4 Online: Free & Instant (2026 Guide)", "tool": "uuid-generator"},
    {"keyword": "cron expression generator", "slug": "cron-expression-generator-explained-2026.html",
     "title": "Cron Expression Generator Explained with Examples (2026)", "tool": "cron-expression-generator"},
    {"keyword": "unix timestamp converter", "slug": "unix-timestamp-converter-guide-2026.html",
     "title": "Unix Timestamp Converter: Epoch Time Explained (2026)", "tool": "unix-timestamp-converter"},
    {"keyword": "url encoder decoder online", "slug": "url-encoder-decoder-guide-2026.html",
     "title": "URL Encoder / Decoder Online: Percent-Encoding Guide (2026)", "tool": "url-encoder-decoder"},
    {"keyword": "markdown to html converter", "slug": "markdown-to-html-converter-guide-2026.html",
     "title": "Markdown to HTML Converter: Free Online Tool (2026 Guide)", "tool": "markdown-html-converter"},
    {"keyword": "sql formatter online", "slug": "sql-formatter-online-guide-2026.html",
     "title": "SQL Formatter Online: Beautify Queries Instantly (2026)", "tool": "sql-formatter"},
    {"keyword": "qr code generator free", "slug": "qr-code-generator-free-2026.html",
     "title": "QR Code Generator: Free, No Signup (2026 Guide)", "tool": "qr-code-generator"},
    {"keyword": "text diff checker online", "slug": "text-diff-checker-guide-2026.html",
     "title": "Text Diff Checker Online: Compare Files Instantly (2026)", "tool": "text-diff-checker"},
    {"keyword": "hash generator sha256 md5", "slug": "hash-generator-sha256-md5-2026.html",
     "title": "Hash Generator: SHA-256, MD5 & More Explained (2026)", "tool": "hash-generator"},
    {"keyword": "yaml to json converter", "slug": "yaml-to-json-converter-guide-2026.html",
     "title": "YAML to JSON Converter: Free Online Tool (2026 Guide)", "tool": "yaml-to-json-converter"},
]

def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": "WebDevWorker-SEO-Agent/2.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()

def sitemap_urls(xml_bytes):
    try:
        root = ET.fromstring(xml_bytes)
    except ET.ParseError:
        return []
    urls = []
    for loc in root.iter():
        if loc.tag.endswith("loc") and loc.text:
            t = loc.text.strip()
            if t.endswith(".xml"):
                try: urls += sitemap_urls(fetch(t))
                except Exception: pass
            else:
                urls.append(t)
    return urls

def slugify_topic(url):
    m = re.search(r"/([^/]+?)(?:\.html?|/)?$", url)
    return m.group(1) if m else url

def core_tokens(text):
    return {t for t in re.split(r"[^a-z0-9]+", text.lower()) if t and t not in STOPWORDS}

def topic_covered(gap, existing_slugs):
    """True if an existing article slug already contains all core tokens of
    the gap's keyword (near-duplicate topic)."""
    need = core_tokens(gap["keyword"])
    if not need:
        return False
    for slug in existing_slugs:
        have = set(re.split(r"[^a-z0-9]+", slug.lower()))
        if need <= have:
            return True
    return False

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument("--ledger", required=True)
    a = ap.parse_args()

    seen_path = os.path.join(os.path.dirname(a.out), "seen_competitor_urls.json")
    seen = set(json.load(open(seen_path))) if os.path.exists(seen_path) else set()

    new_topics, fresh = [], set()
    for name, sm in COMPETITORS.items():
        try:
            urls = sitemap_urls(fetch(sm))
        except Exception as e:
            print(f"warn: {name} sitemap failed: {e}")
            continue
        for u in urls:
            fresh.add(u)
            if u not in seen:
                new_topics.append({"competitor": name, "url": u, "topic": slugify_topic(u)})
    json.dump(sorted(fresh), open(seen_path, "w"), indent=1)

    ledger = json.load(open(a.ledger)) if os.path.exists(a.ledger) else {"published": []}
    published_slugs = {p["slug"] for p in ledger.get("published", [])}
    existing = set()
    if os.path.isdir("articles"):
        existing = set(os.listdir("articles"))

    gaps, skipped = [], []
    for g in EVERGREEN_GAPS:
        if g["slug"] in published_slugs or g["slug"] in existing:
            skipped.append((g["slug"], "exact slug already published"))
            continue
        if topic_covered(g, existing):
            skipped.append((g["slug"], "topic already covered by an existing article"))
            continue
        gaps.append(g)
    for s, reason in skipped:
        print(f"skip {s}: {reason}")

    report = {
        "competitor_new_pages": new_topics[:50],
        "keyword_gaps": gaps,
        "recommended": gaps[: int(os.environ.get("MAX_ARTICLES", "2"))],
    }
    os.makedirs(os.path.dirname(a.out), exist_ok=True)
    json.dump(report, open(a.out, "w"), indent=2)
    print(f"gaps: {len(gaps)} evergreen, {len(new_topics)} new competitor pages")

if __name__ == "__main__":
    main()
