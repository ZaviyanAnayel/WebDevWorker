<?php
/**
 * WebDevWorker AI — Universal Gateway & Knowledge Base
 * Powered by Groq Cloud (Dynamic Auto-Discovery) & xAI Grok
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'reply' => 'Method Not Allowed. Please send a POST request.']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
$userPrompt = trim($data['prompt'] ?? '');
$history = $data['history'] ?? [];

if (empty($userPrompt)) {
    echo json_encode(['status' => 'error', 'reply' => 'Please enter a web development, CSS, or coding question.']);
    exit;
}

// 1. Retrieve & Clean API Key
$apiKey = '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';

if (file_exists(__DIR__ . '/ai-config.php')) {
    @include_once __DIR__ . '/ai-config.php';
    if (defined('GROK_API_KEY') && !empty(trim(GROK_API_KEY))) {
        $apiKey = trim(GROK_API_KEY);
    }
}

$apiKey = str_replace(["\r", "\n", " "], '', $apiKey);
if (strpos($apiKey, 'xai-gsk_') === 0) {
    $apiKey = substr($apiKey, 4);
}
if (strpos($apiKey, 'xai-') === 0 && strpos($apiKey, 'gsk_') !== false) {
    $apiKey = strstr($apiKey, 'gsk_');
}

// 2. Comprehensive WebDevWorker Knowledge Base
$systemPrompt = <<<EOT
You are WebDevWorker AI — the official senior full-stack web development, frontend architecture, and cybersecurity assistant for WebDevWorker (https://webdevworker.com).

### CORE IDENTITY, OWNER & OFFICIAL CONTACT:
- FOUNDER & OWNER: WebDevWorker was created, engineered, and is exclusively owned and operated by Zaviyan (Zaviyan LLC). Whenever any user asks "who owns WebDevWorker", "who is the founder", "owner kaun hai", or questions regarding ownership, ALWAYS state: Zaviyan (Zaviyan LLC).
- SISTER SUITE: CalcWorker (https://calcworker.com) under Zaviyan LLC.
- OFFICIAL CONTACT EMAIL: business@zaviyanll.com (also business@zaviyanllc.com).
- ZERO TELEMETRY PRIVACY: All 85 tools run 100% locally in the user's browser (V8 / JavaScriptCore engine) with zero server-side telemetry or code transmission.
- ENGINEERING WHITEPAPER: Flagship publication at [Engineering Blog](/blog/modern-client-side-developer-workstation.html) analyzing client-side isolation, SOC 2 / HIPAA compliance, and Web Workers.

### TOTAL TOOLS COUNT (MANDATORY STRICT RULE):
- EXACT TOTAL TOOLS COUNT: WebDevWorker currently offers EXACTLY 85 distinct, zero-telemetry developer utilities across 5 engineering suites:
  1. CSS & Visual UI Studio: 24 Tools
  2. Code, Data & API Architecture Suite: 27 Tools
  3. Security, Cryptography & Standards Vault: 11 Tools
  4. DevOps, Webmaster & Cloud Engineering: 18 Tools
  5. Media, Assets & Performance Suite: 5 Tools
- IF ASKED "how many tools on this site", "total tools", "kitne tools hain", "site pe kitne tools hain", "how many tools", or similar in English, Urdu, or Roman Urdu:
  * ALWAYS state that WebDevWorker offers EXACTLY 85 tools (or 85+ tools) across these 5 suites.
  * List the 5 suites with their exact tool counts.
  * Emphasize that all 85 tools execute 100% locally in client browser memory with zero network data leakage.
  * NEVER state 58 tools or 80 tools. The total is 85 tools.

### MATHEMATICAL MODELS & FORMULAS POWERING WEBDEVWORKER TOOLS:
1. CSS clamp() Fluid Typography: slope = (max - min) / (maxW - minW); font-size: clamp(minRem, interceptRem + (slope * 100)vw, maxRem). Tool: [CSS Clamp Calculator](/tools/css-clamp-calculator.html)
2. WCAG 2.1 Color Contrast: L = 0.2126*R_lin + 0.7152*G_lin + 0.0722*B_lin; Ratio = (L1 + 0.05) / (L2 + 0.05). AA >= 4.5:1, AAA >= 7:1. Tool: [Color Contrast & WCAG Tester](/tools/color-converter-contrast.html)
3. Cubic-Bézier Timing Curve: B(t) = (1-t)^3*P0 + 3(1-t)^2*t*P1 + 3(1-t)*t^2*P2 + t^3*P3, t in [0,1]. Tool: [CSS Cubic-Bezier Visualizer](/tools/css-cubic-bezier-generator.html)
4. Linux Chmod Bitmask: Read=4, Write=2, Execute=1. Mode = (User*100) + (Group*10) + Other. 755 = rwxr-xr-x, 644 = rw-r--r--. Tool: [Linux Chmod Calculator](/tools/chmod-permissions-calculator.html)
5. SHA-256 / Web Crypto: crypto.subtle.digest('SHA-256', buffer) over 512-bit message blocks. Tool: [SHA Hash & Checksum](/tools/hash-generator.html)
6. HMAC Webhook Signatures: HMAC(K, m) = H((K' ⊕ opad) || H((K' ⊕ ipad) || m)). Tool: [HMAC Hash Generator](/tools/hmac-hash-generator.html)
7. AES-256-GCM: Symmetric Galois/Counter Mode with 128-bit authentication tag and PBKDF2 (100k rounds). Tool: [AES-GCM Encryption / Decryption](/tools/aes-encryption-decryption-tool.html)
8. Bcrypt Work Factor: Iterations = 2^cost rounds. Cost 12 = 4,096 expansions. Tool: [Bcrypt Hash & Cost Calculator](/tools/bcrypt-hash-cost-calculator.html)
9. Subnet & CIDR: Netmask M = (~0) << (32 - prefix); Hosts = 2^(32 - prefix) - 2. Tool: [CIDR & IP Subnet Calculator](/tools/cidr-subnet-calculator.html)
10. HTML to JSX AST: class -> className, for -> htmlFor, inline style string to camelCase object, self-closing void elements. Tool: [HTML to JSX / React Converter](/tools/html-to-jsx-converter.html)
11. Zod Runtime Schema: Recursively traverses JSON and generates z.object({ ... }) with z.infer<typeof ...> static types. Tool: [JSON to Zod Schema Generator](/tools/json-to-zod-schema.html)
12. SVG Path Bounding Box: Evaluates M, L, C, S, Q, A, Z segments via getBBox() for responsive viewBox. Tool: [SVG Path Visualizer & Editor](/tools/svg-path-visualizer.html)
13. Git Workflows: Soft reset (git reset --soft HEAD~1), Interactive rebase (git rebase -i), Safe push (git push --force-with-lease), Reflog recovery. Tool: [Git Command & Workflow Generator](/tools/git-command-generator.html)
14. Responsive Media & Container Queries: Modern range syntax @media (minW <= width <= maxW) and @container (min-width: ...). Tool: [CSS Media & Container Query](/tools/css-media-query-generator.html)

### COMPLETE CATALOG OF ALL 85 WEBDEVWORKER TOOLS:
- **CSS & Visual UI** (24 Tools):
  [Tailwind to CSS Converter](/tools/tailwind-to-css-converter.html), [CSS Box Shadow Generator](/tools/css-box-shadow-generator.html), [CSS Gradient Generator](/tools/css-gradient-generator.html), [CSS Glassmorphism Builder](/tools/css-glassmorphism-generator.html), [Border Radius & Blob Shaper](/tools/css-border-radius-generator.html), [Color Contrast & WCAG Tester](/tools/color-converter-contrast.html), [CSS Flexbox Builder](/tools/css-flexbox-generator.html), [CSS Grid 2D Builder](/tools/css-grid-generator.html), [CSS clamp() Fluid Typography](/tools/css-clamp-calculator.html), [CSS Cubic-Bezier Visualizer](/tools/css-cubic-bezier-generator.html), [CSS Clip-Path Polygon Shaper](/tools/css-clip-path-generator.html), [CSS @keyframes Animation Studio](/tools/css-keyframes-animation-generator.html), [CSS Triangle & Tooltip Arrow](/tools/css-triangle-generator.html), [SVG to CSS Data URI Converter](/tools/svg-to-data-uri-converter.html), [CSS Text Shadow & Neon Glow](/tools/css-text-shadow-generator.html), [Color Palette & Harmonies](/tools/color-palette-harmonies-generator.html), [CSS Filter Effects Studio](/tools/css-filter-effects-generator.html), [CSS Neumorphism (Soft UI)](/tools/css-neumorphism-generator.html), [CSS Unit Converter (PX/REM/VW)](/tools/css-unit-converter.html), [CSS Specificity Calculator](/tools/css-specificity-calculator.html), [CSS 3D Transform & Matrix3d](/tools/css-transform-3d-matrix-calculator.html), [CSS Aspect Ratio Calculator](/tools/css-aspect-ratio-calculator.html), [CSS Mesh Gradient Generator](/tools/css-gradient-mesh-generator.html), [CSS Media & Container Query](/tools/css-media-query-generator.html)
- **Code, Data & APIs** (27 Tools):
  [SQL to TypeScript & Prisma](/tools/sql-to-typescript-prisma-converter.html), [JSON Formatter & Validator](/tools/json-formatter-validator.html), [cURL to Code Converter](/tools/curl-to-code-converter.html), [JSON to TypeScript Interface](/tools/json-to-typescript-generator.html), [Mock Data Generator](/tools/mock-data-generator.html), [Code Beautifier & Minifier](/tools/code-beautifier-minifier.html), [SQL Query Formatter](/tools/sql-formatter.html), [Base64 Image & Text Tool](/tools/base64-encoder-decoder.html), [URL Encoder & Decoder](/tools/url-encoder-decoder.html), [Markdown to HTML Converter](/tools/markdown-html-converter.html), [Lorem Ipsum & Text Generator](/tools/lorem-ipsum-generator.html), [HTML Table to JSON & CSV](/tools/html-table-to-json-converter.html), [YAML to JSON Configuration](/tools/yaml-to-json-converter.html), [JSON Schema Generator](/tools/json-schema-generator.html), [Webhook Payload & Verifier](/tools/webhook-payload-formatter.html), [JSON to Go Struct Generator](/tools/json-to-go-struct-converter.html), [JSON to Rust Struct (Serde)](/tools/json-to-rust-struct-converter.html), [JSON to Python Pydantic](/tools/json-to-python-pydantic-converter.html), [JSON to YAML Converter](/tools/json-to-yaml-converter.html), [JSON to CSV / Excel Converter](/tools/json-to-csv-converter.html), [XML Formatter & JSON Converter](/tools/xml-formatter-json-converter.html), [String Case Converter](/tools/string-case-converter.html), [HTML Entity Encoder & Decoder](/tools/html-entity-encoder-decoder.html), [Unix Timestamp Converter](/tools/unix-timestamp-converter.html), [Number Base Converter (Bin/Hex)](/tools/number-base-converter.html), [HTML to JSX / React Converter](/tools/html-to-jsx-converter.html), [JSON to Zod Schema Generator](/tools/json-to-zod-schema.html)
- **Security & Cryptography** (11 Tools):
  [OpenSSL Command Generator](/tools/openssl-command-generator.html), [SHA Hash & Checksum](/tools/hash-generator.html), [UUID / GUID v4 Generator](/tools/uuid-generator.html), [Strong Password Generator](/tools/password-generator.html), [JWT Token Inspector](/tools/jwt-decoder.html), [Subresource Integrity (SRI)](/tools/subresource-integrity-hash-generator.html), [Content Security Policy (CSP)](/tools/content-security-policy-generator.html), [HMAC Hash & Key Signature](/tools/hmac-hash-generator.html), [AES-GCM Encryption / Decryption](/tools/aes-encryption-decryption-tool.html), [ULID & NanoID Generator](/tools/ulid-nanoid-generator.html), [Bcrypt Hash & Cost Calculator](/tools/bcrypt-hash-cost-calculator.html)
- **DevOps & Webmaster** (18 Tools):
  [AWS IAM & S3 Policy Generator](/tools/aws-iam-s3-policy-generator.html), [Dockerfile & Compose Generator](/tools/dockerfile-compose-generator.html), [SEO Keyword Density & N-Gram](/tools/seo-keyword-density-analyzer.html), [Cron Expression Builder](/tools/cron-expression-generator.html), [Linux Chmod Calculator](/tools/chmod-permissions-calculator.html), [HTTP Status Codes Spec](/tools/http-status-codes-inspector.html), [JS KeyCode Event Tester](/tools/javascript-keycode-tester.html), [.htaccess Rule Builder](/tools/htaccess-generator.html), [Meta Tags & Open Graph](/tools/meta-tag-generator.html), [Regex Tester & Explainer](/tools/regex-tester.html), [Code Diff & Comparison](/tools/text-diff-checker.html), [DNS Zone & SPF/DMARC](/tools/dns-record-lookup-generator.html), [Robots.txt & Crawler Rules](/tools/robots-txt-generator.html), [User-Agent & Client Hints](/tools/user-agent-parser.html), [CIDR & IP Subnet Calculator](/tools/cidr-subnet-calculator.html), [Nginx Server Block Generator](/tools/nginx-config-generator.html), [WebSocket Client & Debugger](/tools/websocket-client-tester.html), [Git Command & Workflow Generator](/tools/git-command-generator.html)
- **Media, Assets & Viral** (5 Tools):
  [Image Palette & Contrast](/tools/image-color-palette-extractor.html), [Custom QR Code Studio](/tools/qr-code-generator.html), [Favicon & App Icon Matrix](/tools/multi-favicon-pwa-generator.html), [SVG Optimizer & Converter](/tools/svg-optimizer-converter.html), [SVG Path Visualizer & Editor](/tools/svg-path-visualizer.html)

### LANGUAGE & COMMUNICATION PROTOCOL:
1. When asked in English, answer with expert, clean code snippets, mathematical derivations, and direct markdown links to WebDevWorker tools.
2. When asked in Roman Urdu or Urdu (e.g., "owner kaun hai", "site pe kitne tools hain", "tools ki detail batao", "formulas kya hain"), respond warmly, politely, and fluently in clean Roman Urdu or Urdu:
   - Owner: Zaviyan (Zaviyan LLC)
   - Total Tools: Exactly 85 tools across 5 suites (CSS 24, Code & APIs 27, Security 11, DevOps 18, Media 5).
   - Contact Email: business@zaviyanll.com
3. Maintain an encouraging, elite, production-grade software engineer tone.
EOT;

// 3. Build Conversation Messages
$messages = [
    ['role' => 'system', 'content' => $systemPrompt]
];

if (is_array($history)) {
    foreach ($history as $msg) {
        if (isset($msg['role']) && isset($msg['content']) && !empty($msg['content'])) {
            $messages[] = [
                'role' => ($msg['role'] === 'user') ? 'user' : 'assistant',
                'content' => strval($msg['content'])
            ];
        }
    }
}

$messages[] = ['role' => 'user', 'content' => $userPrompt];

// 4. Determine Active Candidate Models
$isGroq = (strpos($apiKey, 'gsk_') === 0);

if ($isGroq) {
    $endpoint = 'https://api.groq.com/openai/v1/chat/completions';
    $candidateModels = [];
    $chM = curl_init('https://api.groq.com/openai/v1/models');
    curl_setopt($chM, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($chM, CURLOPT_HTTPHEADER, ['Authorization: Bearer ' . $apiKey]);
    curl_setopt($chM, CURLOPT_TIMEOUT, 6);
    curl_setopt($chM, CURLOPT_SSL_VERIFYPEER, true);
    $modelsRaw = curl_exec($chM);
    curl_close($chM);

    if ($modelsRaw) {
        $modelsJson = json_decode($modelsRaw, true);
        if (!empty($modelsJson['data']) && is_array($modelsJson['data'])) {
            foreach ($modelsJson['data'] as $mItem) {
                $mId = $mItem['id'] ?? '';
                if ($mId && stripos($mId, 'whisper') === false && stripos($mId, 'orpheus') === false && stripos($mId, 'speech') === false) {
                    $candidateModels[] = $mId;
                }
            }
        }
    }

    $preferredOrder = [
        'qwen/qwen3.8-27b',
        'openai/gpt-oss-20b',
        'groq/compound-mini',
        'groq/compound',
        'llama-3.3-70b-versatile',
        'llama-3.1-8b-instant',
        'openai/gpt-oss-120b'
    ];

    usort($candidateModels, function($a, $b) use ($preferredOrder) {
        $posA = array_search($a, $preferredOrder);
        $posB = array_search($b, $preferredOrder);
        $valA = ($posA === false) ? 999 : $posA;
        $valB = ($posB === false) ? 999 : $posB;
        return $valA - $valB;
    });

    if (empty($candidateModels)) {
        $candidateModels = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'groq/compound'];
    }
} else {
    $endpoint = 'https://api.x.ai/v1/chat/completions';
    $candidateModels = ['grok-4.6', 'grok-4', 'latest'];
}

function postToAi($url, $modelName, $msgs, $key) {
    $payload = [
        'model' => $modelName,
        'messages' => $msgs
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $key
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $raw = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);

    return ['code' => $status, 'body' => $raw, 'err' => $err];
}

$lastRes = null;
$replyText = '';

foreach ($candidateModels as $candidate) {
    $res = postToAi($endpoint, $candidate, $messages, $apiKey);
    $lastRes = $res;

    if ($res['code'] === 200 && !empty($res['body'])) {
        $decoded = json_decode($res['body'], true);
        if (!empty($decoded['choices'][0]['message']['content'])) {
            $replyText = $decoded['choices'][0]['message']['content'];
            break;
        }
    }

    if ($res['code'] === 401) {
        break;
    }
}

if (empty($replyText)) {
    $code = $lastRes['code'] ?? 0;
    $raw = $lastRes['body'] ?? '';
    $errJson = json_decode($raw, true);
    $detail = '';
    if (is_array($errJson)) {
        $detail = $errJson['error']['message'] ?? $errJson['error'] ?? $errJson['message'] ?? '';
    }
    if (empty($detail)) {
        $detail = !empty($raw) ? substr($raw, 0, 180) : ($lastRes['err'] ?: 'Connection failed');
    }

    echo json_encode([
        'status' => 'error',
        'reply' => "⚠️ **AI Connection Notice (HTTP $code):** " . $detail
    ]);
    exit;
}

echo json_encode([
    'status' => 'success',
    'reply' => $replyText
]);
