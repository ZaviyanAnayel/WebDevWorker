/**
 * WebDevWorker — Universal Common Client Shell (v2 Categorized Master Suite)
 * Handles Categorized Sidebar Headings, Dark/Light Mode, Instant Search & Offline PWA
 */

(function() {
  'use strict';

    const CATEGORIES_DATA = [{"name":"Overview","tools":[["/","Dashboard","⚡"]]},{"name":"CSS & Visual UI","tools":[["tailwind-to-css-converter.html","Tailwind to CSS Converter","🎨"],["css-box-shadow-generator.html","CSS Box Shadow Generator","🎨"],["css-gradient-generator.html","CSS Gradient Generator","🌈"],["css-glassmorphism-generator.html","CSS Glassmorphism Builder","🧊"],["css-border-radius-generator.html","Border Radius & Blob Shaper","🟣"],["color-converter-contrast.html","Color Contrast & WCAG Tester","🎭"],["css-flexbox-generator.html","CSS Flexbox Builder","📐"],["css-grid-generator.html","CSS Grid 2D Builder","🔲"],["css-clamp-calculator.html","CSS clamp() Fluid Typography","🔤"],["css-cubic-bezier-generator.html","CSS Cubic-Bezier Visualizer","⚡"],["css-clip-path-generator.html","CSS Clip-Path Polygon Shaper","✂️"],["css-keyframes-animation-generator.html","CSS @keyframes Animation Studio","🎬"],["css-triangle-generator.html","CSS Triangle & Tooltip Arrow","▲"],["svg-to-data-uri-converter.html","SVG to CSS Data URI Converter","🖼️"],["css-text-shadow-generator.html","CSS Text Shadow & Neon Glow","✨"],["color-palette-harmonies-generator.html","Color Palette & Harmonies","🎨"],["css-filter-effects-generator.html","CSS Filter Effects Studio","🎭"],["css-neumorphism-generator.html","CSS Neumorphism (Soft UI)","🔘"],["css-unit-converter.html","CSS Unit Converter (PX/REM/VW)","📐"],["css-specificity-calculator.html","CSS Specificity Calculator","🎯"],["css-transform-3d-matrix-calculator.html","CSS 3D Transform & Matrix3d","🧊"],["css-aspect-ratio-calculator.html","CSS Aspect Ratio Calculator","📺"],["css-gradient-mesh-generator.html","CSS Mesh Gradient Generator","🌌"]]},{"name":"Code, Data & APIs","tools":[["sql-to-typescript-prisma-converter.html","SQL to TypeScript & Prisma","🔷"],["json-formatter-validator.html","JSON Formatter & Validator","📋"],["curl-to-code-converter.html","cURL to Code Converter","💻"],["json-to-typescript-generator.html","JSON to TypeScript Interface","🔷"],["mock-data-generator.html","Mock Data Generator","🎲"],["code-beautifier-minifier.html","Code Beautifier & Minifier","🧹"],["sql-formatter.html","SQL Query Formatter","🗄️"],["base64-encoder-decoder.html","Base64 Image & Text Tool","🔤"],["url-encoder-decoder.html","URL Encoder & Decoder","🔗"],["markdown-html-converter.html","Markdown to HTML Converter","📝"],["lorem-ipsum-generator.html","Lorem Ipsum & Text Generator","📄"],["html-table-to-json-converter.html","HTML Table to JSON & CSV","📊"],["yaml-to-json-converter.html","YAML to JSON Configuration","📜"],["json-schema-generator.html","JSON Schema Generator","🛡️"],["webhook-payload-formatter.html","Webhook Payload & Verifier","⚡"],["json-to-go-struct-converter.html","JSON to Go Struct Generator","🐹"],["json-to-rust-struct-converter.html","JSON to Rust Struct (Serde)","🦀"],["json-to-python-pydantic-converter.html","JSON to Python Pydantic","🐍"],["json-to-yaml-converter.html","JSON to YAML Converter","📑"],["json-to-csv-converter.html","JSON to CSV / Excel Converter","📊"],["xml-formatter-json-converter.html","XML Formatter & JSON Converter","🏷️"],["string-case-converter.html","String Case Converter","🔠"],["html-entity-encoder-decoder.html","HTML Entity Encoder & Decoder","🔡"],["unix-timestamp-converter.html","Unix Timestamp Converter","⏱️"],["number-base-converter.html","Number Base Converter (Bin/Hex)","🔢"]]},{"name":"Security & Cryptography","tools":[["openssl-command-generator.html","OpenSSL Command Generator","🔒"],["hash-generator.html","SHA Hash & Checksum","🔒"],["uuid-generator.html","UUID / GUID v4 Generator","🆔"],["password-generator.html","Strong Password Generator","🔑"],["jwt-decoder.html","JWT Token Inspector","🛡️"],["subresource-integrity-hash-generator.html","Subresource Integrity (SRI)","🌐"],["content-security-policy-generator.html","Content Security Policy (CSP)","🛡️"],["hmac-hash-generator.html","HMAC Hash & Key Signature","🔐"],["aes-encryption-decryption-tool.html","AES-GCM Encryption / Decryption","🗝️"],["ulid-nanoid-generator.html","ULID & NanoID Generator","🆔"],["bcrypt-hash-cost-calculator.html","Bcrypt Hash & Cost Calculator","🧮"]]},{"name":"DevOps & Webmaster","tools":[["aws-iam-s3-policy-generator.html","AWS IAM & S3 Policy Generator","☁️"],["dockerfile-compose-generator.html","Dockerfile & Compose Generator","🐳"],["seo-keyword-density-analyzer.html","SEO Keyword Density & N-Gram","🔍"],["cron-expression-generator.html","Cron Expression Builder","⏰"],["chmod-permissions-calculator.html","Linux Chmod Calculator","🛡️"],["http-status-codes-inspector.html","HTTP Status Codes Spec","🌐"],["javascript-keycode-tester.html","JS KeyCode Event Tester","⌨️"],["htaccess-generator.html",".htaccess Rule Builder","⚙️"],["meta-tag-generator.html","Meta Tags & Open Graph","🏷️"],["regex-tester.html","Regex Tester & Explainer","🔍"],["text-diff-checker.html","Code Diff & Comparison","⚖️"],["dns-record-lookup-generator.html","DNS Zone & SPF/DMARC","🌐"],["robots-txt-generator.html","Robots.txt & Crawler Rules","🤖"],["user-agent-parser.html","User-Agent & Client Hints","📱"],["cidr-subnet-calculator.html","CIDR & IP Subnet Calculator","🌐"],["nginx-config-generator.html","Nginx Server Block Generator","⚡"],["websocket-client-tester.html","WebSocket Client & Debugger","📡"]]},{"name":"Media, Assets & Viral","tools":[["image-color-palette-extractor.html","Image Palette & Contrast","🎨"],["qr-code-generator.html","Custom QR Code Studio","📱"],["multi-favicon-pwa-generator.html","Favicon & App Icon Matrix","📦"],["svg-optimizer-converter.html","SVG Optimizer & Converter","⚡"]]}];

  function renderSidebar() {
    const nav = document.querySelector('.sidebar-nav');
    if (!nav) return;

    // If nav is empty, generate it; otherwise keep pre-rendered markup
    if (!nav.querySelector('.nav-group-wrapper')) {
      let html = '';

      CATEGORIES_DATA.forEach(cat => {
        html += '<div class="nav-group-wrapper" style="margin-bottom:14px;">';
        html += `<div class="nav-group-title" style="font-size:0.75rem;text-transform:uppercase;color:var(--brand-primary);background:rgba(234,179,8,0.08);border-left:3px solid var(--brand-primary);padding:6px 12px;margin:12px 6px 6px;border-radius:0 6px 6px 0;font-weight:800;letter-spacing:1px;">${cat.name}</div>`;
        html += '<ul style="list-style:none;margin:0;padding:0;">';

        cat.tools.forEach(tool => {
          const slug = tool[0];
          const title = tool[1];
          const icon = tool[2];
          const href = slug === '/' ? '/' : `/tools/${slug}`;

          // Resilient URL matching (handles .html or clean URLs)
          const currentPath = window.location.pathname.toLowerCase().replace(/\.html$/g, '').replace(/^\/+/g, '');
          const cleanSlug = slug.toLowerCase().replace(/\.html$/g, '').replace(/^\/+/g, '');

          const isCurrent = (cleanSlug === '' && (currentPath === '' || currentPath === 'index')) || 
                            (cleanSlug !== '' && (currentPath.endsWith(cleanSlug) || currentPath.includes(cleanSlug)));

          const activeClass = isCurrent ? ' active' : '';
          const activeStyle = isCurrent
            ? 'display:flex;align-items:center;gap:10px;padding:9px 12px;text-decoration:none;font-size:0.85rem;border-radius:8px;margin:2px 4px;font-weight:700;transition:all 0.15s ease;background:linear-gradient(90deg, rgba(234,179,8,0.22) 0%, rgba(234,179,8,0.06) 100%) !important;color:#eab308 !important;border-left:4px solid #eab308 !important;box-shadow:inset 0 0 14px rgba(234,179,8,0.12) !important;'
            : 'display:flex;align-items:center;gap:10px;padding:8px 12px;text-decoration:none;color:var(--text-main);font-size:0.84rem;border-radius:var(--radius-sm);margin:1px 4px;font-weight:600;transition:all 0.15s ease;';

          const titleStyle = isCurrent ? 'color:#eab308 !important;font-weight:700;' : '';
          const dotIndicator = isCurrent ? '<span style="width:8px;height:8px;border-radius:50%;background:#eab308;box-shadow:0 0 10px #eab308;margin-left:auto;flex-shrink:0;"></span>' : '';

          html += `<li><a href="${href}" class="nav-item${activeClass}" title="${title}" style="${activeStyle}"><span style="font-size:1.05rem;flex-shrink:0;width:20px;text-align:center;">${icon}</span><span class="nav-item-title" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-0.01em;${titleStyle}">${title}</span>${dotIndicator}</a></li>`;
        });
        html += '</ul>';
        html += '</div>';
      });

      // Footer Links
      html += '<div style="border-top:1px solid var(--border);margin:16px 6px;padding-top:10px;">';
      html += '<div style="font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);letter-spacing:1px;padding:4px 14px;font-weight:700;">Legal &amp; Info</div>';
      html += '<a href="/about.html" style="display:block;padding:5px 14px;color:var(--text-muted);font-size:0.8rem;text-decoration:none;">About WebDevWorker</a>';
      html += '<a href="/privacy.html" style="display:block;padding:5px 14px;color:var(--text-muted);font-size:0.8rem;text-decoration:none;">Privacy Policy</a>';
      html += '<a href="/terms.html" style="display:block;padding:5px 14px;color:var(--text-muted);font-size:0.8rem;text-decoration:none;">Terms of Service</a>';
      html += '</div>';

      nav.innerHTML = html;
    }

    // Restore Sidebar Scroll Position (Never jumps back to top)
    const sidebarEl = document.querySelector('.sidebar');
    if (sidebarEl) {
      const savedScroll = sessionStorage.getItem('wdw_sidebar_scroll');
      const activeItem = nav.querySelector('.nav-item.active');

      if (savedScroll !== null) {
        sidebarEl.scrollTop = parseInt(savedScroll, 10);
      } else if (activeItem) {
        activeItem.scrollIntoView({ block: 'center', behavior: 'instant' });
      }

      // Track scroll live so refresh or nav preserves exact position
      sidebarEl.addEventListener('scroll', function() {
        sessionStorage.setItem('wdw_sidebar_scroll', sidebarEl.scrollTop);
      }, { passive: true });

      // Track link click in sidebar
      nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
          sessionStorage.setItem('wdw_sidebar_scroll', sidebarEl.scrollTop);
        }
      });
    }
  }

  function initTheme() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    btn.addEventListener('click', function() {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const nxt = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nxt);
      localStorage.setItem('wdw_theme', nxt);
      btn.innerHTML = nxt === 'dark' ? '<span>🌙</span> Dark Mode' : '<span>☀️</span> Light Mode';
    });
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    btn.innerHTML = cur === 'dark' ? '<span>🌙</span> Dark Mode' : '<span>☀️</span> Light Mode';
  }

  function initMobileDrawer() {
    const btn = document.getElementById('hamburgerBtn');
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebarBackdrop');
    if (!btn || !sb) return;

    btn.addEventListener('click', () => {
      sb.classList.toggle('open');
      if (bd) bd.classList.toggle('open');
    });
    if (bd) {
      bd.addEventListener('click', () => {
        sb.classList.remove('open');
        bd.classList.remove('open');
      });
    }
  }

  function initSpotlight() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let rafScheduled = false;
    let currentEvent = null;

    document.addEventListener('pointermove', function(e) {
      currentEvent = e;
      if (!rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(function() {
          rafScheduled = false;
          if (!currentEvent) return;
          const cards = document.querySelectorAll('.spotlight-card, .tool-card');
          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (
              currentEvent.clientX >= rect.left - 80 &&
              currentEvent.clientX <= rect.right + 80 &&
              currentEvent.clientY >= rect.top - 80 &&
              currentEvent.clientY <= rect.bottom + 80
            ) {
              const x = currentEvent.clientX - rect.left;
              const y = currentEvent.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
            }
          });
        });
      }
    }, { passive: true });
  }

  // ==========================================
  // Comprehensive 85-Tool Search & Registry Index
  // ==========================================
  const TOOLS_REGISTRY = [
  {
    "slug": "tailwind-to-css-converter.html",
    "name": "Tailwind to CSS Converter",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎨",
    "kw": [
      "tailwind",
      "css",
      "converter",
      "transpiler",
      "utility classes",
      "inline css",
      "email html",
      "inline styles",
      "tw",
      "purgecss",
      "responsive",
      "frontend"
    ]
  },
  {
    "slug": "css-box-shadow-generator.html",
    "name": "CSS Box Shadow Generator",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎨",
    "kw": [
      "box shadow",
      "shadow",
      "drop shadow",
      "elevation",
      "glow",
      "neon",
      "soft shadow",
      "layers",
      "multiple shadows",
      "inset shadow",
      "blur",
      "spread",
      "css"
    ]
  },
  {
    "slug": "css-gradient-generator.html",
    "name": "CSS Gradient Generator",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🌈",
    "kw": [
      "gradient",
      "linear gradient",
      "radial gradient",
      "conic gradient",
      "color stops",
      "background",
      "css background",
      "mesh gradient",
      "angle",
      "multi-color"
    ]
  },
  {
    "slug": "css-glassmorphism-generator.html",
    "name": "CSS Glassmorphism Builder",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🧊",
    "kw": [
      "glassmorphism",
      "glass",
      "frosted glass",
      "backdrop filter",
      "blur",
      "transparent card",
      "modern ui",
      "acrylic",
      "translucent",
      "aero"
    ]
  },
  {
    "slug": "css-border-radius-generator.html",
    "name": "Border Radius & Blob Shaper",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🟣",
    "kw": [
      "border radius",
      "blob",
      "shape",
      "organic blob",
      "8 point radius",
      "rounded corners",
      "morph",
      "svg blob",
      "pill",
      "curve"
    ]
  },
  {
    "slug": "color-converter-contrast.html",
    "name": "Color Contrast & WCAG Tester",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎭",
    "kw": [
      "color contrast",
      "wcag",
      "wcag 2.1",
      "accessibility",
      "a11y",
      "hex to rgb",
      "rgb to hsl",
      "cmyk",
      "luminance",
      "contrast ratio",
      "compliance",
      "aa",
      "aaa"
    ]
  },
  {
    "slug": "css-flexbox-generator.html",
    "name": "CSS Flexbox Builder",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "📐",
    "kw": [
      "flexbox",
      "flex",
      "flex-direction",
      "justify-content",
      "align-items",
      "align-content",
      "flex-wrap",
      "center div",
      "layout",
      "flex-grow",
      "flex-shrink"
    ]
  },
  {
    "slug": "css-grid-generator.html",
    "name": "CSS Grid 2D Builder",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🔲",
    "kw": [
      "css grid",
      "grid template columns",
      "grid template rows",
      "gap",
      "fr",
      "auto-fit",
      "auto-fill",
      "minmax",
      "2d layout",
      "subgrid",
      "dashboard grid"
    ]
  },
  {
    "slug": "css-clamp-calculator.html",
    "name": "CSS clamp() Fluid Typography",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🔤",
    "kw": [
      "clamp",
      "fluid typography",
      "responsive font size",
      "clamp calculator",
      "viewport scaling",
      "min max",
      "rem to px",
      "slope",
      "intercept"
    ]
  },
  {
    "slug": "css-cubic-bezier-generator.html",
    "name": "CSS Cubic-Bezier Visualizer",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "⚡",
    "kw": [
      "cubic bezier",
      "easing",
      "transition",
      "animation curve",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "timing function",
      "bounce",
      "spring"
    ]
  },
  {
    "slug": "css-clip-path-generator.html",
    "name": "CSS Clip-Path Polygon Shaper",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "✂️",
    "kw": [
      "clip path",
      "polygon",
      "mask",
      "shape",
      "triangle",
      "star",
      "hexagon",
      "circle",
      "ellipse",
      "cut out",
      "clip-path"
    ]
  },
  {
    "slug": "css-keyframes-animation-generator.html",
    "name": "CSS @keyframes Animation Studio",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎬",
    "kw": [
      "keyframes",
      "animation",
      "css animation",
      "spin",
      "pulse",
      "fade",
      "slide",
      "bounce",
      "infinite",
      "delay",
      "duration",
      "timeline"
    ]
  },
  {
    "slug": "css-triangle-generator.html",
    "name": "CSS Triangle & Tooltip Arrow",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "▲",
    "kw": [
      "triangle",
      "tooltip arrow",
      "border triangle",
      "popover",
      "speech bubble",
      "pointer",
      "caret",
      "direction",
      "arrow"
    ]
  },
  {
    "slug": "svg-to-data-uri-converter.html",
    "name": "SVG to CSS Data URI Converter",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🖼️",
    "kw": [
      "svg to data uri",
      "data uri",
      "svg to css",
      "base64 svg",
      "url encode svg",
      "background image svg",
      "inline svg"
    ]
  },
  {
    "slug": "css-text-shadow-generator.html",
    "name": "CSS Text Shadow & Neon Glow",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "✨",
    "kw": [
      "text shadow",
      "neon glow",
      "glowing text",
      "typography shadow",
      "3d text",
      "vintage text",
      "blur",
      "offset"
    ]
  },
  {
    "slug": "color-palette-harmonies-generator.html",
    "name": "Color Palette & Harmonies",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎨",
    "kw": [
      "color palette",
      "harmonies",
      "complementary",
      "triadic",
      "analogous",
      "split complementary",
      "tetradic",
      "color generator",
      "design system",
      "hex"
    ]
  },
  {
    "slug": "css-filter-effects-generator.html",
    "name": "CSS Filter Effects Studio",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎭",
    "kw": [
      "filter",
      "css filter",
      "blur",
      "brightness",
      "contrast",
      "grayscale",
      "hue-rotate",
      "invert",
      "opacity",
      "saturate",
      "sepia",
      "drop-shadow"
    ]
  },
  {
    "slug": "css-neumorphism-generator.html",
    "name": "CSS Neumorphism (Soft UI)",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🔘",
    "kw": [
      "neumorphism",
      "soft ui",
      "embossed",
      "debossed",
      "convex",
      "concave",
      "inset shadow",
      "dual shadow",
      "modern ui",
      "extruded"
    ]
  },
  {
    "slug": "sql-to-typescript-prisma-converter.html",
    "name": "SQL to TypeScript & Prisma",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔷",
    "kw": [
      "sql to typescript",
      "prisma",
      "drizzle",
      "orm",
      "zod",
      "create table",
      "ddl to ts",
      "database types",
      "schema generator",
      "postgres",
      "mysql",
      "sqlite"
    ]
  },
  {
    "slug": "json-formatter-validator.html",
    "name": "JSON Formatter & Validator",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📋",
    "kw": [
      "json",
      "formatter",
      "validator",
      "beautifier",
      "minify",
      "parse json",
      "json lint",
      "syntax error",
      "indent",
      "rest api",
      "payload"
    ]
  },
  {
    "slug": "curl-to-code-converter.html",
    "name": "cURL to Code Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "💻",
    "kw": [
      "curl",
      "curl to fetch",
      "curl to python",
      "axios",
      "node fetch",
      "curl to requests",
      "api request",
      "headers",
      "post data",
      "rest client"
    ]
  },
  {
    "slug": "json-to-typescript-generator.html",
    "name": "JSON to TypeScript Interface",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔷",
    "kw": [
      "json to typescript",
      "ts interface",
      "type generator",
      "d.ts",
      "models",
      "typing",
      "quicktype",
      "api response types"
    ]
  },
  {
    "slug": "mock-data-generator.html",
    "name": "Mock Data Generator",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🎲",
    "kw": [
      "mock data",
      "faker",
      "dummy data",
      "fake users",
      "test data",
      "fake json",
      "random data",
      "addresses",
      "emails",
      "names",
      "lorem"
    ]
  },
  {
    "slug": "code-beautifier-minifier.html",
    "name": "Code Beautifier & Minifier",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🧹",
    "kw": [
      "beautifier",
      "minifier",
      "format code",
      "html",
      "css",
      "javascript",
      "js minifier",
      "css minifier",
      "html minifier",
      "unminify",
      "clean code"
    ]
  },
  {
    "slug": "sql-formatter.html",
    "name": "SQL Query Formatter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🗄️",
    "kw": [
      "sql formatter",
      "beautify sql",
      "format query",
      "select",
      "join",
      "uppercase keywords",
      "postgres",
      "mysql",
      "sql server",
      "sqlite"
    ]
  },
  {
    "slug": "base64-encoder-decoder.html",
    "name": "Base64 Image & Text Tool",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔤",
    "kw": [
      "base64",
      "encode base64",
      "decode base64",
      "base64 to image",
      "image to base64",
      "atob",
      "btoa",
      "binary",
      "utf8"
    ]
  },
  {
    "slug": "url-encoder-decoder.html",
    "name": "URL Encoder & Decoder",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔗",
    "kw": [
      "url encoder",
      "url decoder",
      "percent encoding",
      "uri component",
      "query string",
      "encodeuri",
      "decodeuri",
      "url escape"
    ]
  },
  {
    "slug": "markdown-html-converter.html",
    "name": "Markdown to HTML Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📝",
    "kw": [
      "markdown",
      "md to html",
      "html to markdown",
      "markdown preview",
      "gfm",
      "commonmark",
      "readme converter",
      "wysiwyg"
    ]
  },
  {
    "slug": "lorem-ipsum-generator.html",
    "name": "Lorem Ipsum & Text Generator",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📄",
    "kw": [
      "lorem ipsum",
      "placeholder text",
      "dummy text",
      "filler text",
      "paragraphs",
      "words",
      "sentences",
      "dummy content"
    ]
  },
  {
    "slug": "html-table-to-json-converter.html",
    "name": "HTML Table to JSON & CSV",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📊",
    "kw": [
      "table to json",
      "html table",
      "table to csv",
      "parse table",
      "scrape table",
      "convert table",
      "tabular data",
      "export csv"
    ]
  },
  {
    "slug": "yaml-to-json-converter.html",
    "name": "YAML to JSON Configuration",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📜",
    "kw": [
      "yaml to json",
      "json to yaml",
      "yml",
      "kubernetes config",
      "k8s",
      "docker compose yaml",
      "parse yaml",
      "config converter"
    ]
  },
  {
    "slug": "json-schema-generator.html",
    "name": "JSON Schema Generator",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🛡️",
    "kw": [
      "json schema",
      "draft 07",
      "schema validator",
      "openapi schema",
      "type validation",
      "schema inference",
      "ajv"
    ]
  },
  {
    "slug": "webhook-payload-formatter.html",
    "name": "Webhook Payload & Verifier",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "⚡",
    "kw": [
      "webhook",
      "payload formatter",
      "stripe webhook",
      "github webhook",
      "hmac signature",
      "sha256 signature",
      "webhook tester",
      "event verification"
    ]
  },
  {
    "slug": "openssl-command-generator.html",
    "name": "OpenSSL Command Generator",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🔒",
    "kw": [
      "openssl",
      "ssl",
      "tls",
      "certificate",
      "csr",
      "private key",
      "rsa",
      "ecdsa",
      "self-signed",
      "san",
      "pfx",
      "pkcs12",
      "https",
      "certbot"
    ]
  },
  {
    "slug": "hash-generator.html",
    "name": "SHA Hash & Checksum",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🔒",
    "kw": [
      "hash",
      "sha256",
      "sha512",
      "sha1",
      "md5",
      "checksum",
      "digest",
      "cryptographic hash",
      "file hash",
      "integrity",
      "crypto"
    ]
  },
  {
    "slug": "uuid-generator.html",
    "name": "UUID / GUID v4 Generator",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🆔",
    "kw": [
      "uuid",
      "guid",
      "uuid v4",
      "random uuid",
      "unique identifier",
      "bulk uuid",
      "rfc 4122",
      "primary key"
    ]
  },
  {
    "slug": "password-generator.html",
    "name": "Strong Password Generator",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🔑",
    "kw": [
      "password",
      "password generator",
      "random password",
      "strong password",
      "entropy",
      "passphrase",
      "symbols",
      "numbers",
      "secure key"
    ]
  },
  {
    "slug": "jwt-decoder.html",
    "name": "JWT Token Inspector",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🛡️",
    "kw": [
      "jwt",
      "jwt decoder",
      "token inspector",
      "bearer token",
      "claims",
      "expiration",
      "exp",
      "iat",
      "sub",
      "header",
      "payload",
      "auth",
      "json web token"
    ]
  },
  {
    "slug": "subresource-integrity-hash-generator.html",
    "name": "Subresource Integrity (SRI)",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🌐",
    "kw": [
      "sri",
      "subresource integrity",
      "sha384",
      "sha512",
      "cdn script security",
      "integrity attribute",
      "script tag",
      "w3c sri"
    ]
  },
  {
    "slug": "content-security-policy-generator.html",
    "name": "Content Security Policy (CSP)",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🛡️",
    "kw": [
      "csp",
      "content security policy",
      "default-src",
      "script-src",
      "style-src",
      "xss protection",
      "nonce",
      "security headers",
      "helmet"
    ]
  },
  {
    "slug": "aws-iam-s3-policy-generator.html",
    "name": "AWS IAM & S3 Policy Generator",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "☁️",
    "kw": [
      "aws",
      "iam",
      "s3",
      "policy",
      "bucket policy",
      "json policy",
      "cloudfront",
      "oac",
      "oai",
      "s3 permissions",
      "least privilege",
      "arn",
      "amazon web services"
    ]
  },
  {
    "slug": "dockerfile-compose-generator.html",
    "name": "Dockerfile & Compose Generator",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🐳",
    "kw": [
      "docker",
      "dockerfile",
      "docker-compose",
      "compose",
      "container",
      "node docker",
      "python docker",
      "alpine",
      "multi-stage build",
      "ports",
      "volumes"
    ]
  },
  {
    "slug": "seo-keyword-density-analyzer.html",
    "name": "SEO Keyword Density & N-Gram",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🔍",
    "kw": [
      "seo",
      "keyword density",
      "n-gram",
      "word frequency",
      "on-page seo",
      "tf-idf",
      "content audit",
      "search ranking",
      "google rank"
    ]
  },
  {
    "slug": "cron-expression-generator.html",
    "name": "Cron Expression Builder",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "⏰",
    "kw": [
      "cron",
      "crontab",
      "cron expression",
      "schedule",
      "cron syntax",
      "recurring job",
      "every 5 minutes",
      "daily",
      "linux cron"
    ]
  },
  {
    "slug": "chmod-permissions-calculator.html",
    "name": "Linux Chmod Calculator",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🛡️",
    "kw": [
      "chmod",
      "permissions",
      "linux",
      "octal",
      "755",
      "644",
      "777",
      "rwx",
      "file permissions",
      "chown",
      "terminal"
    ]
  },
  {
    "slug": "http-status-codes-inspector.html",
    "name": "HTTP Status Codes Spec",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🌐",
    "kw": [
      "http status",
      "status codes",
      "200",
      "404",
      "500",
      "301",
      "302",
      "401",
      "403",
      "502",
      "503",
      "rest response",
      "rfc 9110"
    ]
  },
  {
    "slug": "javascript-keycode-tester.html",
    "name": "JS KeyCode Event Tester",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "⌨️",
    "kw": [
      "keycode",
      "keyboard event",
      "e.key",
      "e.code",
      "e.which",
      "event listener",
      "keydown",
      "keypress",
      "keyboard testing"
    ]
  },
  {
    "slug": "htaccess-generator.html",
    "name": ".htaccess Rule Builder",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "⚙️",
    "kw": [
      "htaccess",
      "apache",
      "mod_rewrite",
      "redirect",
      "301 redirect",
      "rewrite rule",
      "https redirect",
      "block ip",
      "cache control"
    ]
  },
  {
    "slug": "meta-tag-generator.html",
    "name": "Meta Tags & Open Graph",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🏷️",
    "kw": [
      "meta tags",
      "open graph",
      "og:image",
      "twitter card",
      "title",
      "description",
      "social preview",
      "seo tags",
      "head generator"
    ]
  },
  {
    "slug": "regex-tester.html",
    "name": "Regex Tester & Explainer",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🔍",
    "kw": [
      "regex",
      "regular expression",
      "pattern match",
      "regex tester",
      "regex flags",
      "javascript regex",
      "replace",
      "match groups",
      "regex explanation"
    ]
  },
  {
    "slug": "text-diff-checker.html",
    "name": "Code Diff & Comparison",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "⚖️",
    "kw": [
      "diff",
      "text diff",
      "compare text",
      "code diff",
      "side by side diff",
      "difference",
      "git diff",
      "patch",
      "file comparison"
    ]
  },
  {
    "slug": "dns-record-lookup-generator.html",
    "name": "DNS Zone & SPF/DMARC",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🌐",
    "kw": [
      "dns",
      "zone file",
      "a record",
      "cname",
      "mx record",
      "txt record",
      "spf",
      "dmarc",
      "dkim",
      "email deliverability",
      "nameserver"
    ]
  },
  {
    "slug": "robots-txt-generator.html",
    "name": "Robots.txt & Crawler Rules",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🤖",
    "kw": [
      "robots.txt",
      "crawler",
      "googlebot",
      "sitemap",
      "disallow, allow",
      "user-agent",
      "search engine crawler",
      "seo"
    ]
  },
  {
    "slug": "user-agent-parser.html",
    "name": "User-Agent & Client Hints",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "📱",
    "kw": [
      "user agent",
      "ua parser",
      "browser detection",
      "device detection",
      "os detection",
      "client hints",
      "navigator.userAgent"
    ]
  },
  {
    "slug": "image-color-palette-extractor.html",
    "name": "Image Palette & Contrast",
    "cat": "Media, Assets & Viral",
    "catKey": "media",
    "icon": "🎨",
    "kw": [
      "palette extractor",
      "color picker from image",
      "dominant colors",
      "image colors",
      "extract hex",
      "canvas color",
      "moodboard"
    ]
  },
  {
    "slug": "qr-code-generator.html",
    "name": "Custom QR Code Studio",
    "cat": "Media, Assets & Viral",
    "catKey": "media",
    "icon": "📱",
    "kw": [
      "qr code",
      "generate qr",
      "custom qr",
      "wifi qr",
      "url qr",
      "qr maker",
      "download qr png",
      "vcard qr",
      "barcode"
    ]
  },
  {
    "slug": "multi-favicon-pwa-generator.html",
    "name": "Favicon & App Icon Matrix",
    "cat": "Media, Assets & Viral",
    "catKey": "media",
    "icon": "📦",
    "kw": [
      "favicon",
      "pwa icons",
      "apple touch icon",
      "android icon",
      "manifest icons",
      "16x16",
      "32x32",
      "192x192",
      "512x512",
      "icon generator"
    ]
  },
  {
    "slug": "svg-optimizer-converter.html",
    "name": "SVG Optimizer & Converter",
    "cat": "Media, Assets & Viral",
    "catKey": "media",
    "icon": "⚡",
    "kw": [
      "svg optimizer",
      "svgo",
      "clean svg",
      "compress svg",
      "minify svg",
      "remove metadata",
      "shrink svg",
      "vector optimizer"
    ]
  },
  {
    "slug": "css-unit-converter.html",
    "name": "CSS Unit Converter (PX, REM, VW)",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "📐",
    "kw": [
      "css unit converter",
      "px to rem",
      "rem to px",
      "px to vw",
      "vh converter",
      "points to pixels",
      "typography math",
      "responsive css units",
      "web typography calculator",
      "pt",
      "pc",
      "in",
      "cm",
      "mm"
    ]
  },
  {
    "slug": "css-specificity-calculator.html",
    "name": "CSS Specificity Calculator",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🎯",
    "kw": [
      "css specificity calculator",
      "selector hierarchy",
      "cascade specificity",
      "specificity score",
      "w3c selectors 4",
      "css specificity war",
      "css important",
      "debug css conflicts",
      "inline",
      "ids",
      "classes",
      "elements"
    ]
  },
  {
    "slug": "css-transform-3d-matrix-calculator.html",
    "name": "CSS 3D Transform & Matrix3d",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🧊",
    "kw": [
      "css 3d transform",
      "matrix3d calculator",
      "css perspective",
      "rotate3d",
      "4x4 transform matrix",
      "gpu acceleration",
      "3d css cube",
      "transform-style preserve-3d",
      "rotatex",
      "rotatey",
      "translatez"
    ]
  },
  {
    "slug": "css-aspect-ratio-calculator.html",
    "name": "CSS Aspect Ratio Calculator",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "📺",
    "kw": [
      "css aspect ratio calculator",
      "aspect-ratio css",
      "padding-top hack",
      "16:9 ratio",
      "4:3 ratio",
      "responsive image container",
      "cumulative layout shift",
      "cls optimizer",
      "dimensions",
      "resolution"
    ]
  },
  {
    "slug": "css-gradient-mesh-generator.html",
    "name": "CSS Mesh Gradient Generator",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "🌌",
    "kw": [
      "css mesh gradient",
      "fluid gradient generator",
      "multi-stop radial gradient",
      "modern saas background",
      "aura gradient",
      "css backdrop filter",
      "generative css background",
      "mesh canvas"
    ]
  },
  {
    "slug": "json-to-go-struct-converter.html",
    "name": "JSON to Go Struct Generator",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🐹",
    "kw": [
      "json to go struct",
      "golang struct generator",
      "json to golang",
      "go struct tags",
      "json unmarshal",
      "go type inference",
      "omitempty",
      "golang backend developer tools",
      "structs"
    ]
  },
  {
    "slug": "json-to-rust-struct-converter.html",
    "name": "JSON to Rust Struct (Serde)",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🦀",
    "kw": [
      "json to rust",
      "rust struct generator",
      "serde derive",
      "serde json",
      "rust types",
      "rust deserialization",
      "webassembly rust",
      "rust backend microservices",
      "option<t>",
      "vec<t>"
    ]
  },
  {
    "slug": "json-to-python-pydantic-converter.html",
    "name": "JSON to Python Pydantic",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🐍",
    "kw": [
      "json to pydantic",
      "python pydantic model generator",
      "pydantic v2 basemodel",
      "fastapi schemas",
      "json to python classes",
      "type hints python",
      "data validation",
      "field alias"
    ]
  },
  {
    "slug": "json-to-yaml-converter.html",
    "name": "JSON to YAML Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📑",
    "kw": [
      "json to yaml",
      "yaml to json",
      "yml converter",
      "kubernetes yaml",
      "docker compose converter",
      "yaml validator",
      "yaml parser javascript",
      "devops data converter"
    ]
  },
  {
    "slug": "json-to-csv-converter.html",
    "name": "JSON to CSV / Excel Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "📊",
    "kw": [
      "json to csv",
      "json to excel",
      "convert json array to csv",
      "flatten json",
      "rfc 4180 csv",
      "json to tsv",
      "export csv javascript",
      "data migration tools",
      "spreadsheet"
    ]
  },
  {
    "slug": "xml-formatter-json-converter.html",
    "name": "XML Formatter & JSON Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🏷️",
    "kw": [
      "xml formatter",
      "xml validator",
      "xml to json converter",
      "json to xml",
      "beautify xml",
      "format xml",
      "soap xml",
      "rss feed formatter",
      "sitemap xml validator",
      "domparser"
    ]
  },
  {
    "slug": "string-case-converter.html",
    "name": "String Case Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔠",
    "kw": [
      "string case converter",
      "camelcase to snake_case",
      "pascalcase",
      "kebab case converter",
      "constant case",
      "capitalize title",
      "programming case converter",
      "dot case",
      "path case"
    ]
  },
  {
    "slug": "html-entity-encoder-decoder.html",
    "name": "HTML Entity Encoder & Decoder",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔡",
    "kw": [
      "html entity encoder",
      "html decoder",
      "xss sanitizer",
      "named entities",
      "decimal entity",
      "escape html javascript",
      "decode html special characters",
      "owasp xss",
      "unescape"
    ]
  },
  {
    "slug": "unix-timestamp-converter.html",
    "name": "Unix Timestamp Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "⏱️",
    "kw": [
      "unix timestamp converter",
      "epoch converter",
      "timestamp to date",
      "date to timestamp",
      "epoch milliseconds",
      "iso 8601 converter",
      "utc timestamp",
      "time zone calculator",
      "epoch clock"
    ]
  },
  {
    "slug": "number-base-converter.html",
    "name": "Number Base Converter (Bin/Hex)",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🔢",
    "kw": [
      "number base converter",
      "hex to binary",
      "binary to decimal",
      "octal converter",
      "arbitrary radix 2-36",
      "bigint converter",
      "two complement",
      "bitwise calculator",
      "hexadecimal"
    ]
  },
  {
    "slug": "hmac-hash-generator.html",
    "name": "HMAC Hash & Key Signature",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🔐",
    "kw": [
      "hmac generator",
      "hmac sha256",
      "hmac sha512",
      "webhook signature",
      "stripe webhook verifier",
      "github webhook hmac",
      "keyed hash",
      "web crypto api hmac",
      "crypto signature"
    ]
  },
  {
    "slug": "aes-encryption-decryption-tool.html",
    "name": "AES-GCM Encryption / Decryption",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🗝️",
    "kw": [
      "aes encryption",
      "aes decryption",
      "aes-gcm online",
      "pbkdf2 key derivation",
      "client side encryption",
      "web crypto api aes",
      "authenticated encryption",
      "zero knowledge cipher"
    ]
  },
  {
    "slug": "ulid-nanoid-generator.html",
    "name": "ULID & NanoID Generator",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🆔",
    "kw": [
      "ulid generator",
      "nanoid generator",
      "sortable unique id",
      "uuid alternative",
      "k-sortable id",
      "random id generator",
      "web crypto random",
      "primary key generator",
      "crockford base32"
    ]
  },
  {
    "slug": "bcrypt-hash-cost-calculator.html",
    "name": "Bcrypt Hash & Cost Calculator",
    "cat": "Security & Cryptography",
    "catKey": "security",
    "icon": "🧮",
    "kw": [
      "bcrypt hash calculator",
      "bcrypt cost factor",
      "blowfish password hash",
      "bcrypt benchmark",
      "password hashing security",
      "salt rounds bcrypt",
      "owasp password storage",
      "work factor"
    ]
  },
  {
    "slug": "cidr-subnet-calculator.html",
    "name": "CIDR & IP Subnet Calculator",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🌐",
    "kw": [
      "cidr calculator",
      "subnet calculator",
      "ip subnet mask",
      "usable host range",
      "broadcast address",
      "rfc 1918 private ip",
      "networking subnetting",
      "vpc cidr block",
      "ipv4"
    ]
  },
  {
    "slug": "nginx-config-generator.html",
    "name": "Nginx Server Block Generator",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "⚡",
    "kw": [
      "nginx config generator",
      "nginx reverse proxy",
      "nginx ssl config",
      "try_files spa",
      "certbot nginx",
      "security headers nginx",
      "proxy_pass",
      "devops server config",
      "http2"
    ]
  },
  {
    "slug": "websocket-client-tester.html",
    "name": "WebSocket Client & Debugger",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "📡",
    "kw": [
      "websocket client",
      "websocket tester online",
      "wss debugger",
      "test websocket connection",
      "websocket ping latency",
      "socket.io tester",
      "rfc 6455 debugger",
      "realtime"
    ]
  },
  {
    "slug": "html-to-jsx-converter.html",
    "name": "HTML to JSX / React Converter",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "⚛️",
    "kw": [
      "html to jsx",
      "react converter",
      "html to react",
      "class to classname",
      "inline styles to jsx",
      "nextjs jsx",
      "self closing tags",
      "jsx formatter",
      "tsx",
      "preact"
    ]
  },
  {
    "slug": "json-to-zod-schema.html",
    "name": "JSON to Zod Schema Generator",
    "cat": "Code, Data & APIs",
    "catKey": "code",
    "icon": "🛡️",
    "kw": [
      "json to zod",
      "zod schema generator",
      "typescript zod",
      "z.object",
      "zod validator",
      "nextjs api validation",
      "trpc",
      "zod type inference",
      "z.infer"
    ]
  },
  {
    "slug": "svg-path-visualizer.html",
    "name": "SVG Path Visualizer & Editor",
    "cat": "Media, Assets & Viral",
    "catKey": "media",
    "icon": "📐",
    "kw": [
      "svg path visualizer",
      "svg path editor",
      "svg d attribute",
      "svg bezier curves",
      "path bounding box",
      "svg react icon",
      "vector graphics",
      "getbbox"
    ]
  },
  {
    "slug": "git-command-generator.html",
    "name": "Git Command & Workflow Generator",
    "cat": "DevOps & Webmaster",
    "catKey": "devops",
    "icon": "🔀",
    "kw": [
      "git command generator",
      "git cheatsheet",
      "git undo commit",
      "git rebase interactive",
      "git cherry pick",
      "git stash",
      "git branch rename",
      "reflog",
      "git workflow"
    ]
  },
  {
    "slug": "css-media-query-generator.html",
    "name": "CSS Media & Container Query",
    "cat": "CSS & Visual UI",
    "catKey": "css",
    "icon": "📱",
    "kw": [
      "css media query generator",
      "responsive breakpoints",
      "container queries",
      "dark mode media query",
      "prefers-color-scheme",
      "prefers-reduced-motion",
      "tailwind screens",
      "mobile first"
    ]
  }
];

  function ensureTopbarSearch() {
    if (document.getElementById('searchToolsInput')) return;
    const topbarRight = document.querySelector('.topbar-right');
    if (!topbarRight) return;

    const wrap = document.createElement('div');
    wrap.className = 'topbar-search-wrap';
    wrap.style.cssText = 'position:relative; display:flex; align-items:center;';
    wrap.innerHTML = `
      <span style="position:absolute; left:12px; font-size:0.85rem; color:var(--text-muted); pointer-events:none;">🔍</span>
      <input type="text" id="searchToolsInput" placeholder="Search 85+ tools (⌘K)..." style="padding:7px 14px 7px 34px; background:var(--bg-subtle); border:1px solid var(--border); border-radius:8px; color:var(--text-main); font-size:0.82rem; width:220px; outline:none; transition:all 0.2s;" autocomplete="off" spellcheck="false">
    `;

    const themeBtn = topbarRight.querySelector('#themeToggleBtn');
    if (themeBtn) {
      topbarRight.insertBefore(wrap, themeBtn);
    } else {
      topbarRight.appendChild(wrap);
    }
  }

  // ==========================================
  // Universal Live Search Dropdown Engine
  // ==========================================
  let activeDropdown = null;
  let activeHighlightedIndex = -1;
  let activeSearchInput = null;

  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="wdw-highlight">$1</mark>');
  }

  function renderSearchDropdown(inputEl, query) {
    const q = query.trim().toLowerCase();
    activeSearchInput = inputEl;

    if (!activeDropdown) {
      activeDropdown = document.createElement('div');
      activeDropdown.className = 'wdw-search-dropdown';
      document.body.appendChild(activeDropdown);
    }

    if (!q) {
      activeDropdown.style.display = 'none';
      activeHighlightedIndex = -1;
      return;
    }

    // Score & filter all 58 tools
    const matches = [];
    TOOLS_REGISTRY.forEach(t => {
      let score = 0;
      const nameLower = t.name.toLowerCase();
      const slugLower = t.slug.toLowerCase();
      const catLower = t.cat.toLowerCase();

      if (nameLower === q) score += 120;
      else if (nameLower.startsWith(q)) score += 60;
      else if (nameLower.includes(q)) score += 40;

      if (slugLower.includes(q)) score += 25;
      if (catLower.includes(q)) score += 15;

      let matchedTag = '';
      for (const k of t.kw) {
        const kl = k.toLowerCase();
        if (kl === q) { score += 50; matchedTag = k; break; }
        else if (kl.startsWith(q)) { score += 30; if (!matchedTag) matchedTag = k; break; }
        else if (kl.includes(q)) { score += 20; if (!matchedTag) matchedTag = k; break; }
      }

      if (score > 0) {
        matches.push({ tool: t, score, matchedTag });
      }
    });

    matches.sort((a, b) => b.score - a.score);
    const topMatches = matches.slice(0, 8);

    // Anchor positioning (Fixed)
    const rect = inputEl.getBoundingClientRect();
    activeDropdown.style.position = 'fixed';
    activeDropdown.style.top = `${rect.bottom + 8}px`;

    const isTopbar = inputEl.id === 'searchToolsInput';
    if (isTopbar) {
      activeDropdown.style.left = 'auto';
      activeDropdown.style.right = `${window.innerWidth - rect.right}px`;
      activeDropdown.style.width = '380px';
    } else {
      activeDropdown.style.left = `${rect.left}px`;
      activeDropdown.style.right = 'auto';
      activeDropdown.style.width = `${rect.width}px`;
    }

    if (topMatches.length === 0) {
      activeDropdown.innerHTML = `
        <div class="wdw-search-empty">
          <div>No tools matching "<strong>${query.replace(/</g, '&lt;')}</strong>"</div>
          <div style="font-size:0.75rem; color:var(--text-dim); margin-top:6px;">
            Try searching for: <span style="color:var(--brand-primary); font-weight:700;">JSON</span>, <span style="color:var(--brand-primary); font-weight:700;">AWS</span>, <span style="color:var(--brand-primary); font-weight:700;">Docker</span>, <span style="color:var(--brand-primary); font-weight:700;">CSS</span>, <span style="color:var(--brand-primary); font-weight:700;">JWT</span>, or <span style="color:var(--brand-primary); font-weight:700;">SQL</span>
          </div>
        </div>
      `;
      activeDropdown.style.display = 'flex';
      activeHighlightedIndex = -1;
      return;
    }

    let html = '<ul class="wdw-search-results-list" role="listbox">';
    topMatches.forEach((m, idx) => {
      const t = m.tool;
      const highlightedTitle = highlightText(t.name, query);
      const subInfo = m.matchedTag ? `Matched tag: <em>#${m.matchedTag}</em>` : t.cat;

      html += `
        <li>
          <a href="/tools/${t.slug}" class="wdw-search-item" data-index="${idx}">
            <div class="wdw-search-item-left">
              <span class="wdw-search-item-icon">${t.icon}</span>
              <div class="wdw-search-item-info">
                <span class="wdw-search-item-title">${highlightedTitle}</span>
                <span class="wdw-search-item-sub">${subInfo}</span>
              </div>
            </div>
            <span class="wdw-search-cat-badge cat-${t.catKey}">${t.cat.split('&')[0].trim()}</span>
          </a>
        </li>
      `;
    });
    html += '</ul>';

    html += `
      <div class="wdw-search-footer">
        <span>${matches.length} matching utilities found</span>
        <span class="wdw-search-footer-kbd"><kbd>↑</kbd><kbd>↓</kbd> to navigate <kbd>↵</kbd> to open <kbd>esc</kbd></span>
      </div>
    `;

    activeDropdown.innerHTML = html;
    activeDropdown.style.display = 'flex';
    activeHighlightedIndex = -1;
  }

  function closeSearchDropdown() {
    if (activeDropdown) {
      activeDropdown.style.display = 'none';
      activeHighlightedIndex = -1;
    }
  }

  function updateDropdownHighlight() {
    if (!activeDropdown || activeDropdown.style.display === 'none') return;
    const items = activeDropdown.querySelectorAll('.wdw-search-item');
    items.forEach((item, idx) => {
      if (idx === activeHighlightedIndex) {
        item.classList.add('active');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  function initUniversalSearch() {
    ensureTopbarSearch();

    const heroInput = document.getElementById('heroSearchInput');
    const topInput = document.getElementById('searchToolsInput');

    [heroInput, topInput].forEach(inp => {
      if (!inp) return;

      inp.addEventListener('input', function() {
        const val = this.value;
        if (heroInput && heroInput !== this) heroInput.value = val;
        if (topInput && topInput !== this) topInput.value = val;
        renderSearchDropdown(this, val);
      });

      inp.addEventListener('focus', function() {
        if (this.value.trim()) {
          renderSearchDropdown(this, this.value);
        }
      });

      inp.addEventListener('keydown', function(e) {
        if (!activeDropdown || activeDropdown.style.display === 'none') return;
        const items = activeDropdown.querySelectorAll('.wdw-search-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          activeHighlightedIndex = (activeHighlightedIndex + 1) % items.length;
          updateDropdownHighlight();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeHighlightedIndex = (activeHighlightedIndex - 1 + items.length) % items.length;
          updateDropdownHighlight();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const targetItem = activeHighlightedIndex >= 0 ? items[activeHighlightedIndex] : items[0];
          if (targetItem) {
            window.location.href = targetItem.getAttribute('href');
          }
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', function(e) {
      if (activeDropdown && !activeDropdown.contains(e.target) && e.target !== heroInput && e.target !== topInput) {
        closeSearchDropdown();
      }
    });

    // Reposition on scroll or resize
    window.addEventListener('resize', function() {
      if (activeDropdown && activeDropdown.style.display !== 'none' && activeSearchInput) {
        renderSearchDropdown(activeSearchInput, activeSearchInput.value);
      }
    }, { passive: true });

    window.addEventListener('scroll', function() {
      if (activeDropdown && activeDropdown.style.display !== 'none' && activeSearchInput) {
        renderSearchDropdown(activeSearchInput, activeSearchInput.value);
      }
    }, { passive: true });
  }

  function initCommandAndFilter() {
    const heroInput = document.getElementById('heroSearchInput');
    const topInput = document.getElementById('searchToolsInput');
    const filterPills = document.querySelectorAll('.cat-filter-btn');
    const cards = document.querySelectorAll('#toolsGrid .tool-card');
    const emptyState = document.getElementById('toolsEmptyState');

    let activeCategory = 'all';

    function applyFilters() {
      const q = (heroInput && heroInput.value ? heroInput.value : (topInput ? topInput.value : '')).toLowerCase().trim();
      let matchCount = 0;

      cards.forEach(card => {
        const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
        const cardText = card.textContent.toLowerCase();

        const matchesCat = (activeCategory === 'all' || cardCat.includes(activeCategory));
        const matchesQuery = (!q || cardText.includes(q));

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
          matchCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = matchCount === 0 ? 'block' : 'none';
      }

      const countBadge = document.getElementById('filteredToolsCount');
      if (countBadge) {
        countBadge.textContent = `${matchCount} ${matchCount === 1 ? 'Utility' : 'Utilities'}`;
      }
    }

    if (heroInput) {
      heroInput.addEventListener('input', applyFilters);
    }
    if (topInput) {
      topInput.addEventListener('input', applyFilters);
    }

    // Keyboard Shortcuts: Cmd+K / Ctrl+K / Esc
    window.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const target = heroInput || topInput || document.getElementById('searchToolsInput');
        if (target) {
          target.focus();
          target.select();
          if (target.value.trim()) {
            renderSearchDropdown(target, target.value);
          }
        }
      } else if (e.key === 'Escape') {
        if (heroInput) { heroInput.value = ''; heroInput.blur(); }
        if (topInput) { topInput.value = ''; topInput.blur(); }
        closeSearchDropdown();
        applyFilters();
      }
    });

    filterPills.forEach(pill => {
      pill.addEventListener('click', function() {
        filterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        activeCategory = (this.getAttribute('data-cat') || 'all').toLowerCase();
        applyFilters();
      });
    });
  }

  function initWorkbenchTabs() {
    const tabs = document.querySelectorAll('.wb-tab-btn');
    const panels = document.querySelectorAll('.workbench-panel');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const target = this.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const activePanel = document.getElementById('wb-panel-' + target);
        if (activePanel) activePanel.classList.add('active');
      });
    });
  }


  // ==========================================
  // PWA Offline Engine & Top Install System
  // ==========================================
  var deferredPrompt = null;

  function injectPwaStyles() {
    if (document.getElementById('wdw-pwa-styles')) return;
    var style = document.createElement('style');
    style.id = 'wdw-pwa-styles';
    style.textContent = `
      .wdw-offline-strip {
        background: linear-gradient(90deg, #090e1a, #131d33, #090e1a);
        border-bottom: 1px solid rgba(234, 179, 8, 0.35);
        padding: 8px 16px;
        position: relative;
        overflow: hidden;
        z-index: 80;
      }
      .wdw-offline-strip::after {
        content: '';
        position: absolute;
        top: 0; left: -100%; width: 60%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(234, 179, 8, 0.18), transparent);
        animation: wdwShimmerWave 10s infinite cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
      }
      @keyframes wdwShimmerWave {
        0% { left: -100%; }
        20% { left: 140%; }
        100% { left: 140%; }
      }
      .wdw-offline-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1400px;
        margin: 0 auto;
        gap: 12px;
      }
      .wdw-offline-left {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.8rem;
        color: var(--text-main);
      }
      .wdw-offline-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.35);
        color: #34d399;
        padding: 2px 8px;
        border-radius: 9999px;
        font-size: 0.72rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .wdw-offline-dot {
        width: 6px;
        height: 6px;
        background: #10b981;
        border-radius: 50%;
        box-shadow: 0 0 8px #10b981;
      }
      .wdw-offline-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .wdw-install-btn {
        background: linear-gradient(135deg, #ca8a04, #eab308) !important;
        border: none !important;
        color: #000000 !important;
        padding: 5px 14px !important;
        border-radius: 6px !important;
        font-size: 0.76rem !important;
        font-weight: 800 !important;
        cursor: pointer !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        transition: all 0.2s ease !important;
        box-shadow: 0 2px 8px rgba(234, 179, 8, 0.3) !important;
        white-space: nowrap !important;
      }
      .wdw-install-btn:hover {
        background: linear-gradient(135deg, #eab308, #facc15) !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(234, 179, 8, 0.45) !important;
      }
      .wdw-offline-close {
        background: transparent !important;
        border: none !important;
        color: #94a3b8 !important;
        font-size: 1rem !important;
        cursor: pointer !important;
        padding: 2px 6px !important;
        line-height: 1 !important;
      }
      .wdw-offline-close:hover {
        color: #ffffff !important;
      }
      @media (max-width: 768px) {
        .wdw-offline-inner { flex-direction: column; align-items: flex-start; gap: 8px; }
        .wdw-offline-right { width: 100%; justify-content: space-between; }
      }
    `;
    document.head.appendChild(style);
  }

  function injectOfflineStrip() {
    if (document.getElementById('wdw-offline-strip')) return;
    if (sessionStorage.getItem('wdw_strip_dismissed') === 'true') return;

    var mainViewport = document.querySelector('.main-viewport');
    if (!mainViewport) return;

    var strip = document.createElement('div');
    strip.id = 'wdw-offline-strip';
    strip.className = 'wdw-offline-strip';
    strip.innerHTML = `
      <div class="wdw-offline-inner">
        <div class="wdw-offline-left">
          <span class="wdw-offline-badge"><span class="wdw-offline-dot"></span>Offline Engine Active</span>
          <span>⚡ <strong>Works 100% Offline:</strong> Install WebDevWorker on your device for instant zero-latency coding tools!</span>
        </div>
        <div class="wdw-offline-right">
          <button type="button" class="wdw-install-btn" id="stripInstallBtn">📲 Install App</button>
          <button type="button" class="wdw-offline-close" id="stripCloseBtn" title="Dismiss">✕</button>
        </div>
      </div>
    `;

    mainViewport.insertBefore(strip, mainViewport.firstChild);

    document.getElementById('stripCloseBtn').addEventListener('click', function() {
      strip.remove();
      sessionStorage.setItem('wdw_strip_dismissed', 'true');
    });

    document.getElementById('stripInstallBtn').addEventListener('click', triggerInstallPrompt);
  }

  function injectTopbarInstallBtn() {
    if (document.getElementById('wdwTopInstallBtn')) return;
    var topbarRight = document.querySelector('.topbar-right');
    if (!topbarRight) return;

    var btn = document.createElement('button');
    btn.id = 'wdwTopInstallBtn';
    btn.type = 'button';
    btn.className = 'wdw-install-btn';
    btn.style.marginRight = '8px';
    btn.innerHTML = '<span>📲</span> Install App';
    btn.addEventListener('click', triggerInstallPrompt);

    topbarRight.insertBefore(btn, topbarRight.firstChild);
  }

  function triggerInstallPrompt() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function(choice) {
        if (choice.outcome === 'accepted') {
          console.log('[WebDevWorker] App installed successfully');
          var strip = document.getElementById('wdw-offline-strip');
          if (strip) strip.remove();
          var btn = document.getElementById('wdwTopInstallBtn');
          if (btn) btn.style.display = 'none';
        }
        deferredPrompt = null;
      });
    } else {
      alert("To install WebDevWorker on your device:\n\n• Chrome / Edge (Desktop): Look for the Install icon (⊕) in the URL address bar at the top right, or click browser menu (⋮) ➔ 'Install WebDevWorker'.\n• Android: Tap browser menu (⋮) ➔ 'Install app' or 'Add to Home screen'.\n• iPhone / iPad: Tap the Share button in Safari ➔ 'Add to Home Screen'.");
    }
  }

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    console.log('[WebDevWorker] beforeinstallprompt captured!');
    var topBtn = document.getElementById('wdwTopInstallBtn');
    if (topBtn) topBtn.style.display = 'inline-flex';
    var stripBtn = document.getElementById('stripInstallBtn');
    if (stripBtn) stripBtn.style.display = 'inline-flex';
  });

  window.addEventListener('appinstalled', function() {
    console.log('[WebDevWorker] PWA app installed');
    var strip = document.getElementById('wdw-offline-strip');
    if (strip) strip.remove();
    var btn = document.getElementById('wdwTopInstallBtn');
    if (btn) btn.style.display = 'none';
  });

  function initAll() {

    // 1. Force Golden-Cyan Gradient on active tool heading
    try {
      const h1 = document.querySelector('main h1, .tool-header-title, .page-container h1, .tool-hero h1');
      if (h1) {
        h1.style.background = 'linear-gradient(135deg, #eab308 0%, #facc15 35%, #38bdf8 100%)';
        h1.style.webkitBackgroundClip = 'text';
        h1.style.webkitTextFillColor = 'transparent';
        h1.style.display = 'inline-block';
        h1.style.fontWeight = '900';

        const topbarTitle = document.querySelector('.topbar-title');
        if (topbarTitle) {
          const rawName = h1.innerText.replace(/^[\s\u{1F300}-\u{1F9FF}]+/u, '').trim();
          topbarTitle.innerHTML = '⚡ <span style="background:linear-gradient(135deg,#eab308,#38bdf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800;">' + rawName + '</span>';
        }
      }
    } catch(e) { console.error(e); }

    // 2. Auto-scroll active tool in sidebar into view
    setTimeout(function() {
      const activeNav = document.querySelector('.sidebar-nav .nav-item.active');
      if (activeNav) {
        activeNav.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, 150);

    initShareButton();
    renderSidebar();
    initTheme();
    initMobileDrawer();
    initUniversalSearch();
    initCommandAndFilter();
    initSpotlight();
    initWorkbenchTabs();
    injectPwaStyles();
    injectOfflineStrip();
    injectTopbarInstallBtn();
  }

  // Safe multi-lifecycle execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW fail:', err));
    });
  }

  // Universal Copy Engine (Turns Emerald Green on Click)
    
  // Universal Multi-Platform Share Engine (WhatsApp, Telegram, X/Twitter, FB, LinkedIn, Reddit, Copy Link)
  function initShareButton() {
    const topbarRight = document.querySelector('.topbar-right');
    if (!topbarRight || document.querySelector('.share-tool-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'share-tool-btn';
    btn.innerHTML = '<span>🔗</span> Share';
    btn.title = 'Share this developer tool across platforms';

    btn.onclick = function() {
      openUniversalShareModal();
    };

    topbarRight.insertBefore(btn, topbarRight.firstChild);
  }

  function openUniversalShareModal() {
    const existing = document.querySelector('.wdw-share-overlay');
    if (existing) existing.remove();

    const toolTitle = document.title.split('—')[0].trim() || 'Free Developer Tool';
    const pageUrl = window.location.href;
    const shareText = `Check out this developer tool: ${toolTitle} on WebDevWorker!`;

    const overlay = document.createElement('div');
    overlay.className = 'wdw-share-overlay';

    overlay.innerHTML = `
      <div class="wdw-share-modal" role="dialog">
        <div class="wdw-share-header">
          <h3><span>🔗</span> Share Tool</h3>
          <button class="wdw-share-close" id="wdwShareClose" aria-label="Close">✕</button>
        </div>
        <p style="font-size:0.82rem;color:var(--text-muted);margin:0 0 16px 0;">Share <strong>${toolTitle}</strong> instantly across your favorite platforms:</p>
        <div class="wdw-share-platforms">
          <a class="wdw-platform-btn" href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + pageUrl)}" target="_blank" rel="noopener">
            <span class="wdw-platform-icon" style="color:#25D366;">💬</span>
            <span>WhatsApp</span>
          </a>
          <a class="wdw-platform-btn" href="https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener">
            <span class="wdw-platform-icon" style="color:#0088cc;">✈️</span>
            <span>Telegram</span>
          </a>
          <a class="wdw-platform-btn" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}" target="_blank" rel="noopener">
            <span class="wdw-platform-icon" style="color:#1DA1F2;">𝕏</span>
            <span>Twitter / X</span>
          </a>
          <a class="wdw-platform-btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}" target="_blank" rel="noopener">
            <span class="wdw-platform-icon" style="color:#1877F2;">📘</span>
            <span>Facebook</span>
          </a>
          <a class="wdw-platform-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}" target="_blank" rel="noopener">
            <span class="wdw-platform-icon" style="color:#0A66C2;">💼</span>
            <span>LinkedIn</span>
          </a>
          <a class="wdw-platform-btn" href="https://reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(shareText)}" target="_blank" rel="noopener">
            <span class="wdw-platform-icon" style="color:#FF4500;">🤖</span>
            <span>Reddit</span>
          </a>
        </div>
        <div class="wdw-share-copy-box">
          <input type="text" id="wdwShareUrlInput" value="${pageUrl}" readonly>
          <button class="wdw-share-copy-btn" id="wdwShareCopyBtn">Copy Link</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Close on backdrop click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.remove();
    });

    document.getElementById('wdwShareClose').onclick = function() {
      overlay.remove();
    };

    // Copy direct link button
    const copyBtn = document.getElementById('wdwShareCopyBtn');
    copyBtn.onclick = function() {
      const input = document.getElementById('wdwShareUrlInput');
      input.select();
      navigator.clipboard.writeText(pageUrl).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.textContent = 'Copy Link';
        }, 2000);
      });
    };
  }

  // Universal Bulletproof Copy Engine (Zero-Fail with execCommand Fallback + Emerald Green)
  window.copyCode = function(targetId, btnRef) {
    var target = document.getElementById(targetId);
    var text = '';
    if (target) {
      text = target.value !== undefined && target.value !== '' ? target.value : target.innerText || target.textContent;
    }
    if (!text) text = '';

    var btn = null;
    if (typeof btnRef === 'string') {
      btn = document.getElementById(btnRef);
    } else if (btnRef && btnRef.nodeType) {
      btn = btnRef;
    }
    if (!btn && typeof event !== 'undefined' && event && event.target) {
      btn = event.target.closest('.copy-code-btn');
    }

    function triggerSuccess() {
      if (btn) {
        if (!btn.hasAttribute('data-orig-html')) {
          btn.setAttribute('data-orig-html', btn.innerHTML);
        }
        btn.classList.add('copied');
        btn.innerHTML = '<span>✓</span> Copied!';
        setTimeout(function() {
          btn.classList.remove('copied');
          btn.innerHTML = btn.getAttribute('data-orig-html') || 'Copy';
        }, 2000);
      }
    }

    function fallbackCopy() {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        ta.style.top = '-9999px';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        var successful = document.execCommand('copy');
        document.body.removeChild(ta);
        if (successful) {
          triggerSuccess();
          return;
        }
      } catch (err) {
        console.warn('Fallback execCommand error:', err);
      }
      triggerSuccess();
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function() {
        triggerSuccess();
      }).catch(function() {
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
  };


  // Universal Toast Notification System (CalcWorker & WebDevWorker compatibility)
  window.cwToast = window.showToast = function(message, type) {
    let toast = document.getElementById('wdw-universal-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'wdw-universal-toast';
      toast.style.cssText = 'position:fixed; top:24px; left:50%; transform:translateX(-50%) translateY(-20px); background:#0f172a; color:#f8fafc; border:1.5px solid #10b981; box-shadow:0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(16,185,129,0.3); border-radius:9999px; padding:10px 24px; font-size:0.92rem; font-weight:700; display:flex; align-items:center; gap:10px; z-index:999999; opacity:0; pointer-events:none; transition:all 0.25s cubic-bezier(0.16,1,0.3,1); font-family:system-ui,-apple-system,sans-serif;';
      document.body.appendChild(toast);
    }
    const isErr = type === 'error';
    const borderColor = isErr ? '#ef4444' : '#10b981';
    const icon = isErr ? '⚠️' : '✓';
    toast.style.borderColor = borderColor;
    toast.innerHTML = `<span style="color:${borderColor}; font-size:1.15rem; font-weight:900;">${icon}</span> <span>${message}</span>`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
    }, 2500);
  };

  // Universal Copy Helper for all buttons
  window.wdwCopy = function(textToCopy, btnElement, successMsg) {
    if (!textToCopy && btnElement) {
      const targetId = btnElement.getAttribute('data-copy-target');
      if (targetId) {
        const el = document.getElementById(targetId);
        textToCopy = el ? (el.value || el.innerText) : '';
      }
    }
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(function() {
      window.showToast(successMsg || '✓ Copied to clipboard!', 'success');
      if (btnElement) {
        const origHtml = btnElement.innerHTML;
        btnElement.classList.add('copied');
        btnElement.innerHTML = '<span>✓</span> Copied to Clipboard!';
        btnElement.style.background = '#10b981';
        btnElement.style.color = '#ffffff';
        btnElement.style.borderColor = '#10b981';
        setTimeout(function() {
          btnElement.classList.remove('copied');
          btnElement.innerHTML = origHtml;
          btnElement.style.background = '';
          btnElement.style.color = '';
          btnElement.style.borderColor = '';
        }, 2200);
      }
    }).catch(function() {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = textToCopy;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      window.showToast(successMsg || '✓ Copied to clipboard!', 'success');
    });
  };

  // Auto-highlight active tool heading and auto-scroll sidebar on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Auto-scroll active tool in sidebar into view
    setTimeout(function() {
      const activeNav = document.querySelector('.sidebar-nav .nav-item.active');
      if (activeNav) {
        activeNav.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, 150);

    // 2. Enhance any copy button clicked on page
    document.body.addEventListener('click', function(e) {
      const btn = e.target.closest('button');
      if (!btn) return;
      const txt = (btn.innerText || '').toLowerCase();
      if (txt.includes('copy') && !btn.classList.contains('copied')) {
        const orig = btn.innerHTML;
        setTimeout(function() {
          btn.classList.add('copied');
          btn.innerHTML = '<span>✓</span> Copied!';
          btn.style.background = '#10b981';
          btn.style.color = '#ffffff';
          btn.style.borderColor = '#10b981';
          setTimeout(function() {
            btn.classList.remove('copied');
            btn.innerHTML = orig;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
          }, 2000);
        }, 50);
      }
    });

    // 3. GDPR & CCPA Compliant Cookie & Privacy Consent Banner
    function initCookieConsent() {
      try {
        if (localStorage.getItem('wdw_cookie_consent')) return;

        const banner = document.createElement('div');
        banner.id = 'wdw-cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie and Privacy Preferences');
        banner.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); max-width:740px; width:calc(100% - 32px); background:rgba(15, 23, 42, 0.96); border:1px solid rgba(234, 179, 8, 0.4); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-radius:14px; box-shadow:0 20px 45px rgba(0,0,0,0.6); padding:20px 24px; color:#f8fafc; z-index:999999; font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; font-size:0.875rem; line-height:1.55; display:flex; flex-direction:column; gap:14px;';

        banner.innerHTML = [
          '<div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px;">',
          '  <div style="display:flex; align-items:center; gap:8px; font-weight:800; color:#eab308; font-size:0.95rem;">',
          '    <span>🍪</span> Cookie &amp; Privacy Preferences',
          '  </div>',
          '  <button id="wdw-cookie-close" aria-label="Close Banner" style="background:none; border:none; color:#94a3b8; font-size:1.2rem; cursor:pointer; padding:0 4px; line-height:1;">&times;</button>',
          '</div>',
          '<div style="color:#cbd5e1; font-size:0.84rem;">',
          '  WebDevWorker executes all 85+ developer utilities directly inside your browser memory with <strong>zero server-side telemetry</strong>. We use local storage and standard third-party advertising/analytics cookies (such as Google AdSense &amp; Analytics) to fund free developer infrastructure, adhering strictly to GDPR, CCPA, and Google AdSense publisher policies. Learn more in our <a href="/privacy.html" style="color:#eab308; text-decoration:underline; font-weight:600;">Privacy Policy</a>.',
          '</div>',
          '<div style="display:flex; align-items:center; justify-content:flex-end; flex-wrap:wrap; gap:10px; margin-top:4px;">',
          '  <button id="wdw-cookie-essential" style="background:transparent; border:1px solid #475569; color:#cbd5e1; padding:7px 16px; border-radius:8px; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.15s ease;">Essential Only</button>',
          '  <button id="wdw-cookie-accept" style="background:#eab308; border:1px solid #ca8a04; color:#0f172a; padding:7px 18px; border-radius:8px; font-size:0.82rem; font-weight:700; cursor:pointer; box-shadow:0 2px 8px rgba(234,179,8,0.3); transition:all 0.15s ease;">Accept All Cookies</button>',
          '</div>'
        ].join('');

        document.body.appendChild(banner);

        function dismissBanner(consentType) {
          try {
            localStorage.setItem('wdw_cookie_consent', consentType);
          } catch(e) {}
          banner.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          banner.style.opacity = '0';
          banner.style.transform = 'translateX(-50%) translateY(15px)';
          setTimeout(function() {
            if (banner.parentNode) banner.parentNode.removeChild(banner);
          }, 280);
        }

        const acceptBtn = document.getElementById('wdw-cookie-accept');
        const essBtn = document.getElementById('wdw-cookie-essential');
        const closeBtn = document.getElementById('wdw-cookie-close');

        if (acceptBtn) acceptBtn.addEventListener('click', function() { dismissBanner('accepted'); });
        if (essBtn) essBtn.addEventListener('click', function() { dismissBanner('essential'); });
        if (closeBtn) closeBtn.addEventListener('click', function() { dismissBanner('essential'); });
      } catch(e) {
        console.warn('Cookie consent initialization bypassed:', e);
      }
    }

    setTimeout(initCookieConsent, 600);
  });

})();
