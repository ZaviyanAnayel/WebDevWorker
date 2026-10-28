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
If --files omitted, validates articles changed vs HEAD (INCLUDING UNCOMMITTED
files — the pipeline validates before commit, so HEAD~1..HEAD diff never sees
the new articles). Never falls back to the whole articles/ directory: legacy
v1 articles predate the strict template and would fail forever.

v2.1 fix (2026-10-19): the v2.0 changed_articles() used `git diff HEAD~1 HEAD`,
which cannot see uncommitted files. After a non-article commit (e.g. a UI fix)
it fell back to validating ALL articles; the 6 legacy v1 articles fail strict
on links/sections/depth, so every run failed — and because the run never
committed, the failure repeated every 6h indefinitely (Oct 17-19 outage).
"""
import argparse, os, re, subprocess, sys

MIN_WORDS = 1500
REQUIRED_SECTIONS = ["overview", "syntax", "workflow", "code", "benchmarks", "faqs"]


def _article_paths(lines):
    return [l.strip() for l in lines
            if l.strip().startswith("articles/") and l.strip().endswith(".html")]


def changed_articles():
    # 1) Uncommitted files (the real case: generator just wrote them, not yet committed)
    try:
        out = subprocess.run(["git", "status", "--porcelain"],
                             capture_output=True, text=True, timeout=30).stdout
        files = _article_paths(l[3:] for l in out.splitlines() if len(l) > 3)
        if files:
            return files
    except Exception:
        pass
    # 2) Staged changes
    try:
        out = subprocess.run(["git", "diff", "--name-only", "--cached"],
                             capture_output=True, text=True, timeout=30).stdout
        files = _article_paths(out.splitlines())
        if files:
            return files
    except Exception:
        pass
    # 3) Last commit (previous behaviour, kept for manual re-runs)
    try:
        out = subprocess.run(["git", "diff", "--name-only", "HEAD~1", "HEAD"],
                             capture_output=True, text=True, timeout=30).stdout
        files = _article_paths(out.splitlines())
        if files:
            return files
    except Exception:
        pass
    # 4) Nothing new -> validate nothing. (Never the whole directory:
    #    legacy v1 articles fail the strict template by design.)
    return []


def validate(path):
    errs = []
    h = open(path, encoding="utf-8").read()
    base = os.path.basename(path)
    if not re.search(r"<title>.{20,120}</title>", h):
        errs.append("bad <title>")
    m = re.search(r'<meta name="description" content="([^"]+)"', h)
    if not m or not (50 <= len(m.group(1)) <= 300):
        errs.append("bad meta description")
    if f'<link rel="canonical" href="https://webdevworker.com/articles/{base}"' not in h:
        errs.append("canonical mismatch")
    for sid in REQUIRED_SECTIONS:
        if f'<section id="{sid}"' not in h:
            errs.append(f"missing section #{sid}")
    if '"@type": "FAQPage"' not in h and '"@type":"FAQPage"' not in h:
        errs.append("missing FAQPage schema")
    n_q = h.count('"@type": "Question"')
    if n_q < 5:
        errs.append(f"only {n_q} FAQ questions (<5)")
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<[^>]+>", " ", h, flags=re.S)
    words = len(re.findall(r"[A-Za-z]{2,}", body))
    if words < MIN_WORDS:
        errs.append(f"thin content: {words} words (<{MIN_WORDS})")
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
    if not files:
        print("no new articles to validate — skipping (exit 0)")
        return
    failed = False
    for f in files:
        if not os.path.exists(f):
            print(f"SKIP {f} (deleted)")
            continue
        errs = validate(f)
        if errs:
            failed = True
            print(f"FAIL {f}:")
            for e in errs:
                print(f"   - {e}")
        else:
            print(f"OK   {f}")
    if failed and a.strict:
        sys.exit(1)
    print("validation complete")


if __name__ == "__main__":
    main()
