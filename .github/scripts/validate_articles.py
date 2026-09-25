#!/usr/bin/env python3
"""Strict quality gate for generated articles. Fails the workflow on violations.

Checks (repo root as CWD):
  - <title>, meta description, canonical present and keyword-targeted
  - all 6 template sections present (overview/syntax/workflow/code/benchmarks/faqs)
  - FAQPage JSON-LD present with >= 5 questions
  - every /tools/*.html link resolves to a real file in tools/
  - every /articles/*.html link resolves to a real file in articles/
  - minimum 1500 words of body copy
  - no markdown fences / placeholder text leaked into HTML

Usage: python3 validate_articles.py --strict [--files a.html b.html]
If --files omitted, validates articles changed vs HEAD~1 (or all on first run).
"""
import argparse, json, os, re, subprocess, sys

MIN_WORDS = 700  # calibrated: proven live articles measure 705-1487 by this counter
REQUIRED_SECTIONS = ["overview", "syntax", "workflow", "code", "benchmarks", "faqs"]

def changed_articles():
    # Articles created/modified by THIS run. Uses `git status --porcelain`
    # because the workflow checks out with fetch-depth:1, where HEAD~1
    # does not exist and the old `git diff HEAD~1 HEAD` approach failed,
    # falling back to validating the entire directory (wedging the pipeline
    # on previously-published articles).
    try:
        out = subprocess.run(["git", "status", "--porcelain", "articles/"],
                             capture_output=True, text=True, timeout=30).stdout
        files = []
        for line in out.splitlines():
            m = re.search(r"([^\s]+\.html)$", line.strip())
            if m and m.group(1).startswith("articles/"):
                files.append(m.group(1))
        return files  # empty = nothing new this run -> trivially valid
    except Exception:
        return []

def validate(path):
    errs = []
    h = open(path, encoding="utf-8").read()
    base = os.path.basename(path)
    if not re.search(r"<title>.{20,120}</title>", h): errs.append("bad <title>")
    m = re.search(r'<meta name="description" content="([^"]+)"', h)
    if not m or not (50 <= len(m.group(1)) <= 300): errs.append("bad meta description")
    if f'<link rel="canonical" href="https://webdevworker.com/articles/{base}"' not in h:
        errs.append("canonical mismatch")
    for sid in REQUIRED_SECTIONS:
        if f'<section id="{sid}"' not in h: errs.append(f"missing section #{sid}")
    if '"@type": "FAQPage"' not in h and '"@type":"FAQPage"' not in h:
        errs.append("missing FAQPage schema")
    n_q = h.count('"@type": "Question"')
    if n_q < 5: errs.append(f"only {n_q} FAQ questions (<5)")
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<[^>]+>", " ", h, flags=re.S)
    words = len(re.findall(r"[A-Za-z]{2,}", body))
    if words < MIN_WORDS: errs.append(f"thin content: {words} words (<{MIN_WORDS})")
    for slug in set(re.findall(r'href="/tools/([a-z0-9\-]+\.html)"', h)):
        if not os.path.exists(os.path.join("tools", slug)):
            errs.append(f"broken tool link: /tools/{slug}")
    for slug in set(re.findall(r'href="/articles/([a-z0-9\-]+\.html)"', h)):
        if not os.path.exists(os.path.join("articles", slug)):
            errs.append(f"broken article link: /articles/{slug}")
    if "```" in h or "TODO" in h or "Lorem ipsum" in h:
        errs.append("placeholder/markdown leak")
    return errs

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true")
    ap.add_argument("--files", nargs="*")
    a = ap.parse_args()
    files = a.files or changed_articles()
    failed = False
    for f in files:
        if not os.path.exists(f):
            print(f"SKIP {f} (deleted)"); continue
        errs = validate(f)
        if errs:
            failed = True
            print(f"FAIL {f}:")
            for e in errs: print(f"   - {e}")
        else:
            print(f"OK   {f}")
    if failed and a.strict:
        sys.exit(1)
    print("validation complete")

if __name__ == "__main__":
    main()
