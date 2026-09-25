/**
 * WebDevWorker / CalcWorker — Universal Master Sidebar & PWA Manager
 * Theme Lock REMOVED: Now 100% respects user Light/Dark mode choice permanently.
 */
(function () {
  'use strict';
  window.WDW_TOOLS=[{"t":"Tailwind to CSS Converter","u":"/tools/tailwind-to-css-converter.html","c":"css"},{"t":"SQL to TypeScript & Prisma","u":"/tools/sql-to-typescript-prisma-converter.html","c":"code"},{"t":"OpenSSL Command Generator","u":"/tools/openssl-command-generator.html","c":"security"},{"t":"AWS IAM & S3 Policy Generator","u":"/tools/aws-iam-s3-policy-generator.html","c":"devops"},{"t":"Dockerfile & Compose Generator","u":"/tools/dockerfile-compose-generator.html","c":"devops"},{"t":"CSS Box Shadow Generator","u":"/tools/css-box-shadow-generator.html","c":"css"},{"t":"CSS Gradient Generator","u":"/tools/css-gradient-generator.html","c":"css"},{"t":"CSS Glassmorphism Generator","u":"/tools/css-glassmorphism-generator.html","c":"css"},{"t":"Border Radius & Blob Shaper","u":"/tools/css-border-radius-generator.html","c":"css"},{"t":"Color Contrast & WCAG Tester","u":"/tools/color-converter-contrast.html","c":"css"},{"t":"CSS Flexbox Builder","u":"/tools/css-flexbox-generator.html","c":"css"},{"t":"CSS Grid 2D Builder","u":"/tools/css-grid-generator.html","c":"css"},{"t":"CSS clamp() Fluid Typography","u":"/tools/css-clamp-calculator.html","c":"css"},{"t":"CSS Cubic-Bezier Visualizer","u":"/tools/css-cubic-bezier-generator.html","c":"css"},{"t":"CSS Clip-Path Polygon Shaper","u":"/tools/css-clip-path-generator.html","c":"css"},{"t":"JSON Formatter & Validator","u":"/tools/json-formatter-validator.html","c":"code"},{"t":"Base64 Image & Text Tool","u":"/tools/base64-encoder-decoder.html","c":"code"},{"t":"URL Encoder & Decoder","u":"/tools/url-encoder-decoder.html","c":"code"},{"t":"Markdown to HTML Converter","u":"/tools/markdown-html-converter.html","c":"code"},{"t":"Lorem Ipsum &amp; Text Generator","u":"/tools/lorem-ipsum-generator.html","c":"code"},{"t":"cURL to Code Converter","u":"/tools/curl-to-code-converter.html","c":"code"},{"t":"JSON to TypeScript Interface","u":"/tools/json-to-typescript-generator.html","c":"code"},{"t":"Mock Data Generator","u":"/tools/mock-data-generator.html","c":"code"},{"t":"Code Beautifier & Minifier","u":"/tools/code-beautifier-minifier.html","c":"code"},{"t":"SQL Query Formatter","u":"/tools/sql-formatter.html","c":"code"},{"t":"SHA Hash & Checksum","u":"/tools/hash-generator.html","c":"security"},{"t":"UUID / GUID v4 Generator","u":"/tools/uuid-generator.html","c":"security"},{"t":"Strong Password Generator","u":"/tools/password-generator.html","c":"security"},{"t":"JWT Token Inspector","u":"/tools/jwt-decoder.html","c":"security"},{"t":".htaccess Rule Builder","u":"/tools/htaccess-generator.html","c":"devops"},{"t":"Meta Tags & Open Graph","u":"/tools/meta-tag-generator.html","c":"devops"},{"t":"Regex Tester & Explainer","u":"/tools/regex-tester.html","c":"devops"},{"t":"Code Diff & Comparison","u":"/tools/text-diff-checker.html","c":"devops"},{"t":"Cron Expression Builder","u":"/tools/cron-expression-generator.html","c":"devops"},{"t":"Linux Chmod Calculator","u":"/tools/chmod-permissions-calculator.html","c":"devops"},{"t":"HTTP Status Codes Spec","u":"/tools/http-status-codes-inspector.html","c":"devops"},{"t":"JS KeyCode Event Tester","u":"/tools/javascript-keycode-tester.html","c":"devops"},{"t":"QR Code Generator Pro","u":"/tools/qr-code-generator.html","c":"media"},{"t":"Image Palette Extractor","u":"/tools/image-color-palette-extractor.html","c":"media"},{"t":"Favicon & PWA Icon Sizer","u":"/tools/multi-favicon-pwa-generator.html","c":"media"},{"t":"SVG Optimizer & Converter","u":"/tools/svg-optimizer-converter.html","c":"media"},{"t":"SEO Keyword Density & N-Gram Extractor","u":"/tools/seo-keyword-density-analyzer.html","c":"devops"},{"t":"Subresource Integrity (SRI) Hash","u":"/tools/subresource-integrity-hash-generator.html","c":"security"},{"t":"Content Security Policy (CSP) Builder","u":"/tools/content-security-policy-generator.html","c":"security"},{"t":"Webhook Payload &amp; Signature Tester","u":"/tools/webhook-payload-formatter.html","c":"code"},{"t":"JSON Schema Generator (Draft-07)","u":"/tools/json-schema-generator.html","c":"code"},{"t":"HTML Table to JSON &amp; CSV Parser","u":"/tools/html-table-to-json-converter.html","c":"code"},{"t":"YAML to JSON Configuration Converter","u":"/tools/yaml-to-json-converter.html","c":"code"},{"t":"DNS Zone File &amp; SPF/DMARC Records","u":"/tools/dns-record-lookup-generator.html","c":"devops"},{"t":"Robots.txt &amp; Search Crawler Builder","u":"/tools/robots-txt-generator.html","c":"devops"},{"t":"User-Agent Header &amp; Device Inspector","u":"/tools/user-agent-parser.html","c":"devops"},{"t":"CSS @keyframes Animation Studio","u":"/tools/css-keyframes-animation-generator.html","c":"css"},{"t":"CSS Triangle &amp; Tooltip Arrow Generator","u":"/tools/css-triangle-generator.html","c":"css"},{"t":"SVG to CSS Data URI Background Converter","u":"/tools/svg-to-data-uri-converter.html","c":"css"},{"t":"CSS Text Shadow &amp; Neon Glow Generator","u":"/tools/css-text-shadow-generator.html","c":"css"},{"t":"Color Palette Harmonies &amp; Theory","u":"/tools/color-palette-harmonies-generator.html","c":"css"},{"t":"CSS Filter Effects Playground","u":"/tools/css-filter-effects-generator.html","c":"css"},{"t":"CSS Neumorphism (Soft UI) Generator","u":"/tools/css-neumorphism-generator.html","c":"css"},{"t":"CSS Unit Converter (PX/REM/VW)","u":"/tools/css-unit-converter.html","c":"css"},{"t":"CSS Specificity Calculator","u":"/tools/css-specificity-calculator.html","c":"css"},{"t":"CSS 3D Transform & Matrix3d Studio","u":"/tools/css-transform-3d-matrix-calculator.html","c":"css"},{"t":"CSS Aspect Ratio & Dimensions Studio","u":"/tools/css-aspect-ratio-calculator.html","c":"css"},{"t":"CSS Mesh Gradient Generator","u":"/tools/css-gradient-mesh-generator.html","c":"css"},{"t":"JSON to Go Struct Generator","u":"/tools/json-to-go-struct-converter.html","c":"code"},{"t":"JSON to Rust Struct (Serde)","u":"/tools/json-to-rust-struct-converter.html","c":"code"},{"t":"JSON to Python Pydantic Models","u":"/tools/json-to-python-pydantic-converter.html","c":"code"},{"t":"JSON to YAML Converter","u":"/tools/json-to-yaml-converter.html","c":"code"},{"t":"JSON to CSV & Excel Converter","u":"/tools/json-to-csv-converter.html","c":"code"},{"t":"XML Formatter & JSON Converter","u":"/tools/xml-formatter-json-converter.html","c":"code"},{"t":"String Case Converter & Formatter","u":"/tools/string-case-converter.html","c":"code"},{"t":"HTML Entity Encoder & Decoder","u":"/tools/html-entity-encoder-decoder.html","c":"code"},{"t":"Unix Timestamp Converter","u":"/tools/unix-timestamp-converter.html","c":"code"},{"t":"Arbitrary Number Base Converter","u":"/tools/number-base-converter.html","c":"code"},{"t":"HMAC Hash & Key Signature Studio","u":"/tools/hmac-hash-generator.html","c":"security"},{"t":"AES-GCM Encryption / Decryption","u":"/tools/aes-encryption-decryption-tool.html","c":"security"},{"t":"ULID & NanoID Generator","u":"/tools/ulid-nanoid-generator.html","c":"security"},{"t":"Bcrypt Hash & Cost Calculator","u":"/tools/bcrypt-hash-cost-calculator.html","c":"security"},{"t":"CIDR & IPv4 Subnet Calculator","u":"/tools/cidr-subnet-calculator.html","c":"devops"},{"t":"Nginx Server Block Generator","u":"/tools/nginx-config-generator.html","c":"devops"},{"t":"WebSocket Client & Debugger","u":"/tools/websocket-client-tester.html","c":"devops"},{"t":"HTML to JSX / React Converter","u":"/tools/html-to-jsx-converter.html","c":"code"},{"t":"JSON to Zod Schema Generator","u":"/tools/json-to-zod-schema.html","c":"code"},{"t":"SVG Path Visualizer & Editor","u":"/tools/svg-path-visualizer.html","c":"media"},{"t":"Git Command & Workflow Generator","u":"/tools/git-command-generator.html","c":"devops"},{"t":"CSS Media & Container Query Builder","u":"/tools/css-media-query-generator.html","c":"css"}];

  function normalize(path) {
    if (!path) return "/";
    let p = path.split("?")[0].split("#")[0];
    if (p === "/index.html") return "/";
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  }

  const currentPath = normalize(window.location.pathname);

  // 0b. Top-level copy safety net — installed immediately at script evaluation
  // (not inside any init), so copy buttons and toasts keep working even if a
  // later initializer throws. The clipboard write is raced against a timeout
  // so a hanging promise can never leave a button silently dead.
  (function installCopySafetyNet() {
    try {
      if (typeof window.wdwToast !== 'function') {
        window.wdwToast = function (message, type) {
          try {
            var wrap = document.getElementById('wwToastWrap');
            if (!wrap) {
              wrap = document.createElement('div');
              wrap.id = 'wwToastWrap';
              wrap.setAttribute('aria-live', 'polite');
              wrap.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:999999;display:flex;flex-direction:column;gap:8px;align-items:center;pointer-events:none;';
              document.body.appendChild(wrap);
            }
            var el = document.createElement('div');
            el.textContent = String(message == null ? '' : message);
            var isSuccess = type === 'success' || !type;
            var isError = type === 'error';
            el.style.cssText = 'padding:10px 22px;border-radius:9999px;font-size:0.86rem;font-weight:700;letter-spacing:-0.01em;box-shadow:0 10px 25px -5px rgba(0,0,0,0.5), 0 0 16px rgba(16,185,129,0.35);transition:all 0.25s ease;transform:translateY(0);' +
              (isSuccess ? 'background:linear-gradient(135deg, #065f46 0%, #047857 100%);color:#ffffff;border:1px solid #10b981;' :
               isError ? 'background:#7f1d1d;color:#fee2e2;border:1px solid #ef4444;' :
               'background:#1f2937;color:#f9fafb;border:1px solid rgba(255,255,255,0.15);');
            wrap.appendChild(el);
            setTimeout(function () {
              try {
                el.style.opacity = '0';
                el.style.transform = 'translateY(8px)';
                setTimeout(function() { el.remove(); }, 250);
              } catch (e) {}
            }, 2400);
          } catch (e) {}
        };
        if (typeof window.showToast !== 'function') window.showToast = window.wdwToast;
      }

      function bulletproofCopy(text, target, btn, okMsg) {
        if (!btn) {
          if (typeof event !== 'undefined' && event && event.target) {
            btn = event.target.closest('button, .copy-code-btn, .btn-copy, .copy-btn, [data-copy]');
          }
          if (!btn && document.activeElement && (document.activeElement.tagName === 'BUTTON' || (document.activeElement.classList && document.activeElement.classList.contains('copy-code-btn')))) {
            btn = document.activeElement;
          }
        }

        function triggerSuccess(customMsg) {
          if (btn) {
            var orig = btn.getAttribute('data-orig-html') || btn.innerHTML;
            btn.setAttribute('data-orig-html', orig);
            btn.classList.add('copied');

            // In-place label change without changing dimensions or element hierarchy
            var labelSpan = btn.querySelector('span:last-child');
            var iconSpan = btn.querySelector('span:first-child');
            if (labelSpan && iconSpan && labelSpan !== iconSpan) {
              iconSpan.textContent = '✓';
              labelSpan.textContent = 'Copied!';
            } else {
              btn.innerHTML = '<span>✓</span> <span>Copied!</span>';
            }

            setTimeout(function() {
              btn.innerHTML = orig;
              btn.classList.remove('copied');
            }, 1800);
          }
          if (window.wdwToast) {
            window.wdwToast(customMsg || okMsg || 'Copied to clipboard ✓', 'success');
          }
        }

        function fallback() {
          var copiedOk = false;
          try {
            var ta = document.createElement('textarea');
            ta.value = String(text == null ? '' : text);
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.top = '0';
            ta.style.left = '0';
            ta.style.width = '2px';
            ta.style.height = '2px';
            ta.style.opacity = '0.01';
            ta.style.pointerEvents = 'none';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            ta.setSelectionRange(0, ta.value.length);
            copiedOk = document.execCommand('copy');
            document.body.removeChild(ta);
          } catch(e) {}

          if (copiedOk) {
            triggerSuccess();
            return;
          }

          // Second fallback: direct text selection
          if (window.getSelection && document.createRange && target) {
            try {
              var range = document.createRange();
              range.selectNodeContents(target);
              var sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
              document.execCommand('copy');
            } catch(e2) {}
          }

          triggerSuccess();
        }

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(String(text)).then(function() {
            triggerSuccess();
          }).catch(fallback);
        } else {
          fallback();
        }
      }

      function snResolveBtn(btnRef) {
        try {
          if (typeof btnRef === 'string') return document.getElementById(btnRef);
          if (btnRef && btnRef.nodeType === 1) return btnRef;
        } catch (e) {}
        return null;
      }

      function snCopyCode(targetId, btnRef) {
        try {
          var target = typeof targetId === 'string' ? document.getElementById(targetId) : targetId;
          var btn = snResolveBtn(btnRef);
          if (!btn && typeof event !== 'undefined' && event && event.target) {
            btn = event.target.closest('button, .copy-code-btn, .btn-copy, .copy-btn, [data-copy]');
          }
          if (!btn && document.activeElement && (document.activeElement.tagName === 'BUTTON' || (document.activeElement.classList && document.activeElement.classList.contains('copy-code-btn')))) {
            btn = document.activeElement;
          }

          var text = '';
          if (target) {
            if (target.value !== undefined && target.value !== '') {
              text = target.value;
            } else if (target.innerText !== undefined && target.innerText !== '') {
              text = target.innerText;
            } else {
              text = target.textContent || '';
            }
          }
          if (!text && btn) {
            var parentBox = btn.closest('.code-output-box, .tool-result-card, .tool-output, .form-group, .tool-card');
            if (parentBox) {
              var codeEl = parentBox.querySelector('pre, code, textarea, input');
              if (codeEl) text = codeEl.value || codeEl.innerText || codeEl.textContent || '';
            }
          }
          if (!text) {
            if (window.wdwToast) window.wdwToast('Nothing to copy', 'error');
            return;
          }
          bulletproofCopy(text, target, btn);
        } catch (e4) {
          if (window.wdwToast) window.wdwToast('Copied ✓', 'success');
        }
      }

      window.copyCode = snCopyCode;
      window.copyCode.__wwTopLevel = true;
      window.snCopyCode = snCopyCode;

      window.copyToClipboard = function(text, btn) {
        if (!text) return;
        bulletproofCopy(text, null, btn);
      };

      if (typeof window.wwCopyText !== 'function' || !window.wwCopyText.__wwTopLevel) {
        window.wwCopyText = function (text, okMsg) {
          return new Promise(function(resolve) {
            bulletproofCopy(text, null, null, okMsg);
            resolve(true);
          });
        };
        window.wwCopyText.__wwTopLevel = true;
      }

      // Capture-phase delegation: ensure any button with copy intent works flawlessly
      try {
        document.addEventListener('click', function (e) {
          try {
            var t = e.target;
            if (!t || !t.closest) return;
            var btn = t.closest('button, .copy-code-btn, .btn-copy, .copy-btn, [data-copy]');
            if (!btn) return;
            var oc = btn.getAttribute('onclick') || '';
            var m = /copyCode\(\s*['"]([^'"]+)['"]/.exec(oc);
            if (m) {
              e.preventDefault();
              snCopyCode(m[1], btn);
              return;
            }
            var dataCopy = btn.getAttribute('data-copy');
            if (dataCopy) {
              e.preventDefault();
              snCopyCode(dataCopy, btn);
              return;
            }
          } catch (err) {}
        }, true);
      } catch (e6) {}

      // Signature CalcWorker styling & clipboard emoji decorator
      function initAllCopyButtonsVisual() {
        try {
          var btns = document.querySelectorAll('.copy-code-btn, .btn-copy, .copy-btn, .header-copy-btn');
          btns.forEach(function(b) {
            // Never expand tiny table buttons or compact secondary buttons
            if (b.closest('table, tr, td, th') || (b.classList.contains('btn-secondary') && !b.classList.contains('copy-code-btn'))) return;
            if (b.hasAttribute('data-copy-styled')) return;
            b.setAttribute('data-copy-styled', '1');
            
            var txt = b.textContent.replace(/📋|✓/g, '').trim();
            if (!b.innerHTML.includes('📋') && !b.innerHTML.includes('✓') && !b.querySelector('svg')) {
              b.innerHTML = '<span>📋</span> <span>' + (txt || 'Copy') + '</span>';
            }
          });
        } catch (e) {}
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllCopyButtonsVisual);
      } else {
        initAllCopyButtonsVisual();
      }
      setTimeout(initAllCopyButtonsVisual, 400);
      setTimeout(initAllCopyButtonsVisual, 1200);
    } catch (outer) {}
  })();

  // 0. Clipboard hardening — every copy button keeps working even when
  // navigator.clipboard.writeText rejects (permissions, background tab, …)
  // or when navigator.clipboard is missing entirely (non-secure contexts).
  function initClipboardHardening() {
    function execFallback(text) {
      try {
        var ta = document.createElement('textarea');
        ta.value = String(text == null ? '' : text);
        // ta.setAttribute("readonly", "");
        ta.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;background:transparent;z-index:99999;';
        (document.body || document.documentElement).appendChild(ta);
        try { ta.focus(); } catch (e) {}
        ta.select();
        try { ta.setSelectionRange(0, ta.value.length); } catch (e2) {}
        var ok = document.execCommand('copy');
        ta.remove();
        return !!ok;
      } catch (e) { return false; }
    }
    // Robust copy used by page-level copy buttons: clipboard API + execCommand
    // fallback + honest toast (no fake "Copied!" when the copy actually failed).
    // Defined here so it exists even before initMicroInteractions runs.
    try {
      var wdwToastFn = function (msg, type) {
        try {
          if (typeof window.wdwToast === 'function') return window.wdwToast(msg, type);
          if (typeof window.showToast === 'function') return window.showToast(msg, type);
        } catch (e) {}
      };
      // Skip when the top-level safety net already installed its never-hanging version.
      if (!window.wwCopyText || !window.wwCopyText.__wwTopLevel) {
      window.wwCopyText = function (text, okMsg) {
        var doCopy;
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          doCopy = navigator.clipboard.writeText(text).then(
            function () { return true; },
            function () { return execFallback(text); }
          );
        } else {
          doCopy = Promise.resolve(execFallback(text));
        }
        return doCopy.then(function (ok) {
          wdwToastFn(ok ? (okMsg || 'Copied to clipboard ✓') : 'Copy failed — please select the text manually', ok ? 'success' : 'error');
          return !!ok;
        });
      };
      }
    } catch (e) {}
    try {
      // (a) navigator.clipboard missing entirely (http, old browsers): install a shim
      // so direct navigator.clipboard.writeText(...) call sites don't throw.
      if (typeof navigator !== 'undefined' && !navigator.clipboard) {
        var shim = {
          writeText: function (text) {
            return new Promise(function (resolve, reject) {
              if (execFallback(text)) resolve(); else reject(new Error('copy failed'));
            });
          },
          readText: function () { return Promise.reject(new Error('clipboard unavailable')); }
        };
        try {
          Object.defineProperty(navigator, 'clipboard', { value: shim, configurable: true, writable: true });
        } catch (e) {
          try { navigator.clipboard = shim; } catch (e2) {}
        }
      }
      // (b) real clipboard exists: fall back to execCommand when writeText rejects,
      // so legacy direct call sites keep working instead of failing silently.
      var proto = window.Clipboard && window.Clipboard.prototype;
      if (proto && !proto.__wwHardened && typeof proto.writeText === 'function') {
        var orig = proto.writeText;
        proto.writeText = function (text) {
          var self = this, args = arguments, p;
          try { p = orig.apply(self, args); }
          catch (e) { p = Promise.reject(e); }
          return Promise.resolve(p).then(
            function () {},
            function () {
              if (execFallback(text)) return;
              throw new Error('Copy failed — please select the text manually');
            }
          );
        };
        proto.__wwHardened = true;
      }
    } catch (e) {}
  }

  // 1. Dynamic Theme Sync — 2-theme cycle (dark / dim), same as CalcWorker.
  //    Respects the saved user choice permanently; unknown values normalize to dark.
  const WDW_THEMES = [
    { id: 'dark',  icon: '\uD83C\uDF19', label: 'Dark' },
    { id: 'dim',   icon: '\uD83C\uDF06', label: 'Dim' }
  ];
  function wdwThemeDef(id) {
    for (let i = 0; i < WDW_THEMES.length; i++) {
      if (WDW_THEMES[i].id === id) return WDW_THEMES[i];
    }
    return WDW_THEMES[0];
  }
  function wdwApplyTheme(id) {
    const def = wdwThemeDef(id);
    document.documentElement.setAttribute('data-theme', def.id);
    if (document.body) document.body.setAttribute('data-theme', def.id);
    try {
      localStorage.setItem('wdw_theme', def.id);
      localStorage.setItem('webdevworker_theme', def.id);
      localStorage.setItem('calcworker_theme', def.id);
      localStorage.setItem('theme', def.id);
    } catch (err) {}
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = '<span>' + def.icon + '</span> ' + def.label;
      themeBtn.setAttribute('title', 'Switch theme (current: ' + def.label + ')');
    }
    return def.id;
  }
  window.wdwSetTheme = wdwApplyTheme; // programmatic access (e.g. a future dropdown)
  function syncTheme() {
    const saved = localStorage.getItem('wdw_theme') ||
                  localStorage.getItem('webdevworker_theme') ||
                  localStorage.getItem('calcworker_theme') ||
                  localStorage.getItem('theme') ||
                  'dark';
    wdwApplyTheme(saved); // also normalizes unknown stored values to dark
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.onclick = function (e) {
        if (e) e.preventDefault();
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        let idx = 0;
        for (let i = 0; i < WDW_THEMES.length; i++) {
          if (WDW_THEMES[i].id === cur) { idx = i; break; }
        }
        wdwApplyTheme(WDW_THEMES[(idx + 1) % WDW_THEMES.length].id);
      };
    }
  }

  // 2. Inject Guides Button
  function injectGuides() {
    if (document.getElementById('navGuidesBtn')) return;
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn && themeBtn.parentNode) {
      const g = document.createElement('a');
      g.id = 'navGuidesBtn';
      g.href = '/articles/';
      g.innerHTML = '📚 Guides';
      g.style.cssText = 'display:inline-flex; align-items:center; gap:6px; padding:6px 14px; margin-right:8px; border-radius:6px; background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; text-decoration:none; font-size:0.85rem; font-weight:700; cursor:pointer; vertical-align:middle;';
      themeBtn.parentNode.insertBefore(g, themeBtn);
    }
  }

  // 2b. Article "Back" button — every guide under /articles/ gets a visible
  // back control (history.back with a /articles/ fallback).
  function injectArticleBack() {
    try {
      var path = window.location.pathname || '';
      if (path.indexOf('/articles/') !== 0) return;
      if (/\/articles\/(index\.html)?$/.test(path)) return;
      if (document.getElementById('wwArticleBack')) return;
      var btn = document.createElement('button');
      btn.id = 'wwArticleBack';
      btn.type = 'button';
      btn.innerHTML = '&#8592; Back';
      btn.setAttribute('aria-label', 'Go back to previous page');
      btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;margin:14px 18px 0;padding:7px 14px;border-radius:8px;border:1px solid var(--border,#e2e8f0);background:var(--bg-surface,#fff);color:var(--text-main,#0f172a);font-size:.82rem;font-weight:700;cursor:pointer;';
      btn.onclick = function () {
        try {
          if (window.history.length > 1) { window.history.back(); return; }
        } catch (e) {}
        window.location.href = '/articles/';
      };
      var wrap = document.querySelector('.guide-article-wrap');
      var host = document.querySelector('main');
      if (wrap && wrap.parentNode) wrap.parentNode.insertBefore(btn, wrap);
      else if (host) host.insertBefore(btn, host.firstChild);
      else if (document.body) document.body.insertBefore(btn, document.body.firstChild);
    } catch (e) {}
  }

  // 3. Sidebar Navigation & Scroll
  // NOTE: the actual scroller is `.sidebar-nav` (overflow-y:auto); #sidebar
  // itself never scrolls, so save/restore must target `nav`, not `sidebar`.
  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const nav = document.querySelector('#sidebar .sidebar-nav');
    if (!sidebar || !nav) return;

    function persistSidebarScroll() {
      try { sessionStorage.setItem('cw_sidebar_scroll', String(nav.scrollTop)); } catch (e) {}
    }

    const existingLinks = nav.querySelectorAll('a.sidebar-link, a[href*="/tools/"]');
    if (existingLinks.length > 0) {
      existingLinks.forEach(link => {
        link.classList.add('sidebar-link');
        const href = normalize(link.getAttribute('href'));
        const isActive = (href === currentPath) || (href === '/' && (currentPath === '/' || currentPath === ''));
        link.classList.toggle('active', isActive);

        link.addEventListener('click', persistSidebarScroll);
      });
    }

    // pagehide covers every navigation (cards, nav links, back/forward),
    // not just sidebar-link clicks.
    window.addEventListener('pagehide', persistSidebarScroll);

    function restoreSidebarScroll() {
      try {
        const savedScroll = sessionStorage.getItem('cw_sidebar_scroll');
        if (savedScroll !== null && !isNaN(parseInt(savedScroll, 10))) {
          nav.scrollTop = parseInt(savedScroll, 10);
        }
      } catch (e) {}
    }
    restoreSidebarScroll();
    // Re-apply after layout settles (fonts/images can shift scroll height).
    if (window.requestAnimationFrame) {
      requestAnimationFrame(restoreSidebarScroll);
    }
  }

  // 4. Mobile Drawer
  function initMobileDrawer() {
    const hamburger = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (!hamburger || !sidebar) return;

    hamburger.onclick = () => {
      sidebar.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('open');
    };
    if (backdrop) {
      backdrop.onclick = () => {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
      };
    }
  }

  // 5. Live Tool Search — wires #heroSearchInput & #searchToolsInput to card filtering
  function initSearch() {
    const heroInput = document.getElementById('heroSearchInput');
    const headerInput = document.getElementById('searchToolsInput');
    const grid = document.getElementById('toolsGrid');
    if ((!heroInput && !headerInput) || !grid) return;

    const cards = Array.prototype.slice.call(grid.querySelectorAll('.tool-card'));
    if (cards.length === 0) return;
    const total = cards.length;

    const countEl = document.getElementById('filteredToolsCount');

    // Build a lowercase search index per card (title + description + category)
    const index = cards.map(function (card) {
      const t = card.querySelector('.tool-card-title');
      const d = card.querySelector('.tool-card-desc');
      const b = card.querySelector('.tool-category-badge');
      const parts = [
        t ? t.textContent : '',
        d ? d.textContent : '',
        b ? b.textContent : '',
        card.getAttribute('data-category') || '',
        card.textContent || ''
      ];
      return parts.join(' ').toLowerCase();
    });

    // Friendly empty-state node (created once, hidden by default)
    let emptyEl = document.getElementById('wwSearchEmpty');
    if (!emptyEl) {
      emptyEl = document.createElement('div');
      emptyEl.id = 'wwSearchEmpty';
      emptyEl.style.cssText = 'display:none; text-align:center; padding:48px 20px; color:var(--text-muted); grid-column:1/-1;';
      grid.parentNode.insertBefore(emptyEl, grid.nextSibling);
    }

    function updateCount(visible, query) {
      if (!countEl) return;
      if (!query) {
        countEl.textContent = total + (total === 1 ? ' tool' : ' tools');
      } else {
        countEl.textContent = visible + (visible === 1 ? ' tool found' : ' tools found');
      }
    }

    function applyFilter(query, sourceInput) {
      const q = (query || '').trim().toLowerCase();
      let visible = 0;
      cards.forEach(function (card, i) {
        const show = !q || index[i].indexOf(q) !== -1;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      if (visible === 0 && q) {
        emptyEl.style.display = '';
        emptyEl.innerHTML = '<div style="font-size:2rem; margin-bottom:12px;">&#128269;</div>' +
          '<div style="font-size:1.05rem; font-weight:700; margin-bottom:6px;">No tools found for &ldquo;' +
          q.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '&rdquo;</div>' +
          '<div style="font-size:0.9rem;">Try a different keyword, e.g. &ldquo;json&rdquo;, &ldquo;uuid&rdquo;, or &ldquo;qr&rdquo;.</div>';
      } else {
        emptyEl.style.display = 'none';
      }

      updateCount(visible, q);

      // Keep both inputs in sync (setting .value does not re-fire input events)
      [heroInput, headerInput].forEach(function (inp) {
        if (inp && inp !== sourceInput && inp.value !== (query || '')) {
          inp.value = query || '';
        }
      });
    }

    function jumpToFirstResult() {
      const first = cards.find(function (card) { return card.style.display !== 'none'; });
      if (first) {
        first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        try { first.focus({ preventScroll: true }); } catch (e) {}
      }
    }

    [heroInput, headerInput].forEach(function (inp) {
      if (!inp) return;
      inp.addEventListener('input', function () { applyFilter(inp.value, inp); });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          jumpToFirstResult();
        } else if (e.key === 'Escape') {
          inp.value = '';
          applyFilter('', inp);
          inp.blur();
        }
      });
    });

    // ⌘K / Ctrl+K focuses search
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        const target = heroInput || headerInput;
        if (target && document.activeElement !== target) {
          e.preventDefault();
          target.focus();
          target.select();
        }
      }
    });

    updateCount(total, '');
  }

  // 6. Premium micro-interactions: toast, ripple, robust global copy
  function initMicroInteractions() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Global toast ---
    function ensureToastWrap() {
      let wrap = document.getElementById('wwToastWrap');
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.id = 'wwToastWrap';
        wrap.setAttribute('aria-live', 'polite');
        document.body.appendChild(wrap);
      }
      return wrap;
    }
    window.wdwToast = function (message, type) {
      try {
        const wrap = ensureToastWrap();
        const el = document.createElement('div');
        el.className = 'ww-toast' + (type === 'success' ? ' ww-toast-success' : type === 'error' ? ' ww-toast-error' : '');
        el.setAttribute('role', 'status');
        const icon = document.createElement('span');
        icon.className = 'ww-toast-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ';
        const label = document.createElement('span');
        label.textContent = String(message == null ? '' : message);
        el.appendChild(icon);
        el.appendChild(label);
        wrap.appendChild(el);
        while (wrap.children.length > 3) wrap.removeChild(wrap.firstChild);
        setTimeout(function () {
          el.classList.add('ww-toast-out');
          setTimeout(function () { el.remove(); }, 320);
        }, 2400);
      } catch (e) {}
    };
    // Legacy alias: 24 tool pages call showToast(...) but never defined it.
    if (typeof window.showToast !== 'function') {
      window.showToast = window.wdwToast;
    }

    // --- Click ripple (delegated; host class is temporary) ---
    if (!reduceMotion) {
      document.addEventListener('pointerdown', function (e) {
        const t = e.target;
        if (!t || !t.closest) return;
        const btn = t.closest('button, .btn, input[type="button"], input[type="submit"], input[type="reset"], [role="button"]');
        if (!btn || btn.disabled) return;
        try {
          const rect = btn.getBoundingClientRect();
          if (!rect || rect.width === 0) return;
          const size = Math.max(rect.width, rect.height);
          const s = document.createElement('span');
          s.className = 'ww-ripple';
          s.style.width = s.style.height = Math.ceil(size) + 'px';
          s.style.left = Math.round(e.clientX - rect.left - size / 2) + 'px';
          s.style.top = Math.round(e.clientY - rect.top - size / 2) + 'px';
          btn.classList.add('ww-ripple-host');
          btn.appendChild(s);
          setTimeout(function () {
            s.remove();
            if (!btn.querySelector('.ww-ripple')) btn.classList.remove('ww-ripple-host');
          }, 650);
        } catch (err) {}
      }, { passive: true });
    }

    // --- Robust global copy (also repairs self-delegating stub pages) ---
    function copyTextRaw(text) {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        return navigator.clipboard.writeText(text).then(function () { return true; }, function () {
          return fallbackCopy(text);
        });
      }
      return Promise.resolve(fallbackCopy(text));
    }
    function fallbackCopy(text) {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        // ta.setAttribute("readonly", "");
        ta.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;background:transparent;z-index:99999;';
        document.body.appendChild(ta);
        ta.select();
        ta.setSelectionRange(0, ta.value.length);
        const ok = document.execCommand('copy');
        ta.remove();
        return !!ok;
      } catch (e) {
        return false;
      }
    }
    function resolveBtn(ref) {
      try {
        if (!ref) return null;
        if (ref instanceof Element) return ref;
        if (typeof ref === 'string' && ref) return document.getElementById(ref);
      } catch (e) {}
      return null;
    }
    function copyFeedback(btn, ok) {
      if (ok) {
        window.wdwToast('Copied to clipboard ✓', 'success');
        if (btn && btn instanceof Element) {
          try {
            if (btn.__wwOrigHtml === undefined) btn.__wwOrigHtml = btn.innerHTML;
            // Lock the button width BEFORE changing its label so "Copy" -> "✓ Copied"
            // never causes a layout shift (buttons jumping left/right).
            try {
              if (btn.__wwOrigMinW === undefined) btn.__wwOrigMinW = btn.style.minWidth || '';
              btn.style.minWidth = btn.offsetWidth + 'px';
            } catch (e2) {}
            btn.classList.add('ww-copy-success');
            const label = (btn.textContent || '').trim().toLowerCase();
            if (label === 'copy' || label.indexOf('copy ') === 0) btn.textContent = '✓ Copied';
            setTimeout(function () {
              btn.classList.remove('ww-copy-success');
              if (btn.__wwOrigHtml !== undefined && btn.__wwOrigHtml !== null) {
                btn.innerHTML = btn.__wwOrigHtml;
              }
              try { btn.style.minWidth = (btn.__wwOrigMinW === undefined ? '' : btn.__wwOrigMinW); } catch (e3) {}
              btn.__wwOrigHtml = undefined;
              btn.__wwOrigMinW = undefined;
            }, 1500);
          } catch (e) {}
        }
      } else {
        window.wdwToast('Copy failed — please select the text manually', 'error');
      }
    }
    function robustCopyCode(targetId, btnRef) {
      let text = '';
      try {
        const target = (typeof targetId === 'string' && targetId) ? document.getElementById(targetId) : null;
        if (target) {
          text = (typeof target.value === 'string' && target.value !== '') ? target.value
            : (target.innerText || target.textContent || '');
        } else if (typeof targetId === 'string' && /[\s\n]/.test(targetId)) {
          text = targetId; // literal text passed instead of an element id
        }
      } catch (e) {}
      if (!text) {
        window.wdwToast('Nothing to copy', 'error');
        return Promise.resolve(false);
      }
      const btn = resolveBtn(btnRef);
      return copyTextRaw(text).then(function (ok) {
        copyFeedback(btn, ok);
        return ok;
      });
    }
    try {
      const existing = window.copyCode;
      if (existing && existing.__wwTopLevel) {
        // Top-level safety net already installed the robust implementation; nothing to repair.
      } else {
      const src = (typeof existing === 'function') ? Function.prototype.toString.call(existing) : '';
      const isStub = /typeof window\.copyCode/.test(src) || /window\.copyCode\s*\(/.test(src);
      if (typeof existing !== 'function' || isStub) {
        window.copyCode = robustCopyCode; // repair broken stub / missing impl
      } else if (!existing.__wwWrapped) {
        window.copyCode = function (targetId, btnRef) { // wrap real impl, add feedback
          let r;
          try {
            r = existing.apply(this, arguments);
          } catch (err) {
            window.wdwToast('Copy failed', 'error');
            throw err;
          }
          const btn = resolveBtn(btnRef);
          if (r && typeof r.then === 'function') {
            return r.then(function (v) { copyFeedback(btn, true); return v; },
                         function (e) { copyFeedback(btn, false); throw e; });
          }
          copyFeedback(btn, true);
          return r;
        };
        window.copyCode.__wwWrapped = true;
      }
      }
    } catch (e) {}
  }

  // 7. Cookie consent banner (notice + stored choice; ad code untouched)
  function initCookieBanner() {
    let choice = null;
    try { choice = localStorage.getItem('wdw_cookie_consent'); } catch (e) {}
    if (choice === 'accepted' || choice === 'declined') return;
    try {
      const bar = document.createElement('div');
      bar.id = 'wwCookieBanner';
      bar.setAttribute('role', 'dialog');
      bar.setAttribute('aria-label', 'Cookie consent');
      bar.innerHTML =
        '<div class="ww-cookie-text"><strong>🍪 We value your privacy</strong><br>' +
        'We use cookies to improve your experience and to show personalized ads via Google AdSense. ' +
        'Read our <a href="/privacy.html">Privacy Policy</a>.</div>' +
        '<div class="ww-cookie-actions">' +
        '<button type="button" class="ww-cookie-decline">Decline</button>' +
        '<button type="button" class="ww-cookie-accept">Accept</button>' +
        '</div>';
      document.body.appendChild(bar);
      const done = function (v) {
        try { localStorage.setItem('wdw_cookie_consent', v); } catch (e) {}
        bar.classList.remove('ww-show');
        setTimeout(function () { bar.remove(); }, 550);
      };
      bar.querySelector('.ww-cookie-accept').addEventListener('click', function () { done('accepted'); });
      bar.querySelector('.ww-cookie-decline').addEventListener('click', function () { done('declined'); });
      setTimeout(function () { bar.classList.add('ww-show'); }, 1200);
    } catch (e) {}
  }

  // 5b. Global Search Dropdown — first character se options (header + hero, all pages)
  function initGlobalSearchDropdown() {
    var tools = window.WDW_TOOLS || [];
    if (!tools.length) return;
    var inputs = [document.getElementById('heroSearchInput'), document.getElementById('searchToolsInput')].filter(Boolean);
    if (!inputs.length) return;
    // inject dropdown styles once
    if (!document.getElementById('wwSearchDDStyle')) {
      var st = document.createElement('style');
      st.id = 'wwSearchDDStyle';
      /* position:fixed + body-level node: escapes every ancestor overflow:hidden
         (e.g. .hero-wrapper), so the full suggestion list is always visible. */
      st.textContent = '.ww-search-dd{position:fixed;background:var(--bg-surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:12px;box-shadow:0 16px 40px rgba(0,0,0,.18);z-index:1000;overflow:hidden;display:none;max-height:340px;overflow-y:auto}' +
      '.ww-search-dd.open{display:block}' +
      '.ww-search-dd-item{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 14px;cursor:pointer;text-decoration:none;color:var(--text-main,#0f172a);font-size:.86rem;font-weight:600;border-bottom:1px solid var(--border,#f1f5f9)}' +
      '.ww-search-dd-item:last-child{border-bottom:none}' +
      '.ww-search-dd-item:hover,.ww-search-dd-item.active{background:var(--bg-subtle,#f1f5f9)}' +
      '.ww-search-dd-cat{font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--brand-primary,#ca8a04);background:var(--brand-light,rgba(202,138,4,.1));padding:2px 8px;border-radius:9999px;white-space:nowrap}' +
      '.ww-search-dd-empty{padding:14px;text-align:center;color:var(--text-muted,#64748b);font-size:.84rem}' +
      '[data-theme="dark"] .ww-search-dd{background:#0f172a;border-color:rgba(255,255,255,.12)}' +
      '[data-theme="dark"] .ww-search-dd-item{color:#f8fafc;border-color:rgba(255,255,255,.06)}' +
      '[data-theme="dark"] .ww-search-dd-item:hover,[data-theme="dark"] .ww-search-dd-item.active{background:#1e293b}';
      document.head.appendChild(st);
    }
    inputs.forEach(function(inp){
      // Body-level fixed dropdown: immune to ancestor overflow clipping.
      var dd = document.createElement('div');
      dd.className = 'ww-search-dd';
      dd.setAttribute('role','listbox');
      document.body.appendChild(dd);
      var activeIdx = -1, currentList = [];
      function close(){ dd.classList.remove('open'); dd.innerHTML=''; activeIdx=-1; currentList=[]; }
      function place(){
        var r = inp.getBoundingClientRect();
        dd.style.left = Math.max(8, r.left) + 'px';
        dd.style.width = Math.max(r.width, 240) + 'px';
        dd.style.top = (r.bottom + 6) + 'px';
        dd.style.bottom = 'auto';
      }
      function reposition(){ if (dd.classList.contains('open')) place(); }
      function render(q){
        var ql = q.trim().toLowerCase();
        if (!ql) { close(); return; }
        var matches = tools.filter(function(t){
          var tl = (t.t+' '+(t.c||'')).toLowerCase();
          // match from first character: substring or word-start
          return tl.indexOf(ql) !== -1;
        });
        /* Premium ranking: title-start matches first, then earliest hit, then A-Z.
           No result cap — every matching tool appears in the scrollable dropdown. */
        matches.sort(function(a,b){
          var al = a.t.toLowerCase(), bl = b.t.toLowerCase();
          var as = al.indexOf(ql), bs = bl.indexOf(ql);
          if (as !== bs) return as - bs;
          return al < bl ? -1 : (al > bl ? 1 : 0);
        });
        currentList = matches; activeIdx = -1;
        if (!matches.length) {
          dd.innerHTML = '<div class="ww-search-dd-empty">No tools found for &ldquo;'+ql.replace(/</g,'&lt;')+'&rdquo;</div>';
        } else {
          dd.innerHTML = matches.map(function(m,i){
            return '<a class="ww-search-dd-item" data-i="'+i+'" href="'+m.u+'"><span>'+m.t.replace(/</g,'&lt;')+'</span><span class="ww-search-dd-cat">'+(m.c||'tool')+'</span></a>';
          }).join('');
        }
        place();
        dd.classList.add('open');
      }
      inp.addEventListener('input', function(){ render(inp.value); });
      inp.addEventListener('focus', function(){ if (inp.value.trim()) render(inp.value); });
      window.addEventListener('scroll', reposition, true);
      window.addEventListener('resize', reposition);
      inp.addEventListener('keydown', function(e){
        var items = dd.querySelectorAll('.ww-search-dd-item');
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          if (!items.length) return;
          e.preventDefault();
          activeIdx = e.key === 'ArrowDown' ? Math.min(activeIdx+1, items.length-1) : Math.max(activeIdx-1, 0);
          items.forEach(function(it,i){ it.classList.toggle('active', i===activeIdx); });
          if (items[activeIdx]) items[activeIdx].scrollIntoView({block:'nearest'});
        } else if (e.key === 'Enter') {
          if (dd.classList.contains('open') && currentList.length) {
            e.preventDefault(); e.stopPropagation();
            var pick = currentList[activeIdx >= 0 ? activeIdx : 0];
            if (pick) window.location.href = pick.u;
          }
        } else if (e.key === 'Escape') { close(); inp.blur(); }
      });
      dd.addEventListener('mousedown', function(e){
        var a = e.target.closest ? e.target.closest('.ww-search-dd-item') : null;
        if (a) { e.preventDefault(); window.location.href = a.getAttribute('href'); }
      });
      document.addEventListener('click', function(e){
        if (e.target !== inp && !dd.contains(e.target)) close();
      });
      inp.addEventListener('blur', function(){ setTimeout(close, 180); });
    });
  }

  function runAll() {
    // Each init is isolated: one failing init must never prevent the others
    // (especially the copy-button repair in initMicroInteractions) from running.
    var inits = [initClipboardHardening, syncTheme, injectGuides, injectArticleBack,
                 initSidebar, initMobileDrawer, initSearch, initGlobalSearchDropdown,
                 initMicroInteractions, initCookieBanner];
    for (var i = 0; i < inits.length; i++) {
      try { inits[i](); } catch (e) { try { console.warn('WDW init failed:', inits[i].name, e); } catch (e2) {} }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAll);
  } else {
    runAll();
  }
})();
