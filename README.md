# WebDevWorker <div align="center">
  <a href="https://webdevworker.com">
    <img src="https://webdevworker.com/assets/webdevworker-logo-horizontal.svg" alt="WebDevWorker Logo" width="420" />
  </a>
  <br />
  <br />

  <h1>WebDevWorker — The Ultimate Zero-Telemetry Client-Side Developer Workstation</h1>

  <p>
    <strong>85+ high-precision, privacy-first web utilities, frontend generators, cryptographic tools, and DevOps converters executing 100% locally inside your browser's V8 memory sandbox.</strong>
  </p>

  <p>
    <a href="https://webdevworker.com"><strong>Explore Live Workstation »</strong></a>
    &nbsp;•&nbsp;
    <a href="https://webdevworker.com/blog/modern-client-side-developer-workstation.html"><strong>Read Architecture Whitepaper »</strong></a>
    &nbsp;•&nbsp;
    <a href="https://calcworker.com"><strong>Sister Platform (CalcWorker) »</strong></a>
  </p>

  <p>
    <a href="https://github.com/zaviyan/webdevworker/stargazers"><img src="https://img.shields.io/badge/Stars-85%2B%20Tools-eab308?style=for-the-badge&logo=starship&logoColor=black" alt="85+ Tools" /></a>
    <a href="https://webdevworker.com"><img src="https://img.shields.io/badge/Privacy-100%25%20Zero%20Telemetry-10b981?style=for-the-badge&logo=shield&logoColor=white" alt="Zero Telemetry" /></a>
    <a href="https://webdevworker.com"><img src="https://img.shields.io/badge/Runtime-Browser%20V8%20Sandbox-38bdf8?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Browser V8 Sandbox" /></a>
    <a href="https://webdevworker.com"><img src="https://img.shields.io/badge/PWA-100%25%20Offline%20Capable-a855f7?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA Ready" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-gray?style=for-the-badge" alt="MIT License" /></a>
  </p>
</div>

---

## 📑 Table of Contents
- [Why Senior Developers Choose WebDevWorker](#-why-senior-developers-choose-webdevworker)
- [Architecture & The Zero-Telemetry Guarantee](#-architecture--the-zero-telemetry-guarantee)
- [Complete Suite Catalog (All 85 Tools)](#-complete-suite-catalog-all-85-tools)
  - [1. CSS & Visual UI Studio (24 Tools)](#1-css--visual-ui-studio-24-tools)
  - [2. Code, Data & API Architecture Suite (27 Tools)](#2-code-data--api-architecture-suite-27-tools)
  - [3. Security, Cryptography & Standards Vault (11 Tools)](#3-security-cryptography--standards-vault-11-tools)
  - [4. DevOps, Webmaster & Cloud Engineering (18 Tools)](#4-devops-webmaster--cloud-engineering-18-tools)
  - [5. Media, Assets & Performance Suite (5 Tools)](#5-media-assets--performance-suite-5-tools)
- [Built-In AI Assistant Gateway](#-built-in-ai-assistant-gateway)
- [Local Setup & Self-Hosting](#-local-setup--self-hosting)
- [Tech Stack & Standards Matrix](#-tech-stack--standards-matrix)
- [Author, Ownership & Legal](#-author-ownership--legal)
- [GitHub SEO Tags & Keywords](#-github-seo-tags--keywords)

---

## 🛡️ Why Senior Developers Choose WebDevWorker

In corporate software engineering, pasting proprietary source code, internal SQL schema definitions, JWT tokens, and sensitive JSON payloads into cloud SaaS formatters creates major **SOC 2 Type II, HIPAA, and IP sovereignty compliance violations**.

Most online developer utilities send your clipboard data across unencrypted HTTP requests to third-party servers where inputs are logged, cached, or exfiltrated.

**WebDevWorker changes the paradigm completely:**
- 🔒 **100% Client-Side In-Memory Execution:** Every formatter, transpiler, regex evaluator, and cryptographic cipher runs strictly inside your local browser tab (Google Chrome V8, Apple JavaScriptCore, Mozilla SpiderMonkey).
- 🚫 **Zero Remote Telemetry:** No user payloads are ever sent across the network. Disconnect your Wi-Fi or turn on Airplane Mode, and all 85 tools continue to function flawlessly.
- ⚡ **Sub-Millisecond Speed:** Instantaneous output rendering with zero network latency, zero cold starts, and zero API rate limits.
- 📲 **Progressive Web App (PWA) Offline Installation:** Install WebDevWorker directly onto macOS, Windows, Linux, iOS, or Android with 1 click for a permanent offline desktop workstation.

---

## 🏗️ Architecture & The Zero-Telemetry Guarantee

```
  ┌─────────────────────────────────────────────────────────────┐
  │                 Client Web Browser Runtime                  │
  │                                                             │
  │   ┌─────────────────────┐        ┌──────────────────────┐   │
  │   │  DOM Input Elements │        │   Web Crypto API     │   │
  │   │  (JSON/CSS/SQL/SVG) │        │ (SHA/HMAC/AES-GCM)   │   │
  │   └──────────┬──────────┘        └──────────▲───────────┘   │
  │              │                              │               │
  │              ▼                              │               │
  │   ┌─────────────────────────────────────────┴───────────┐   │
  │   │         Local V8 In-Memory Execution Sandbox        │   │
  │   │   • AST Parsers       • Regex Finite Automata       │   │
  │   │   • Lexical Scanners  • Math Polynomial Solvers     │   │
  │   └──────────────────────┬──────────────────────────────┘   │
  │                          │                                  │
  │                          ▼                                  │
  │   ┌─────────────────────────────────────────────────────┐   │
  │   │     Live Rendered Output (Zero Network Transmission)│   │
  │   └─────────────────────────────────────────────────────┘   │
  │                                                             │
  │   ┌─────────────────────────────────────────────────────┐   │
  │   │     Offline Service Worker Cache (RFC 7234)         │   │
  │   └─────────────────────────────────────────────────────┘   │
  └─────────────────────────────────────────────────────────────┘
                               ▲
                               │ 100% Air-Gapped / Offline
                               ✖ NO SERVER PAYLOAD TRANSMISSION
```

---

## 🛠️ Complete Suite Catalog (All 85 Tools)

### 1. CSS & Visual UI Studio (24 Tools)
High-precision generative UI builders, responsive math calculators, and CSS specification tools:

| Tool Name | Key Functionality | Live Link |
|---|---|:---:|
| **Tailwind to CSS Converter** | Decompile Tailwind utility classes into clean vanilla CSS & inline email styles | [Launch Tool](https://webdevworker.com/tools/tailwind-to-css-converter.html) |
| **CSS clamp() Fluid Typography** | Linear viewport scaling math without media queries for WCAG 1.4.4 compliance | [Launch Tool](https://webdevworker.com/tools/css-clamp-calculator.html) |
| **CSS Media & Container Query Builder** | Modern range syntax (`@media (375px <= width <= 1024px)`) & `@container` builder | [Launch Tool](https://webdevworker.com/tools/css-media-query-generator.html) |
| **CSS 3D Transform & Matrix3d Studio** | Compose hardware-accelerated 4x4 `matrix3d()` transformations with live 3D preview | [Launch Tool](https://webdevworker.com/tools/css-transform-3d-matrix-calculator.html) |
| **CSS Aspect Ratio Calculator** | Calculate irreducible ratios, responsive image containers, and padding-top hacks | [Launch Tool](https://webdevworker.com/tools/css-aspect-ratio-calculator.html) |
| **CSS Unit Converter (PX/REM/VW)** | Bidirectional typography math across PX, REM, EM, VW, VH, PT, IN, CM, and MM | [Launch Tool](https://webdevworker.com/tools/css-unit-converter.html) |
| **CSS Specificity Calculator** | Calculate selector specificity tuples `(Inline, ID, Class, Type)` under W3C Selectors 4 | [Launch Tool](https://webdevworker.com/tools/css-specificity-calculator.html) |
| **CSS Mesh Gradient Generator** | Multi-stop fluid radial mesh gradients with zero external CSS dependencies | [Launch Tool](https://webdevworker.com/tools/css-gradient-mesh-generator.html) |
| **CSS Box Shadow Generator** | Multi-layer realistic shadow elevation and neon ambient glow physics | [Launch Tool](https://webdevworker.com/tools/css-box-shadow-generator.html) |
| **CSS Gradient Generator** | Linear, radial, and conic gradients with color-stop CSS code generation | [Launch Tool](https://webdevworker.com/tools/css-gradient-generator.html) |
| **CSS Glassmorphism Builder** | Frosted glass UI builder with `backdrop-filter: blur()`, specular highlights, and borders | [Launch Tool](https://webdevworker.com/tools/css-glassmorphism-generator.html) |
| **Border Radius & Blob Shaper** | 8-point organic blob border-radius generator for modern SaaS UI | [Launch Tool](https://webdevworker.com/tools/css-border-radius-generator.html) |
| **Color Contrast & WCAG Tester** | Relative luminance calculation with WCAG 2.1 AA/AAA accessibility score verification | [Launch Tool](https://webdevworker.com/tools/color-converter-contrast.html) |
| **CSS Flexbox Builder** | Visual playground for flex-direction, justify-content, align-items, and gap | [Launch Tool](https://webdevworker.com/tools/css-flexbox-generator.html) |
| **CSS Grid 2D Builder** | Interactive 2D grid template areas, explicit rows/columns, and fractional sizing | [Launch Tool](https://webdevworker.com/tools/css-grid-generator.html) |
| **CSS Cubic-Bezier Visualizer** | Parametric polynomial easing curve builder with bounce overshoot support | [Launch Tool](https://webdevworker.com/tools/css-cubic-bezier-generator.html) |
| **CSS Clip-Path Polygon Shaper** | Interactive polygon point dragger for geometric masking and shape clipping | [Launch Tool](https://webdevworker.com/tools/css-clip-path-generator.html) |
| **CSS @keyframes Animation Studio** | Timeline animator with transform, opacity, timing-function, and CSS code export | [Launch Tool](https://webdevworker.com/tools/css-keyframes-animation-generator.html) |
| **CSS Triangle & Tooltip Arrow** | Pure border-width geometric triangles for popovers, tooltips, and dropdowns | [Launch Tool](https://webdevworker.com/tools/css-triangle-generator.html) |
| **SVG to CSS Data URI Converter** | Encode vector SVGs into URI-encoded `background-image: url('data:image/svg+xml...')` | [Launch Tool](https://webdevworker.com/tools/svg-to-data-uri-converter.html) |
| **CSS Text Shadow & Neon Glow** | Multi-stage text glow rendering with atmospheric spread and intensity controls | [Launch Tool](https://webdevworker.com/tools/css-text-shadow-generator.html) |
| **Color Palette Harmonies** | HSL color wheel harmonics: complementary, triadic, analogous, and split-complementary | [Launch Tool](https://webdevworker.com/tools/color-palette-harmonies-generator.html) |
| **CSS Filter Effects Studio** | Combine blur, brightness, contrast, grayscale, hue-rotate, invert, and sepia | [Launch Tool](https://webdevworker.com/tools/css-filter-effects-generator.html) |
| **CSS Neumorphism (Soft UI)** | Dual light-source elevation and inset shadow physics for tactile soft UI components | [Launch Tool](https://webdevworker.com/tools/css-neumorphism-generator.html) |

---

### 2. Code, Data & API Architecture Suite (27 Tools)
Transpilers, schema derivation engines, and runtime payload sanitizers:

| Tool Name | Key Functionality | Live Link |
|---|---|:---:|
| **HTML to JSX / React Converter** | Transpile HTML to React JSX with `className`, `htmlFor`, inline style objects, and void tags | [Launch Tool](https://webdevworker.com/tools/html-to-jsx-converter.html) |
| **JSON to Zod Schema Generator** | Recursive AST type inference for runtime Zod schemas (`z.object({...})`) and `z.infer` | [Launch Tool](https://webdevworker.com/tools/json-to-zod-schema.html) |
| **SQL to TypeScript & Prisma** | Parse SQL DDL `CREATE TABLE` statements into Prisma schemas, Drizzle models & TS interfaces | [Launch Tool](https://webdevworker.com/tools/sql-to-typescript-prisma-converter.html) |
| **JSON Formatter & Validator** | RFC 8259 compliant tree visualizer, indentation reformatter, and syntax error finder | [Launch Tool](https://webdevworker.com/tools/json-formatter-validator.html) |
| **JSON to Go Struct Generator** | Convert JSON to idiomatic Golang structs with `json:"key,omitempty"` struct tags | [Launch Tool](https://webdevworker.com/tools/json-to-go-struct-converter.html) |
| **JSON to Rust Struct (Serde)** | Generate memory-safe Rust structs with Serde macros, `Option<T>`, and `Vec<T>` | [Launch Tool](https://webdevworker.com/tools/json-to-rust-struct-converter.html) |
| **JSON to Python Pydantic Models** | Generate Python 3.10+ Pydantic v2 `BaseModel` classes with `Field()` aliases | [Launch Tool](https://webdevworker.com/tools/json-to-python-pydantic-converter.html) |
| **cURL to Code Converter** | Convert cURL CLI commands to Fetch, Axios, Python Requests, Go HTTP & Node.js | [Launch Tool](https://webdevworker.com/tools/curl-to-code-converter.html) |
| **JSON to TypeScript Interface** | Recursive interface generator with optional properties, union types, and JSDoc tags | [Launch Tool](https://webdevworker.com/tools/json-to-typescript-generator.html) |
| **JSON to YAML Converter** | Convert arbitrary JSON hierarchies to clean indentation-safe YAML configs | [Launch Tool](https://webdevworker.com/tools/json-to-yaml-converter.html) |
| **YAML to JSON Configuration** | Parse YAML configurations (Kubernetes, Docker Compose, CI/CD) into validated JSON | [Launch Tool](https://webdevworker.com/tools/yaml-to-json-converter.html) |
| **JSON to CSV / Excel Converter** | Flatten nested JSON objects into RFC 4180 CSV tables with Excel-compatible export | [Launch Tool](https://webdevworker.com/tools/json-to-csv-converter.html) |
| **HTML Table to JSON & CSV** | Extract DOM table rows (`<tr>`, `<td>`, `<th>`) into structured JSON arrays and CSV | [Launch Tool](https://webdevworker.com/tools/html-table-to-json-converter.html) |
| **XML Formatter & JSON Converter** | DOMParser-driven XML beautifier and bidirectional XML-to-JSON transformer | [Launch Tool](https://webdevworker.com/tools/xml-formatter-json-converter.html) |
| **JSON Schema Generator** | Draft-07 / 2020-12 JSON Schema generator with recursive property validation | [Launch Tool](https://webdevworker.com/tools/json-schema-generator.html) |
| **Mock Data Generator** | Generate realistic test records (names, emails, UUIDs, addresses, transactions) in bulk | [Launch Tool](https://webdevworker.com/tools/mock-data-generator.html) |
| **Code Beautifier & Minifier** | Minify and format JavaScript, CSS, HTML, and JSON with token preservation | [Launch Tool](https://webdevworker.com/tools/code-beautifier-minifier.html) |
| **SQL Query Formatter** | Beautify complex SQL queries across PostgreSQL, MySQL, SQLite, Oracle, and MSSQL | [Launch Tool](https://webdevworker.com/tools/sql-formatter.html) |
| **String Case Converter** | Transform text across camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, dot.case | [Launch Tool](https://webdevworker.com/tools/string-case-converter.html) |
| **Base64 Image & Text Tool** | Encode and decode binary files, images, and UTF-8 strings into Base64 data strings | [Launch Tool](https://webdevworker.com/tools/base64-encoder-decoder.html) |
| **URL Encoder & Decoder** | RFC 3986 percent-encoding and decoding for query parameters and URI components | [Launch Tool](https://webdevworker.com/tools/url-encoder-decoder.html) |
| **HTML Entity Encoder & Decoder** | Escape and unescape HTML special characters to prevent Cross-Site Scripting (XSS) | [Launch Tool](https://webdevworker.com/tools/html-entity-encoder-decoder.html) |
| **Unix Timestamp Converter** | Convert Unix epoch seconds/milliseconds into UTC, ISO 8601, and local human dates | [Launch Tool](https://webdevworker.com/tools/unix-timestamp-converter.html) |
| **Number Base Converter (Bin/Hex)** | Arbitrary-precision BigInt radix conversions between Binary, Octal, Decimal, and Hex | [Launch Tool](https://webdevworker.com/tools/number-base-converter.html) |
| **Webhook Payload & Verifier** | Inspect webhook event headers, parse raw payloads, and verify signature authenticity | [Launch Tool](https://webdevworker.com/tools/webhook-payload-formatter.html) |
| **Markdown to HTML Converter** | Real-time CommonMark and GFM renderer with syntax highlighting preview | [Launch Tool](https://webdevworker.com/tools/markdown-html-converter.html) |
| **Lorem Ipsum & Text Generator** | Generate dummy placeholder paragraphs, sentences, and lists for wireframing | [Launch Tool](https://webdevworker.com/tools/lorem-ipsum-generator.html) |

---

### 3. Security, Cryptography & Standards Vault (11 Tools)
Native Web Crypto API primitives and cybersecurity hardening utilities:

| Tool Name | Key Functionality | Live Link |
|---|---|:---:|
| **OpenSSL Command Generator** | Generate RFC 5280 X.509 certs, SAN extensions, RSA/ECDSA keys & PKCS#12 bundles | [Launch Tool](https://webdevworker.com/tools/openssl-command-generator.html) |
| **AES-GCM Encryption / Decryption** | Authenticated symmetric encryption using Galois/Counter Mode & PBKDF2 (100k rounds) | [Launch Tool](https://webdevworker.com/tools/aes-encryption-decryption-tool.html) |
| **HMAC Hash & Key Signature** | Keyed-Hash Message Authentication (RFC 2104) with SHA-256/512 for webhook signing | [Launch Tool](https://webdevworker.com/tools/hmac-hash-generator.html) |
| **Bcrypt Hash & Cost Calculator** | Calculate exponential work factor timings (\\( 2^{\\text{cost}} \\)) and benchmark verify latency | [Launch Tool](https://webdevworker.com/tools/bcrypt-hash-cost-calculator.html) |
| **ULID & NanoID Generator** | Lexicographically sortable 128-bit unique identifiers and compact URL-safe IDs | [Launch Tool](https://webdevworker.com/tools/ulid-nanoid-generator.html) |
| **SHA Hash & Checksum** | NIST-compliant SHA-256, SHA-384, SHA-512, and SHA-1 cryptographic digests | [Launch Tool](https://webdevworker.com/tools/hash-generator.html) |
| **UUID / GUID v4 Generator** | Cryptographically secure RFC 4122 version 4 UUID bulk generator | [Launch Tool](https://webdevworker.com/tools/uuid-generator.html) |
| **Strong Password Generator** | High-entropy password generator with customizable character sets and NIST metrics | [Launch Tool](https://webdevworker.com/tools/password-generator.html) |
| **JWT Token Inspector** | Decode and verify JSON Web Token headers, registered claims, payload, and signatures | [Launch Tool](https://webdevworker.com/tools/jwt-decoder.html) |
| **Subresource Integrity (SRI)** | Generate base64 SHA digests to prevent CDN script tampering (W3C SRI Spec) | [Launch Tool](https://webdevworker.com/tools/subresource-integrity-hash-generator.html) |
| **Content Security Policy (CSP)** | Build strict W3C CSP Level 3 directives to mitigate XSS, data injection, and clickjacking | [Launch Tool](https://webdevworker.com/tools/content-security-policy-generator.html) |

---

### 4. DevOps, Webmaster & Cloud Engineering (18 Tools)
Infrastructure configurations, cloud policies, server blocks, and networking math:

| Tool Name | Key Functionality | Live Link |
|---|---|:---:|
| **Git Command & Workflow Generator** | Visual workflow builder for interactive rebase, commit resets, stashing, and reflog recovery | [Launch Tool](https://webdevworker.com/tools/git-command-generator.html) |
| **Dockerfile & Compose Generator** | Multi-stage builder patterns, non-root user hardening, and Docker Compose v3 specs | [Launch Tool](https://webdevworker.com/tools/dockerfile-compose-generator.html) |
| **AWS IAM & S3 Policy Generator** | Scoped least-privilege IAM policies, S3 bucket permissions, and CloudFront OAC | [Launch Tool](https://webdevworker.com/tools/aws-iam-s3-policy-generator.html) |
| **Nginx Server Block Generator** | Reverse proxy, HTTP/2, SSL/TLS modern ciphers, SPA try_files, and gzip compression | [Launch Tool](https://webdevworker.com/tools/nginx-config-generator.html) |
| **CIDR & IPv4 Subnet Calculator** | Bitwise network masks, wildcard masks, usable host ranges, and broadcast boundaries | [Launch Tool](https://webdevworker.com/tools/cidr-subnet-calculator.html) |
| **WebSocket Client & Debugger** | Connect and debug live WebSocket servers (`ws://` and `wss://`) with latency ping tests | [Launch Tool](https://webdevworker.com/tools/websocket-client-tester.html) |
| **Cron Expression Builder** | POSIX 5-field crontab scheduler with human-readable description translation | [Launch Tool](https://webdevworker.com/tools/cron-expression-generator.html) |
| **Linux Chmod Calculator** | Octal permissions calculator `(r=4, w=2, x=1)` with symbolic notation flags | [Launch Tool](https://webdevworker.com/tools/chmod-permissions-calculator.html) |
| **HTTP Status Codes Spec** | RFC 9110 HTTP status reference with REST semantics and debugging remedies | [Launch Tool](https://webdevworker.com/tools/http-status-codes-inspector.html) |
| **JS KeyCode Event Tester** | Capture live keyboard events with `event.key`, `event.code`, `event.keyCode`, and modifier states | [Launch Tool](https://webdevworker.com/tools/javascript-keycode-tester.html) |
| **.htaccess Rule Builder** | Apache rewrite engine directives, HTTPS redirection, hotlink protection, and caching | [Launch Tool](https://webdevworker.com/tools/htaccess-generator.html) |
| **Meta Tags & Open Graph** | Generate social card previews (Twitter, Facebook, LinkedIn) and SEO meta tags | [Launch Tool](https://webdevworker.com/tools/meta-tag-generator.html) |
| **Regex Tester & Explainer** | JavaScript RegExp engine with match highlighting, capture groups, and regex cheat sheets | [Launch Tool](https://webdevworker.com/tools/regex-tester.html) |
| **Code Diff & Comparison** | Myers diff algorithm side-by-side and unified code and text difference visualizer | [Launch Tool](https://webdevworker.com/tools/text-diff-checker.html) |
| **DNS Zone & SPF/DMARC** | Generate DNS records (A, AAAA, CNAME, MX, TXT, SPF, DKIM, DMARC) with validation | [Launch Tool](https://webdevworker.com/tools/dns-record-lookup-generator.html) |
| **Robots.txt & Crawler Rules** | Configure crawler access for Googlebot, Bingbot, and AI scrapers with sitemap paths | [Launch Tool](https://webdevworker.com/tools/robots-txt-generator.html) |
| **User-Agent & Client Hints** | Parse client HTTP User-Agent strings, browser engine versions, and modern Client Hints | [Launch Tool](https://webdevworker.com/tools/user-agent-parser.html) |
| **SEO Keyword Density & N-Gram** | Calculate single and n-gram keyword frequency to optimize search crawler indexing | [Launch Tool](https://webdevworker.com/tools/seo-keyword-density-analyzer.html) |

---

### 5. Media, Assets & Performance Suite (5 Tools)
Vector assets, icon matrices, and brand styling:

| Tool Name | Key Functionality | Live Link |
|---|---|:---:|
| **SVG Path Visualizer & Editor** | Visual Bézier curve coordinate inspector, bounding box math, and React icon component export | [Launch Tool](https://webdevworker.com/tools/svg-path-visualizer.html) |
| **Custom QR Code Studio** | High-density QR code generator with Reed-Solomon error correction and SVG export | [Launch Tool](https://webdevworker.com/tools/qr-code-generator.html) |
| **Favicon & App Icon Matrix** | Multi-platform icon generator (Apple Touch Icon, Android Chrome, favicon.ico) with PWA manifest | [Launch Tool](https://webdevworker.com/tools/multi-favicon-pwa-generator.html) |
| **SVG Optimizer & Converter** | Clean and compress SVG vector paths by stripping redundant metadata and empty elements | [Launch Tool](https://webdevworker.com/tools/svg-optimizer-converter.html) |
| **Image Palette & Contrast** | Extract dominant color swatches, calculate HSL palettes, and test contrast directly from images | [Launch Tool](https://webdevworker.com/tools/image-color-palette-extractor.html) |

---

## 🤖 Built-In AI Assistant Gateway

WebDevWorker includes an intelligent floating developer assistant powered by a dual-gateway architecture:
- **Groq Cloud Auto-Discovery:** Discovers and routes developer queries through high-velocity models (`qwen/qwen3.8-27b`, `openai/gpt-oss-20b`, `groq/compound-mini`) with sub-second response times.
- **Failover to xAI Grok:** Automatic fallback to `grok-4` if primary endpoints experience downtime.
- **Bilingual Support:** Fluently responds in English and Roman Urdu to questions regarding tool usage, formulas, and architecture.
- **Strict Knowledge Base:** Programmed with the exact mathematical models, algorithms, and links to all 85 WebDevWorker utilities.

---

## 💻 Local Setup & Self-Hosting

WebDevWorker is designed to be zero-dependency and 100% self-hostable on any standard web server, static CDN, or container.

### Option 1: Quick Static Preview (Python)
```bash
# Clone the repository
git clone https://github.com/zaviyan/webdevworker.git
cd webdevworker

# Start a local static server
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

### Option 2: Full Stack Preview with PHP AI Gateway
```bash
# Start PHP built-in server with AI handler support
php -S localhost:8000
# Open http://localhost:8000 in your browser
```

### Option 3: Docker Deployment
```dockerfile
# Run with standard Nginx Alpine
docker run -d --name webdevworker -p 80:80 -v $(pwd):/usr/share/nginx/html:ro nginx:alpine
```

---

## 🔬 Tech Stack & Standards Matrix

- **Frontend Runtime:** Pure Vanilla JavaScript (ES2023), HTML5, CSS Variables, Service Workers (PWA).
- **Styling Architecture:** Modern custom CSS variables design system with instant hardware dark/light mode toggle.
- **Cryptography Engine:** W3C Web Cryptography API (`window.crypto.subtle`).
- **Data Privacy:** 100% In-Browser Memory Sandbox (Zero Server-Side Telemetry).
- **Accessibility:** WCAG 2.1 Level AA Compliant.
- **Sister Platform:** [CalcWorker.com](https://calcworker.com) (Comprehensive Financial & Mathematical Calculator Suite).

---

## 👤 Author, Ownership & Legal

- **Founder & Lead Engineer:** **Zaviyan**
- **Operating Entity:** **Zaviyan LLC** (US-registered software, digital product & web utility firm)
- **Official Inquiries & Support:** `business@zaviyanll.com` (also `business@zaviyanllc.com`)
- **Official Websites:** [webdevworker.com](https://webdevworker.com) • [calcworker.com](https://calcworker.com)
- **License:** Open for global developer productivity under the [MIT License](LICENSE).

---

## 🏷️ GitHub SEO Tags & Keywords

`developer-tools` • `web-development` • `zero-telemetry` • `client-side` • `privacy-first` • `css-generator` • `tailwind-converter` • `json-to-zod` • `html-to-jsx` • `css-clamp` • `jwt-decoder` • `openssl-generator` • `dockerfile-generator` • `nginx-config` • `svg-visualizer` • `regex-tester` • `sql-to-prisma` • `pwa` • `devtools` • `frontend-tools` • `fullstack-tools` • `zaviyan` • `zaviyan-llc` • `webdevworker`
