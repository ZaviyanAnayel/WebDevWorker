#!/usr/bin/env python3
"""
Autonomous 24/7 AI SEO Agent for WebDevWorker.com
Connects to Groq API, selects unwritten web developer topics,
generates in-depth 2500+ words SEO guides with embedded tools,
updates sitemap.xml, and pings IndexNow.
"""

import os
import re
import sys
import json
import urllib.request
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARTICLES_DIR = os.path.join(BASE_DIR, "articles")
TOOLS_DIR = os.path.join(BASE_DIR, "tools")
SITEMAP_PATH = os.path.join(BASE_DIR, "sitemap.xml")

# Read securely from Environment Variable (GitHub Secrets / Vercel Env)
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
GROQ_MODEL = "openai/gpt-oss-120b"  # 120B state-of-the-art model

sys.path.insert(0, os.path.join(BASE_DIR, "scripts"))
from seo_agent import render_article_html, update_sitemap_with_article, notify_indexnow

# High-priority topic queue mapped to tools
TOPIC_QUEUE = [
    {
        "slug": "html-to-jsx-migration-guide-2026",
        "tool_file": "html-to-jsx.html",
        "tool_name": "HTML to JSX & React Component Converter",
        "topic": "Next.js 15 & React 19 JSX Transformation & Component Migration",
        "focus": "Converting raw HTML/SVG into React 19 / Next.js Server Components, camelCase attributes (class to className, for to htmlFor), inline style object formatting, self-closing tag parsing, and zero-runtime overhead."
    },
    {
        "slug": "css-clamp-fluid-typography-guide",
        "tool_file": "css-clamp-calculator.html",
        "tool_name": "CSS Clamp Fluid Typography & Spacing Calculator",
        "topic": "Fluid Responsive Typography & Spacing with CSS clamp()",
        "focus": "How to calculate viewport slope and intersection using clamp(MIN, VAL, MAX), eliminating media queries, fluid rem scaling, and WCAG accessibility contrast and zoom constraints."
    },
    {
        "slug": "bcrypt-password-hashing-security-guide",
        "tool_file": "bcrypt-generator.html",
        "tool_name": "Bcrypt Password Hash & Salt Verifier",
        "topic": "Bcrypt Salt Rounds, Work Factors, and Password Security in 2026",
        "focus": "Cost factor performance benchmarks (rounds 10 vs 12 vs 14), resistance against GPU cluster cracking, salt generation entropy, and OWASP authentication storage guidelines."
    },
    {
        "slug": "dockerfile-optimization-node-guide",
        "tool_file": "dockerfile-generator.html",
        "tool_name": "Multi-Stage Production Dockerfile Studio",
        "topic": "Multi-Stage Dockerfile Optimization for Node.js Microservices",
        "focus": "Reducing container image sizes from 1.2GB to 80MB using Alpine/Distroless bases, caching npm/pnpm layers, non-root USER security, and dumb-init process handling."
    },
    {
        "slug": "regex-catastrophic-backtracking-prevention-guide",
        "tool_file": "regex-tester.html",
        "tool_name": "Regular Expression Tester & Regex Engine Studio",
        "topic": "Regular Expression Performance & ReDoS Catastrophic Backtracking Prevention",
        "focus": "Detecting exponential backtracking in NFA regex engines, atomic groups, possessive quantifiers, and safeguarding production APIs against Regular Expression Denial of Service (ReDoS)."
    },
    {
        "slug": "jwt-security-and-token-rotation-guide-2026",
        "tool_file": "jwt-debugger.html",
        "tool_name": "JWT Debugger & Cryptographic Token Studio",
        "topic": "JSON Web Token (JWT) Security, Algorithm Confusion, and Refresh Token Rotation",
        "focus": "Preventing 'alg: none' exploits, RS256 vs HS512 cryptographic trade-offs, short-lived access tokens (15m) + secure httpOnly refresh cookies, and token revocation strategies."
    },
    {
        "slug": "css-grid-vs-flexbox-architecture-guide",
        "tool_file": "css-grid-generator.html",
        "tool_name": "CSS Grid Interactive Layout Studio",
        "topic": "CSS Grid vs. Flexbox Modern Layout Architectures in 2026",
        "focus": "1D vs 2D layout mechanics, subgrid inheritance, auto-fill vs auto-fit minmax() patterns, and architecting responsive web application shells."
    },
    {
        "slug": "crontab-schedule-syntax-guide",
        "tool_file": "crontab-generator.html",
        "tool_name": "Crontab Syntax & POSIX Cron Schedule Generator",
        "topic": "POSIX Crontab Syntax, Extended Cron Expressions, and Cloud Schedulers",
        "focus": "5-field crontab parsing (minute, hour, dom, month, dow), special characters (*, /, -, ,), handling Daylight Saving Time shifts, and configuring AWS EventBridge / GitHub Actions cron expressions."
    }
]

def call_groq(prompt):
    payload = {
        "model": GROQ_MODEL,
        "messages": [
            {
                "role": "system",
                "content": "You are a Principal Software Architect and Lead Developer Advocate for WebDevWorker.com. Write thorough, highly authoritative, humanized technical engineering guides with production code snippets, architectural trade-off comparisons, real-world benchmarks, and clean HTML structure."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.4,
        "max_tokens": 4000
    }

    req = urllib.request.Request(
        "https://api.groq.com/openai/v1/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
        }
    )

    with urllib.request.urlopen(req, timeout=45) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        return data["choices"][0]["message"]["content"]

def generate_and_publish_next_article():
    if not GROQ_API_KEY:
        print("[WARN] GROQ_API_KEY environment variable is not set. Skipping live Groq generation.")
        return None

    # Find first unwritten topic
    selected = None
    for t in TOPIC_QUEUE:
        article_file = os.path.join(ARTICLES_DIR, f"{t['slug']}.html")
        if not os.path.exists(article_file):
            selected = t
            break

    if not selected:
        print("[AGENT] All queued articles are already published!")
        return None

    print(f"\n[AGENT] Selected Topic: {selected['topic']}")
    print(f"[AGENT] Related Tool: {selected['tool_name']}")

    prompt = f"""
Write a comprehensive, publication-ready technical engineering guide for WebDevWorker.com on the topic: '{selected['topic']}'.
Focus: {selected['focus']}
Associated Tool: {selected['tool_name']} ({selected['tool_file']})

You must return valid JSON ONLY with the exact following schema:
{{
  "title": "Clear, compelling title (under 70 chars)",
  "meta_desc": "SEO meta description under 155 chars with high CTR developer appeal",
  "read_time": "9 min read",
  "sections": [
    {{
      "title": "Section 1 Title (Core Concepts & Theoretical Foundations)",
      "body": "HTML formatted paragraphs, <div class='formula-box'><pre><code>code or syntax</code></pre></div>, and technical explanations."
    }},
    {{
      "title": "Section 2 Title (Architectural Trade-offs & Benchmark Comparison)",
      "body": "HTML formatted explanation with a <table class='data-table'>...</table> showing benchmarks or comparison parameters."
    }},
    {{
      "title": "Section 3 Title (Step-by-Step Implementation in 2026)",
      "body": "HTML formatted step-by-step implementation with realistic code examples and edge case handling."
    }},
    {{
      "title": "Section 4 Title (Production Best Practices & Pitfalls)",
      "body": "HTML formatted actionable tips with an <ol> list of production security and performance rules."
    }}
  ],
  "faqs": [
    ["Question 1?", "Direct, authoritative 2-3 sentence technical answer."],
    ["Question 2?", "Direct, authoritative 2-3 sentence technical answer."],
    ["Question 3?", "Direct, authoritative 2-3 sentence technical answer."],
    ["Question 4?", "Direct, authoritative 2-3 sentence technical answer."],
    ["Question 5?", "Direct, authoritative 2-3 sentence technical answer."]
  ]
}}
Do not include any text outside the JSON block. Do not wrap in markdown code blocks if possible, or wrap cleanly in ```json.
"""

    print("[AGENT] Querying Groq 120B AI model...")
    try:
        raw_response = call_groq(prompt)

        clean_json = raw_response.strip()
        if clean_json.startswith("```"):
            clean_json = re.sub(r"^```(?:json)?", "", clean_json)
            clean_json = re.sub(r"```$", "", clean_json).strip()

        data = json.loads(clean_json)

        print(f"[AGENT] Article Title Generated: {data['title']}")

        html = render_article_html(
            slug=selected["slug"],
            title=data["title"],
            meta_desc=data["meta_desc"],
            read_time=data.get("read_time", "9 min read"),
            related_tool_file=selected["tool_file"],
            related_tool_name=selected["tool_name"],
            sections=data["sections"],
            faqs=data["faqs"]
        )

        out_file = os.path.join(ARTICLES_DIR, f"{selected['slug']}.html")
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(html)

        article_url = f"https://www.webdevworker.com/articles/{selected['slug']}.html"
        update_sitemap_with_article(article_url)
        notify_indexnow(article_url)

        print(f"[SUCCESS] Article published: {article_url} ({len(html)} bytes)")
        return article_url
    except Exception as e:
        print(f"[ERROR] Failed to generate article via Groq: {e}")
        return None

if __name__ == "__main__":
    generate_and_publish_next_article()
