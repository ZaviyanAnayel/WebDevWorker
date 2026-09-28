# -*- coding: utf-8 -*-
"""Per-article content additions: accurate, factual, no invented stats/claims."""

PRIVACY_FAQ = (
    "Does the tool send my input to a server?",
    "No. The processing happens entirely in your browser with client-side JavaScript. "
    "Your input is never uploaded, stored, or logged by the tool itself — you can even "
    "disconnect from the internet after the page loads and it keeps working."
)

# article filename -> list of (question, answer); each article gets these + PRIVACY_FAQ
TOPIC_FAQS = {
    'aes-encryption-decryption-tool-guide-2026.html': [
        ("What key sizes does AES support?",
         "AES supports 128, 192, and 256-bit keys, using 10, 12, and 14 rounds of encryption respectively. "
         "AES-256 is the standard choice for sensitive data because it offers the largest security margin."),
    ],
    'bcrypt-hash-cost-calculator-guide-2026.html': [
        ("What is a good bcrypt cost factor?",
         "A cost factor of 10 to 12 is the common recommendation for most applications. Each increment of the "
         "cost factor doubles the computation time, so raise it as hardware gets faster — but keep login latency "
         "under roughly one second."),
    ],
    'cidr-subnet-calculator-guide-2026.html': [
        ("How many usable hosts are in a /24 subnet?",
         "A /24 subnet has 256 total addresses, of which 254 are usable for hosts. The first address is the "
         "network address and the last is the broadcast address, and neither can be assigned to a device."),
    ],
    'css-aspect-ratio-calculator-guide-2026.html': [
        ("What is the syntax of the CSS aspect-ratio property?",
         "The syntax is <code>aspect-ratio: 16 / 9;</code>. It sets a preferred width-to-height ratio on a box, "
         "so the browser can reserve the correct space before images or videos load and prevent layout shift."),
    ],
    'css-gradient-mesh-generator-guide-2026.html': [
        ("Do mesh gradients work in all browsers?",
         "The mesh effect is built from layered radial gradients, which are supported in all modern browsers. "
         "Because the output is pure CSS with no images or JavaScript, it renders consistently everywhere "
         "radial-gradient is supported."),
    ],
    'css-media-query-generator-guide-2026.html': [
        ("Should I use min-width or max-width in media queries?",
         "Use <code>min-width</code> for a mobile-first workflow: you write the base styles for small screens and "
         "add enhancements as the viewport grows. <code>max-width</code> is the desktop-first alternative, where "
         "you design for large screens and override downward."),
    ],
    'css-specificity-calculator-guide-2026.html': [
        ("How is CSS specificity calculated?",
         "Specificity is a four-part score: inline styles beat IDs, IDs beat classes (plus attributes and "
         "pseudo-classes), and classes beat element selectors and pseudo-elements. When scores tie, the rule "
         "that appears later in the stylesheet wins."),
    ],
    'css-transform-3d-matrix-calculator-guide-2026.html': [
        ("What values does matrix3d() take?",
         "<code>matrix3d()</code> takes 16 numbers forming a 4x4 transformation matrix in column-major order. "
         "It can express any combination of 3D translate, scale, rotate, skew, and perspective in a single function."),
    ],
    'css-unit-converter-guide-2026.html': [
        ("What is the difference between rem and em?",
         "<code>rem</code> is always relative to the root element's font size (usually 16px), so it stays "
         "consistent across the page. <code>em</code> is relative to the parent element's font size, so it "
         "compounds when elements are nested."),
    ],
    'git-command-generator-guide-2026.html': [
        ("How do I undo the last commit but keep my changes?",
         "Run <code>git reset --soft HEAD~1</code>. It moves the branch pointer back one commit while leaving "
         "your staged and working-tree changes intact, so you can amend the message or split the commit."),
    ],
    'hmac-hash-generator-guide-2026.html': [
        ("What is the difference between HMAC and a plain hash?",
         "A plain hash like SHA-256 only detects accidental changes. HMAC mixes in a secret key, so it also "
         "proves the message came from someone who knows the key — which is why APIs use HMAC to sign webhooks."),
    ],
    'html-entity-encoder-decoder-guide-2026.html': [
        ("When should I encode HTML entities?",
         "Encode entities whenever you insert untrusted text into an HTML page — for example, displaying user "
         "comments. Turning <code>&lt;</code> into <code>&amp;lt;</code> stops the browser from interpreting the "
         "text as markup, which is a core defense against cross-site scripting (XSS)."),
    ],
    'html-to-jsx-converter-guide-2026.html': [
        ("Why does class become className in JSX?",
         "Because <code>class</code> is a reserved word in JavaScript. JSX uses <code>className</code> (and "
         "<code>htmlFor</code> instead of <code>for</code>) so the attribute names never collide with JS syntax."),
    ],
    'json-to-csv-converter-guide-2026.html': [
        ("Why can't nested JSON map cleanly to CSV?",
         "CSV is a flat, tabular format with no notion of nesting. Nested objects and arrays must be flattened "
         "first — typically with dot-separated keys like <code>user.address.city</code> — before they fit into rows "
         "and columns."),
    ],
    'json-to-go-struct-converter-guide-2026.html': [
        ("What are Go struct tags?",
         "Struct tags are annotations like <code>`json:\"userName\"`</code> written after a field. They tell Go's "
         "<code>encoding/json</code> package which JSON key each struct field maps to during marshaling and unmarshaling."),
    ],
    'json-to-python-pydantic-converter-guide-2026.html': [
        ("What is Pydantic used for?",
         "Pydantic validates data using Python type annotations. You declare a model class with typed fields, and "
         "Pydantic automatically checks incoming data, coerces compatible types, and raises clear errors for invalid input."),
    ],
    'json-to-rust-struct-converter-guide-2026.html': [
        ("What is Serde in Rust?",
         "Serde is Rust's standard framework for serializing and deserializing data. Structs derive "
         "<code>Serialize</code> and <code>Deserialize</code>, and attributes like <code>#[serde(rename = \"x\")]</code> "
         "control how fields map to JSON keys."),
    ],
    'json-to-yaml-converter-guide-2026.html': [
        ("Is every JSON document valid YAML?",
         "Yes. Since the YAML 1.2 specification, JSON is officially a subset of YAML, so any valid JSON document "
         "parses as YAML. The reverse is not true — YAML has features like anchors and multi-line strings that JSON lacks."),
    ],
    'json-to-zod-schema-guide-2026.html': [
        ("What is Zod?",
         "Zod is a TypeScript-first schema validation library. You declare a schema like "
         "<code>z.string()</code> or <code>z.object({...})</code>, and Zod validates unknown data at runtime while "
         "inferring static TypeScript types from the same declaration."),
    ],
    'nginx-config-generator-guide-2026.html': [
        ("Where is the nginx configuration file located?",
         "On most Linux distributions the main file is <code>/etc/nginx/nginx.conf</code>, with site-specific "
         "configs in <code>/etc/nginx/sites-available/</code> (Debian/Ubuntu) or <code>/etc/nginx/conf.d/</code> "
         "(RHEL). Always run <code>nginx -t</code> to test syntax before reloading."),
    ],
    'number-base-converter-guide-2026.html': [
        ("What is hexadecimal used for in practice?",
         "Hexadecimal is a compact way to write binary data. You see it in memory addresses, color codes like "
         "<code>#FF5733</code>, Unicode code points, cryptographic hashes, and low-level debugging output."),
    ],
    'string-case-converter-guide-2026.html': [
        ("When should I use snake_case vs camelCase?",
         "Follow your language's convention: <code>snake_case</code> is standard in Python and Ruby, while "
         "<code>camelCase</code> is standard in JavaScript and Java. Consistency within a codebase matters more "
         "than the choice itself."),
    ],
    'svg-path-visualizer-guide-2026.html': [
        ("What do the M, L, and C commands mean in SVG paths?",
         "<code>M</code> moves the pen to a point without drawing, <code>L</code> draws a straight line to a "
         "point, and <code>C</code> draws a cubic Bezier curve using two control points. Uppercase commands use "
         "absolute coordinates; lowercase use relative ones."),
    ],
    'ulid-nanoid-generator-guide-2026.html': [
        ("What is the difference between ULID and UUID?",
         "Both are 128-bit unique identifiers, but ULIDs encode a 48-bit millisecond timestamp in their first "
         "characters, so they sort chronologically. They also use Crockford Base32, making them shorter and "
         "URL-safe compared to UUID's hexadecimal format."),
    ],
    'unix-timestamp-converter-guide-2026.html': [
        ("What is the Year 2038 problem?",
         "Systems that store Unix time in a signed 32-bit integer will overflow on January 19, 2038, wrapping "
         "to a negative date. Modern systems use 64-bit integers, which pushes the problem billions of years out."),
    ],
    'websocket-client-tester-guide-2026.html': [
        ("What is the difference between ws:// and wss://?",
         "<code>ws://</code> is a plain WebSocket connection, while <code>wss://</code> runs the WebSocket "
         "protocol over TLS encryption — the same relationship HTTP has to HTTPS. Always use <code>wss://</code> "
         "in production."),
    ],
    'xml-formatter-json-converter-guide-2026.html': [
        ("How are XML attributes represented when converting to JSON?",
         "There is no single standard, but the common convention is to prefix attribute names with "
         "<code>@</code> — so <code>&lt;user id=\"1\"/&gt;</code> becomes <code>{\"user\": {\"@id\": \"1\"}}</code>. "
         "Text content is often placed under a <code>#text</code> key."),
    ],
}

# article filename -> list of 3 pro tips (each a short string, factual)
PRO_TIPS = {
    'chmod-permissions-calculator-guide-2026.html': [
        "Never use 777 on a production server — it gives every user on the system full read, write, and execute access.",
        "Use 644 for files and 755 for directories as safe defaults on most web servers.",
        "Remember that execute permission on a directory controls whether you can list and enter it, not just run files.",
    ],
    'code-beautifier-minifier-guide-2026.html': [
        "Always keep an unminified copy of your source — minified output is for deployment, not for editing.",
        "Minification typically shrinks JavaScript and CSS by 30-60% by removing whitespace, comments, and shortening names.",
        "Generate source maps alongside minified files so production errors still map back to your original code.",
    ],
    'cron-expression-generator-guide-2026.html': [
        "Cron runs in the server's timezone unless your scheduler supports a timezone field — daylight saving changes can shift job times.",
        "Test schedules with a dry run or a '* * * * *' echo job before pointing them at destructive scripts.",
        "Prefer specific times over frequent intervals for heavy jobs to avoid overlapping executions.",
    ],
    'css-clip-path-generator-guide-2026.html': [
        "clip-path clips the element's painted area but the element still occupies its original box in layout.",
        "Use polygon() for custom shapes — percentages inside it are relative to the element's own dimensions.",
        "Clipped elements can still receive pointer events on their invisible areas, so pair clipping with pointer-events where needed.",
    ],
    'css-cubic-bezier-generator-guide-2026.html': [
        "The classic ease-out curve (0, 0, 0.2, 1) makes UI motion feel responsive because it starts fast and settles gently.",
        "Values outside the 0-1 range on the Y axis create anticipation and overshoot effects for playful animations.",
        "Keep animations under 300ms for interface feedback so the UI feels instant rather than sluggish.",
    ],
    'css-filter-effects-generator-guide-2026.html': [
        "Filters create a new containing block and stacking context, which can change how positioned children behave.",
        "Combine multiple filters in one declaration — they apply left to right, and order changes the visual result.",
        "Heavy blur values on large areas are GPU-expensive; prefer small radii or pre-rendered images for backgrounds.",
    ],
    'css-keyframes-animation-generator-guide-2026.html': [
        "Animate transform and opacity instead of width, height, or top/left — they run on the compositor and stay at 60fps.",
        "Use animation-fill-mode: both when you need the first keyframe applied before the delay elapses.",
        "Respect prefers-reduced-motion by disabling or simplifying animations for users who request it.",
    ],
    'css-text-shadow-generator-guide-2026.html': [
        "Layer multiple comma-separated shadows to build glow, 3D extrusion, or outline effects from a single declaration.",
        "A zero-blur shadow with a 1px offset creates a crisp outline-style effect popular in retro typography.",
        "Dark text on dark backgrounds needs contrast first — shadows improve depth but never replace readable color choices.",
    ],
    'css-triangle-generator-guide-2026.html': [
        "The border triangle trick works because adjacent borders meet at 45-degree diagonals when width and height are zero.",
        "For crisp edges on high-DPI screens, clip-path: polygon() triangles render sharper than border-based ones.",
        "Remember triangles made with borders inherit the border color — set the other three borders to transparent.",
    ],
    'curl-to-code-converter-guide-2026.html': [
        "Copy cURL commands straight from browser DevTools (Network tab → right-click → Copy as cURL) for exact reproduction.",
        "Watch out for shell quoting — single quotes preserve the command literally while double quotes allow variable expansion.",
        "Add -i or -v flags when debugging to see response headers and the TLS handshake, not just the body.",
    ],
    'htaccess-generator-guide-2026.html': [
        ".htaccess only works on Apache (and LiteSpeed) — Nginx ignores it completely and needs server-block config instead.",
        "Rules are processed top to bottom, so put specific redirects before catch-all rules.",
        "A syntax error in .htaccess causes a 500 error on every page — test changes on staging first.",
    ],
    'image-color-palette-extractor-guide-2026.html': [
        "Extract palettes from photos at small sizes — downscaling first is faster and the dominant colors stay the same.",
        "Use the 60-30-10 rule when applying an extracted palette: dominant color 60%, secondary 30%, accent 10%.",
        "Check extracted text/background pairs against WCAG contrast ratios before using them in a design.",
    ],
    'json-schema-generator-guide-2026.html': [
        "Start validation strict and loosen deliberately — an allowlist schema catches bad data that a permissive one silently accepts.",
        "Use $ref to reuse repeated object definitions instead of duplicating them across your schema.",
        "Validate at system boundaries (API input, file imports) rather than deep inside business logic.",
    ],
    'json-to-typescript-generator-guide-2026.html': [
        "Prefer interface over type for object shapes you may extend — interfaces merge and extend more cleanly.",
        "Mark fields optional with ? only when the API truly omits them; otherwise keep them required to catch missing data early.",
        "Use unknown instead of any for values you haven't validated yet — it forces a type check before use.",
    ],
    'lorem-ipsum-generator-guide-2026.html': [
        "Replace placeholder text before launch — lorem ipsum in production is one of the most common site-audit failures.",
        "Use realistic word counts in mockups so stakeholders judge the actual layout, not an idealized short version.",
        "For non-Latin scripts, generate placeholder text in the target language to catch font and line-height issues early.",
    ],
    'mock-data-generator-guide-2026.html': [
        "Generate edge cases deliberately — empty strings, very long names, and unicode characters catch bugs that happy-path data misses.",
        "Seed your random generator when tests need reproducibility; unseeded data makes flaky tests hard to debug.",
        "Never use real customer data for mock datasets — generate synthetic data to avoid privacy incidents.",
    ],
    'password-generator-guide-2026.html': [
        "Length beats complexity — a 20-character passphrase is stronger and more memorable than an 8-character symbol soup.",
        "Use a unique password for every site so one breach never cascades into your other accounts.",
        "Store generated passwords in a password manager instead of reusing or writing them down.",
    ],
    'qr-code-generator-guide-2026.html': [
        "Test every QR code with multiple phone cameras before printing — low contrast or tiny sizes fail in the real world.",
        "Keep a quiet zone (blank margin) around the code at least as wide as one module so scanners can find its edges.",
        "Short URLs make denser, easier-to-scan codes — use a short link for long destinations.",
    ],
    'sql-formatter-guide-2026.html': [
        "Format SQL before code review — consistent casing and indentation make logic errors visible that dense one-liners hide.",
        "Put each major clause (SELECT, FROM, WHERE, JOIN) on its own line; it maps the query structure at a glance.",
        "Never paste production data into online formatters — format the query structure with placeholder values instead.",
    ],
    'svg-optimizer-converter-guide-2026.html': [
        "Always keep the original SVG — aggressive optimization can merge paths in ways that break future edits.",
        "Remove editor metadata and comments first; they often account for most of an exported SVG's file size.",
        "Convert text to outlines before sharing SVGs so they render identically without the original font installed.",
    ],
    'url-encoder-decoder-guide-2026.html': [
        "Encode query parameter values, not the whole URL — encoding the ? and & separators breaks the URL structure.",
        "Spaces become %20 in paths but + in form-encoded query strings; mixing them up is a classic bug source.",
        "Encode exactly once — double-encoding turns % into %25 and corrupts the value on the receiving end.",
    ],
    'webhook-payload-formatter-guide-2026.html': [
        "Always verify webhook signatures before trusting the payload — the URL alone is not authentication.",
        "Return a 2xx response quickly and process heavy work asynchronously so the sender doesn't time out and retry.",
        "Log raw payloads during integration testing; formatted views hide the exact bytes when debugging signature mismatches.",
    ],
}
