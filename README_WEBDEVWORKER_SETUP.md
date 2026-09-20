# WebDevWorker.com — Complete Master Production Build (A to Z)

Yeh package **WebDevWorker.com** ki mukammal production-ready website hai, jisme tamam 18 high-precision developer utilities, luxury gold branding, integrated AI assistant (Groq powered), aur 100% offline PWA engine shamil hai.

---

## 📂 Architecture Overview

1. **Brand Identity & Theme:**
   - Official luxury metallic gold (`#eab308`) aur deep slate (`#0f172a`) styling.
   - Vector SVG logo (`assets/webdevworker-logo-horizontal.svg`), Favicon, aur 512x512 PWA icons.
   - Zero-flicker instant hardware dark/light mode toggle.

2. **Backend & AI Assistant:**
   - `ai-config.php`: Pre-configured with Groq API key (`gsk_...`).
   - `ai-handler.php`: Dual-gateway with dynamic model auto-discovery (Llama 3.3 70B versatile & xAI Grok). Full knowledge base of all 18 developer utilities, regex patterns, CSS properties, and links.

3. **PWA & Offline System:**
   - `manifest.json`: Web app manifest for 1-click desktop/mobile app install.
   - `sw.js`: Resilient Service Worker caching all 18 tools and assets for guaranteed 100% offline usage.
   - Universal offline notification strip with 10-second recurring shimmer wave.

4. **18 High-Precision Developer Tools:**
   - **CSS & Visual UI:**
     1. CSS Box Shadow & Glow Generator (`/tools/css-box-shadow-generator.html`)
     2. CSS Gradient Generator (`/tools/css-gradient-generator.html`)
     3. CSS Glassmorphism Generator (`/tools/css-glassmorphism-generator.html`)
     4. Border Radius & Blob Shaper (`/tools/css-border-radius-generator.html`)
     5. Color Contrast & WCAG 2.1 Checker (`/tools/color-converter-contrast.html`)
   - **Data & Encoders:**
     6. JSON Formatter, Validator & Minifier (`/tools/json-formatter-validator.html`)
     7. Base64 Image & Text Encoder/Decoder (`/tools/base64-encoder-decoder.html`)
     8. URL Encoder & Component Decoder (`/tools/url-encoder-decoder.html`)
     9. Markdown to HTML Converter (`/tools/markdown-html-converter.html`)
     10. Lorem Ipsum & Dummy Text Generator (`/tools/lorem-ipsum-generator.html`)
   - **Security & Cryptography:**
     11. SHA-256, SHA-512 & SHA-1 Hash Generator (`/tools/hash-generator.html`)
     12. UUID / GUID v4 Bulk Generator (`/tools/uuid-generator.html`)
     13. Strong Password & Entropy Generator (`/tools/password-generator.html`)
     14. JWT (JSON Web Token) Inspector (`/tools/jwt-decoder.html`)
   - **Webmaster & Regex:**
     15. .htaccess Rule & 301 Redirect Builder (`/tools/htaccess-generator.html`)
     16. Meta Tag & Open Graph Social Previewer (`/tools/meta-tag-generator.html`)
     17. Regex Tester & Pattern Matcher (`/tools/regex-tester.html`)
     18. Code Diff & Text Comparison Tool (`/tools/text-diff-checker.html`)

5. **Google Monetization & SEO:**
   - Google AdSense Auto Ads tag (`ca-pub-3405098265613384`) on every page.
   - Google Analytics tag (`G-1QCQNSCVQM`) on every page.
   - Complete `sitemap.xml` and `robots.txt`.
   - Contextual internal linking between all related tools.

---

## 🚀 cPanel Setup (Addon Domain - Step by Step)

Aapki maujooda Namecheap Stellar Plus hosting par **Unlimited Domains** allow hain. Isay setup karne ka 2-minute tareeqa:

1. **Domain Nameservers:**
   - Namecheap Dashboard par ja kar `webdevworker.com` ke Nameservers check karein ke wo **Namecheap Web Hosting DNS** par set hon.
2. **cPanel mein Addon Domain Banayein:**
   - cPanel open karein -> **Domains** section mein jayein.
   - **"Create A New Domain"** par click karein.
   - Domain Name: `webdevworker.com`
   - Document Root: `webdevworker.com` (ya `public_html/webdevworker.com`).
   - "Submit" daba dein.
3. **ZIP Upload & Extract:**
   - cPanel File Manager mein `webdevworker.com` folder ke andar jayein.
   - Is ZIP file ko upload karein aur **Extract** kar dein.
4. **Live Check:**
   - Browser mein `https://webdevworker.com` open karein — aapka world-class developer suite live chal raha hoga!
