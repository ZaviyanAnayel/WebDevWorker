/**
 * WebDevWorker / CalcWorker — Universal Master Sidebar & PWA Manager
 * Theme Lock REMOVED: Now 100% respects user Light/Dark mode choice permanently.
 */
(function () {
  'use strict';

  function normalize(path) {
    if (!path) return "/";
    let p = path.split("?")[0].split("#")[0];
    if (p === "/index.html") return "/";
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  }

  const currentPath = normalize(window.location.pathname);

  // 1. Dynamic Theme Sync — 4-theme cycle (dark / light / sepia / dim).
  //    Respects the saved user choice permanently; unknown values normalize to dark.
  const WDW_THEMES = [
    { id: 'dark',  icon: '\uD83C\uDF19', label: 'Dark' },
    { id: 'light', icon: '\u2600\uFE0F', label: 'Light' },
    { id: 'sepia', icon: '\uD83D\uDCD6', label: 'Sepia' },
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
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;';
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
            btn.classList.add('ww-copy-success');
            const label = (btn.textContent || '').trim().toLowerCase();
            if (label === 'copy' || label.indexOf('copy ') === 0) btn.textContent = '✓ Copied';
            setTimeout(function () {
              btn.classList.remove('ww-copy-success');
              if (btn.__wwOrigHtml !== undefined && btn.__wwOrigHtml !== null) {
                btn.innerHTML = btn.__wwOrigHtml;
              }
              btn.__wwOrigHtml = undefined;
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

  function runAll() {
    syncTheme();
    injectGuides();
    initSidebar();
    initMobileDrawer();
    initSearch();
    initMicroInteractions();
    initCookieBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAll);
  } else {
    runAll();
  }
})();
