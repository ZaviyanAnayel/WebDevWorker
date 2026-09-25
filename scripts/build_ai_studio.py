#!/usr/bin/env python3
"""Build the 10 WebDevWorker AI Studio instrument pages.

Reads tools/jwt-decoder.html as the chrome template (head, sidebar, topbar,
footer, scripts) and generates tools/<slug>.html for each AI instrument.
AdSense / gtag / cookie code is carried over untouched.
"""
import re, html, pathlib

REPO = pathlib.Path(__file__).resolve().parent.parent
TPL = (REPO / "tools" / "jwt-decoder.html").read_text(encoding="utf-8")
VER = "2026-wdw-v72"

def field_textarea(fid, label, placeholder, rows=4):
    return (
        f'<div class="ai-field"><label for="{fid}">{label}</label>'
        f'<textarea id="{fid}" rows="{rows}" placeholder="{html.escape(placeholder)}"></textarea></div>'
    )

def field_text(fid, label, placeholder):
    return (
        f'<div class="ai-field"><label for="{fid}">{label}</label>'
        f'<input type="text" id="{fid}" placeholder="{html.escape(placeholder)}"/></div>'
    )

def field_select(fid, label, options):
    opts = "".join(f"<option>{html.escape(o)}</option>" for o in options)
    return (
        f'<div class="ai-field"><label for="{fid}">{label}</label>'
        f'<select id="{fid}">{opts}</select></div>'
    )

REGEX_VERIFY = """
    <div class="ai-verify" data-verify="regex-tester">
      <h3>⚡ Live Pattern Tester — proof, not promises</h3>
      <p class="ai-verify-sub">The generated pattern is auto-loaded below. Run it against your own text, right here in your browser.</p>
      <div class="ai-field-row">
        <div class="ai-field"><label>Pattern</label><input type="text" class="ai-rx-pattern" placeholder="your-pattern-here"/></div>
        <div class="ai-field"><label>Flags</label><input type="text" class="ai-rx-flags" placeholder="gimsuy" value="g"/></div>
      </div>
      <div class="ai-field"><label>Test text</label><textarea class="ai-rx-text" rows="4" placeholder="Paste text to test against…"></textarea></div>
      <button type="button" class="ai-run-btn ai-rx-run" style="padding:11px 26px;font-size:0.9rem;"><span class="ai-run-label">Test Pattern</span></button>
      <div class="ai-rx-out"></div>
    </div>"""

API_VERIFY = """
    <div class="ai-verify" data-verify="api-sender">
      <h3>⚡ Live Request Sender — try it right now</h3>
      <p class="ai-verify-sub">Send a real GET request from your browser. For POST/PUT or authed APIs, use the generated cURL.</p>
      <div class="ai-field-row">
        <div class="ai-field"><label>Method</label><select class="ai-api-method"><option>GET</option><option>HEAD</option><option>OPTIONS</option></select></div>
        <div class="ai-field"><label>URL</label><input type="text" class="ai-api-url" placeholder="https://api.example.com/v1/users"/></div>
      </div>
      <button type="button" class="ai-run-btn ai-api-send" style="padding:11px 26px;font-size:0.9rem;"><span class="ai-run-label">Send Request</span></button>
      <div class="ai-api-out" style="margin-top:12px;"></div>
    </div>"""

LANGS = ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Go", "Rust", "C#", "Ruby", "SQL"]

MICROAPP_EXAMPLES = """
    <div class="ai-examples">
      <span class="ai-examples-label">Try one:</span>
      <button type="button" class="ai-example-chip" data-ex="Freelance invoice tracker: client name, invoice number, amount in USD, due date, status (Sent, Paid, Overdue), notes. Show total invoiced, total paid, and total overdue on a dashboard. Per-row WhatsApp button that sends a payment reminder to the client.">💼 Invoice Tracker</button>
      <button type="button" class="ai-example-chip" data-ex="Gym workout log: date, exercise name, sets, reps, weight in lbs, notes. Show total workouts logged and heaviest weight lifted on a dashboard.">🏋️ Workout Log</button>
      <button type="button" class="ai-example-chip" data-ex="Monthly budget tracker: date, category (Housing, Food, Transport, Utilities, Fun, Other), description, amount in USD. Show total spent and spending per category on a dashboard.">🏠 Budget Tracker</button>
    </div>"""

MICROAPP_VERIFY = """
    <div class="ai-verify" data-verify="micro-app">
      <h3>📚 My Micro-App Library</h3>
      <p class="ai-verify-sub">Forged apps live in your browser (localStorage). Save them, reopen them, delete them — no account, no server.</p>
      <div class="ai-lib-strip"></div>
    </div>"""

TOOLS = [
    dict(
        slug="ai-regex-smith", icon="🔣", name="AI Regex Smith",
        h1a="Describe it in English.", h1b="Get the regex.",
        tagline="Plain-English to regex with a line-by-line breakdown — plus a live in-browser tester that proves the pattern works on your text.",
        meta="AI regex generator: describe what to match in plain English, get the pattern, a token-by-token explanation, and a live tester. Free, no signup.",
        keywords="ai regex generator, regex from english, regex explainer, regex tester online, generate regex ai, regular expression builder",
        cta="Forge My Regex", after="regex", verify=REGEX_VERIFY,
        fields=(
            field_textarea("ai-in-0", "Describe what to match", "e.g. a valid email address, but not from gmail.com — capture the username part", 3)
            + field_select("ai-in-1", "Regex flavor", ["JavaScript", "Python", "PCRE (PHP)", ".NET", "Go (RE2)"])
        ),
    ),
    dict(
        slug="ai-code-doctor", icon="🩺", name="AI Code Doctor",
        h1a="Paste the error.", h1b="Get the cure.",
        tagline="Stack traces, cryptic exceptions, silent failures — paste the error and the code, get the root cause, the exact fix, and how to never see it again.",
        meta="AI stack-trace debugger: paste any error and get the root cause, the fixed code, and prevention tips. Free, no signup.",
        keywords="ai debugger, stack trace analyzer, fix my error, ai code fixer, debug code online, error decoder",
        cta="Diagnose & Fix", after="", verify="",
        fields=(
            field_textarea("ai-in-0", "Error message / stack trace", "Paste the full error or stack trace…", 5)
            + field_textarea("ai-in-1", "Related code (optional)", "Paste the code around the failure…", 6)
            + field_select("ai-in-2", "Language", LANGS)
        ),
    ),
    dict(
        slug="ai-code-reviewer", icon="🔍", name="AI Code Reviewer",
        h1a="A staff engineer,", h1b="on demand.",
        tagline="Paste any code or diff. Get a ruthless-but-fair senior review: verdict, bugs by severity, edge cases you missed, and corrected snippets.",
        meta="AI code reviewer: paste code or a diff for senior-level review — bugs, edge cases, fixes. Free, no signup.",
        keywords="ai code review, code reviewer online, review my code, ai code analysis, pull request reviewer",
        cta="Review My Code", after="", verify="",
        fields=(
            field_textarea("ai-in-0", "Code or diff to review", "Paste code or a unified diff…", 8)
            + field_select("ai-in-1", "Language", LANGS)
        ),
    ),
    dict(
        slug="ai-security-auditor", icon="🛡️", name="AI Security Auditor",
        h1a="Find the vulns", h1b="before attackers do.",
        tagline="Paste code, get a real vulnerability audit: findings ranked by severity, how each could be exploited, patched code, and a hardening checklist.",
        meta="AI security audit: paste code and get vulnerability findings with severity ratings and patched code. Free, no signup.",
        keywords="ai security audit, code vulnerability scanner, security code review, find vulnerabilities in code, secure code checker",
        cta="Audit for Vulnerabilities", after="", verify="",
        fields=(
            field_textarea("ai-in-0", "Code to audit", "Paste the code to audit…", 8)
            + field_select("ai-in-1", "Language", LANGS)
        ),
    ),
    dict(
        slug="ai-sql-smith", icon="🗄️", name="AI SQL Smith",
        h1a="English in.", h1b="Dialect-perfect SQL out.",
        tagline="Generate, explain, or optimize SQL in your dialect — PostgreSQL, MySQL, BigQuery and more. Schema-aware JOINs without memorizing syntax quirks.",
        meta="AI SQL generator: plain English to PostgreSQL/MySQL/BigQuery SQL, plus query explainer and slow-query optimizer. Free, no signup.",
        keywords="ai sql generator, text to sql, sql explainer, optimize sql query, sql optimizer online, write sql from english",
        cta="Generate SQL", after="", verify="",
        fields=(
            field_select("ai-in-0", "Mode", ["Generate SQL from description", "Explain this query", "Optimize a slow query"])
            + field_select("ai-in-1", "Dialect", ["PostgreSQL", "MySQL", "SQLite", "SQL Server", "BigQuery", "Oracle"])
            + field_textarea("ai-in-2", "Request or query", "Describe the data you want — or paste the query to explain/optimize…", 5)
            + field_textarea("ai-in-3", "Schema context (optional)", "e.g. users(id, email, created_at), orders(id, user_id, total)…", 3)
        ),
    ),
    dict(
        slug="ai-test-forge", icon="🧪", name="AI Test Forge",
        h1a="Ship code", h1b="with proof it works.",
        tagline="Paste a function, get meaningful unit tests — happy path, edge cases, failure modes, mocks included. For Jest, Pytest, PHPUnit and more.",
        meta="AI unit test generator: paste a function, get complete Jest/Pytest/PHPUnit tests with edge cases. Free, no signup.",
        keywords="ai test generator, generate unit tests, jest test generator, pytest generator, ai testing tool",
        cta="Forge Tests", after="", verify="",
        fields=(
            field_textarea("ai-in-0", "Function to test", "Paste the function…", 8)
            + '<div class="ai-field-row">'
            + field_select("ai-in-1", "Test framework", ["Jest", "Vitest", "Pytest", "PHPUnit", "JUnit", "Go testing", "RSpec"])
            + field_select("ai-in-2", "Language", LANGS)
            + "</div>"
        ),
    ),
    dict(
        slug="ai-api-oracle", icon="📡", name="AI API Oracle",
        h1a="Describe the call.", h1b="Get the request.",
        tagline="Say what the API should do — get the method, URL, headers, body, and cURL. Then fire a real request from your browser with the live sender.",
        meta="AI API client: describe the call, get method/URL/headers/body/cURL, then send real requests in-browser. Free, no signup.",
        keywords="ai api client, rest client online, generate api request, curl generator, api testing tool free",
        cta="Design My Request", after="", verify=API_VERIFY,
        fields=(
            field_textarea("ai-in-0", "What should the API call do?", "e.g. get the authenticated user's 10 most recent orders from my Shopify store", 3)
            + field_text("ai-in-1", "Base URL or docs hint (optional)", "https://api.example.com — or paste docs excerpt")
        ),
    ),
    dict(
        slug="ai-prompt-surgeon", icon="✂️", name="AI Prompt Surgeon",
        h1a="Stop wasting tokens.", h1b="Sharpen the prompt.",
        tagline="Paste a prompt or AI conversation. Get a diagnosis of what's wasting tokens and producing weak answers — plus a rewritten, surgical prompt.",
        meta="AI prompt optimizer: paste a prompt, get token-waste diagnosis and a rewritten sharper prompt. Free, no signup.",
        keywords="prompt optimizer, improve chatgpt prompt, ai prompt engineer, prompt analyzer, reduce ai tokens",
        cta="Operate on My Prompt", after="", verify="",
        fields=field_textarea("ai-in-0", "Your prompt or conversation", "Paste the prompt (or a whole AI chat) that needs surgery…", 8),
    ),
    dict(
        slug="ai-refactor", icon="🔄", name="AI Refactor",
        h1a="Legacy in.", h1b="Modern out.",
        tagline="Migrate jQuery to React, callbacks to async/await, Python 2 to 3, JS to TypeScript — with every key change explained and gotchas flagged.",
        meta="AI code migrator: jQuery to React, JS to TypeScript, Python 2 to 3, callbacks to async/await. Free, no signup.",
        keywords="ai code refactor, jquery to react, javascript to typescript, python 2 to 3 migration, modernize code",
        cta="Migrate My Code", after="", verify="",
        fields=(
            field_textarea("ai-in-0", "Legacy code", "Paste the code to modernize…", 8)
            + field_select("ai-in-1", "Migration", ["JavaScript → TypeScript", "jQuery → React", "Callbacks → async/await", "Python 2 → 3", "Class components → Hooks", "REST → GraphQL", "var → modern const/let"])
        ),
    ),
    dict(
        slug="ai-code-explainer", icon="💡", name="AI Code Explainer",
        h1a="Unfamiliar code?", h1b="Understand it in minutes.",
        tagline="Paste code you didn't write. Get the big picture, an architecture map, a step-by-step walkthrough, and the gotchas — like a senior dev onboarding you.",
        meta="AI code explainer: paste unfamiliar code, get architecture map and plain-English walkthrough. Free, no signup.",
        keywords="explain code ai, understand code, code explainer online, what does this code do, code walkthrough",
        cta="Explain This Code", after="", verify="",
        fields=(
            field_textarea("ai-in-0", "Code to explain", "Paste the mysterious code…", 8)
            + field_select("ai-in-1", "Language", LANGS)
        ),
    ),
    dict(
        slug="ai-micro-app-smith", icon="🏭", name="AI Micro-App Smith",
        h1a="Describe the app.", h1b="Get a working tool.",
        tagline="Say what you need — an invoice tracker, a workout log, a budget planner — and get a real working mini-app: form, dashboard, data table, WhatsApp sharing, CSV export. Saved in your browser, no signup.",
        meta="AI micro-app generator: describe a tool in plain language, get a working mini-app with form, dashboard, table, WhatsApp share and CSV export. Free, no signup.",
        keywords="ai app generator, micro app builder, no code app generator, invoice tracker maker, budget tracker builder, workout log app, describe app get tool",
        cta="Forge My Micro-App", after="microapp", verify=MICROAPP_VERIFY,
        fields=(
            MICROAPP_EXAMPLES
            + field_textarea("ai-in-0", "Describe the mini-app you need", "e.g. Freelance invoice tracker: client name, invoice number, amount, due date, status (Sent, Paid, Overdue) — with a dashboard showing total unpaid…", 4)
        ),
    ),
]

MAIN_TMPL = """<main class="page-container">
<div class="ai-studio" data-ai-studio>
  <section class="ai-hero">
    <span class="ai-hero-badge"><span class="pulse"></span> AI Studio Instrument</span>
    <h1>{icon} {h1a} <span class="grad">{h1b}</span></h1>
    <p>{tagline}</p>
    <div class="ai-free-row">
      <span>✓ Free forever</span><span>✓ No signup</span><span>✓ AI brain + local proof</span>
    </div>
  </section>
  <section class="ai-workbench">
    {fields}
    <button type="button" class="ai-run-btn"><span class="ai-spark">✦</span><span class="ai-run-label">{cta}</span></button>
    <div class="ai-error" role="alert"></div>
    <div class="ai-output-wrap"><div class="ai-output"></div></div>
    {verify}
    <p class="ai-note">AI-generated — always review before shipping to production. Your input is sent to the AI service only to generate the answer. The 85 classic utilities on this site run 100% in your browser.</p>
  </section>
</div>
      </main>"""

JSONLD_TMPL = """<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@graph": [
    {{
      "@type": "WebApplication",
      "name": "{name} | WebDevWorker AI Studio",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any",
      "offers": {{"@type": "Offer", "price": "0", "priceCurrency": "USD"}},
      "description": {desc},
      "url": "https://webdevworker.com/tools/{slug}.html"
    }},
    {{
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://webdevworker.com/"}},
        {{"@type": "ListItem", "position": 2, "name": "AI Studio", "item": "https://webdevworker.com/#ai-studio"}},
        {{"@type": "ListItem", "position": 3, "name": {name_q}, "item": "https://webdevworker.com/tools/{slug}.html"}}
      ]
    }}
  ]
}}
</script>"""


def build(tool):
    slug = tool["slug"]
    page = TPL

    # cache-bust bump (regex: TPL carries the previous version, whatever it is)
    page = re.sub(r"2026-wdw-v\d+", VER, page)

    # head tags
    page = re.sub(r"<title>.*?</title>",
                  f"<title>{html.escape(tool['name'])} — Free AI Developer Tool 2026 | WebDevWorker</title>",
                  page, count=1)
    page = re.sub(r'<meta content=".*?" name="description"/>',
                  f"<meta content=\"{html.escape(tool['meta'])}\" name=\"description\"/>",
                  page, count=1)
    # replace BOTH keywords metas with the tool-specific one
    page = re.sub(r'<meta content=".*?" name="keywords"/>',
                  f"<meta content=\"{html.escape(tool['keywords'])}\" name=\"keywords\"/>",
                  page)
    page = re.sub(r'<link href="https://webdevworker\.com/tools/[^"]*" rel="canonical"/>',
                  f'<link href="https://webdevworker.com/tools/{slug}.html" rel="canonical"/>',
                  page, count=1)
    page = re.sub(r'<meta content=".*?" property="og:title"/>',
                  f"<meta content=\"{html.escape(tool['name'])} | WebDevWorker AI Studio\" property=\"og:title\"/>",
                  page, count=1)
    page = re.sub(r'<meta content=".*?" property="og:description"/>',
                  f"<meta content=\"{html.escape(tool['tagline'])}\" property=\"og:description\"/>",
                  page, count=1)
    page = re.sub(r'<meta content="https://webdevworker\.com/tools/[^"]*" property="og:url"/>',
                  f"<meta content=\"https://webdevworker.com/tools/{slug}.html\" property=\"og:url\"/>",
                  page, count=1)
    page = re.sub(r'<script type="application/ld\+json">.*?</script>',
                  JSONLD_TMPL.format(slug=slug, name=tool["name"],
                                     desc='"' + tool["meta"].replace('"', '') + '"',
                                     name_q='"' + tool["name"] + '"'),
                  page, count=1, flags=re.DOTALL)

    # ai-studio stylesheet after ai-widget.css
    page = page.replace(
        f'<link href="/css/ai-widget.css?v={VER}" rel="stylesheet"/>',
        f'<link href="/css/ai-widget.css?v={VER}" rel="stylesheet"/>\n'
        f'<link href="/css/ai-studio.css?v={VER}" rel="stylesheet"/>',
        1)

    # topbar title
    page = re.sub(r'<span class="topbar-title">.*?</span>',
                  f"<span class=\"topbar-title\">{html.escape(tool['icon'] + ' ' + tool['name'])}</span>",
                  page, count=1)

    # main content
    main_html = MAIN_TMPL.format(
        icon=tool["icon"], h1a=html.escape(tool["h1a"]), h1b=html.escape(tool["h1b"]),
        tagline=html.escape(tool["tagline"]), fields=tool["fields"],
        cta=html.escape(tool["cta"]), verify=tool["verify"])
    page = re.sub(r'<main class="page-container">.*?</main>', main_html, page, count=1, flags=re.DOTALL)

    # tail scripts: add ai-studio.js + replace decodeJwt block with init
    page = page.replace(
        f'<script src="/js/ai-widget.js?v={VER}" defer></script>',
        f'<script src="/js/ai-widget.js?v={VER}" defer></script>\n'
        f'<script src="/js/ai-studio.js?v={VER}" defer></script>',
        1)
    init_js = (
        "<script>\n"
        "window.addEventListener('DOMContentLoaded', function() {\n"
        f"  if (window.AIStudio) AIStudio.initPage({{ tool: '{slug}', cta: '{tool['cta']}', after: '{tool['after']}' }});\n"
        "});\n</script>"
    )
    page = re.sub(r"<script>\s*\nfunction decodeJwt\(\).*?</script>",
                  init_js, page, count=1, flags=re.DOTALL)

    # sanity: no leftover decodeJwt; head must not reference the template page
    assert "decodeJwt" not in page, slug
    head = page.split("</head>")[0]
    assert "jwt-decoder" not in head, slug

    out = REPO / "tools" / f"{slug}.html"
    out.write_text(page, encoding="utf-8")
    return out


def main():
    outs = [build(t) for t in TOOLS]
    print(f"built {len(outs)} pages")
    for o in outs:
        print(" ", o.name, o.stat().st_size, "bytes")


if __name__ == "__main__":
    main()
