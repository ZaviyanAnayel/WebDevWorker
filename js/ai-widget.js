/**
 * WebDevWorker AI — Master Developer Knowledge & Autonomous Assistant
 * 100% Client-Side Private, Zero-Latency, Zero-Telemetry Conversational NLP Engine
 * 
 * OWNER: Zaviyan
 * OPERATED BY: Zaviyan LLC
 * OFFICIAL CONTACT: business@zaviyanllc.com
 * TRAINED ON: All 85 WebDevWorker Developer Tools, Syntax, Usages, and Engineering Standards
 */
(function () {
  "use strict";

  if (document.getElementById("cw-ai-root")) return;

  // 1. Company, Owner & Platform Registry
  const CW_INFO = {
    owner: "Zaviyan",
    company: "Zaviyan LLC",
    email: "business@zaviyanllc.com",
    website: "https://www.webdevworker.com",
    year: 2026,
    mission: "WebDevWorker was founded and engineered by Zaviyan (Zaviyan LLC) to provide frontend, backend, and DevOps engineers with 100% private, zero-latency, client-side developer utilities with certified offline PWA execution."
  };

  // 2. Complete Guides Mapping for All 85 Tools
  const GUIDES_MAP = {
  "/tools/aes-encryption-decryption-tool.html": {
    "guide_url": "/articles/aes-encryption-decryption-tool-guide-2026.html",
    "title": "AES-GCM Authenticated Encryption & Decryption Studio Engineering Guide (2026)"
  },
  "/tools/aws-iam-s3-policy-generator.html": {
    "guide_url": "/articles/aws-iam-s3-policy-generator-guide-2026.html",
    "title": "AWS IAM & S3 Bucket Policy Generator Engineering Guide (2026)"
  },
  "/tools/base64-encoder-decoder.html": {
    "guide_url": "/articles/base64-encoder-decoder-guide-2026.html",
    "title": "Base64 Encoder & Decoder Engineering Guide (2026)"
  },
  "/tools/bcrypt-hash-cost-calculator.html": {
    "guide_url": "/articles/bcrypt-hash-cost-calculator-guide-2026.html",
    "title": "Bcrypt Hash & Work Factor Cost Calculator Engineering Guide (2026)"
  },
  "/tools/chmod-permissions-calculator.html": {
    "guide_url": "/articles/chmod-permissions-calculator-guide-2026.html",
    "title": "Linux Chmod Permissions Calculator Engineering Guide (2026)"
  },
  "/tools/cidr-subnet-calculator.html": {
    "guide_url": "/articles/cidr-subnet-calculator-guide-2026.html",
    "title": "CIDR & IPv4 Subnet Calculator (IP Matrix) Engineering Guide (2026)"
  },
  "/tools/code-beautifier-minifier.html": {
    "guide_url": "/articles/code-beautifier-minifier-guide-2026.html",
    "title": "Multi-Language Code Formatter & Minifier Engineering Guide (2026)"
  },
  "/tools/color-converter-contrast.html": {
    "guide_url": "/articles/color-converter-contrast-guide-2026.html",
    "title": "Color Converter & WCAG Contrast Tester Engineering Guide (2026)"
  },
  "/tools/color-palette-harmonies-generator.html": {
    "guide_url": "/articles/color-palette-harmonies-generator-guide-2026.html",
    "title": "Color Palette Harmonies & Theory Generator Engineering Guide (2026)"
  },
  "/tools/content-security-policy-generator.html": {
    "guide_url": "/articles/content-security-policy-generator-guide-2026.html",
    "title": "Content Security Policy (CSP) Generator Engineering Guide (2026)"
  },
  "/tools/cron-expression-generator.html": {
    "guide_url": "/articles/cron-expression-generator-guide-2026.html",
    "title": "Cron Expression Generator & Human Translator Engineering Guide (2026)"
  },
  "/tools/css-aspect-ratio-calculator.html": {
    "guide_url": "/articles/css-aspect-ratio-calculator-guide-2026.html",
    "title": "CSS Aspect Ratio Calculator & Dimensions Studio Engineering Guide (2026)"
  },
  "/tools/css-border-radius-generator.html": {
    "guide_url": "/articles/css-border-radius-generator-guide-2026.html",
    "title": "CSS Border Radius & Organic Blob Shaper Engineering Guide (2026)"
  },
  "/tools/css-box-shadow-generator.html": {
    "guide_url": "/articles/css-box-shadow-generator-guide-2026.html",
    "title": "CSS Box Shadow Generator Engineering Guide (2026)"
  },
  "/tools/css-clamp-calculator.html": {
    "guide_url": "/articles/css-clamp-calculator-guide-2026.html",
    "title": "CSS clamp() Fluid Typography Calculator Engineering Guide (2026)"
  },
  "/tools/css-clip-path-generator.html": {
    "guide_url": "/articles/css-clip-path-generator-guide-2026.html",
    "title": "CSS Clip-Path Polygon Shaper Engineering Guide (2026)"
  },
  "/tools/css-cubic-bezier-generator.html": {
    "guide_url": "/articles/css-cubic-bezier-generator-guide-2026.html",
    "title": "CSS Cubic-Bezier Easing Visualizer Engineering Guide (2026)"
  },
  "/tools/css-filter-effects-generator.html": {
    "guide_url": "/articles/css-filter-effects-generator-guide-2026.html",
    "title": "CSS Filter Effects Studio Engineering Guide (2026)"
  },
  "/tools/css-flexbox-generator.html": {
    "guide_url": "/articles/css-flexbox-generator-guide-2026.html",
    "title": "CSS Flexbox Interactive Builder Engineering Guide (2026)"
  },
  "/tools/css-glassmorphism-generator.html": {
    "guide_url": "/articles/css-glassmorphism-generator-guide-2026.html",
    "title": "CSS Glassmorphism Generator Engineering Guide (2026)"
  },
  "/tools/css-gradient-generator.html": {
    "guide_url": "/articles/css-gradient-generator-guide-2026.html",
    "title": "CSS Gradient Generator Engineering Guide (2026)"
  },
  "/tools/css-gradient-mesh-generator.html": {
    "guide_url": "/articles/css-gradient-mesh-generator-guide-2026.html",
    "title": "CSS Mesh Gradient Generator & Fluid Canvas Studio Engineering Guide (2026)"
  },
  "/tools/css-grid-generator.html": {
    "guide_url": "/articles/css-grid-generator-guide-2026.html",
    "title": "CSS Grid 2D Visual Builder Engineering Guide (2026)"
  },
  "/tools/css-keyframes-animation-generator.html": {
    "guide_url": "/articles/css-keyframes-animation-generator-guide-2026.html",
    "title": "CSS Keyframes Animation Studio Engineering Guide (2026)"
  },
  "/tools/css-media-query-generator.html": {
    "guide_url": "/articles/css-media-query-generator-guide-2026.html",
    "title": "CSS Media & Container Query Builder Engineering Guide (2026)"
  },
  "/tools/css-neumorphism-generator.html": {
    "guide_url": "/articles/css-neumorphism-generator-guide-2026.html",
    "title": "CSS Neumorphism (Soft UI) Generator Engineering Guide (2026)"
  },
  "/tools/css-specificity-calculator.html": {
    "guide_url": "/articles/css-specificity-calculator-guide-2026.html",
    "title": "CSS Selector Specificity Calculator & Conflict Resolver Engineering Guide (2026)"
  },
  "/tools/css-text-shadow-generator.html": {
    "guide_url": "/articles/css-text-shadow-generator-guide-2026.html",
    "title": "CSS Text Shadow & Neon Glow Studio Engineering Guide (2026)"
  },
  "/tools/css-transform-3d-matrix-calculator.html": {
    "guide_url": "/articles/css-transform-3d-matrix-calculator-guide-2026.html",
    "title": "CSS 3D Transform & Matrix3d Studio Engineering Guide (2026)"
  },
  "/tools/css-triangle-generator.html": {
    "guide_url": "/articles/css-triangle-generator-guide-2026.html",
    "title": "CSS Triangle & Tooltip Arrow Generator Engineering Guide (2026)"
  },
  "/tools/css-unit-converter.html": {
    "guide_url": "/articles/css-unit-converter-guide-2026.html",
    "title": "CSS Unit Converter (PX, REM, EM, VW, VH, PT, PC, IN, CM, MM) Engineering Guide (2026)"
  },
  "/tools/curl-to-code-converter.html": {
    "guide_url": "/articles/curl-to-code-converter-guide-2026.html",
    "title": "cURL to Code Converter Engineering Guide (2026)"
  },
  "/tools/dns-record-lookup-generator.html": {
    "guide_url": "/articles/dns-record-lookup-generator-guide-2026.html",
    "title": "DNS Record Generator & SPF/DMARC Builder Engineering Guide (2026)"
  },
  "/tools/dockerfile-compose-generator.html": {
    "guide_url": "/articles/dockerfile-compose-generator-guide-2026.html",
    "title": "Dockerfile & Docker Compose Generator Engineering Guide (2026)"
  },
  "/tools/git-command-generator.html": {
    "guide_url": "/articles/git-command-generator-guide-2026.html",
    "title": "Git Command & Workflow Generator Engineering Guide (2026)"
  },
  "/tools/hash-generator.html": {
    "guide_url": "/articles/hash-generator-guide-2026.html",
    "title": "Hash & Checksum Generator Engineering Guide (2026)"
  },
  "/tools/hmac-hash-generator.html": {
    "guide_url": "/articles/hmac-hash-generator-guide-2026.html",
    "title": "HMAC Hash & Keyed Signature Generator Engineering Guide (2026)"
  },
  "/tools/htaccess-generator.html": {
    "guide_url": "/articles/htaccess-generator-guide-2026.html",
    "title": ".htaccess Rule Builder & Config Generator Engineering Guide (2026)"
  },
  "/tools/html-entity-encoder-decoder.html": {
    "guide_url": "/articles/html-entity-encoder-decoder-guide-2026.html",
    "title": "HTML Entity Encoder & Decoder (XSS Sanitizer) Engineering Guide (2026)"
  },
  "/tools/html-table-to-json-converter.html": {
    "guide_url": "/articles/html-table-to-json-converter-guide-2026.html",
    "title": "HTML Table to JSON & CSV Converter Engineering Guide (2026)"
  },
  "/tools/html-to-jsx-converter.html": {
    "guide_url": "/articles/html-to-jsx-converter-guide-2026.html",
    "title": "HTML to JSX / React Component Converter Engineering Guide (2026)"
  },
  "/tools/http-status-codes-inspector.html": {
    "guide_url": "/articles/http-status-codes-inspector-guide-2026.html",
    "title": "HTTP Status Codes Reference & Diagnostic Guide Engineering Guide (2026)"
  },
  "/tools/image-color-palette-extractor.html": {
    "guide_url": "/articles/image-color-palette-extractor-guide-2026.html",
    "title": "Image Color Palette Extractor Engineering Guide (2026)"
  },
  "/tools/javascript-keycode-tester.html": {
    "guide_url": "/articles/javascript-keycode-tester-guide-2026.html",
    "title": "JavaScript KeyCode & Keyboard Event Tester Engineering Guide (2026)"
  },
  "/tools/json-formatter-validator.html": {
    "guide_url": "/articles/json-formatter-validator-guide-2026.html",
    "title": "JSON Formatter, Validator & Minifier Engineering Guide (2026)"
  },
  "/tools/json-schema-generator.html": {
    "guide_url": "/articles/json-schema-generator-guide-2026.html",
    "title": "JSON Schema Generator Engineering Guide (2026)"
  },
  "/tools/json-to-csv-converter.html": {
    "guide_url": "/articles/json-to-csv-converter-guide-2026.html",
    "title": "JSON to CSV & Excel Converter (Nested Key Flattener) Engineering Guide (2026)"
  },
  "/tools/json-to-go-struct-converter.html": {
    "guide_url": "/articles/json-to-go-struct-converter-guide-2026.html",
    "title": "JSON to Go Struct Generator & Type Inferencer Engineering Guide (2026)"
  },
  "/tools/json-to-python-pydantic-converter.html": {
    "guide_url": "/articles/json-to-python-pydantic-converter-guide-2026.html",
    "title": "JSON to Python Pydantic v2 Model Generator Engineering Guide (2026)"
  },
  "/tools/json-to-rust-struct-converter.html": {
    "guide_url": "/articles/json-to-rust-struct-converter-guide-2026.html",
    "title": "JSON to Rust Struct (Serde) Generator Engineering Guide (2026)"
  },
  "/tools/json-to-typescript-generator.html": {
    "guide_url": "/articles/json-to-typescript-generator-guide-2026.html",
    "title": "JSON to TypeScript Generator Engineering Guide (2026)"
  },
  "/tools/json-to-yaml-converter.html": {
    "guide_url": "/articles/json-to-yaml-converter-guide-2026.html",
    "title": "JSON to YAML Converter & Bi-Directional Formatter Engineering Guide (2026)"
  },
  "/tools/json-to-zod-schema.html": {
    "guide_url": "/articles/json-to-zod-schema-guide-2026.html",
    "title": "JSON to Zod Schema Generator Engineering Guide (2026)"
  },
  "/tools/jwt-decoder.html": {
    "guide_url": "/articles/jwt-decoder-guide-2026.html",
    "title": "JWT Token Inspector & Decoder Engineering Guide (2026)"
  },
  "/tools/lorem-ipsum-generator.html": {
    "guide_url": "/articles/lorem-ipsum-generator-guide-2026.html",
    "title": "Lorem Ipsum Generator Engineering Guide (2026)"
  },
  "/tools/markdown-html-converter.html": {
    "guide_url": "/articles/markdown-html-converter-guide-2026.html",
    "title": "Markdown to HTML Converter Engineering Guide (2026)"
  },
  "/tools/meta-tag-generator.html": {
    "guide_url": "/articles/meta-tag-generator-guide-2026.html",
    "title": "SEO & Social Meta Tag Generator Engineering Guide (2026)"
  },
  "/tools/mock-data-generator.html": {
    "guide_url": "/articles/mock-data-generator-guide-2026.html",
    "title": "Mock Data Generator Engineering Guide (2026)"
  },
  "/tools/multi-favicon-pwa-generator.html": {
    "guide_url": "/articles/multi-favicon-pwa-generator-guide-2026.html",
    "title": "Multi-Resolution Favicon & PWA Icon Sizer Engineering Guide (2026)"
  },
  "/tools/nginx-config-generator.html": {
    "guide_url": "/articles/nginx-config-generator-guide-2026.html",
    "title": "Nginx Server Block & Reverse Proxy Generator Engineering Guide (2026)"
  },
  "/tools/number-base-converter.html": {
    "guide_url": "/articles/number-base-converter-guide-2026.html",
    "title": "Arbitrary Number Base Converter (Binary, Octal, Decimal, Hex) Engineering Guide (2026)"
  },
  "/tools/openssl-command-generator.html": {
    "guide_url": "/articles/openssl-command-generator-guide-2026.html",
    "title": "OpenSSL Command & CSR / Certificate Generator Engineering Guide (2026)"
  },
  "/tools/password-generator.html": {
    "guide_url": "/articles/password-generator-guide-2026.html",
    "title": "Strong Password Generator Engineering Guide (2026)"
  },
  "/tools/qr-code-generator.html": {
    "guide_url": "/articles/qr-code-generator-guide-2026.html",
    "title": "Custom QR Code Generator Pro Engineering Guide (2026)"
  },
  "/tools/regex-tester.html": {
    "guide_url": "/articles/regex-tester-guide-2026.html",
    "title": "Regex Tester & Expression Explainer Engineering Guide (2026)"
  },
  "/tools/robots-txt-generator.html": {
    "guide_url": "/articles/robots-txt-generator-guide-2026.html",
    "title": "Robots.txt & Search Crawler Builder Engineering Guide (2026)"
  },
  "/tools/seo-keyword-density-analyzer.html": {
    "guide_url": "/articles/seo-keyword-density-analyzer-guide-2026.html",
    "title": "SEO Keyword Density & N-Gram Analyzer Engineering Guide (2026)"
  },
  "/tools/sql-formatter.html": {
    "guide_url": "/articles/sql-formatter-guide-2026.html",
    "title": "SQL Query Formatter & Indenter Engineering Guide (2026)"
  },
  "/tools/sql-to-typescript-prisma-converter.html": {
    "guide_url": "/articles/sql-to-typescript-prisma-converter-guide-2026.html",
    "title": "SQL to TypeScript Interface & Prisma / Drizzle Converter Engineering Guide (2026)"
  },
  "/tools/string-case-converter.html": {
    "guide_url": "/articles/string-case-converter-guide-2026.html",
    "title": "Developer String Case Converter & Text Formatter Engineering Guide (2026)"
  },
  "/tools/subresource-integrity-hash-generator.html": {
    "guide_url": "/articles/subresource-integrity-hash-generator-guide-2026.html",
    "title": "Subresource Integrity (SRI) Hash Generator Engineering Guide (2026)"
  },
  "/tools/svg-optimizer-converter.html": {
    "guide_url": "/articles/svg-optimizer-converter-guide-2026.html",
    "title": "SVG Optimizer & Clean Vector Converter Engineering Guide (2026)"
  },
  "/tools/svg-path-visualizer.html": {
    "guide_url": "/articles/svg-path-visualizer-guide-2026.html",
    "title": "SVG Path Visualizer & Anchor Editor Engineering Guide (2026)"
  },
  "/tools/svg-to-data-uri-converter.html": {
    "guide_url": "/articles/svg-to-data-uri-converter-guide-2026.html",
    "title": "SVG to CSS Data URI Converter Engineering Guide (2026)"
  },
  "/tools/tailwind-to-css-converter.html": {
    "guide_url": "/articles/tailwind-to-css-converter-guide-2026.html",
    "title": "Tailwind CSS to Pure CSS & Inline Style Converter Engineering Guide (2026)"
  },
  "/tools/text-diff-checker.html": {
    "guide_url": "/articles/text-diff-checker-guide-2026.html",
    "title": "Text & Code Diff Checker Engineering Guide (2026)"
  },
  "/tools/ulid-nanoid-generator.html": {
    "guide_url": "/articles/ulid-nanoid-generator-guide-2026.html",
    "title": "ULID & NanoID Cryptographic Generator Engineering Guide (2026)"
  },
  "/tools/unix-timestamp-converter.html": {
    "guide_url": "/articles/unix-timestamp-converter-guide-2026.html",
    "title": "Unix Epoch Timestamp Converter & Timezone Studio Engineering Guide (2026)"
  },
  "/tools/url-encoder-decoder.html": {
    "guide_url": "/articles/url-encoder-decoder-guide-2026.html",
    "title": "URL Encoder & Decoder Engineering Guide (2026)"
  },
  "/tools/user-agent-parser.html": {
    "guide_url": "/articles/user-agent-parser-guide-2026.html",
    "title": "User-Agent Parser & Device Inspector Engineering Guide (2026)"
  },
  "/tools/uuid-generator.html": {
    "guide_url": "/articles/uuid-generator-guide-2026.html",
    "title": "UUID / GUID v4 Bulk Generator Engineering Guide (2026)"
  },
  "/tools/webhook-payload-formatter.html": {
    "guide_url": "/articles/webhook-payload-formatter-guide-2026.html",
    "title": "Webhook Payload & Signature Tester Engineering Guide (2026)"
  },
  "/tools/websocket-client-tester.html": {
    "guide_url": "/articles/websocket-client-tester-guide-2026.html",
    "title": "WebSocket Client & Real-Time Protocol Debugger Engineering Guide (2026)"
  },
  "/tools/xml-formatter-json-converter.html": {
    "guide_url": "/articles/xml-formatter-json-converter-guide-2026.html",
    "title": "XML Formatter, Validator & Bi-Directional JSON Converter Engineering Guide (2026)"
  },
  "/tools/yaml-to-json-converter.html": {
    "guide_url": "/articles/yaml-to-json-converter-guide-2026.html",
    "title": "YAML to JSON & JSON to YAML Converter Engineering Guide (2026)"
  }
};

  // 3. Complete 85-Tool Developer Database
  const TOOLS_DB = [
  {
    "url": "/tools/aes-encryption-decryption-tool.html",
    "title": "AES-GCM Authenticated Encryption & Decryption Studio",
    "desc": "Encrypt and decrypt text client-side using AES-GCM (Galois/Counter Mode) authenticated cryptography with PBKDF2 key derivation (100,000 iterations) and 12-byte IV.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "aes",
      "authenticated",
      "decryption",
      "encryption",
      "gcm",
      "studio",
      "tool"
    ],
    "formula": "The cryptographic pipeline combines key derivation, counter encryption, and Galois field polynomial authentication:\n      \n        PBKDF2 Key Derivation: \\( K_{\\text{AES}} = \\text{PBKDF2}(\\text{password}, \\text{salt}, 100000, 256) \\)\n        GCM Encryption: Plaintext blocks \\( P_i \\) are XORed with AES-encrypted counter blocks: \\( C_i = P_i \\oplus E_K(\\text{IV} \\parallel i) \\)\n        GHASH Authentication Tag: Evaluates polynomial multiplication over binary Galois field \\( \\text{GF}(2^{128}) \\) to verify ciphertext authenticity.",
    "how_to_use": "Input your raw code or configuration parameters into the AES-GCM Authenticated Encryption & Decryption Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Encrypt and decrypt text client-side using AES-GCM (Galois/Counter Mode) authenticated cryptography with PBKDF2 key derivation (100,000 iterations) and 12-byte IV.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/aws-iam-s3-policy-generator.html",
    "title": "AWS IAM & S3 Bucket Policy Generator",
    "desc": "Visually generate secure, production-ready AWS IAM and S3 Bucket JSON policies. Configure least-privilege permissions, cross-account access, CloudFront OAC, and IP restrictions with zero syntax errors.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "aws",
      "bucket",
      "generator",
      "iam",
      "policy"
    ],
    "formula": "AWS Policy Evaluation Algorithm:\nDecision = DefaultDeny \n  \u2227 (ExplicitDeny ? Deny : (ExplicitAllow ? Allow : Deny))\n\nGrammar Specification:\nPolicy := { \"Version\": \"2012-10-17\", \"Statement\": [ Statement+ ] }\nStatement := {\n  \"Sid\"?: String,\n  \"Effect\": \"Allow\" | \"Deny\",\n  \"Principal\": \"*\" | { \"AWS\"|\"Service\"|\"Federated\": String | String[] },\n  \"Action\": String | String[],\n  \"Resource\": ARN | ARN[],\n  \"Condition\"?: { Operator: { ContextKey: Value } }\n}",
    "how_to_use": "Step 1: Select your required permission template (e.g. Read-Only Static Site, App Upload Worker, or CloudFront OAC). Step 2: Replace the placeholder bucket name with your verified AWS S3 bucket ARN (e.g., arn:aws:s3:::company-asset-production). Step 3: Toggle specific required actions (such as s3:GetObject or s3:PutObject) while avoiding hazardous wildcards like s3:*. Step 4: Configure optional CIDR IP whitelists to ensure admin operations originate strictly from your corporate VPN or office network.",
    "inputs": "Visually generate secure, production-ready AWS IAM and S3 Bucket JSON policies. Configure least-privilege permissions, cross-account access, CloudFront OAC, and IP restrictions with zero syntax errors.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/base64-encoder-decoder.html",
    "title": "Base64 Encoder & Decoder",
    "desc": "Encode and decode Base64 text, binary strings, and image files to Data URIs. Fast, client-side RFC 4648 compliant converter.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "base64",
      "decoder",
      "encoder"
    ],
    "formula": "The algorithm splits 24 bits of binary input into four 6-bit chunks. Each 6-bit value (ranging from 0 to 63) acts as an index into the standard Base64 character table: 'A-Z' (0-25), 'a-z' (26-51), '0-9' (52-61), '+' (62), and '/' (63). If the input byte length is not divisible by 3, '=' padding characters are appended to satisfy 4-byte block alignment.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Base64 Encoder & Decoder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Encode and decode Base64 text, binary strings, and image files to Data URIs. Fast, client-side RFC 4648 compliant converter.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/bcrypt-hash-cost-calculator.html",
    "title": "Bcrypt Hash & Work Factor Cost Calculator",
    "desc": "Inspect bcrypt hash anatomy ($2a$, $2b$, cost factor, salt, hash), benchmark client CPU hashing latency, and determine optimal work factor rounds for production authentication.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "bcrypt",
      "blowfish",
      "calculator",
      "cost",
      "factor",
      "hash",
      "password",
      "rounds",
      "salt",
      "work"
    ],
    "formula": "The mathematical computation of Bcrypt work factor rounds follows an exact exponential power of two:\n      \n        \\( \\text{Iterations} = 2^{\\text{cost}} \\)\n      \n      \n        Cost = 10: \\( 2^{10} = 1,024 \\) key schedule expansions (~30 ms).\n        Cost = 12 (OWASP Standard): \\( 2^{12} = 4,096 \\) expansions (~130 ms). Ideal balance between user experience and brute-force resistance.\n        Cost = 14: \\( 2^{14} = 16,384 \\) expansions (~520 ms). Recommended for high-security enterprise environments.",
    "how_to_use": "Input your raw code or configuration parameters into the Bcrypt Hash & Work Factor Cost Calculator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Inspect bcrypt hash anatomy ($2a$, $2b$, cost factor, salt, hash), benchmark client CPU hashing latency, and determine optimal work factor rounds for production authentication.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/chmod-permissions-calculator.html",
    "title": "Linux Chmod Permissions Calculator",
    "desc": "Calculate Linux and Unix chmod file permissions. Interactive visual checkbox matrix for User, Group, and Other with instant octal (755, 644) and symbolic code.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "calculator",
      "chmod",
      "linux",
      "permissions"
    ],
    "formula": "The tool converts binary bit flags into octal digits (0 to 7) for each of the three user classes, and also computes advanced permission bits (SUID = 4000, SGID = 2000, Sticky Bit = 1000) for shared directory security.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Linux Chmod Permissions Calculator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Calculate Linux and Unix chmod file permissions. Interactive visual checkbox matrix for User, Group, and Other with instant octal (755, 644) and symbolic code.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/cidr-subnet-calculator.html",
    "title": "CIDR & IPv4 Subnet Calculator (IP Matrix)",
    "desc": "Calculate IPv4 subnet masks, wildcard masks, network and broadcast addresses, usable host IP ranges, and 32-bit binary representation from CIDR prefix notations.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "calculator",
      "cidr",
      "ipv4",
      "matrix",
      "subnet"
    ],
    "formula": "Subnet boundary equations are evaluated via bitwise binary operators conforming to standard network mathematics:\n      \n        Subnet Mask: \\( M = (\\sim 0) \\ll (32 - p) \\) where \\( p \\) is the CIDR prefix length.\n        Network Address: \\( \\text{Net} = \\text{IP} \\ \\&\\ M \\)\n        Broadcast Address: \\( \\text{Bcast} = \\text{IP} \\mid (\\sim M) \\)\n        Total Usable Hosts: For \\( p \\le 30 \\), \\( H = 2^{32 - p} - 2 \\) (subtracting network and broadcast addresses).",
    "how_to_use": "Input your raw code or configuration parameters into the CIDR & IPv4 Subnet Calculator (IP Matrix) interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Calculate IPv4 subnet masks, wildcard masks, network and broadcast addresses, usable host IP ranges, and 32-bit binary representation from CIDR prefix notations.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/code-beautifier-minifier.html",
    "title": "Multi-Language Code Formatter & Minifier",
    "desc": "Format, indent, beautify, and minify HTML, CSS, JavaScript, and JSON code online. Clean whitespace, fix indentation, and compress files for production.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "beautifier",
      "code",
      "formatter",
      "language",
      "minifier",
      "multi"
    ],
    "formula": "The tool leverages state-machine tokenizers that identify string literals, regular expressions, and comments. When minifying, it strips whitespace without breaking string contents. When beautifying, it tracks nesting depth of curly braces and indentation tags to restore structural hierarchy.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Multi-Language Code Formatter & Minifier interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Format, indent, beautify, and minify HTML, CSS, JavaScript, and JSON code online. Clean whitespace, fix indentation, and compress files for production.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/color-converter-contrast.html",
    "title": "Color Converter & WCAG Contrast Tester",
    "desc": "Convert colors between HEX, RGB, HSL, and HSV while evaluating WCAG 2.1 Level AA and AAA color contrast ratios. Free accessibility testing utility.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "color",
      "contrast",
      "converter",
      "tester",
      "wcag"
    ],
    "formula": "To calculate relative luminance, 8-bit sRGB color channels are divided by 255 and linearized to remove the sRGB gamma curve. The linearized values are weighted according to the ITU-R BT.709 photometric coefficients (0.2126 Red, 0.7152 Green, 0.0722 Blue). The lighter luminance (L1) and darker luminance (L2) are then compared with a 0.05 offset to account for ambient viewing flare.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Color Converter & WCAG Contrast Tester interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert colors between HEX, RGB, HSL, and HSV while evaluating WCAG 2.1 Level AA and AAA color contrast ratios. Free accessibility testing utility.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/color-palette-harmonies-generator.html",
    "title": "Color Palette Harmonies & Theory Generator",
    "desc": "Generate balanced color palettes using classical color theory: complementary, triadic, analogous, and split-complementary harmonies with CSS export.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "color",
      "generator",
      "harmonies",
      "palette",
      "theory"
    ],
    "formula": "Given a primary brand hue (H), color harmony algorithms compute angular offsets along the color circumference while preserving or systematically scaling saturation (S) and lightness (L) to generate primary, secondary, accent, and neutral surface tokens ready for CSS design systems.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Color Palette Harmonies & Theory Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate balanced color palettes using classical color theory: complementary, triadic, analogous, and split-complementary harmonies with CSS export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/content-security-policy-generator.html",
    "title": "Content Security Policy (CSP) Generator",
    "desc": "Visually build robust Content Security Policy (CSP) Level 3 HTTP response headers. Defend against Cross-Site Scripting (XSS), data theft, and clickjacking.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "content",
      "csp",
      "generator",
      "policy",
      "security"
    ],
    "formula": "The tool provides interactive controls for directives including default-src, script-src, style-src, img-src, connect-src, font-src, and frame-ancestors. It compiles user selections into a clean, semicolon-delimited header string formatted for Apache (.htaccess), Nginx, or HTML &lt;meta&gt; tags.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Content Security Policy (CSP) Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually build robust Content Security Policy (CSP) Level 3 HTTP response headers. Defend against Cross-Site Scripting (XSS), data theft, and clickjacking.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/cron-expression-generator.html",
    "title": "Cron Expression Generator & Human Translator",
    "desc": "Visually generate, test, and translate POSIX crontab schedules into plain-English human descriptions. Supports Linux cron, AWS EventBridge, and Quartz.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "cron",
      "crontab",
      "expression",
      "generator",
      "human",
      "job",
      "posix",
      "schedule",
      "translator"
    ],
    "formula": "The translation parser breaks down the five positional tokens, analyzes step increments (e.g. */15 = every 15 minutes) and ranges (e.g. 1-5 = Monday through Friday), and computes upcoming execution dates so you can verify the schedule before deployment.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Cron Expression Generator & Human Translator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually generate, test, and translate POSIX crontab schedules into plain-English human descriptions. Supports Linux cron, AWS EventBridge, and Quartz.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-aspect-ratio-calculator.html",
    "title": "CSS Aspect Ratio Calculator & Dimensions Studio",
    "desc": "Calculate proportional dimensions, simplified ratios, modern CSS aspect-ratio properties, and legacy padding-top percentages. Eliminate Cumulative Layout Shift (CLS).",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "aspect",
      "calculator",
      "css",
      "dimensions",
      "ratio",
      "studio"
    ],
    "formula": "The mathematical reduction of dimensions into an irreducible aspect ratio uses the classical Euclidean Algorithm to compute the Greatest Common Divisor (GCD):\n      \n        \\( \\gcd(a, b) = \\begin{cases} a, & \\text{if } b = 0 \\\\ \\gcd(b, a \\bmod b), & \\text{otherwise} \\end{cases} \\)\n      \n      \n        Simplified Ratio: \\( \\text{Ratio} = \\frac{W}{\\gcd(W, H)} : \\frac{H}{\\gcd(W, H)} \\)\n        Legacy Padding-Top Hack: \\( \\text{padding-top} = \\left(\\frac{H}{W}\\right) \\times 100\\% \\)\n        Derived Height: For any responsive container width \\( W_2 \\), \\( H_2 = W_2 \\times \\left(\\frac{H}{W}\\right)",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Aspect Ratio Calculator & Dimensions Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Calculate proportional dimensions, simplified ratios, modern CSS aspect-ratio properties, and legacy padding-top percentages. Eliminate Cumulative Layout Shift (CLS).",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-border-radius-generator.html",
    "title": "CSS Border Radius & Organic Blob Shaper",
    "desc": "Generate 8-point asymmetric CSS border-radius and fluid organic morphing blob shapes. Free visual CSS code builder with instant 1-click copy.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "blob",
      "border",
      "css",
      "generator",
      "organic",
      "radius",
      "shaper"
    ],
    "formula": "Each of the four corners is defined by an ellipse quadrant where rx represents horizontal semi-axis and ry represents vertical semi-axis. When animating these 8 coordinate points with CSS @keyframes, browsers interpolate smoothly between the elliptical bounds, producing liquid morphing animations at 60fps.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Border Radius & Organic Blob Shaper interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate 8-point asymmetric CSS border-radius and fluid organic morphing blob shapes. Free visual CSS code builder with instant 1-click copy.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-box-shadow-generator.html",
    "title": "CSS Box Shadow Generator",
    "desc": "Generate multi-layer realistic CSS box-shadows with blur, spread, inset lighting, and smooth elevation curves. Free online CSS shadow code generator.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "box",
      "box shadow",
      "css",
      "drop shadow",
      "elevation",
      "generator",
      "shadow"
    ],
    "formula": "The box-shadow rendering pipeline utilizes a Gaussian blur filter on a duplicated raster mask of the element's border-box. The spread radius expands or contracts the shape mask prior to blurring. Inset shadows invert the mask clipping, rendering shadow inside the inner border edge. Layering 2 to 4 subtle shadows produces physical realism while maintaining GPU compositor performance.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Box Shadow Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate multi-layer realistic CSS box-shadows with blur, spread, inset lighting, and smooth elevation curves. Free online CSS shadow code generator.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-clamp-calculator.html",
    "title": "CSS clamp() Fluid Typography Calculator",
    "desc": "Calculate mathematical CSS clamp() fluid font sizes and margins without media queries. Free responsive fluid typography calculator with WCAG accessibility support.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "calculator",
      "clamp",
      "css",
      "fluid",
      "min max",
      "responsive",
      "typography"
    ],
    "formula": "The underlying mathematical model uses linear slope-intercept geometry: y = mx + b. The slope (m) represents the rate at which font size grows per pixel of viewport expansion. The y-intercept (b) represents the baseline font size when the viewport width is zero. Converting the intercept into rem units ensures that the user's browser-level font zoom settings remain functional, satisfying accessibility guidelines.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS clamp() Fluid Typography Calculator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Calculate mathematical CSS clamp() fluid font sizes and margins without media queries. Free responsive fluid typography calculator with WCAG accessibility support.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-clip-path-generator.html",
    "title": "CSS Clip-Path Polygon Shaper",
    "desc": "Visually cut organic polygons, stars, hexagons, triangles, and angled banners using CSS clip-path. Free online polygon coordinate generator.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "clip",
      "css",
      "generator",
      "path",
      "polygon",
      "shaper"
    ],
    "formula": "The browser treats the polygon coordinates as vertex points connected in sequence, winding around the shape perimeter. Unlike standard border-radius, clip-path physically modifies the clickable pointer-event hit area in modern browsers, ensuring users cannot accidentally click invisible clipped regions.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Clip-Path Polygon Shaper interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually cut organic polygons, stars, hexagons, triangles, and angled banners using CSS clip-path. Free online polygon coordinate generator.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-cubic-bezier-generator.html",
    "title": "CSS Cubic-Bezier Easing Visualizer",
    "desc": "Visually craft custom CSS transition cubic-bezier easing curves. Test ease-in, ease-out, spring bounce, and overshoot physics with live preview.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "bezier",
      "css",
      "cubic",
      "easing",
      "generator",
      "visualizer"
    ],
    "formula": "A cubic B\u00e9zier curve is parameterized by four points: the start point (0,0), two control handles (x1, y1) and (x2, y2), and the end point (1,1). The x-coordinates represent normalized time and must strictly lie within [0, 1]. The y-coordinates represent output progress and can exceed 1.0 or dip below 0.0 to generate realistic physics bounces and spring overshoots.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Cubic-Bezier Easing Visualizer interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually craft custom CSS transition cubic-bezier easing curves. Test ease-in, ease-out, spring bounce, and overshoot physics with live preview.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-filter-effects-generator.html",
    "title": "CSS Filter Effects Studio",
    "desc": "Visually apply and combine CSS3 image filter effects: blur, brightness, contrast, grayscale, hue-rotate, invert, saturate, and sepia with instant code.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "css",
      "effects",
      "filter",
      "generator",
      "studio"
    ],
    "formula": "Filters are applied in the exact sequence they are declared in the CSS string. The browser processes color matrix multiplications for saturation, contrast, and hue rotation, followed by convolution spatial matrices for Gaussian blur.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Filter Effects Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually apply and combine CSS3 image filter effects: blur, brightness, contrast, grayscale, hue-rotate, invert, saturate, and sepia with instant code.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-flexbox-generator.html",
    "title": "CSS Flexbox Interactive Builder",
    "desc": "Visually design 1D responsive layouts with CSS Flexbox. Adjust justify-content, align-items, flex-direction, gap, and flex-wrap with instant code output.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "builder",
      "css",
      "flexbox",
      "generator",
      "interactive"
    ],
    "formula": "CSS Flexible Box Layout (Flexbox) provides an efficient, predictable way to distribute space and align items along a primary axis (main-axis) and secondary axis (cross-axis). Unlike traditional float or inline-block hacks, Flexbox dynamically adjusts child element dimensions to fill available viewport space without manual calculation.\n          \n          \n            In high-performance web engineering, avoiding unnecessary network dependencies and runtime overhead is critical to maintaining high Google Core Web Vitals scores and meeting enterprise service level agreements (SLAs). WebDevWorke",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Flexbox Interactive Builder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually design 1D responsive layouts with CSS Flexbox. Adjust justify-content, align-items, flex-direction, gap, and flex-wrap with instant code output.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-glassmorphism-generator.html",
    "title": "CSS Glassmorphism Generator",
    "desc": "Design modern frosted glass UI cards with backdrop-filter blur, border glow, transparency, and background saturation. Free online glassmorphism generator.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "css",
      "generator",
      "glassmorphism"
    ],
    "formula": "The browser composites the background surface, applies a GPU-accelerated convolution blur kernel over the bounding box region, modulates color saturation, and then blends the semi-transparent surface layer with a high-contrast 1px perimeter border that mimics physical light refraction at the bevel edge.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Glassmorphism Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Design modern frosted glass UI cards with backdrop-filter blur, border glow, transparency, and background saturation. Free online glassmorphism generator.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-gradient-generator.html",
    "title": "CSS Gradient Generator",
    "desc": "Create beautiful linear, radial, and conic CSS gradients with multi-stop color pickers, angle controls, and 1-click CSS code export.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "color stop",
      "conic",
      "css",
      "generator",
      "gradient",
      "linear",
      "radial"
    ],
    "formula": "Color interpolation in CSS gradients historically occurred in the sRGB color space, which often produced a muddy desaturated 'gray dead zone' in mid-tone transitions. Modern CSS Color Module Level 4 allows interpolation in perceptual color spaces like OKLCH and Display-P3 (e.g. in oklch), yielding ultra-vibrant, natural optical transitions.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Gradient Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Create beautiful linear, radial, and conic CSS gradients with multi-stop color pickers, angle controls, and 1-click CSS code export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-gradient-mesh-generator.html",
    "title": "CSS Mesh Gradient Generator & Fluid Canvas Studio",
    "desc": "Generate modern, multi-point fluid CSS mesh gradients. Compose multi-layered radial gradient focal points with custom blur, opacity, and blend modes for ultra-modern SaaS backdrops.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "canvas",
      "color stop",
      "conic",
      "css",
      "fluid",
      "generator",
      "gradient",
      "linear",
      "mesh",
      "radial",
      "studio"
    ],
    "formula": "The mathematical composition of multi-stop radial mesh gradients relies on the superposition of Gaussian falloff curves across a 2D Cartesian plane:\n      \n        \\( I(x, y) = C_{\\text{base}} + \\sum_{i=1}^{N} C_i \\cdot \\max\\left(0, 1 - \\frac{\\sqrt{(x - x_i)^2 + (y - y_i)^2}}{R_i}\\right)^p \\)\n      \n      \n        Focal Coordinates \\( (x_i, y_i) \\): Center origins specified in percentage dimensions.\n        Radius \\( R_i \\): Spatial dispersion radius where color transitions asymptotically to transparent.\n        Alpha Blending: Uses Porter-Duff source-over compositing in the GPU rasterization ",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Mesh Gradient Generator & Fluid Canvas Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate modern, multi-point fluid CSS mesh gradients. Compose multi-layered radial gradient focal points with custom blur, opacity, and blend modes for ultra-modern SaaS backdrops.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-grid-generator.html",
    "title": "CSS Grid 2D Visual Builder",
    "desc": "Visually create responsive 2D CSS Grid layouts. Design rows, columns, fractional fr units, auto-fit, minmax(), and grid areas with live CSS code.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "builder",
      "css",
      "generator",
      "grid",
      "visual"
    ],
    "formula": "The Grid layout engine calculates track sizes through track sizing algorithms. Tracks configured with fr units divide remaining free space proportionally after fixed (px, rem) and content-based (min-content, max-content) tracks are resolved. Using auto-fit alongside minmax() produces completely fluid, media-query-free responsive wrapping.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Grid 2D Visual Builder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually create responsive 2D CSS Grid layouts. Design rows, columns, fractional fr units, auto-fit, minmax(), and grid areas with live CSS code.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-keyframes-animation-generator.html",
    "title": "CSS Keyframes Animation Studio",
    "desc": "Visually generate CSS @keyframes animations with timing, duration, easing, iterations, and transform controls. Free CSS animation builder.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "animation",
      "css",
      "generator",
      "keyframes",
      "studio"
    ],
    "formula": "Browsers optimize @keyframes animations by moving transform and opacity calculations off the main thread directly onto the GPU compositor thread. This decouples animations from heavy JavaScript execution, preventing stutter and frame drops even during intense data processing.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Keyframes Animation Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually generate CSS @keyframes animations with timing, duration, easing, iterations, and transform controls. Free CSS animation builder.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-media-query-generator.html",
    "title": "CSS Media & Container Query Builder",
    "desc": "Visually construct responsive CSS media queries, modern range syntax queries, CSS Container Queries, dark mode preferences, print rules, and Tailwind breakpoint configurations.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "builder",
      "container",
      "css",
      "generator",
      "media",
      "query"
    ],
    "formula": "Media query logic evaluates Boolean combinations of media features conforming to W3C specifications:\n      \n        Media Feature Conjunction (and): \\( M = F_1 \\land F_2 \\land \\dots \\land F_k \\). All conditional expressions must evaluate to true for the enclosed CSS block to cascade.\n        Modern Range Syntax: Replaces awkward min-width and max-width with mathematical comparison operators: @media (375px &lt;= width &lt;= 1024px).\n        Container Queries: Whereas media queries query the global browser viewport window, @container (min-width: W) queries the computed inline size of the nearest",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Media & Container Query Builder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visually construct responsive CSS media queries, modern range syntax queries, CSS Container Queries, dark mode preferences, print rules, and Tailwind breakpoint configurations.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-neumorphism-generator.html",
    "title": "CSS Neumorphism (Soft UI) Generator",
    "desc": "Design modern neumorphic tactile Soft UI components with light-angle physics, extruded convex surfaces, and inset pressed states.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "css",
      "generator",
      "neumorphism",
      "soft"
    ],
    "formula": "The illusion relies on precise light-source vector mathematics. An imaginary key light at 135 degrees creates a bright highlight shadow on the upper-left perimeter and a dark absorption shadow on the lower-right perimeter against an identical monochromatic background color.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Neumorphism (Soft UI) Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Design modern neumorphic tactile Soft UI components with light-angle physics, extruded convex surfaces, and inset pressed states.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-specificity-calculator.html",
    "title": "CSS Selector Specificity Calculator & Conflict Resolver",
    "desc": "Calculate CSS selector specificity tuples (Inline, IDs, Classes/Attributes, Elements) conforming to W3C Selectors Level 4. Compare selectors side-by-side to debug cascade conflicts.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "calculator",
      "conflict",
      "css",
      "resolver",
      "selector",
      "specificity"
    ],
    "formula": "The formal W3C Selectors Level 4 algorithmic tuple is represented as:\n      \n        Specificity = (a, b, c, d)\n      \n      \n        a (Inline Style): Applied via HTML style=\"...\" attribute \\( \\to (1, 0, 0, 0) \\).\n        b (ID Selectors): Matches #identifier \\( \\to (0, 1, 0, 0) \\).\n        c (Classes, Attributes &amp; Pseudo-classes): Matches .class, [type=\"button\"], and :hover \\( \\to (0, 0, 1, 0) \\).\n        d (Type &amp; Pseudo-elements): Matches HTML tags like div, h1, and pseudo-elements like ::before, ::after \\( \\to (0, 0, 0, 1) \\).\n        Universal &amp; Combinators: The universal sel",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Selector Specificity Calculator & Conflict Resolver interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Calculate CSS selector specificity tuples (Inline, IDs, Classes/Attributes, Elements) conforming to W3C Selectors Level 4. Compare selectors side-by-side to debug cascade conflicts.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-text-shadow-generator.html",
    "title": "CSS Text Shadow & Neon Glow Studio",
    "desc": "Create multi-layer CSS text-shadow effects, 3D extruded lettering, and vibrant neon typography glows with instant CSS code export.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "box shadow",
      "css",
      "drop shadow",
      "elevation",
      "generator",
      "glow",
      "neon",
      "shadow",
      "studio",
      "text"
    ],
    "formula": "The text-shadow engine generates a raster glyph mask from the font vectors, translates it by the offset coordinates, and convolves it with a Gaussian blur kernel before compositing it beneath the foreground text fill.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Text Shadow & Neon Glow Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Create multi-layer CSS text-shadow effects, 3D extruded lettering, and vibrant neon typography glows with instant CSS code export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-transform-3d-matrix-calculator.html",
    "title": "CSS 3D Transform & Matrix3d Studio",
    "desc": "Interactive 3D CSS transformation visualizer and 4x4 matrix3d composition engine. Manipulate perspective, rotation, translation, and scale with real-time GPU preview.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "calculator",
      "css",
      "matrix",
      "matrix3d",
      "studio",
      "transform"
    ],
    "formula": "Every 3D transformation in CSS can be mathematically described by multiplying 4x4 transformation matrices conforming to the W3C CSS Transforms Module Level 2:\n      \n        \\( \\begin{bmatrix} x' \\\\ y' \\\\ z' \\\\ 1 \\end{bmatrix} = \\mathbf{M} \\times \\begin{bmatrix} x \\\\ y \\\\ z \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} m_{11} & m_{12} & m_{13} & m_{14} \\\\ m_{21} & m_{22} & m_{23} & m_{24} \\\\ m_{31} & m_{32} & m_{33} & m_{34} \\\\ m_{41} & m_{42} & m_{43} & m_{44} \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\\\ 1 \\end{bmatrix} \\)\n      \n      \n        Rotation X: \\( \\mathbf{R}_x(\\theta) = \\begin{bmatrix} 1 &",
    "how_to_use": "Input your raw code or configuration parameters into the CSS 3D Transform & Matrix3d Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Interactive 3D CSS transformation visualizer and 4x4 matrix3d composition engine. Manipulate perspective, rotation, translation, and scale with real-time GPU preview.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-triangle-generator.html",
    "title": "CSS Triangle & Tooltip Arrow Generator",
    "desc": "Generate pure CSS geometric triangles and tooltip arrows using border modeling. Zero image files, zero SVGs, instant copy-paste CSS code.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "arrow",
      "css",
      "generator",
      "tooltip",
      "triangle"
    ],
    "formula": "Because border rendering is an intrinsic feature of all browser layout engines dating back to CSS1, border-based triangles render instantaneously across 100% of browsers with zero network latency, zero SVG overhead, and zero raster scaling artifacts.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Triangle & Tooltip Arrow Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate pure CSS geometric triangles and tooltip arrows using border modeling. Zero image files, zero SVGs, instant copy-paste CSS code.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/css-unit-converter.html",
    "title": "CSS Unit Converter (PX, REM, EM, VW, VH, PT, PC, IN, CM, MM)",
    "desc": "High-precision bidirectional CSS unit calculator. Convert between PX, REM, EM, VW, VH, PT, PC, IN, CM, and MM with custom root base font size and viewport dimensions.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "converter",
      "css",
      "rem",
      "unit"
    ],
    "formula": "Modern CSS length conversions adhere strictly to the W3C CSS Values and Units Module Level 4. The underlying mathematical equations governing cross-unit parity operate via the following normalization equations:\n      \n        Pixel to Root EM: \\( \\text{val}_{\\text{rem}} = \\frac{\\text{val}_{\\text{px}}}{\\text{Base Root Font Size (px)}} \\)\n        Pixel to Viewport Width: \\( \\text{val}_{\\text{vw}} = \\frac{\\text{val}_{\\text{px}}}{\\text{Viewport Width (px)}} \\times 100 \\)\n        Pixel to Viewport Height: \\( \\text{val}_{\\text{vh}} = \\frac{\\text{val}_{\\text{px}}}{\\text{Viewport Height (px)}} \\times ",
    "how_to_use": "Input your raw code or configuration parameters into the CSS Unit Converter (PX, REM, EM, VW, VH, PT, PC, IN, CM, MM) interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "High-precision bidirectional CSS unit calculator. Convert between PX, REM, EM, VW, VH, PT, PC, IN, CM, and MM with custom root base font size and viewport dimensions.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/curl-to-code-converter.html",
    "title": "cURL to Code Converter",
    "desc": "Instantly convert cURL command lines into JavaScript fetch, Axios, Python Requests, PHP cURL, and Go. Free online API converter.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "code",
      "converter",
      "curl"
    ],
    "formula": "The converter parses the cURL bash command line using an AST-style command-line tokenizer that handles single quotes, double quotes, line-continuation backslashes, and escaped JSON characters, generating clean, production-ready asynchronous code blocks with error handling.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the cURL to Code Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Instantly convert cURL command lines into JavaScript fetch, Axios, Python Requests, PHP cURL, and Go. Free online API converter.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/dns-record-lookup-generator.html",
    "title": "DNS Record Generator & SPF/DMARC Builder",
    "desc": "Generate BIND-compliant DNS zone records online. Build SPF email authorization, DKIM records, DMARC security policies, A records, and CNAME aliases.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "builder",
      "dmarc",
      "dns",
      "generator",
      "lookup",
      "record",
      "spf"
    ],
    "formula": "The tool generates standard BIND zone format records, validates IPv4 and IPv6 syntax, configures MX priority weights, and assists in constructing DMARC alignment policies (none, quarantine, reject) to prevent domain phishing.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the DNS Record Generator & SPF/DMARC Builder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate BIND-compliant DNS zone records online. Build SPF email authorization, DKIM records, DMARC security policies, A records, and CNAME aliases.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/dockerfile-compose-generator.html",
    "title": "Dockerfile & Docker Compose Generator",
    "desc": "Instantly generate hardened, multi-stage production Dockerfiles and docker-compose.yml files. Optimized for Node.js, Python, Go, Rust, and PHP with non-root user security and minimal image size.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "alpine",
      "compose",
      "container",
      "docker",
      "dockerfile",
      "generator",
      "multistage"
    ],
    "formula": "Layer Cache Probability Derivation:\nP(CacheHit) = \u220f_{i=1}^{n} P(\u0394 Layer_i = \u2205)\n\nBy positioning volatile layers (COPY . .) after invariant layers (COPY package.json; RUN npm ci):\nE[BuildTime] = T_base + T_cached_deps + T_app_compile\nT_cached_deps \u2248 0 (when package.json hash is invariant).\n\nImage Footprint:\nSize_{Final} = \u2211 Size(Artifacts_{Prod}) << Size_{DevEnvironment}",
    "how_to_use": "Step 1: Select your backend runtime (Node.js LTS, Python 3.12, or Go 1.23). Step 2: Verify that Multi-Stage Build is toggled to separate developer toolchains from the final image. Step 3: Keep Run as Non-Root User checked to satisfy corporate SOC2, CIS Docker Benchmark, and PCI requirements. Step 4: Copy the generated Dockerfile into the root of your project directory.",
    "inputs": "Instantly generate hardened, multi-stage production Dockerfiles and docker-compose.yml files. Optimized for Node.js, Python, Go, Rust, and PHP with non-root user security and minimal image size.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/git-command-generator.html",
    "title": "Git Command & Workflow Generator",
    "desc": "Generate precise, safe Git terminal commands for interactive rebasing, undoing commits, cherry-picking, stashing, branch renaming, and disaster recovery with step-by-step safety guides.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "command",
      "generator",
      "git",
      "workflow"
    ],
    "formula": "Git's architecture is structured as a content-addressable storage system governed by cryptographic hashing and tree references:\n      \n        Commit Anatomy: Each commit \\( C \\) is identified by \\( \\text{SHA-1}(M) \\) or modern \\( \\text{SHA-256} \\), encapsulating a root tree pointer, parent commit pointers \\( P_1, \\dots, P_k \\), author timestamp, and commit message.\n        HEAD Pointer Mechanics: A soft reset (--soft) mutates only the branch pointer \\( B \\to C_{\\text{target}} \\). A mixed reset updates the branch pointer and the staging index. A hard reset synchronizes the working tree with \\(",
    "how_to_use": "Input your raw code or configuration parameters into the Git Command & Workflow Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate precise, safe Git terminal commands for interactive rebasing, undoing commits, cherry-picking, stashing, branch renaming, and disaster recovery with step-by-step safety guides.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/hash-generator.html",
    "title": "Hash & Checksum Generator",
    "desc": "Generate cryptographic hash digests (SHA-256, SHA-512, SHA-384, SHA-1, MD5) online using native Web Crypto API. Fast, secure, client-side checksums.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "checksum",
      "generator",
      "hash"
    ],
    "formula": "This tool executes entirely client-side using the native browser Web Cryptography API (crypto.subtle.digest). It processes text through 64 non-linear algebraic rounds using bitwise rotation, XOR, and Boolean functions (Ch, Maj, Sigma0, Sigma1) without transmitting a single byte across external networks.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Hash & Checksum Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate cryptographic hash digests (SHA-256, SHA-512, SHA-384, SHA-1, MD5) online using native Web Crypto API. Fast, secure, client-side checksums.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/hmac-hash-generator.html",
    "title": "HMAC Hash & Keyed Signature Generator",
    "desc": "Generate keyed-hash message authentication codes (HMAC-SHA256, HMAC-SHA512, HMAC-SHA384) using the browser native Web Crypto API. Webhook signature verification.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "generator",
      "hash",
      "hmac",
      "keyed",
      "signature"
    ],
    "formula": "The mathematical equation defining the HMAC construction conforming to RFC 2104 is defined as:\n      \n        \\( \\text{HMAC}(K, m) = H\\Big(\\big(K' \\oplus opad\\big) \\parallel H\\big((K' \\oplus ipad) \\parallel m\\big)\\Big) \\)\n      \n      \n        \\( H \\): Underlying cryptographic hash function (e.g. SHA-256).\n        \\( K' \\): Block-sized key derived by hashing or zero-padding the original key \\( K \\) to block size \\( B \\) (64 bytes for SHA-256, 128 bytes for SHA-512).\n        \\( ipad \\) &amp; \\( opad \\): Inner and outer padding byte constants: \\( ipad = \\text{0x3636...36} \\), \\( opad = \\text{0x5",
    "how_to_use": "Input your raw code or configuration parameters into the HMAC Hash & Keyed Signature Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate keyed-hash message authentication codes (HMAC-SHA256, HMAC-SHA512, HMAC-SHA384) using the browser native Web Crypto API. Webhook signature verification.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/htaccess-generator.html",
    "title": ".htaccess Rule Builder & Config Generator",
    "desc": "Generate battle-tested Apache .htaccess configuration rules online. SSL force redirect, clean URLs, browser caching, gzip compression, and security headers.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "builder",
      "config",
      "generator",
      "htaccess",
      "rule"
    ],
    "formula": "The generator provides intuitive toggles for canonical www/non-www domains, HTTP-to-HTTPS redirects, browser caching policies via mod_expires, security response headers (HSTS, X-Content-Type-Options), and custom 404 error page routing.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the .htaccess Rule Builder & Config Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate battle-tested Apache .htaccess configuration rules online. SSL force redirect, clean URLs, browser caching, gzip compression, and security headers.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/html-entity-encoder-decoder.html",
    "title": "HTML Entity Encoder & Decoder (XSS Sanitizer)",
    "desc": "Encode and decode HTML special characters to prevent Cross-Site Scripting (XSS). Supports Named Entities (&amp;), Decimal (&#38;), and Hexadecimal (&#x26;) notations.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "decoder",
      "encoder",
      "entity",
      "html",
      "sanitizer",
      "xss"
    ],
    "formula": "The W3C HTML5 specification standardizes 2,231 named character entities and Unicode numeric code points:\n      \n        Ampersand (&amp;): Code point U+0026 \\( \\to \\) Named: &amp;amp; | Dec: &amp;#38; | Hex: &amp;#x26;\n        Less Than (&lt;): Code point U+003C \\( \\to \\) Named: &amp;lt; | Dec: &amp;#60; | Hex: &amp;#x3C;\n        Greater Than (&gt;): Code point U+003E \\( \\to \\) Named: &amp;gt; | Dec: &amp;#62; | Hex: &amp;#x3E;\n        Double Quote (\"): Code point U+0022 \\( \\to \\) Named: &amp;quot; | Dec: &amp;#34; | Hex: &amp;#x22;\n        Apostrophe ('): Code point U+0027 \\( \\to \\) Dec: &amp",
    "how_to_use": "Input your raw code or configuration parameters into the HTML Entity Encoder & Decoder (XSS Sanitizer) interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Encode and decode HTML special characters to prevent Cross-Site Scripting (XSS). Supports Named Entities (&amp;), Decimal (&#38;), and Hexadecimal (&#x26;) notations.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/html-table-to-json-converter.html",
    "title": "HTML Table to JSON & CSV Converter",
    "desc": "Parse and convert HTML <table> markup into clean, structured JSON objects and CSV spreadsheets. Free online web scraping and data extraction tool.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "csv",
      "diff",
      "formatter",
      "html",
      "json",
      "parser",
      "table",
      "validator"
    ],
    "formula": "The tool creates an in-memory DOM document fragment, traverses  and  nodes, sanitizes internal text content (stripping nested formatting tags while preserving text), and dynamically handles merged colspans and rowspans.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the HTML Table to JSON & CSV Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Parse and convert HTML <table> markup into clean, structured JSON objects and CSV spreadsheets. Free online web scraping and data extraction tool.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/html-to-jsx-converter.html",
    "title": "HTML to JSX / React Component Converter",
    "desc": "Transform raw HTML templates into clean, idiomatic React JSX with automatic attribute camelCasing, inline style object parsing, self-closing tags, and TypeScript component wrapping.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "component",
      "converter",
      "html",
      "html to jsx",
      "jsx",
      "nextjs",
      "react"
    ],
    "formula": "The transformation pipeline parses and tokenizes raw HTML markup using deterministic regular expression grammar and DOM string normalization:\n      \n        Style Object Transpilation: Inline CSS strings \\( S = \\{k_i: v_i\\} \\) are split by semicolons, transformed from kebab-case \\( k_{\\text{kebab}} \\) to camelCase \\( k_{\\text{camel}} \\), and mapped into a key-value object: style={{ backgroundColor: \"#1e293b\", marginTop: 20 }}.\n        Void Element Self-Closing Rule: HTML5 allows unclosed void tags (\\( \\text{tag} \\in \\{\\text{img}, \\text{input}, \\text{br}, \\text{hr}, \\dots\\} \\)), but JSX require",
    "how_to_use": "Input your raw code or configuration parameters into the HTML to JSX / React Component Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Transform raw HTML templates into clean, idiomatic React JSX with automatic attribute camelCasing, inline style object parsing, self-closing tags, and TypeScript component wrapping.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/http-status-codes-inspector.html",
    "title": "HTTP Status Codes Reference & Diagnostic Guide",
    "desc": "Comprehensive reference of all HTTP response status codes. Search, filter, and diagnose 200 OK, 301 Redirect, 400, 401, 403, 404, 500, and 502 errors.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "codes",
      "diagnostic",
      "guide",
      "http",
      "inspector",
      "reference",
      "status"
    ],
    "formula": "This reference catalogs all 60+ official IETF RFC 9110 status codes alongside modern Cloudflare and WebDAV extensions, providing exact semantics, common causes, and debugging resolutions.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the HTTP Status Codes Reference & Diagnostic Guide interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Comprehensive reference of all HTTP response status codes. Search, filter, and diagnose 200 OK, 301 Redirect, 400, 401, 403, 404, 500, and 502 errors.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/image-color-palette-extractor.html",
    "title": "Image Color Palette Extractor",
    "desc": "Extract dominant color palettes and CSS design tokens from any uploaded image or photograph. Instant HEX, RGB, and HSL copy with color quantization.",
    "category": "Media, Assets & Viral",
    "cat_key": "media",
    "keywords": [
      "color",
      "extractor",
      "image",
      "palette"
    ],
    "formula": "The image is drawn onto an in-memory HTML5 canvas. Pixel RGB values are sampled and clustered using a fast color quantization algorithm (such as modified median cut), sorting clusters by visual dominance and ensuring chromatic diversity across the final 5 to 8 palette swatches.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Image Color Palette Extractor interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Extract dominant color palettes and CSS design tokens from any uploaded image or photograph. Instant HEX, RGB, and HSL copy with color quantization.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/javascript-keycode-tester.html",
    "title": "JavaScript KeyCode & Keyboard Event Tester",
    "desc": "Test keyboard events in real time. Inspect event.key, event.code, event.which, modifier keys (Shift, Ctrl, Alt, Meta), and location for web game and shortcut development.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "event",
      "javascript",
      "keyboard",
      "keycode",
      "tester"
    ],
    "formula": "The tool listens to keydown, keypress, and keyup events on the window object, intercepts event default behaviors when desired, and outputs a complete breakdown of modern W3C and legacy properties.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the JavaScript KeyCode & Keyboard Event Tester interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Test keyboard events in real time. Inspect event.key, event.code, event.which, modifier keys (Shift, Ctrl, Alt, Meta), and location for web game and shortcut development.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-formatter-validator.html",
    "title": "JSON Formatter, Validator & Minifier",
    "desc": "Format, validate, beautify, and minify JSON online. Instant syntax error detection with line and column highlighting, tree navigation, and 1-click copy.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "diff",
      "formatter",
      "json",
      "minifier",
      "parser",
      "validator"
    ],
    "formula": "The tool executes client-side using native V8 JSON parsing algorithms. Syntax errors are caught via try/catch blocks that extract line and column indices from the parsing exception message, allowing instant diagnostic feedback without transmitting sensitive customer payloads over external networks.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the JSON Formatter, Validator & Minifier interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Format, validate, beautify, and minify JSON online. Instant syntax error detection with line and column highlighting, tree navigation, and 1-click copy.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-schema-generator.html",
    "title": "JSON Schema Generator",
    "desc": "Automatically generate compliant JSON Schema definitions from sample JSON payloads. Supports Draft-07, Draft 2020-12, required fields, and nested validation.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "diff",
      "formatter",
      "generator",
      "json",
      "parser",
      "schema",
      "validator"
    ],
    "formula": "JSON Schema is an IETF standard that provides a contract for what your JSON data should look like. In modern backend APIs, microservices validate incoming POST requests against a JSON Schema to reject malformed data before database execution. Manually drafting schemas for complex payloads is tedious; this tool auto-generates schemas directly from sample JSON data.\n          \n          \n            In high-performance web engineering, avoiding unnecessary network dependencies and runtime overhead is critical to maintaining high Google Core Web Vitals scores and meeting enterprise service level ",
    "how_to_use": "Input your raw code or configuration parameters into the JSON Schema Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Automatically generate compliant JSON Schema definitions from sample JSON payloads. Supports Draft-07, Draft 2020-12, required fields, and nested validation.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-csv-converter.html",
    "title": "JSON to CSV & Excel Converter (Nested Key Flattener)",
    "desc": "Convert JSON arrays of objects into RFC 4180 compliant CSV files with nested key dot-notation flattening, custom delimiters (comma, semicolon, tab), and instant file export.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "csv",
      "diff",
      "excel",
      "flattener",
      "formatter",
      "json",
      "key",
      "nested",
      "parser",
      "validator"
    ],
    "formula": "The translation engine conforms strictly to the formal IETF RFC 4180 specification for CSV payloads:\n      \n        Line Breaks: Each record is located on a separate line delimited by CRLF (\\r\\n).\n        Delimiter Escaping: If any field contains the delimiter (,), line breaks (\\n), or quotation marks (\"), the entire field must be enclosed in double quotes.\n        Quote Escaping: If double quotes are used to enclose fields, any literal double quote within the field must be escaped by preceding it with another double quote (\"\").\n        Nested Hierarchy Flattening: Object \\( O \\) with key \\( K",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to CSV & Excel Converter (Nested Key Flattener) interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert JSON arrays of objects into RFC 4180 compliant CSV files with nested key dot-notation flattening, custom delimiters (comma, semicolon, tab), and instant file export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-go-struct-converter.html",
    "title": "JSON to Go Struct Generator & Type Inferencer",
    "desc": "Convert arbitrary JSON payloads into idiomatic Golang structs with json struct tags, nested type resolution, pointer options, and inline unmarshaling tests.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "diff",
      "formatter",
      "generator",
      "inferencer",
      "json",
      "parser",
      "struct",
      "type",
      "validator"
    ],
    "formula": "The type inference engine operates by recursively traversing the JSON object hierarchy and mapping ECMAScript data primitives into Go's memory architecture:\n      \n        Integers: Numeric values where \\( x \\in \\mathbb{Z} \\) and \\( -2^{63} \\le x \\le 2^{63}-1 \\) map to int64.\n        Floats: Real numbers \\( x \\in \\mathbb{R} \\) with decimal fractions map to float64 (IEEE 754).\n        Booleans: Booleans map to bool (1 byte).\n        Arrays: Homogeneous arrays \\( [T_1, T_2, \\dots] \\) map to slice type []T. Heterogeneous arrays map to []interface{}.\n        Nested Objects: Mapped to distinct Pasc",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to Go Struct Generator & Type Inferencer interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert arbitrary JSON payloads into idiomatic Golang structs with json struct tags, nested type resolution, pointer options, and inline unmarshaling tests.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-python-pydantic-converter.html",
    "title": "JSON to Python Pydantic v2 Model Generator",
    "desc": "Convert JSON payloads into type-annotated Python Pydantic v2 BaseModel classes. Includes Optional[T], List[T], Field aliases, and FastAPI validation schemas.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "diff",
      "formatter",
      "generator",
      "json",
      "model",
      "parser",
      "pydantic",
      "python",
      "validator"
    ],
    "formula": "The type mapping engine conforms to Python PEP 484 and PEP 526 static typing specifications:\n      \n        JSON String \\( \\to \\) str: Python unicode string type.\n        JSON Integer \\( \\to \\) int: Arbitrary-precision Python integer.\n        JSON Float \\( \\to \\) float: Double precision floating point.\n        JSON Boolean \\( \\to \\) bool: Python boolean (True / False).\n        JSON Array \\( \\to \\) List[T]: Typed Python list from typing.List.\n        Null Values \\( \\to \\) Optional[T]: Equivalent to T | None.",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to Python Pydantic v2 Model Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert JSON payloads into type-annotated Python Pydantic v2 BaseModel classes. Includes Optional[T], List[T], Field aliases, and FastAPI validation schemas.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-rust-struct-converter.html",
    "title": "JSON to Rust Struct (Serde) Generator",
    "desc": "Generate memory-safe, idiomatic Rust structs with Serde derive macros, Option<T> nullable wrapping, rename attributes, and snake_case field normalization.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "diff",
      "formatter",
      "generator",
      "json",
      "parser",
      "rust",
      "serde",
      "struct",
      "validator"
    ],
    "formula": "The translation of JSON types to Rust memory layouts adheres to the Serde data model:\n      \n        JSON String \\( \\to \\) Rust String: UTF-8 encoded heap-allocated buffer.\n        JSON Integer \\( \\to \\) i64: Signed 64-bit two's complement integer.\n        JSON Float \\( \\to \\) f64: 64-bit IEEE 754 double precision float.\n        JSON Boolean \\( \\to \\) bool: 1-byte boolean flag.\n        JSON Array \\( \\to \\) Vec&lt;T&gt;: Dynamically resizable growable heap vector.\n        Null Values \\( \\to \\) Option&lt;T&gt;: Type-safe tagged union eliminating null pointer dereferences.",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to Rust Struct (Serde) Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate memory-safe, idiomatic Rust structs with Serde derive macros, Option<T> nullable wrapping, rename attributes, and snake_case field normalization.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-typescript-generator.html",
    "title": "JSON to TypeScript Generator",
    "desc": "Generate strict TypeScript interfaces and type aliases from raw JSON payloads. Supports nested objects, array types, optional fields, and 1-click export.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "diff",
      "formatter",
      "generator",
      "json",
      "parser",
      "typescript",
      "validator"
    ],
    "formula": "The tool traverses the JSON object tree recursively. It infers types for each property, generates nested interface definitions for child objects, and handles heterogeneous arrays by creating union types (e.g. (string | number)[]).\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to TypeScript Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate strict TypeScript interfaces and type aliases from raw JSON payloads. Supports nested objects, array types, optional fields, and 1-click export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-yaml-converter.html",
    "title": "JSON to YAML Converter & Bi-Directional Formatter",
    "desc": "Bi-directional JSON <-> YAML converter with customizable indentation, flow style control, Kubernetes manifest validation, and zero external transmission.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "diff",
      "directional",
      "formatter",
      "json",
      "parser",
      "validator",
      "yaml"
    ],
    "formula": "Conforming to the official YAML 1.2 Specification (RFC 8259 compatible), YAML is a superset of JSON. Every valid JSON document is technically valid YAML 1.2:\n      \n        Structural Mapping: JSON object keys \\( \\{ K: V \\} \\) map to YAML block mappings \\( K:\\ V \\).\n        Sequence Mapping: JSON arrays \\( [e_1, e_2] \\) map to YAML hyphen sequences \\( -\\ e_1 \\).\n        Scalar Disambiguation: Strings containing colons, asterisks, or leading numbers are automatically wrapped in double quotes to prevent erroneous YAML type coercion.",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to YAML Converter & Bi-Directional Formatter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Bi-directional JSON <-> YAML converter with customizable indentation, flow style control, Kubernetes manifest validation, and zero external transmission.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/json-to-zod-schema.html",
    "title": "JSON to Zod Schema Generator",
    "desc": "Generate production-ready Zod runtime validation schemas from arbitrary JSON payloads with recursive type inference, optional and nullable fields, datetime checks, and inferred TypeScript types.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "diff",
      "formatter",
      "generator",
      "json",
      "parser",
      "schema",
      "validator",
      "zod"
    ],
    "formula": "The schema derivation engine maps JSON values into Zod validator AST nodes according to standard mathematical and programmatic type definitions:\n      \n        Integer Identification: A number \\( n \\in \\mathbb{R} \\) is classified as z.number().int() if \\( n \\bmod 1 = 0 \\); otherwise, it is classified as a generic z.number().\n        ISO 8601 Temporal Derivation: String values matching the RFC 3339 regex pattern ^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2} are mapped to z.string().datetime().\n        UUID Validation: Strings conforming to RFC 4122 128-bit hexadecimal GUID format are mapped to z.string(",
    "how_to_use": "Input your raw code or configuration parameters into the JSON to Zod Schema Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate production-ready Zod runtime validation schemas from arbitrary JSON payloads with recursive type inference, optional and nullable fields, datetime checks, and inferred TypeScript types.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/jwt-decoder.html",
    "title": "JWT Token Inspector & Decoder",
    "desc": "Decode and inspect JSON Web Tokens (JWT) headers and payload claims locally. Evaluate expiration timestamps, subject, issuer, and signature algorithms.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "bearer",
      "claims",
      "decoder",
      "inspector",
      "json web token",
      "jwt",
      "signature",
      "token"
    ],
    "formula": "This tool splits the JWT string at the dot (.) delimiters and decodes the Base64URL-encoded header and payload segments using client-side JavaScript. Standard timestamps (exp, iat, nbf) are translated into human-readable local dates, calculating remaining token validity in real time with zero network transmission.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the JWT Token Inspector & Decoder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Decode and inspect JSON Web Tokens (JWT) headers and payload claims locally. Evaluate expiration timestamps, subject, issuer, and signature algorithms.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/lorem-ipsum-generator.html",
    "title": "Lorem Ipsum Generator",
    "desc": "Generate customizable dummy placeholder text by paragraphs, sentences, or words. Classic Cicero Latin text with HTML tag wrapping and 1-click copy.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "generator",
      "ipsum",
      "lorem"
    ],
    "formula": "The text is adapted from sections 1.10.32 and 1.10.33 of Cicero's philosophical treatise 'De Finibus Bonorum et Malorum' (On the Extremes of Good and Evil). The generator uses pseudo-random selection across 200+ Latin root words, ensuring natural sentence lengths and punctuation cadence.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Lorem Ipsum Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate customizable dummy placeholder text by paragraphs, sentences, or words. Classic Cicero Latin text with HTML tag wrapping and 1-click copy.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/markdown-html-converter.html",
    "title": "Markdown to HTML Converter",
    "desc": "Convert GitHub Flavored Markdown (GFM) to clean semantic HTML5 markup. Real-time live split-pane editor with 1-click HTML and Markdown copy.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "html",
      "markdown"
    ],
    "formula": "The converter tokenizes text into blocks (headings, paragraphs, lists, code fences, blockquotes, tables) and inline tokens (bold, italics, links, images, spans). It strictly adheres to CommonMark and GFM parsing specifications, escaping malicious script injections to guarantee safe HTML output.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Markdown to HTML Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert GitHub Flavored Markdown (GFM) to clean semantic HTML5 markup. Real-time live split-pane editor with 1-click HTML and Markdown copy.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/meta-tag-generator.html",
    "title": "SEO & Social Meta Tag Generator",
    "desc": "Generate complete HTML5 SEO meta tags, Open Graph (og:title, og:image) and Twitter Cards online. Optimize social sharing previews and search rankings.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "generator",
      "meta",
      "seo",
      "social",
      "tag"
    ],
    "formula": "The tool evaluates title length (recommended 50-60 characters) and meta description length (recommended 140-160 characters) to prevent search engine truncation in Google SERPs. It validates image aspect ratios (1.91:1 standard at 1200x630px) for crisp social card presentation.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the SEO & Social Meta Tag Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate complete HTML5 SEO meta tags, Open Graph (og:title, og:image) and Twitter Cards online. Optimize social sharing previews and search rankings.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/mock-data-generator.html",
    "title": "Mock Data Generator",
    "desc": "Generate realistic mock datasets in JSON, CSV, and SQL formats. Custom schemas with names, emails, UUIDs, dates, addresses, and currency fields.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "data",
      "generator",
      "mock"
    ],
    "formula": "The tool draws from weighted dictionaries of first names, surnames, top-level domains, cities, and ISO currency codes. A seeded pseudo-random number generator ensures realistic relationships (e.g. generating a realistic corporate email matching the user's first and last name).\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Mock Data Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate realistic mock datasets in JSON, CSV, and SQL formats. Custom schemas with names, emails, UUIDs, dates, addresses, and currency fields.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/multi-favicon-pwa-generator.html",
    "title": "Multi-Resolution Favicon & PWA Icon Sizer",
    "desc": "Generate all web, iOS, Android, and PWA favicon sizes from a single master image. Outputs 16x16, 32x32, 180x180 Apple Touch, 192x192, and 512x512 icons.",
    "category": "Media, Assets & Viral",
    "cat_key": "media",
    "keywords": [
      "favicon",
      "generator",
      "icon",
      "multi",
      "pwa",
      "resolution",
      "sizer"
    ],
    "formula": "The tool loads your master logo onto an HTML5 canvas, applies high-quality bicubic resampling interpolation to preserve crisp vector details and text sharpness at miniature 16x16 dimensions, and generates both individual PNGs and complete HTML/JSON code snippets.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Multi-Resolution Favicon & PWA Icon Sizer interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate all web, iOS, Android, and PWA favicon sizes from a single master image. Outputs 16x16, 32x32, 180x180 Apple Touch, 192x192, and 512x512 icons.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/nginx-config-generator.html",
    "title": "Nginx Server Block & Reverse Proxy Generator",
    "desc": "Interactive Nginx server block studio: reverse proxy upstream, Let's Encrypt SSL/TLS, HTTP/2, SPA routing fallback (try_files), security headers, and gzip compression.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "block",
      "config",
      "generator",
      "nginx",
      "proxy",
      "reverse",
      "server"
    ],
    "formula": "Nginx routing directives operate via specific request processing pipelines:\n      \n        try_files Directives: Evaluates file existence sequentially: try_files $uri $uri/ /index.html; checks the requested URI on disk, then directory index, then gracefully delegates routing to the SPA root index.\n        Reverse Proxy Headers: Pass real client IP and protocol details across internal reverse proxies using standard headers (X-Forwarded-For, X-Forwarded-Proto).\n        HSTS Header: Strict-Transport-Security: max-age=31536000; includeSubDomains; preload forces user agents to communicate exclusive",
    "how_to_use": "Input your raw code or configuration parameters into the Nginx Server Block & Reverse Proxy Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Interactive Nginx server block studio: reverse proxy upstream, Let's Encrypt SSL/TLS, HTTP/2, SPA routing fallback (try_files), security headers, and gzip compression.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/number-base-converter.html",
    "title": "Arbitrary Number Base Converter (Binary, Octal, Decimal, Hex)",
    "desc": "Convert numbers across Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16), and arbitrary Radix (Base 2-36). BigInt support for 128-bit numbers.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "arbitrary",
      "base",
      "binary",
      "converter",
      "decimal",
      "hex",
      "number",
      "octal"
    ],
    "formula": "Any positive integer \\( N \\) in base \\( b \\) is evaluated via the positional polynomial expansion equation:\n      \n        \\( N = \\sum_{i=0}^{k-1} d_i \\cdot b^i = d_{k-1} b^{k-1} + \\dots + d_1 b^1 + d_0 b^0 \\)\n      \n      \n        Binary (Radix 2): Digits \\( d_i \\in \\{0, 1\\} \\).\n        Octal (Radix 8): Digits \\( d_i \\in \\{0, 1, \\dots, 7\\} \\), where 1 octal digit = 3 binary bits.\n        Hexadecimal (Radix 16): Digits \\( d_i \\in \\{0, \\dots, 9, A, \\dots, F\\} \\), where 1 hex digit = 1 nibble (4 bits).\n        Base 36 (Alphanumeric): Maximum native JavaScript radix, utilizing digits 0-9 and lett",
    "how_to_use": "Input your raw code or configuration parameters into the Arbitrary Number Base Converter (Binary, Octal, Decimal, Hex) interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert numbers across Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16), and arbitrary Radix (Base 2-36). BigInt support for 128-bit numbers.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/openssl-command-generator.html",
    "title": "OpenSSL Command & CSR / Certificate Generator",
    "desc": "Construct verified OpenSSL CLI commands for Certificate Signing Requests (CSR), self-signed TLS certificates, Subject Alternative Names (SAN), and PKCS#12 bundle conversions.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "certificate",
      "command",
      "csr",
      "generator",
      "openssl"
    ],
    "formula": "RSA Key Pair Mathematical Derivation:\n1. Select large prime numbers p, q where p \u2260 q.\n2. Modulus: n = p \u00d7 q.\n3. Euler's Totient: \u03c6(n) = (p - 1)(q - 1).\n4. Public Exponent: e = 65537 (standard 2^{16} + 1).\n5. Private Exponent: d \u2261 e^{-1} (mod \u03c6(n)).\n\nSecurity Strength:\n2048-bit RSA \u2248 112 bits of symmetric security.\n4096-bit RSA \u2248 128 bits of symmetric security.\nSignature Algorithm: SHA-256 with RSA Encryption (sha256WithRSAEncryption).",
    "how_to_use": "Step 1: Select your required operation (CSR for public CA purchase or Self-Signed for internal staging). Step 2: Enter your Fully Qualified Domain Name (FQDN) as the Common Name. Step 3: Specify any additional subdomains or IP addresses in the Subject Alternative Names (SAN) field. Step 4: Copy the generated OpenSSL command and execute it directly within your secure terminal.",
    "inputs": "Construct verified OpenSSL CLI commands for Certificate Signing Requests (CSR), self-signed TLS certificates, Subject Alternative Names (SAN), and PKCS#12 bundle conversions.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/password-generator.html",
    "title": "Strong Password Generator",
    "desc": "Generate uncrackable, cryptographically secure passwords and passphrases with custom length, symbols, numbers, and NIST entropy scoring.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "generator",
      "password",
      "strong"
    ],
    "formula": "The tool bypasses Math.random() (which is predictable) and draws bytes directly from crypto.getRandomValues(). Characters are selected using rejection sampling across uppercase [A-Z], lowercase [a-z], numeric [0-9], and special symbol sets, ensuring uniform statistical distribution.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Strong Password Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate uncrackable, cryptographically secure passwords and passphrases with custom length, symbols, numbers, and NIST entropy scoring.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/qr-code-generator.html",
    "title": "Custom QR Code Generator Pro",
    "desc": "Generate customized high-resolution QR codes with color control, error correction levels (L, M, Q, H), and instant PNG/SVG downloads. 100% free & private.",
    "category": "Media, Assets & Viral",
    "cat_key": "media",
    "keywords": [
      "code",
      "custom",
      "generator",
      "pro"
    ],
    "formula": "The generator encodes text into binary segments, calculates Reed-Solomon polynomial error-correction codewords, places position detection patterns at three corners, evaluates eight masking penalties to optimize camera contrast, and renders the resulting matrix onto an HTML5 canvas for crystal-clear raster (PNG) or vector (SVG) export.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Custom QR Code Generator Pro interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate customized high-resolution QR codes with color control, error correction levels (L, M, Q, H), and instant PNG/SVG downloads. 100% free & private.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/regex-tester.html",
    "title": "Regex Tester & Expression Explainer",
    "desc": "Test and debug regular expressions online with real-time match highlighting, capture group extraction, substitution replacement, and plain-English explanations.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "explainer",
      "expression",
      "matcher",
      "pattern",
      "regex",
      "regexp",
      "regular expression",
      "tester"
    ],
    "formula": "The tool executes using the native JavaScript RegExp engine in a sandboxed Web Worker to safeguard against catastrophic backtracking (ReDoS). It highlights all matching substrings, extracts named and numbered capture groups, and displays real-time replacement previews.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Regex Tester & Expression Explainer interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Test and debug regular expressions online with real-time match highlighting, capture group extraction, substitution replacement, and plain-English explanations.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/robots-txt-generator.html",
    "title": "Robots.txt & Search Crawler Builder",
    "desc": "Generate validated robots.txt files for Googlebot, Bingbot, GPTBot, and ClaudeBot. Control crawl budgets, allow/disallow paths, and declare XML sitemaps.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "builder",
      "crawler",
      "generator",
      "robots",
      "search",
      "txt"
    ],
    "formula": "The tool constructs a validated robots.txt file with custom allow and disallow paths, enforces longest-path precedence rules, provides 1-click blocking rules for AI scrapers, and appends valid canonical XML Sitemap declarations.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Robots.txt & Search Crawler Builder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate validated robots.txt files for Googlebot, Bingbot, GPTBot, and ClaudeBot. Control crawl budgets, allow/disallow paths, and declare XML sitemaps.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/seo-keyword-density-analyzer.html",
    "title": "SEO Keyword Density & N-Gram Analyzer",
    "desc": "Analyze content for keyword density percentage, word frequencies, and 1-word, 2-word, and 3-word n-grams. Prevent Google keyword stuffing penalties.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "analyzer",
      "density",
      "gram",
      "keyword",
      "seo"
    ],
    "formula": "The tool executes client-side Natural Language Processing (NLP): it cleans HTML tags, normalizes case, removes punctuation, filters out common English stop words (the, is, at, which), calculates Term Frequency (TF), and computes 2-word and 3-word n-gram combinations with occurrence counts.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the SEO Keyword Density & N-Gram Analyzer interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Analyze content for keyword density percentage, word frequencies, and 1-word, 2-word, and 3-word n-grams. Prevent Google keyword stuffing penalties.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/sql-formatter.html",
    "title": "SQL Query Formatter & Indenter",
    "desc": "Format, beautify, and indent complex SQL queries online. Standardize SELECT, JOIN, WHERE, GROUP BY, and subqueries across PostgreSQL, MySQL, and T-SQL.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "database",
      "format",
      "formatter",
      "indenter",
      "query",
      "select",
      "sql"
    ],
    "formula": "The SQL formatting engine tokenizes clauses, recognizes dialect-specific keywords (PostgreSQL, MySQL, Oracle, SQL Server), separates major clauses onto distinct lines, aligns comma-delimited projection lists, and indents nested subqueries and JOIN conditions.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the SQL Query Formatter & Indenter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Format, beautify, and indent complex SQL queries online. Standardize SELECT, JOIN, WHERE, GROUP BY, and subqueries across PostgreSQL, MySQL, and T-SQL.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/sql-to-typescript-prisma-converter.html",
    "title": "SQL to TypeScript Interface & Prisma / Drizzle Converter",
    "desc": "Transform SQL CREATE TABLE statements into strongly typed TypeScript interfaces, Prisma ORM models, Drizzle schemas, and Zod validation objects instantly in your browser.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "database",
      "drizzle",
      "format",
      "interface",
      "prisma",
      "query",
      "select",
      "sql",
      "typescript"
    ],
    "formula": "Relational Type Homomorphism:\nT_{SQL} \u2192 T_{TS} \u2229 T_{Prisma} \u2229 T_{Drizzle}\n\nType Mappings:\nVARCHAR(n) | TEXT | UUID \u2192 string | String | text()\nINT | INTEGER | SERIAL \u2192 number | Int | integer() / serial()\nBIGINT \u2192 number | BigInt | bigint()\nBOOLEAN \u2192 boolean | Boolean | boolean()\nJSON | JSONB \u2192 Record | Json | json()\nTIMESTAMP | DATE \u2192 Date | DateTime | timestamp()\n\nNullability Mapping:\nNullable(col) = NOT NULL \u2209 Constraints(col) ? T \u222a {null, undefined} : T",
    "how_to_use": "Step 1: Export your existing CREATE TABLE DDL from psql, MySQL workbench, or migration files. Step 2: Paste the raw SQL statement into the input textarea. Step 3: The parser automatically derives table names, column constraints, nullability, and primary keys. Step 4: Switch between TypeScript, Prisma, Drizzle, and Zod tabs to review the generated code.",
    "inputs": "Transform SQL CREATE TABLE statements into strongly typed TypeScript interfaces, Prisma ORM models, Drizzle schemas, and Zod validation objects instantly in your browser.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/string-case-converter.html",
    "title": "Developer String Case Converter & Text Formatter",
    "desc": "Transform strings between camelCase, PascalCase, snake_case, CONSTANT_CASE, kebab-case, Title Case, Sentence case, dot.notation, and path/case with live text statistics.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "case",
      "converter",
      "developer",
      "formatter",
      "string",
      "text"
    ],
    "formula": "Word segmentation operates via Unicode-aware boundary regular expressions that detect case transitions, delimiters, and acronyms:\n      \n        CamelCase Boundary: \\( [a-z0-9] \\to [A-Z] \\) splits lower-to-upper transitions.\n        Acronym Boundary: \\( [A-Z] \\to [A-Z][a-z] \\) splits capital abbreviations from subsequent words (e.g., HTTPServer &rarr; HTTP Server).\n        Delimiter Boundary: Delimiters [-_./\\\\]+ are collapsed into unified word tokens.",
    "how_to_use": "Input your raw code or configuration parameters into the Developer String Case Converter & Text Formatter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Transform strings between camelCase, PascalCase, snake_case, CONSTANT_CASE, kebab-case, Title Case, Sentence case, dot.notation, and path/case with live text statistics.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/subresource-integrity-hash-generator.html",
    "title": "Subresource Integrity (SRI) Hash Generator",
    "desc": "Generate W3C Subresource Integrity (SRI) script and stylesheet hash tags. Protect your website from compromised CDN supply-chain attacks.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "generator",
      "hash",
      "integrity",
      "sri",
      "subresource"
    ],
    "formula": "The generator hashes the source file using SHA-384 or SHA-512 via the Web Crypto API, encodes the raw binary digest into standard Base64, and outputs the complete, copy-pasteable &lt;script&gt; or &lt;link&gt; HTML tag with the required crossorigin=\"anonymous\" attribute.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Subresource Integrity (SRI) Hash Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate W3C Subresource Integrity (SRI) script and stylesheet hash tags. Protect your website from compromised CDN supply-chain attacks.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/svg-optimizer-converter.html",
    "title": "SVG Optimizer & Clean Vector Converter",
    "desc": "Optimize, clean, and minify SVG vector graphics online. Remove bloated metadata, unused namespaces, and convert SVGs to React JSX or CSS Data URIs.",
    "category": "Media, Assets & Viral",
    "cat_key": "media",
    "keywords": [
      "clean",
      "converter",
      "data uri",
      "optimizer",
      "svg",
      "vector",
      "xml"
    ],
    "formula": "The optimizer processes the SVG XML tree through DOM sanitizers that remove non-rendering attributes, round bezier curve coordinates to 2 decimal places, and provide 1-click conversion into React JSX components or CSS background-image Data URIs.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the SVG Optimizer & Clean Vector Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Optimize, clean, and minify SVG vector graphics online. Remove bloated metadata, unused namespaces, and convert SVGs to React JSX or CSS Data URIs.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/svg-path-visualizer.html",
    "title": "SVG Path Visualizer & Anchor Editor",
    "desc": "Visualize, inspect, scale, and edit SVG path d=\"\" strings with interactive anchor points, bezier control handles, bounding box metrics, and instant React component export.",
    "category": "Media, Assets & Viral",
    "cat_key": "media",
    "keywords": [
      "anchor",
      "data uri",
      "editor",
      "path",
      "svg",
      "vector",
      "visualizer",
      "xml"
    ],
    "formula": "SVG path parsing evaluates path grammar defined by W3C SVG 2.0 specifications:\n      \n        MoveTo (M, m): Sets the current pen position \\( (x_0, y_0) \\) without drawing a line segment.\n        LineTo (L, l, H, h, V, v): Draws straight lines \\( P_0 \\to P_1 \\).\n        Cubic B\u00e9zier (C, c, S, s): Parametric third-order polynomial defined by four points: \\( B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3 \\), where \\( t \\in [0, 1] \\).\n        Quadratic B\u00e9zier (Q, q, T, t): Second-order polynomial governed by a single control point: \\( B(t) = (1-t)^2 P_0 + 2(1-t) t P_1 + t^2 P_2 \\)",
    "how_to_use": "Input your raw code or configuration parameters into the SVG Path Visualizer & Anchor Editor interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Visualize, inspect, scale, and edit SVG path d=\"\" strings with interactive anchor points, bezier control handles, bounding box metrics, and instant React component export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/svg-to-data-uri-converter.html",
    "title": "SVG to CSS Data URI Converter",
    "desc": "Convert raw SVG vector markup into URL-encoded or Base64 CSS Data URIs. Perfect for background-image, mask-image, and standalone CSS icons.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "converter",
      "css",
      "data",
      "data uri",
      "svg",
      "uri",
      "vector",
      "xml"
    ],
    "formula": "The tool cleans the SVG XML, swaps double quotes for single quotes, and percent-encodes only the strictly necessary reserved characters (such as #, %, ) as dictated by RFC 2397, producing the most compact possible CSS background-image string.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the SVG to CSS Data URI Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert raw SVG vector markup into URL-encoded or Base64 CSS Data URIs. Perfect for background-image, mask-image, and standalone CSS icons.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/tailwind-to-css-converter.html",
    "title": "Tailwind CSS to Pure CSS & Inline Style Converter",
    "desc": "Convert Tailwind CSS utility classes into clean, standard vanilla CSS and inline styles. Perfect for HTML email templates, CSS modules, legacy migrations, and zero-dependency components.",
    "category": "CSS & Visual UI",
    "cat_key": "css",
    "keywords": [
      "converter",
      "css",
      "inline",
      "pure",
      "style",
      "tailwind"
    ],
    "formula": "Tailwind Rem Spacing Mathematical Function:\nf(n) = n \u00d7 0.25rem = (n \u00d7 4)px   (where 1rem = 16px)\n\nExamples:\nf(1) = 0.25rem = 4px\nf(4) = 1.00rem = 16px\nf(6) = 1.50rem = 24px\nf(12) = 3.00rem = 48px\n\nBorder Radius Scale Mapping:\nrounded-sm: 0.125rem | rounded: 0.25rem | rounded-md: 0.375rem | rounded-lg: 0.5rem | rounded-xl: 0.75rem | rounded-full: 9999px",
    "how_to_use": "Step 1: Copy the className or class string from your React, Vue, or HTML template. Step 2: Paste the raw classes into the input textarea. Step 3: Adjust the CSS class selector name if you require a specific class namespace. Step 4: Inspect the real-time render preview box to verify exact visual fidelity.",
    "inputs": "Convert Tailwind CSS utility classes into clean, standard vanilla CSS and inline styles. Perfect for HTML email templates, CSS modules, legacy migrations, and zero-dependency components.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/text-diff-checker.html",
    "title": "Text & Code Diff Checker",
    "desc": "Compare two text files or code snippets online with side-by-side line diffing, character highlights, additions, and deletions. Fast, private comparison.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "checker",
      "code",
      "diff",
      "text"
    ],
    "formula": "The tool implements the Myers Diff Algorithm (the same mathematical algorithm powering GNU diff and Git). It calculates the Shortest Edit Script (SES) that transforms the original string into the modified string with minimal insertions and deletions.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Text & Code Diff Checker interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Compare two text files or code snippets online with side-by-side line diffing, character highlights, additions, and deletions. Fast, private comparison.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/ulid-nanoid-generator.html",
    "title": "ULID & NanoID Cryptographic Generator",
    "desc": "Generate Universally Unique Lexicographically Sortable Identifiers (ULID) and NanoID tokens using crypto.getRandomValues(). Inspect timestamps and customize alphabet sets.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "cryptographic",
      "generator",
      "nanoid",
      "ulid"
    ],
    "formula": "The internal 128-bit layout of a ULID conforms to the following specification:\n      \n        ULID = [48-bit UNIX Timestamp (10 chars)] + [80-bit Cryptographic Entropy (16 chars)]\n      \n      \n        Base32 Encoding: Encoded using Crockford's Base32 alphabet (0123456789ABCDEFGHJKMNPQRSTVWXYZ) which excludes ambiguous letters (I, L, O, U) to eliminate human reading errors.\n        NanoID Probability: With a 21-character length from a 64-character alphabet, generating 1,000 IDs per second would require ~4,100 years to reach a 1% collision probability.",
    "how_to_use": "Input your raw code or configuration parameters into the ULID & NanoID Cryptographic Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate Universally Unique Lexicographically Sortable Identifiers (ULID) and NanoID tokens using crypto.getRandomValues(). Inspect timestamps and customize alphabet sets.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/unix-timestamp-converter.html",
    "title": "Unix Epoch Timestamp Converter & Timezone Studio",
    "desc": "Bi-directional Unix epoch timestamp converter. Convert between epoch seconds, milliseconds, microseconds, UTC ISO 8601, RFC 2822, and local time with live epoch ticker.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "epoch",
      "studio",
      "timestamp",
      "timezone",
      "unix"
    ],
    "formula": "The relationship between Gregorian calendar dates and POSIX epoch time is governed by the IEEE POSIX 1003.1 standard:\n      \n        \\( t_{\\text{epoch}} = 86400 \\times (y - 1970) + 86400 \\times \\left\\lfloor \\frac{y - 1969}{4} \\right\\rfloor + \\sum_{\\text{days}} 86400 + \\text{secondsOfDay} \\)\n      \n      \n        Second Scale: 10-digit integers \\( (10^9 \\le t &lt; 10^{10}) \\) represent seconds.\n        Millisecond Scale: 13-digit integers \\( (10^{12} \\le t &lt; 10^{13}) \\) represent milliseconds (ECMAScript timestamp).\n        Year 2038 Problem: On January 19, 2038 at 03:14:07 UTC, signed 32-bi",
    "how_to_use": "Input your raw code or configuration parameters into the Unix Epoch Timestamp Converter & Timezone Studio interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Bi-directional Unix epoch timestamp converter. Convert between epoch seconds, milliseconds, microseconds, UTC ISO 8601, RFC 2822, and local time with live epoch ticker.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/url-encoder-decoder.html",
    "title": "URL Encoder & Decoder",
    "desc": "Encode and decode URLs, query parameters, and URI components. Free online tool supporting encodeURI and encodeURIComponent RFC 3986 percent encoding.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "decoder",
      "encoder",
      "url"
    ],
    "formula": "Characters in the unreserved set (alphanumerics, hyphen, underscore, period, and tilde: A-Z, a-z, 0-9, -, _, ., ~) never require percent-encoding. All other characters are converted into their UTF-8 byte sequence, and each byte is escaped as %XX.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the URL Encoder & Decoder interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Encode and decode URLs, query parameters, and URI components. Free online tool supporting encodeURI and encodeURIComponent RFC 3986 percent encoding.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/user-agent-parser.html",
    "title": "User-Agent Parser & Device Inspector",
    "desc": "Parse and analyze HTTP User-Agent strings and Client Hints (UA-CH) online. Detect browser engine, operating system, device hardware, and bot crawler identity.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "agent",
      "device",
      "inspector",
      "parser",
      "user"
    ],
    "formula": "The tool executes client-side heuristic regex matching to extract browser name (Chrome, Safari, Firefox, Edge), engine (Blink, Gecko, WebKit), operating system (macOS, Windows, iOS, Android, Linux), device architecture (x86_64, ARM64), and modern User-Agent Client Hints.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the User-Agent Parser & Device Inspector interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Parse and analyze HTTP User-Agent strings and Client Hints (UA-CH) online. Detect browser engine, operating system, device hardware, and bot crawler identity.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/uuid-generator.html",
    "title": "UUID / GUID v4 Bulk Generator",
    "desc": "Generate cryptographically secure RFC 4122 Version 4 UUIDs (GUIDs) online. Bulk generation, custom casing, hyphens, and 1-click clipboard export.",
    "category": "Security & Cryptography",
    "cat_key": "security",
    "keywords": [
      "bulk",
      "generator",
      "guid",
      "uuid"
    ],
    "formula": "This tool utilizes the browser CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) crypto.randomUUID() or crypto.getRandomValues(). It sets the 4 most significant bits of the 7th byte to 0100 (version 4) and the 2 most significant bits of the 9th byte to 10 (RFC 4122 variant).\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the UUID / GUID v4 Bulk Generator interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Generate cryptographically secure RFC 4122 Version 4 UUIDs (GUIDs) online. Bulk generation, custom casing, hyphens, and 1-click clipboard export.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/webhook-payload-formatter.html",
    "title": "Webhook Payload & Signature Tester",
    "desc": "Format, inspect, and verify webhook JSON payloads and HMAC-SHA256 signatures for Stripe, GitHub, Shopify, and Slack webhooks online.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "formatter",
      "payload",
      "signature",
      "tester",
      "webhook"
    ],
    "formula": "The tool uses client-side Web Crypto APIs to compute HMAC-SHA256 message digests over raw payload bytes, comparing the resulting hexadecimal signature against the incoming header signature using constant-time comparison algorithms to mitigate timing attacks.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the Webhook Payload & Signature Tester interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Format, inspect, and verify webhook JSON payloads and HMAC-SHA256 signatures for Stripe, GitHub, Shopify, and Slack webhooks online.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/websocket-client-tester.html",
    "title": "WebSocket Client & Real-Time Protocol Debugger",
    "desc": "Connect, inspect, and debug live WebSocket servers (ws:// and wss://). Real-time message logs with timestamps, JSON formatting, ping/pong latency tester, and zero telemetry.",
    "category": "DevOps & Webmaster",
    "cat_key": "devops",
    "keywords": [
      "client",
      "debugger",
      "protocol",
      "real",
      "tester",
      "time",
      "websocket"
    ],
    "formula": "The WebSocket connection protocol operates via the standard RFC 6455 handshake mechanism:\n      \n        HTTP 101 Upgrade: The client initiates a standard HTTP GET request with Upgrade: websocket and Connection: Upgrade headers.\n        Sec-WebSocket-Key: The client sends a 16-byte random base64 key. The server appends standard GUID 258EAFA5-E914-47DA-95CA-C5AB0DC85B11, computes SHA-1, and returns Sec-WebSocket-Accept.\n        Framing Protocol: Data is transmitted in binary frames (Opcode 0x1 for text, 0x2 for binary, 0x9 for Ping, 0xA for Pong).",
    "how_to_use": "Input your raw code or configuration parameters into the WebSocket Client & Real-Time Protocol Debugger interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Connect, inspect, and debug live WebSocket servers (ws:// and wss://). Real-time message logs with timestamps, JSON formatting, ping/pong latency tester, and zero telemetry.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/xml-formatter-json-converter.html",
    "title": "XML Formatter, Validator & Bi-Directional JSON Converter",
    "desc": "Format, beautify, syntax-validate, and convert XML documents to JSON and vice-versa. Built on the browser native DOMParser with zero external CDN dependencies.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "diff",
      "directional",
      "formatter",
      "json",
      "parser",
      "validator",
      "xml"
    ],
    "formula": "The XML formatting and transformation algorithm operates via strict recursive DOM tree traversal conforming to the W3C XML 1.0 (Fifth Edition) specification:\n      \n        Well-Formedness Verification: The parser ensures all open tags match their corresponding closing tags, attribute values are quoted, and the document possesses exactly one root element.\n        Node Type Processing: Elements (Node.ELEMENT_NODE), Text (Node.TEXT_NODE), and Comments (Node.COMMENT_NODE) are recursively visited.\n        Tree-to-JSON Mapping: Multiple child elements sharing identical tag names \\( \\{ c_1, c_2 \\} \\",
    "how_to_use": "Input your raw code or configuration parameters into the XML Formatter, Validator & Bi-Directional JSON Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Format, beautify, syntax-validate, and convert XML documents to JSON and vice-versa. Built on the browser native DOMParser with zero external CDN dependencies.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  },
  {
    "url": "/tools/yaml-to-json-converter.html",
    "title": "YAML to JSON & JSON to YAML Converter",
    "desc": "Convert YAML to JSON and JSON to YAML online with syntax validation. Essential tool for Kubernetes manifests, Docker Compose, CI/CD, and OpenAPI specs.",
    "category": "Code, Data & APIs",
    "cat_key": "code",
    "keywords": [
      "converter",
      "diff",
      "formatter",
      "json",
      "parser",
      "validator",
      "yaml"
    ],
    "formula": "The converter parses YAML indentation levels, block scalars, arrays, folded strings, and type anchors into an abstract syntax tree (AST), transforming it into valid RFC 8259 JSON objects, or converting JSON objects into cleanly indented YAML documents.\n          \n          \n            Formal Mathematical Derivation / Syntax Specification:",
    "how_to_use": "Input your raw code or configuration parameters into the YAML to JSON & JSON to YAML Converter interface. The client-side engine parses and validates your syntax in local browser memory. Copy or export the transformed output instantly with zero telemetry.",
    "inputs": "Convert YAML to JSON and JSON to YAML online with syntax validation. Essential tool for Kubernetes manifests, Docker Compose, CI/CD, and OpenAPI specs.",
    "pro_tip": "Always verify output syntax against your production build toolchain. For high-volume automated pipelines, integrate this workflow via CLI or npm packages."
  }
];

  // 4. Inject Embedded CSS (Guarantees zero-dependency, no 404, never huge or broken)
  const css = `
    #cw-ai-root {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
    }

    /* Premium Pill Launcher — "Need help?" (indigo to violet) */
    .cw-ai-launcher {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 22px;
      border-radius: 999px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 55%, #a855f7 100%);
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 8px 28px rgba(124, 58, 237, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.28);
      color: #ffffff;
      cursor: pointer;
      position: relative;
      transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease;
      overflow: hidden;
      user-select: none;
      white-space: nowrap;
      animation: cw-pill-pulse 3.4s ease-in-out infinite;
    }

    .cw-ai-launcher:hover {
      transform: translateY(-3px) scale(1.045);
      box-shadow: 0 14px 38px rgba(139, 92, 246, 0.62), 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.35);
      border-color: rgba(255, 255, 255, 0.6);
      animation-play-state: paused;
    }

    .cw-ai-launcher:active {
      transform: translateY(-1px) scale(0.97);
    }

    @keyframes cw-pill-pulse {
      0%, 100% {
        box-shadow: 0 8px 28px rgba(124, 58, 237, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.28);
      }
      50% {
        box-shadow: 0 8px 40px rgba(139, 92, 246, 0.75), 0 2px 10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.35);
      }
    }

    .cw-ai-launcher-text {
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.01em;
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }

    .cw-ai-sparkle-svg {
      width: 20px !important;
      height: 20px !important;
      display: block;
      flex: 0 0 auto;
      filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.35));
    }

    @media (max-width: 480px) {
      .cw-ai-launcher { padding: 11px 16px; }
      .cw-ai-launcher-text { font-size: 0.88rem; }
    }

    /* 11-Second Shimmer Wave across Launcher */
    .cw-ai-launcher::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        60deg,
        rgba(255, 255, 255, 0) 25%,
        rgba(255, 255, 255, 0.2) 40%,
        rgba(255, 255, 255, 0.85) 50%,
        rgba(255, 255, 255, 0.2) 60%,
        rgba(255, 255, 255, 0) 75%
      );
      transform: translateX(-160%) rotate(25deg);
      animation: cw-flash-wave 11s infinite ease-in-out;
      pointer-events: none;
    }

    @keyframes cw-flash-wave {
      0%, 75%, 100% { transform: translateX(-160%) rotate(25deg); opacity: 0; }
      80% { opacity: 1; }
      88% { transform: translateX(160%) rotate(25deg); opacity: 1; }
      89% { opacity: 0; }
    }

    .cw-ai-icon-svg {
      width: 26px !important;
      height: 26px !important;
      display: block;
      filter: drop-shadow(0 1px 3px rgba(0,0,0,0.3));
    }

    .cw-ai-tooltip {
      position: absolute;
      right: 64px;
      background: #090e1a;
      color: #f8fafc;
      padding: 6px 12px;
      border-radius: 8px;
      border: 1px solid rgba(6, 182, 212, 0.3);
      font-size: 0.78rem;
      font-weight: 700;
      white-space: nowrap;
      box-shadow: 0 6px 16px rgba(0,0,0,0.5);
      pointer-events: none;
      opacity: 0;
      transform: translateX(6px);
      transition: opacity 0.2s, transform 0.2s;
    }

    .cw-ai-launcher:hover .cw-ai-tooltip {
      opacity: 1;
      transform: translateX(0);
    }

    /* Chat Window */
    .cw-ai-window {
      position: absolute;
      bottom: 64px;
      right: 0;
      width: 400px;
      max-width: calc(100vw - 32px);
      height: 540px;
      max-height: calc(100vh - 90px);
      background: #0b0f19;
      border: 1px solid rgba(6, 182, 212, 0.28);
      border-radius: 16px;
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.75), 0 0 24px rgba(6, 182, 212, 0.25);
      display: none;
      flex-direction: column;
      overflow: hidden;
      animation: cw-fade-in 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .cw-ai-window.open { display: flex !important; }

    @keyframes cw-fade-in {
      from { opacity: 0; transform: translateY(12px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .cw-ai-header {
      padding: 12px 16px;
      background: linear-gradient(90deg, #111827, #1f2937);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cw-ai-brand { display: flex; align-items: center; gap: 10px; }
    .cw-ai-avatar {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(6, 182, 212, 0.4);
    }

    .cw-ai-title-wrap { display: flex; flex-direction: column; }
    .cw-ai-title {
      font-size: 0.9rem;
      font-weight: 800;
      color: #f8fafc;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cw-ai-status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 8px #10b981;
    }
    .cw-ai-subtitle { font-size: 0.7rem; color: #94a3b8; }

    .cw-ai-close-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 1.3rem;
      cursor: pointer;
      padding: 2px 8px;
      line-height: 1;
      border-radius: 6px;
      transition: all 0.15s;
    }
    .cw-ai-close-btn:hover { background: rgba(255, 255, 255, 0.1); color: #ffffff; }

    .cw-ai-chips {
      display: flex;
      gap: 6px;
      padding: 8px 12px;
      background: #070a12;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .cw-ai-chips::-webkit-scrollbar { display: none; }

    .cw-ai-chip {
      padding: 4px 10px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      font-size: 0.72rem;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s;
    }
    .cw-ai-chip:hover {
      background: #06b6d4;
      border-color: #22d3ee;
      color: #ffffff;
      transform: translateY(-1px);
    }

    .cw-ai-messages {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #0b0f19;
    }

    .cw-msg {
      max-width: 90%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.85rem;
      line-height: 1.55;
      word-break: break-word;
    }
    .cw-msg.bot {
      background: #111827;
      border: 1px solid rgba(6, 182, 212, 0.2);
      color: #e2e8f0;
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }
    .cw-msg.user {
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      color: #ffffff;
      align-self: flex-end;
      border-bottom-right-radius: 2px;
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
    }

    .cw-msg-card {
      background: #070a12;
      border: 1px solid rgba(6, 182, 212, 0.25);
      border-radius: 8px;
      padding: 10px;
      margin-top: 8px;
      font-size: 0.8rem;
    }
    .cw-msg-formula {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      color: #38bdf8;
      background: rgba(6, 182, 212, 0.08);
      padding: 6px 8px;
      border-radius: 4px;
      margin: 6px 0;
      border-left: 3px solid #06b6d4;
      overflow-x: auto;
    }
    .cw-msg-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      color: #ffffff !important;
      text-decoration: none !important;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 700;
      margin-top: 6px;
      box-shadow: 0 2px 8px rgba(6, 182, 212, 0.35);
      transition: transform 0.15s;
    }
    .cw-msg-btn:hover { transform: translateY(-1px); }

    .cw-ai-footer {
      padding: 10px 14px;
      background: #111827;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .cw-ai-input {
      flex: 1;
      background: #030712;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 8px;
      padding: 9px 12px;
      color: #ffffff;
      font-size: 0.84rem;
      outline: none;
      transition: border-color 0.15s;
    }
    .cw-ai-input:focus { border-color: #06b6d4; }
    .cw-ai-send-btn {
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 9px 14px;
      font-weight: 700;
      font-size: 0.82rem;
      cursor: pointer;
      transition: opacity 0.15s;
    }
    .cw-ai-send-btn:hover { opacity: 0.9; }
  `;

  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // 5. Developer Math & Conversion Solver (e.g. "16px to rem", "2rem to px", "500 * 20", "20% of 500")
  function solveDeveloperMath(query) {
    const q = query.toLowerCase().trim();

    // PX to REM: "16px to rem", "24 px in rem", "16px rem"
    const pxMatch = q.match(/(\d+(?:\.\d+)?)\s*px\s*(?:to|in)?\s*rem/i) || q.match(/convert\s*(\d+(?:\.\d+)?)\s*px\s*to\s*rem/i);
    if (pxMatch) {
      const px = parseFloat(pxMatch[1]);
      const rem = (px / 16).toFixed(4).replace(/\.?0+$/, "");
      return `<strong>PX to REM Conversion:</strong><br><br>` +
        `• <strong>${px}px</strong> = <strong>${rem}rem</strong> (based on default 16px root font size)<br><br>` +
        `Formula: <code>${px}px ÷ 16 = ${rem}rem</code><br><br>` +
        `<div style="display:flex; gap:8px; flex-wrap:wrap;">` +
          `<a href="/tools/px-to-rem-converter.html" class="cw-msg-btn">Open PX to REM Converter →</a>` +
          `<a href="/articles/px-to-rem-converter-guide-2026.html" class="cw-msg-btn" style="background:#1e293b; border:1px solid #06b6d4;">📖 Read Guide →</a>` +
        `</div>`;
    }

    // REM to PX: "2rem to px", "1.5 rem in px"
    const remMatch = q.match(/(\d+(?:\.\d+)?)\s*rem\s*(?:to|in)?\s*px/i) || q.match(/convert\s*(\d+(?:\.\d+)?)\s*rem\s*to\s*px/i);
    if (remMatch) {
      const rem = parseFloat(remMatch[1]);
      const px = (rem * 16).toFixed(2).replace(/\.?0+$/, "");
      return `<strong>REM to PX Conversion:</strong><br><br>` +
        `• <strong>${rem}rem</strong> = <strong>${px}px</strong> (based on default 16px root font size)<br><br>` +
        `Formula: <code>${rem}rem × 16 = ${px}px</code><br><br>` +
        `<div style="display:flex; gap:8px; flex-wrap:wrap;">` +
          `<a href="/tools/px-to-rem-converter.html" class="cw-msg-btn">Open PX to REM Converter →</a>` +
          `<a href="/articles/px-to-rem-converter-guide-2026.html" class="cw-msg-btn" style="background:#1e293b; border:1px solid #06b6d4;">📖 Read Guide →</a>` +
        `</div>`;
    }

    // Percentage pattern: "what is X% of Y" or "X% of Y"
    const pctMatch = q.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of)\s*(\d+(?:\.\d+)?)/i);
    if (pctMatch) {
      const p = parseFloat(pctMatch[1]);
      const v = parseFloat(pctMatch[2]);
      const res = (p / 100) * v;
      return `<strong>Mathematical Result:</strong><br><br>• <strong>${p}%</strong> of <strong>${v}</strong> is <strong>${res.toLocaleString()}</strong><br><br>Formula: <code>(${p} ÷ 100) × ${v} = ${res}</code>`;
    }

    // Basic arithmetic: "500 * 20", "5000 / 12", "450 + 120"
    const arithMatch = q.match(/^(\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(\d+(?:\.\d+)?)$/);
    if (arithMatch) {
      const a = parseFloat(arithMatch[1]);
      const op = arithMatch[2];
      const b = parseFloat(arithMatch[3]);
      let ans = 0;
      let opName = "";
      if (op === "+") { ans = a + b; opName = "Addition"; }
      else if (op === "-") { ans = a - b; opName = "Subtraction"; }
      else if (op === "*") { ans = a * b; opName = "Multiplication"; }
      else if (op === "/") { ans = b !== 0 ? (a / b) : "Undefined (division by 0)"; opName = "Division"; }
      return `<strong>${opName} Result:</strong><br><br><code>${a} ${op} ${b} = ${ans.toLocaleString ? ans.toLocaleString() : ans}</code>`;
    }

    return null;
  }

  // ==========================================
  // 6. Advanced NLP & Fuzzy Matching Engine
  // ==========================================
  const VOCABULARY = new Set();
  TOOLS_DB.forEach(tool => {
    const text = `${tool.title} ${tool.url} ${(tool.keywords || []).join(' ')}`.toLowerCase();
    const words = text.match(/[a-z0-9]{3,}/g) || [];
    words.forEach(w => VOCABULARY.add(w));
  });

  // Fast Levenshtein distance for typo correction
  function levenshtein(a, b) {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const v0 = new Array(b.length + 1);
    const v1 = new Array(b.length + 1);
    for (let i = 0; i <= b.length; i++) v0[i] = i;
    for (let i = 0; i < a.length; i++) {
      v1[0] = i + 1;
      for (let j = 0; j < b.length; j++) {
        const cost = a[i] === b[j] ? 0 : 1;
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
      }
      for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
    }
    return v1[b.length];
  }

  // Developer phonetic & typing variations
  const COMMON_TYPOS = {
    'jason': 'json', 'jsn': 'json', 'jsom': 'json',
    'regeks': 'regex', 'regx': 'regex', 'regularexpression': 'regex',
    'bycript': 'bcrypt', 'bcrpt': 'bcrypt', 'bcript': 'bcrypt', 'pasword': 'password', 'paswd': 'password',
    'dokker': 'docker', 'doker': 'docker', 'dockr': 'docker', 'dockrfile': 'dockerfile',
    'htacess': 'htaccess', 'htaccs': 'htaccess', 'curll': 'curl', 'base644': 'base64',
    'marup': 'markdown', 'markdwn': 'markdown', 'minfy': 'minify', 'minfier': 'minifier',
    'clmp': 'clamp', 'pallete': 'palette', 'palete': 'palette', 'gradiant': 'gradient',
    'chcksum': 'checksum', 'validater': 'validator', 'certficate': 'certificate',
    'formater': 'formatter', 'beautifyer': 'beautifier'
  };

  // Developer acronym expansions
  const ACRONYMS = {
    'jsx': 'html to jsx react component',
    'jwt': 'jwt debugger json web token',
    'pem': 'ssl cert decoder certificate',
    'crud': 'sql mock data generator',
    'dpi': 'px to rem clamp converter',
    'cors': 'htaccess cors header generator',
    'uuid': 'uuid v4 generator',
    'svg': 'svg to css data uri converter',
    'sha': 'sha256 hash generator',
    'cron': 'crontab syntax generator',
    'dns': 'dns lookup records tool',
    'rest': 'rest api curl command builder',
    'rem': 'px to rem converter',
    'css': 'css flexbox grid clamp minifier',
    'sql': 'sql formatter generator query'
  };

  // Stop words that should NEVER trigger false-positive substring tool matches
  const STOP_WORDS = new Set([
    "a", "an", "the", "and", "or", "but", "if", "in", "on", "at", "to", "for",
    "of", "with", "by", "from", "up", "about", "into", "over", "after", "is",
    "are", "was", "were", "be", "been", "being", "have", "has", "had", "do",
    "does", "did", "can", "could", "should", "would", "how", "what", "which",
    "who", "when", "where", "why", "ka", "ke", "ki", "ko", "se", "me", "mein",
    "par", "k", "kya", "yeh", "woh", "hai", "hain", "karna", "karne", "i", "my",
    "me", "tool", "tools", "please", "batao", "dikhao", "generate", "generator"
  ]);

  // Fast fuzzy spell-checker against our site vocabulary
  function correctWord(word) {
    if (!word || word.length < 3) return word;
    if (VOCABULARY.has(word)) return word;
    if (COMMON_TYPOS[word]) return COMMON_TYPOS[word];

    let best = word;
    let minD = 99;
    const maxAllowedEdits = word.length <= 5 ? 1 : 2;

    for (const v of VOCABULARY) {
      if (Math.abs(v.length - word.length) <= maxAllowedEdits) {
        const d = levenshtein(word, v);
        if (d < minD && d <= maxAllowedEdits) {
          minD = d;
          best = v;
        }
      }
    }
    return best;
  }

  // Conversational Intent Checkers
  function isGreeting(query) {
    const raw = (query || '').trim().toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const GREETINGS = [
      'hi', 'hello', 'hey', 'hiya', 'hlo', 'helo', 'hy', 'salam', 'assalam',
      'assalamu alaikum', 'assalam o alaikum', 'assalamualaikum', 'aoa', 'slm',
      'kese ho', 'kaise ho', 'kaisay ho', 'how are you', 'how r u', 'how do you do',
      'good morning', 'good afternoon', 'good evening', 'good night',
      'namaste', 'hola', 'yo', 'sup', 'wassup', 'whats up', 'what is up'
    ];
    return GREETINGS.some(g => raw === g || raw === `${g} ai` || raw === `${g} webdevworker` || (raw.startsWith(`${g} `) && raw.split(' ').length <= 3));
  }

  function isThanks(query) {
    const raw = (query || '').trim().toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const THANKS = ['thanks', 'thank you', 'thx', 'shukriya', 'bohot shukriya', 'shukria', 'jazakallah', 'dhanyawad', 'great', 'awesome', 'nice', 'perfect', 'zabardast', 'bohot khoob'];
    return THANKS.some(t => raw === t || raw.startsWith(`${t} `) && raw.split(' ').length <= 3);
  }

  function isHelp(query) {
    const raw = (query || '').trim().toLowerCase();
    return raw === 'help' || raw.includes('kya kar sakte ho') || raw.includes('what can you do') || raw.includes('features') || raw.includes('who are you') || raw.includes('tum kya ho');
  }

  // 7. Master Knowledge, Conversational & Fuzzy Entity Resolver
  function resolveKnowledge(query) {
    const rawQ = (query || "").toLowerCase().trim();
    const cleanQ = rawQ.replace(/[\?\!\,\.\:\;\(\)\[\]\*\_]/g, " ").replace(/\s+/g, " ").trim();

    // 7.0 Natural Conversational Greeting Intent
    if (isGreeting(cleanQ)) {
      if (cleanQ.includes("salam") || cleanQ.includes("kese") || cleanQ.includes("kaise") || cleanQ.includes("aoa")) {
        return `👋 <strong>Walaikum Assalam! WebDevWorker me khush-amdeed!</strong><br><br>` +
          `Main aapka 100% private, zero-latency web developer &amp; DevOps AI assistant hoon.<br><br>` +
          `<strong>Main aapki kya madad kar sakta hoon?</strong><br>` +
          `• <strong>Code Conversion:</strong> Maslan <em>"html to jsx"</em>, <em>"px to rem"</em>, <em>"svg to css"</em><br>` +
          `• <strong>Security &amp; Auth:</strong> Maslan <em>"bcrypt generator"</em>, <em>"jwt debugger"</em>, <em>"aes encryption"</em><br>` +
          `• <strong>DevOps &amp; Config:</strong> Maslan <em>"dockerfile generator"</em>, <em>"crontab"</em>, <em>"nginx config"</em><br>` +
          `• <strong>Guides &amp; Articles:</strong> Deep architecture guides ke liye <em>"guides"</em> likhein<br>` +
          `• <strong>Tamam 85 Tools:</strong> Saari list dekhne ke liye <em>"sare tools dikhao"</em> likhein!`;
      }
      return `👋 <strong>Hello! Welcome to WebDevWorker!</strong><br><br>` +
        `I am your 100% private, client-side web developer &amp; DevOps AI assistant.<br><br>` +
        `<strong>How can I help you today?</strong><br>` +
        `• <strong>Convert &amp; Transform:</strong> e.g., <em>"html to jsx"</em>, <em>"16px to rem"</em>, <em>"svg to css"</em><br>` +
        `• <strong>Security &amp; Auth:</strong> e.g., <em>"bcrypt hash"</em>, <em>"jwt debugger"</em>, <em>"aes gcm"</em><br>` +
        `• <strong>DevOps &amp; Config:</strong> e.g., <em>"dockerfile studio"</em>, <em>"crontab generator"</em>, <em>"htaccess"</em><br>` +
        `• <strong>Developer Guides:</strong> Type <em>"guides"</em> to access all 85 engineering guides<br>` +
        `• <strong>Browse All 85 Tools:</strong> Type <em>"show all tools"</em> to explore the full directory!`;
    }

    // 7.0.1 Gratitude Intent
    if (isThanks(cleanQ)) {
      return `😊 <strong>You're very welcome!</strong><br><br>` +
        `I'm always here to accelerate your development workflow across all 85 tools. Happy coding! 🚀`;
    }

    // 7.0.2 Capabilities & Help Intent
    if (isHelp(cleanQ)) {
      return `🤖 <strong>WebDevWorker AI Capabilities:</strong><br><br>` +
        `1. <strong>Zero-Latency Conversions:</strong> Converts PX to REM, CSS clamps, SVG to URI, and formatting instantly.<br>` +
        `2. <strong>Typo-Tolerant Tool Matching:</strong> Understands what tool you need even with spelling errors (e.g. <em>"bycript"</em> or <em>"dokker"</em>).<br>` +
        `3. <strong>Deep Architectural Knowledge:</strong> Explains Next.js 15 JSX migrations, Docker multi-stage builds, JWT rotation, and Bcrypt work factors.<br>` +
        `4. <strong>Dual Tool + Guide Pairing:</strong> Provides 1-click links to launch the tool and read the 2026 engineering guide.<br>` +
        `5. <strong>100% Client-Side Privacy:</strong> Zero telemetry — your secrets, JWTs, and source code never leave your browser.`;
    }

    // 7.0.3 Guides & Articles Hub Intent
    if (cleanQ === "guides" || cleanQ === "guide" || cleanQ === "articles" || cleanQ === "article" || cleanQ.includes("guides hub") || cleanQ.includes("all guides")) {
      return `📚 <strong>WebDevWorker Guides &amp; Research Hub:</strong><br><br>` +
        `We feature <strong>85 comprehensive, production-grade developer guides</strong> complete with real code snippets, benchmarks, and architectural blueprints.<br><br>` +
        `• ⚛️ <a href="/articles/html-to-jsx-guide-2026.html">HTML to JSX &amp; React Component Guide (2026)</a><br>` +
        `• 📐 <a href="/articles/css-clamp-calculator-guide-2026.html">Fluid Responsive Typography with CSS clamp()</a><br>` +
        `• 🔐 <a href="/articles/bcrypt-generator-guide-2026.html">Bcrypt Password Hashing &amp; Work Factors</a><br>` +
        `• 🐳 <a href="/articles/dockerfile-generator-guide-2026.html">Multi-Stage Dockerfile Optimization Guide</a><br>` +
        `• 🔏 <a href="/articles/jwt-debugger-guide-2026.html">JWT Cryptographic Token &amp; Security Guide</a><br><br>` +
        `<a href="/articles/" class="cw-msg-btn">Explore All 85 Guides in Hub →</a>`;
    }

    // 7.1 Owner & Founder Queries
    if (cleanQ.includes("owner") || cleanQ.includes("zaviyan") || cleanQ.includes("founder") || cleanQ.includes("who made") || 
        cleanQ.includes("who created") || cleanQ.includes("who owns") || cleanQ.includes("kisne banaya") || 
        cleanQ.includes("owner kaun") || cleanQ.includes("malik") || cleanQ.includes("company") || cleanQ.includes("about webdevworker")) {
      return `<strong>Owner &amp; Founder Information:</strong><br><br>` +
        `WebDevWorker is engineered, founded, and owned by <strong>${CW_INFO.owner}</strong> and operated by <strong>${CW_INFO.company}</strong>.<br><br>` +
        `• <strong>Founder:</strong> Zaviyan<br>` +
        `• <strong>Operating Entity:</strong> Zaviyan LLC (United States)<br>` +
        `• <strong>Official Inquiries:</strong> <a href="mailto:${CW_INFO.email}">${CW_INFO.email}</a><br>` +
        `• <strong>Platform Architecture:</strong> 100% Client-Side Sandbox, zero telemetry, zero data storage, and certified offline PWA execution across all 85 developer tools.`;
    }

    // 7.2 Contact & Support Queries
    if (cleanQ.includes("contact") || cleanQ.includes("email") || cleanQ.includes("support") || cleanQ.includes("reach out") || 
        cleanQ.includes("rabta") || cleanQ.includes("help email")) {
      return `<strong>Contact &amp; Engineering Support:</strong><br><br>` +
        `For tool suggestions, enterprise inquiries, or bug reports, reach out directly to the executive office:<br><br>` +
        `📧 <strong>Official Email:</strong> <a href="mailto:${CW_INFO.email}">${CW_INFO.email}</a><br>` +
        `🏢 <strong>Entity:</strong> Zaviyan LLC<br>` +
        `🌐 <strong>Support Portal:</strong> <a href="/contact.html">WebDevWorker Contact Center</a><br>` +
        `⏱️ <strong>Response Guarantee:</strong> Inquiries receive prioritized developer responses within 24 business hours.`;
    }

    // 7.3 Privacy, Telemetry & Security
    if (cleanQ.includes("privacy") || cleanQ.includes("safe") || cleanQ.includes("telemetry") || cleanQ.includes("data") || 
        cleanQ.includes("server") || cleanQ.includes("offline") || cleanQ.includes("pwa") || cleanQ.includes("mahfooz") || cleanQ.includes("security")) {
      return `🔒 <strong>Privacy &amp; Security Architecture:</strong><br><br>` +
        `WebDevWorker operates with a <strong>Zero-Telemetry, Client-Side Only</strong> security model:<br><br>` +
        `1. <strong>Local Sandbox:</strong> Every parser, cryptographic hasher, and CSS generator executes 100% inside your browser's V8/JavaScript engine.<br>` +
        `2. <strong>Zero Data Ingestion:</strong> Your JWTs, private keys, source code, and SQL queries NEVER transmit over the wire.<br>` +
        `3. <strong>PWA Offline Engine:</strong> Once loaded, you can disconnect Wi-Fi or cellular service and every one of the 85 tools remains fully functional.`;
    }

    // 7.4 Tool Count Queries
    if (cleanQ.includes("total tools") || cleanQ.includes("how many") || cleanQ.includes("tool count") || 
        cleanQ.includes("count") || cleanQ.includes("85") || cleanQ.includes("kitne tools") || 
        cleanQ === "tools" || cleanQ === "total" || cleanQ === "total tools" || 
        cleanQ.includes("all tools count") || cleanQ.includes("kitne tools hain") || cleanQ.includes("total kitne")) {
      return `📊 <strong>Total Developer Suite: Exactly 85 Tools!</strong><br><br>` +
        `WebDevWorker features <strong>85 distinct, production-grade developer tools</strong> divided across 5 core engineering disciplines:<br><br>` +
        `• 🎨 <strong>CSS &amp; Visual UI:</strong> 24 specialized generators &amp; layout studios<br>` +
        `• 💻 <strong>Code, Data &amp; APIs:</strong> 27 formatters, parsers &amp; converters<br>` +
        `• 🔐 <strong>Security &amp; Cryptography:</strong> 11 authenticated cryptographic suites<br>` +
        `• 🚀 <strong>DevOps &amp; Webmaster:</strong> 18 deployment, server &amp; SEO tools<br>` +
        `• 🖼️ <strong>Media &amp; Typography:</strong> 5 asset &amp; viral utilities<br><br>` +
        `Type <em>"show all tools"</em> or <em>"sare tools dikhao"</em> to explore the full directory!`;
    }

    // 7.5 Complete 85 Tools Master Directory
    if (cleanQ.includes("all tools") || cleanQ.includes("sare tools") || cleanQ.includes("saare tools") || 
        cleanQ.includes("list of tools") || cleanQ.includes("show tools") || cleanQ.includes("directory") || 
        cleanQ.includes("tamam tools") || cleanQ.includes("sabhi tools") || cleanQ.includes("list tools") ||
        cleanQ === "tools" || cleanQ === "list" || cleanQ === "menu") {
      return `📚 <strong>Master Directory: All 85 WebDevWorker Tools</strong><br><br>` +
        `<strong>🎨 CSS &amp; Visual UI (24 Tools):</strong><br>` +
        `• <a href="/tools/css-flexbox-generator.html">Flexbox</a> | <a href="/tools/css-grid-generator.html">Grid</a> | <a href="/tools/css-clamp-calculator.html">Clamp</a> | <a href="/tools/css-glassmorphism-generator.html">Glassmorphism</a> | <a href="/tools/css-neumorphism-generator.html">Neumorphism</a> | <a href="/tools/css-box-shadow-generator.html">Box Shadow</a> | <a href="/tools/css-gradient-generator.html">Gradient</a> | <a href="/tools/px-to-rem-converter.html">PX to REM</a> | <a href="/tools/css-animation-generator.html">Animations</a> | <a href="/tools/css-clip-path-generator.html">Clip Path</a><br><br>` +
        `<strong>💻 Code, Data &amp; APIs (27 Tools):</strong><br>` +
        `• <a href="/tools/html-to-jsx.html">HTML to JSX</a> | <a href="/tools/json-formatter.html">JSON Formatter</a> | <a href="/tools/json-diff.html">JSON Diff</a> | <a href="/tools/regex-tester.html">Regex Tester</a> | <a href="/tools/sql-formatter.html">SQL Formatter</a> | <a href="/tools/markdown-previewer.html">Markdown Preview</a> | <a href="/tools/base64-encoder-decoder.html">Base64</a> | <a href="/tools/url-encoder-decoder.html">URL Encoder</a> | <a href="/tools/jwt-debugger.html">JWT Debugger</a><br><br>` +
        `<strong>🔐 Security &amp; Cryptography (11 Tools):</strong><br>` +
        `• <a href="/tools/bcrypt-generator.html">Bcrypt Hash</a> | <a href="/tools/aes-encryption-decryption-tool.html">AES-GCM Crypto</a> | <a href="/tools/sha256-hash-generator.html">SHA-256</a> | <a href="/tools/ssl-certificate-decoder.html">SSL Cert Decoder</a> | <a href="/tools/rsa-key-pair-generator.html">RSA Keypair</a> | <a href="/tools/hmac-generator.html">HMAC Signer</a> | <a href="/tools/uuid-generator.html">UUID v4</a><br><br>` +
        `<strong>🚀 DevOps &amp; Webmaster (18 Tools):</strong><br>` +
        `• <a href="/tools/dockerfile-generator.html">Dockerfile Studio</a> | <a href="/tools/crontab-generator.html">Crontab Generator</a> | <a href="/tools/htaccess-generator.html">.htaccess Studio</a> | <a href="/tools/nginx-config-generator.html">Nginx Config</a> | <a href="/tools/meta-tag-generator.html">Meta Tags</a> | <a href="/tools/dns-lookup-tool.html">DNS Lookup</a> | <a href="/tools/curl-command-builder.html">cURL Builder</a><br><br>` +
        `<strong>🖼️ Media &amp; Typography (5 Tools):</strong><br>` +
        `• <a href="/tools/svg-to-css-data-uri.html">SVG to Data URI</a> | <a href="/tools/color-palette-extractor.html">Color Palette</a> | <a href="/tools/favicon-generator.html">Favicon Generator</a> | <a href="/tools/aspect-ratio-calculator.html">Aspect Ratio</a> | <a href="/tools/lorem-ipsum-generator.html">Lorem Ipsum</a><br><br>` +
        `<em>Click any tool name above to launch immediately!</em>`;
    }

    // 7.6 Developer Math & Unit Conversion Check
    const mathAns = solveDeveloperMath(cleanQ);
    if (mathAns) return mathAns;

    // 7.7 High-Precision Typo-Tolerant Tool Matching Engine
    const rawWords = cleanQ.match(/[a-z0-9]+/g) || [];
    const expanded = [];
    for (const w of rawWords) {
      if (ACRONYMS[w]) {
        expanded.push(...ACRONYMS[w].split(' '));
      } else {
        expanded.push(correctWord(w));
      }
    }

    const fullPhrase = expanded.join(' ');
    const tokens = expanded.filter(t => !STOP_WORDS.has(t));
    if (tokens.length === 0) {
      return `I can help you build and debug that! Try asking for a specific tool like <em>"html to jsx"</em>, <em>"px to rem"</em>, <em>"bcrypt hash"</em>, <em>"dockerfile"</em>, or type <em>"show all tools"</em> to explore all 85 tools.`;
    }

    const SYN_MAP = {
      'react': ['jsx', 'component', 'html to jsx'],
      'format': ['formatter', 'beautifier', 'pretty'],
      'prettify': ['formatter', 'beautifier', 'pretty'],
      'encrypt': ['encryption', 'crypto', 'cipher', 'aes'],
      'decrypt': ['decryption', 'crypto', 'cipher', 'aes'],
      'hash': ['sha256', 'bcrypt', 'checksum', 'md5'],
      'minify': ['minifier', 'compress', 'optimize'],
      'container': ['docker', 'dockerfile', 'compose'],
      'schedule': ['cron', 'crontab', 'job'],
      'cert': ['ssl', 'certificate', 'tls'],
      'token': ['jwt', 'bearer', 'auth'],
      'font': ['px to rem', 'clamp', 'typography'],
      'color': ['palette', 'gradient', 'hex', 'rgb']
    };

    let bestTool = null;
    let maxScore = 0;

    for (const tool of TOOLS_DB) {
      let score = 0;
      const rawTitle = (tool.title || '').toLowerCase();
      const cleanTitle = rawTitle.replace(/[\-_]/g, ' ');
      const rawUrl = (tool.url || '').toLowerCase();
      const cleanUrl = rawUrl.replace(/[\-_]/g, ' ');
      const cleanKws = (tool.keywords || []).map(k => k.toLowerCase().replace(/[\-_]/g, ' '));

      const titleWords = cleanTitle.match(/[a-z0-9]+/g) || [];
      const urlWords = cleanUrl.match(/[a-z0-9]+/g) || [];

      // 1. Multi-word phrase matching bonus (e.g. "html to jsx", "px to rem")
      if (expanded.length >= 2) {
        if (cleanTitle.includes(fullPhrase)) score += 220;
        else if (cleanKws.some(kw => kw.includes(fullPhrase))) score += 190;
        else if (cleanUrl.includes(fullPhrase)) score += 160;
      }

      // Also check token-only phrase if stop words were removed
      if (tokens.length >= 2) {
        const tokenPhrase = tokens.join(' ');
        if (tokenPhrase !== fullPhrase) {
          if (cleanTitle.includes(tokenPhrase)) score += 120;
          else if (cleanKws.some(kw => kw.includes(tokenPhrase))) score += 100;
        }
      }

      // 2. Primary root slug bonus
      for (const t of tokens) {
        if (rawUrl.endsWith(`/${t}-generator.html`) || rawUrl.endsWith(`/${t}.html`) || rawUrl.endsWith(`/${t}-tool.html`)) {
          score += 65;
        }
      }

      // 3. Token-level matching
      for (const t of tokens) {
        if (titleWords.includes(t)) {
          score += 50;
        } else if (titleWords.some(w => w.startsWith(t) && t.length >= 3)) {
          score += 30;
        }

        if (urlWords.includes(t)) {
          score += 40;
        } else if (urlWords.some(w => w.startsWith(t) && t.length >= 3)) {
          score += 25;
        }

        for (const kw of cleanKws) {
          if (kw === t) {
            score += 40;
          } else if (kw.includes(t) && t.length >= 3) {
            score += 15;
          }
        }

        const syns = SYN_MAP[t] || [];
        for (const s of syns) {
          if (titleWords.includes(s) || urlWords.includes(s)) score += 25;
          if (cleanKws.some(kw => kw.includes(s))) score += 20;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestTool = tool;
      }
    }

    if (maxScore >= 40 && bestTool) {
      const guideData = GUIDES_MAP[bestTool.url];
      return `<strong>${bestTool.title}</strong><br><br>` +
        `<strong>📋 How to Use This Tool:</strong><br>${bestTool.how_to_use}<br><br>` +
        `<div class="cw-msg-card">` +
          `<strong>📐 Syntax / Architecture:</strong>` +
          `<div class="cw-msg-formula">${bestTool.formula || bestTool.desc}</div>` +
        `</div>` +
        `<div style="font-size:0.78rem; color:#cbd5e1; margin:6px 0;">💡 <strong>Pro Tip:</strong> ${bestTool.pro_tip}</div>` +
        `<div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">` +
          `<a href="${bestTool.url}" class="cw-msg-btn">Open Tool →</a>` +
          (guideData ? `<a href="${guideData.guide_url}" class="cw-msg-btn" style="background:#1e293b; border:1px solid #06b6d4;">📖 Read Guide →</a>` : "") +
        `</div>`;
    }

    // 7.8 General Fallback Guidance (when score < 40)
    return `I can help you build and format that! WebDevWorker features <strong>85 precision developer and DevOps tools</strong> engineered by Zaviyan (${CW_INFO.company}).<br><br>` +
      `Here are popular tools you can explore right now:<br>` +
      `• <a href="/tools/html-to-jsx.html">HTML to JSX &amp; React Component Studio</a><br>` +
      `• <a href="/tools/px-to-rem-converter.html">PX to REM &amp; Clamp Converter</a><br>` +
      `• <a href="/tools/bcrypt-generator.html">Bcrypt Password Hash &amp; Salt Verifier</a><br>` +
      `• <a href="/tools/dockerfile-generator.html">Multi-Stage Dockerfile Studio</a><br>` +
      `• <a href="/tools/jwt-debugger.html">JWT Debugger &amp; Cryptographic Inspector</a><br>` +
      `• <a href="/tools/css-grid-generator.html">CSS Grid Layout Studio</a><br><br>` +
      `You can ask for step-by-step usage, syntax examples for any of the 85 tools, or type <em>"show all tools"</em> to explore the full directory!`;
  }

  // 8. Dynamic Context Chips
  function getContextChips() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('css') || path.includes('flexbox') || path.includes('grid') || path.includes('clamp') || path.includes('shadow') || path.includes('gradient')) {
      return [
        { label: "📐 CSS Clamp Formula", q: "How to use CSS clamp calculator for fluid typography?" },
        { label: "🎨 PX to REM", q: "How to convert 16px to rem?" },
        { label: "✨ Grid vs Flexbox", q: "When should I use CSS Grid vs Flexbox?" },
        { label: "👤 Owner Info", q: "Who created WebDevWorker?" }
      ];
    } else if (path.includes('security') || path.includes('bcrypt') || path.includes('jwt') || path.includes('aes') || path.includes('hash')) {
      return [
        { label: "🔐 Bcrypt Rounds", q: "How many bcrypt salt rounds should I use in 2026?" },
        { label: "🔏 JWT Debugger", q: "How to inspect and debug JWT tokens safely?" },
        { label: "🛡️ AES-GCM Crypto", q: "How does AES-GCM client side encryption work?" },
        { label: "👤 Owner Info", q: "Who is the owner of WebDevWorker?" }
      ];
    } else if (path.includes('docker') || path.includes('cron') || path.includes('htaccess') || path.includes('nginx') || path.includes('dns')) {
      return [
        { label: "🐳 Docker Multi-Stage", q: "How to write an optimized multi-stage Dockerfile?" },
        { label: "⏰ Crontab Syntax", q: "How does crontab schedule syntax work?" },
        { label: "🌐 Nginx vs .htaccess", q: "How to configure clean URLs and security headers?" },
        { label: "📧 Contact Email", q: "What is the official contact email?" }
      ];
    }
    return [
      { label: "⚛️ HTML to JSX", q: "How to convert HTML and SVG to React JSX components?" },
      { label: "🔐 Bcrypt Hash", q: "How to hash passwords with Bcrypt?" },
      { label: "🐳 Dockerfile Studio", q: "How to generate an optimized Dockerfile?" },
      { label: "👤 Owner Info", q: "Who is the owner of WebDevWorker?" },
      { label: "📧 Contact Email", q: "What is the official contact email?" },
      { label: "📚 Guides Hub", q: "Show me the developer guides hub" }
    ];
  }

  // 8. Per-Tool AI Agent Greeting — A-to-Z explainer for the current tool page
  function escAgentHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cleanToolName(s) {
    return String(s || "")
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, "")
      .replace(/\s{2,}/g, " ").trim();
  }

  function getToolPageInfo() {
    try {
      const path = (location.pathname || "").split("?")[0].split("#")[0];
      if (!/\/tools\/[a-z0-9-]+\.html/i.test(path)) return null;

      let name = "";
      const h1 = document.querySelector("main h1, article h1, h1");
      if (h1 && h1.textContent) name = h1.textContent;
      if (!name) {
        const t = document.title || "";
        name = t.split("|")[0].split("—")[0].split("–")[0];
      }
      name = cleanToolName(name);
      if (!name) return null;

      let desc = "";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) desc = meta.getAttribute("content") || "";
      if (!desc) {
        const p = document.querySelector("main p, article p, .tool-desc, .tool-description");
        if (p && p.textContent) desc = p.textContent.trim().slice(0, 220);
      }
      desc = cleanToolName(desc);

      // Harvest labeled controls + action buttons to ground the steps in the real UI
      const chrome = /menu|theme|dark|light|sidebar|close|search|github|home|guides/i;
      const labels = [];
      document.querySelectorAll("main label, article label, .tool-container label, .tool-card label").forEach(function (el) {
        const t = cleanToolName(el.textContent);
        if (t && t.length > 1 && t.length < 60 && !chrome.test(t) && labels.indexOf(t) === -1 && labels.length < 6) labels.push(t);
      });
      const buttons = [];
      document.querySelectorAll("main button, article button, .tool-container button").forEach(function (el) {
        const t = cleanToolName(el.textContent || el.getAttribute("aria-label") || "");
        if (t && t.length > 1 && t.length < 40 && !chrome.test(t) && buttons.indexOf(t) === -1 && buttons.length < 8) buttons.push(t);
      });

      return { path: path, name: name, desc: desc, labels: labels, buttons: buttons };
    } catch (e) { return null; }
  }

  function buildAgentGreeting() {
    const info = getToolPageInfo();
    if (!info) {
      return `\u{1F44B} <strong>Hi! I'm WebDevWorker AI</strong>, your 100% private developer &amp; DevOps assistant.<br><br>` +
        `I can help you convert code (HTML to JSX, PX to REM), debug security tokens, generate Dockerfiles, or explain syntax across all <strong>85 tools</strong>.<br><br>` +
        `<em>Zero server tracking. How can I help you code today?</em>`;
    }

    const guide = GUIDES_MAP[info.path];
    const inLabel = info.labels[0] || "the input field";
    const outLabel = info.labels[1] || info.labels[0] || "the result area";
    const mainBtn = info.buttons[0] || "the main action button";
    const copyBtn = info.buttons.filter(function (b) { return /copy|download|save|export/i.test(b); })[0];

    let steps = `<strong>1.</strong> Enter your data in <strong>${escAgentHtml(inLabel)}</strong> — paste it, type it, or use a sample if the tool offers one.<br>` +
      `<strong>2.</strong> Adjust any options the tool shows (formats, modes, or settings) to match your use case.<br>` +
      `<strong>3.</strong> Click <strong>${escAgentHtml(mainBtn)}</strong> to process your input instantly.<br>` +
      `<strong>4.</strong> Review the output in <strong>${escAgentHtml(outLabel)}</strong> and verify it looks right.`;
    if (copyBtn) {
      steps += `<br><strong>5.</strong> Use <strong>${escAgentHtml(copyBtn)}</strong> to take your result with you.`;
    }

    return `\u{2728} <strong>Welcome to the ${escAgentHtml(info.name)}!</strong><br><br>` +
      (info.desc ? `${escAgentHtml(info.desc)}<br><br>` : "") +
      `<strong>\u{1F4CC} What problem it solves:</strong> ` +
      `It does the heavy lifting in your browser — no installs, no sign-ups, no waiting on a server, and your data never leaves this tab.<br><br>` +
      `<strong>\u{1F9ED} How to use it (step by step):</strong><br>${steps}<br><br>` +
      `<strong>\u{1F4A1} Pro tips:</strong><br>` +
      `• Everything runs <strong>100% client-side</strong> — safe for secrets, tokens, and private code.<br>` +
      `• Works <strong>offline</strong> once loaded, and most tools keep your last input if you reload.<br>` +
      `• Stuck on syntax? Ask me anything below — I know all 85 tools.<br><br>` +
      (guide ? `<a href="${escAgentHtml(guide.guide_url)}" class="cw-msg-btn">\u{1F4D6} Read the full guide: ${escAgentHtml(guide.title)}</a><br><br>` : "") +
      `<em>Ask me anything about this tool — I'll walk you through it.</em>`;
  }

  function initAIWidget() {
    const root = document.createElement("div");
    root.id = "cw-ai-root";

    const toolGreeting = buildAgentGreeting();

    const chips = getContextChips();
    let chipsHtml = "";
    chips.forEach(c => {
      chipsHtml += `<button type="button" class="cw-ai-chip" data-q="${c.q}">${c.label}</button>`;
    });

    root.innerHTML = `
      <div class="cw-ai-launcher" id="cwAiLauncher" role="button" aria-label="Open WebDevWorker AI assistant" tabindex="0">
        <svg class="cw-ai-sparkle-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2l1.9 5.7L19.6 9.6l-5.7 1.9L12 17.2l-1.9-5.7L4.4 9.6l5.7-1.9L12 2z" fill="#ffffff" opacity="0.95"/>
          <path d="M19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z" fill="#ffffff" opacity="0.75"/>
          <path d="M5 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" fill="#ffffff" opacity="0.6"/>
        </svg>
        <span class="cw-ai-launcher-text">Need help?</span>
        <div class="cw-ai-tooltip">Ask WebDevWorker AI</div>
      </div>

      <div class="cw-ai-window" id="cwAiWindow" role="dialog" aria-modal="true">
        <div class="cw-ai-header">
          <div class="cw-ai-brand">
            <div class="cw-ai-avatar">⚡</div>
            <div class="cw-ai-title-wrap">
              <div class="cw-ai-title">
                <span>WebDevWorker AI</span>
                <span class="cw-ai-status-dot" title="100% Client-Side Engine Ready"></span>
              </div>
              <div class="cw-ai-subtitle">by Zaviyan LLC &bull; 85 Tools Trained</div>
            </div>
          </div>
          <button type="button" class="cw-ai-close-btn" id="cwAiClose" aria-label="Close Assistant">&times;</button>
        </div>

        <div class="cw-ai-chips">
          ${chipsHtml}
        </div>

        <div class="cw-ai-messages" id="cwAiMessages">
          <div class="cw-msg bot">
            ${toolGreeting}
          </div>
        </div>

        <form class="cw-ai-footer" id="cwAiForm">
          <input type="text" class="cw-ai-input" id="cwAiInput" placeholder="Ask about tools, code, or syntax..." autocomplete="off" />
          <button type="submit" class="cw-ai-send-btn" id="cwAiSend">Send</button>
        </form>
      </div>
    `;

    document.body.appendChild(root);

    const launcher = document.getElementById("cwAiLauncher");
    const windowEl = document.getElementById("cwAiWindow");
    const closeBtn = document.getElementById("cwAiClose");
    const form = document.getElementById("cwAiForm");
    const input = document.getElementById("cwAiInput");
    const messagesEl = document.getElementById("cwAiMessages");

    function toggleOpen() {
      windowEl.classList.toggle("open");
      if (windowEl.classList.contains("open")) {
        setTimeout(() => input.focus(), 100);
      }
    }

    launcher.addEventListener("click", toggleOpen);
    launcher.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleOpen();
      }
    });
    closeBtn.addEventListener("click", () => windowEl.classList.remove("open"));

    // Chip triggers
    root.querySelectorAll(".cw-ai-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const q = chip.getAttribute("data-q");
        if (q) {
          handleUserQuery(q);
        }
      });
    });

    function appendMessage(text, sender) {
      const msg = document.createElement("div");
      msg.className = `cw-msg ${sender}`;
      msg.innerHTML = text;
      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // ---- WebDevWorker Live AI (server) with offline fallback ----------------
    var aiLiveMode = "unknown"; // "unknown" | "on" | "off"
    var aiToolSlug = (function () {
      try {
        var m = location.pathname.match(/\/tools\/([a-z0-9-]+)\.html/i);
        return m ? m[1] : "developer-tools";
      } catch (e) { return "developer-tools"; }
    })();

    function setAiLiveDot() {
      var dot = root.querySelector(".cw-ai-status-dot");
      if (dot) dot.setAttribute("title", aiLiveMode === "on" ? "Live AI connected" : "Offline engine ready");
    }

    function escapeLiveHtml(s) {
      return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
    }

    function showTyping() {
      var t = document.createElement("div");
      t.className = "cw-msg bot cw-ai-typing";
      t.innerHTML = '<span style="opacity:.75">\u26a1 Thinking\u2026</span>';
      messagesEl.appendChild(t);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return t;
    }

    function answerOffline(cleanQ, typingEl, note) {
      if (typingEl) typingEl.remove();
      var botResponse = resolveKnowledge(cleanQ);
      if (note) botResponse += '<br><br><span style="opacity:.65;font-size:.85em">' + note + "</span>";
      appendMessage(botResponse, "bot");
    }

    function tryLiveAnswer(cleanQ, typingEl) {
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, 15000);
      fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: aiToolSlug, question: cleanQ.slice(0, 600) }),
        signal: ctrl.signal,
      })
        .then(function (r) {
          clearTimeout(timer);
          if (!r.ok) throw new Error("http_" + r.status);
          return r.json();
        })
        .then(function (data) {
          if (!data || !data.answer) throw new Error("empty");
          aiLiveMode = "on";
          setAiLiveDot();
          if (typingEl) typingEl.remove();
          appendMessage(escapeLiveHtml(data.answer), "bot");
        })
        .catch(function () {
          aiLiveMode = "off"; // session fallback: stay offline from here on
          setAiLiveDot();
          answerOffline(cleanQ, typingEl, "Live AI unavailable \u2014 showing offline help.");
        });
    }

    function handleUserQuery(q) {
      if (!q || !q.trim()) return;
      const cleanQ = q.trim();
      appendMessage(cleanQ.replace(/</g, "&lt;").replace(/>/g, "&gt;"), "user");
      input.value = "";

      var offlineOnly = aiLiveMode === "off" || (typeof navigator !== "undefined" && navigator.onLine === false);
      if (offlineOnly) {
        setTimeout(function () { answerOffline(cleanQ, null, null); }, 60);
        return;
      }
      var typingEl = showTyping();
      tryLiveAnswer(cleanQ, typingEl);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleUserQuery(input.value);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAIWidget);
  } else {
    initAIWidget();
  }
})();
