#!/usr/bin/env python3
"""AI-first homepage rework for WebDevWorker.
- Hero becomes AI-first
- New #ai-studio showcase section after the hero
- Category filter: new AI Studio pill, counts 85 -> 95
- 10 AI tool-cards (data-category="ai") at top of #toolsGrid
- Title/meta/JSON-LD updates
AdSense / gtag / cookie code untouched.
"""
import re, pathlib

REPO = pathlib.Path(__file__).resolve().parent.parent
P = REPO / "index.html"
s = P.read_text(encoding="utf-8")

AI = [
    ("ai-regex-smith", "🔣", "AI Regex Smith", "Describe the pattern in plain English — get the regex, a line-by-line breakdown, and a live tester that proves it works.", "Forge Regex"),
    ("ai-code-doctor", "🩺", "AI Code Doctor", "Paste any error or stack trace — get the root cause, the exact fix, and prevention tips.", "Diagnose & Fix"),
    ("ai-code-reviewer", "🔍", "AI Code Reviewer", "A staff-level review on demand: verdict, bugs by severity, edge cases, corrected snippets.", "Review Code"),
    ("ai-security-auditor", "🛡️", "AI Security Auditor", "Paste code, get a vulnerability audit with severity ratings, exploit notes, and patched code.", "Audit Code"),
    ("ai-sql-smith", "🗄️", "AI SQL Smith", "English to dialect-perfect SQL — plus a query explainer and slow-query optimizer.", "Generate SQL"),
    ("ai-test-forge", "🧪", "AI Test Forge", "Paste a function — get real unit tests with edge cases for Jest, Pytest, PHPUnit and more.", "Forge Tests"),
    ("ai-api-oracle", "📡", "AI API Oracle", "Describe the API call — get method, URL, headers, body, cURL — then send it live in-browser.", "Design Request"),
    ("ai-prompt-surgeon", "✂️", "AI Prompt Surgeon", "Stop wasting tokens: get your prompt diagnosed and rewritten, sharper.", "Sharpen Prompt"),
    ("ai-refactor", "🔄", "AI Refactor", "jQuery→React, JS→TypeScript, callbacks→async/await — migrations with gotchas flagged.", "Migrate Code"),
    ("ai-code-explainer", "💡", "AI Code Explainer", "Unfamiliar code? Get the big picture, an architecture map, and a step-by-step walkthrough.", "Explain Code"),
]

def card(slug, icon, name, desc, cta):
    return f"""        <a class="tool-card spotlight-card" href="/tools/{slug}.html" data-category="ai">
          <div>
            <div class="card-icon-title-row">
              <div class="tool-card-icon">{icon}</div>
              <div>
                <h3 class="tool-card-title">{name}</h3>
                <span class="tool-category-badge">AI • NEW 2026</span>
              </div>
            </div>
            <p class="tool-card-desc">{desc}</p>
          </div>
          <div class="tool-card-footer"><span>{cta}</span><span>→</span></div>
        </a>
"""

def showcase_card(slug, icon, name, desc, cta):
    return f"""          <a class="ai-studio-card" href="/tools/{slug}.html">
            <span class="ai-card-tag">AI</span>
            <div class="ai-card-icon">{icon}</div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <span class="ai-card-cta">{cta} →</span>
          </a>
"""

# 1. head: title + meta
s = re.sub(r"<title>.*?</title>",
           "<title>WebDevWorker — AI Developer Studio: 10 AI Instruments + 85 Free Utilities</title>", s, count=1)
s = re.sub(r'<meta content=".*?" name="description"/>',
           '<meta content="WebDevWorker AI Studio: 10 AI instruments (regex smith, code doctor, security auditor, SQL smith, test forge, API oracle) plus 85 free client-side developer utilities. Free forever, no signup." name="description"/>',
           s, count=1)
s = re.sub(r'<meta content=".*?" property="og:title"/>',
           '<meta content="WebDevWorker — AI Developer Studio" property="og:title"/>', s, count=1)
s = re.sub(r'<meta content=".*?" property="og:description"/>',
           '<meta content="10 AI instruments + 85 free developer utilities. AI that reasons, tools that prove. Free forever, no signup." property="og:description"/>',
           s, count=1)
s = re.sub(r'"description": "Comprehensive suite of 85\+ client-side web development tools, CSS generators, formatters, and security utilities\."',
           '"description": "AI Developer Studio: 10 AI instruments plus 85 free client-side developer utilities, CSS generators, formatters, and security tools."', s, count=1)

# ai-studio.css after ai-widget.css
s = s.replace('<link href="/css/ai-widget.css?v=2026-wdw-v70" rel="stylesheet"/>',
              '<link href="/css/ai-widget.css?v=2026-wdw-v70" rel="stylesheet"/>\n<link href="/css/ai-studio.css?v=2026-wdw-v71" rel="stylesheet"/>', 1)

# 2. hero copy
s = s.replace('<span class="hero-pill-dot"></span> 58+ Professional Developer Utilities • 100% Client-Side Sandbox',
              '<span class="hero-pill-dot"></span> ✦ AI Studio: 10 AI Instruments • 85 Precision Utilities • Free Forever', 1)
s = s.replace('The High-Precision <span class="hero-headline-gradient">Developer Workstation</span>',
              'The AI-Powered <span class="hero-headline-gradient">Developer Studio</span>', 1)
s = s.replace('58+ essential frontend, CSS, API, and cryptographic utilities engineered for modern software engineers, webmasters, and designers. 100% client-side memory execution with zero telemetry, zero server storage, and complete offline PWA support.',
              '10 AI instruments that reason — regex smithing, code surgery, security audits, SQL generation, test forging — fused with 85 instant client-side utilities. Free forever. No signup. No paywall traps.', 1)
s = s.replace('placeholder="Search 85+ utilities (e.g. Flexbox, Box Shadow, cURL, JWT, UUID, QR)..."',
              'placeholder="Try AI Regex Smith, Code Doctor, SQL Smith… or search 85 utilities…"', 1)

# 3. showcase section after hero-wrapper, before KPI strip
showcase = """      <!-- AI Studio Showcase -->
      <section id="ai-studio" style="margin: 38px 0 6px; scroll-margin-top: 90px;">
        <div class="section-header" style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom: 22px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h2 class="section-title"><span>✦</span> AI Studio — 10 Instruments</h2>
            <p class="section-subtitle">Not chatbots. AI instruments with local proof — every answer verifiable, testable, runnable. Free forever, no signup.</p>
          </div>
        </div>
        <div class="ai-studio-grid">
""" + "\n".join(showcase_card(*t) for t in AI) + """        </div>
      </section>

"""
s = s.replace("      <!-- KPI Metrics Strip -->", showcase + "      <!-- KPI Metrics Strip -->", 1)

# 4. category filters: AI pill + counts
s = s.replace('<button type="button" class="cat-filter-btn active" data-cat="all">⚡ All Utilities <span class="cat-filter-count">85</span></button>',
              '<button type="button" class="cat-filter-btn active" data-cat="all">⚡ All Tools <span class="cat-filter-count">95</span></button>\n'
              '        <button type="button" class="cat-filter-btn" data-cat="ai">✦ AI Studio <span class="cat-filter-count">10</span></button>', 1)

# 5. section header + 10 cards at top of grid
s = s.replace('<h2 class="section-title"><span>🛠️</span> Interactive Developer Utilities</h2>',
              '<h2 class="section-title"><span>🛠️</span> The Library — 95 Developer Tools</h2>', 1)
s = s.replace('Client-side execution with zero latency, complete offline privacy, and zero telemetry.',
              '10 AI instruments up top, 85 instant client-side utilities below. Zero paywalls, zero accounts.', 1)
s = s.replace('>85 Utilities</span>', '>95 Tools</span>', 1)
cards_html = "".join(card(*t) for t in AI)
s = s.replace('        <div class="tools-grid" id="toolsGrid">\n',
              '        <div class="tools-grid" id="toolsGrid">\n' + cards_html, 1)

P.write_text(s, encoding="utf-8")
print("homepage updated")
print("ai cards in grid:", s.count('data-category="ai"'))
print("showcase cards:", s.count('class="ai-studio-card"'))
