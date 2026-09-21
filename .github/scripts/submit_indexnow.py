#!/usr/bin/env python3
"""Submit new/changed URLs to IndexNow (Bing, Yandex, Seznam, Naver).

Reuses the proven scripts/indexnow_submit.py implementation. URLs come from
CLI args, else from seo/added_urls.txt (written by update_sitemap.py).

Usage (repo root as CWD):
    python3 .github/scripts/submit_indexnow.py [URL ...] [--dry-run]
"""
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "scripts"))
from indexnow_submit import submit_urls  # noqa: E402

ADDED_LIST = os.path.join("seo", "added_urls.txt")

def main():
    dry = "--dry-run" in sys.argv
    urls = [a for a in sys.argv[1:] if a.startswith("http")]
    if not urls and os.path.exists(ADDED_LIST):
        urls = [l.strip() for l in open(ADDED_LIST, encoding="utf-8") if l.strip().startswith("http")]
    if not urls:
        print("no new URLs to submit; skipping IndexNow")
        return
    print(f"submitting {len(urls)} URLs to IndexNow" + (" (dry-run)" if dry else ""))
    for u in urls:
        print(f"  {u}")
    if dry:
        print("dry-run: payload NOT sent")
        return
    ok = submit_urls(urls)
    if not ok:
        print("warn: IndexNow submission reported failure (non-fatal)")

if __name__ == "__main__":
    main()
