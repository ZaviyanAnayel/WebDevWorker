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

  // 1. Dynamic Theme Sync (Respects User Choice)
  function syncTheme() {
    const saved = localStorage.getItem('wdw_theme') || 
                  localStorage.getItem('webdevworker_theme') || 
                  localStorage.getItem('calcworker_theme') || 
                  localStorage.getItem('theme') || 
                  'dark';

    document.documentElement.setAttribute('data-theme', saved);
    if (document.body) document.body.setAttribute('data-theme', saved);

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = (saved === 'dark') ? '☀️ Light' : '🌙 Dark';
      themeBtn.onclick = function (e) {
        if (e) e.preventDefault();
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        const nxt = (cur === 'dark') ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nxt);
        if (document.body) document.body.setAttribute('data-theme', nxt);
        try {
          localStorage.setItem('wdw_theme', nxt);
          localStorage.setItem('webdevworker_theme', nxt);
          localStorage.setItem('calcworker_theme', nxt);
          localStorage.setItem('theme', nxt);
        } catch (err) {}
        themeBtn.innerHTML = (nxt === 'dark') ? '☀️ Light' : '🌙 Dark';
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
  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const nav = document.querySelector('#sidebar .sidebar-nav');
    if (!sidebar || !nav) return;

    const existingLinks = nav.querySelectorAll('a.sidebar-link, a[href*="/tools/"]');
    if (existingLinks.length > 0) {
      existingLinks.forEach(link => {
        link.classList.add('sidebar-link');
        const href = normalize(link.getAttribute('href'));
        const isActive = (href === currentPath) || (href === '/' && (currentPath === '/' || currentPath === ''));
        link.classList.toggle('active', isActive);

        link.addEventListener('click', function () {
          try { sessionStorage.setItem('cw_sidebar_scroll', sidebar.scrollTop); } catch (e) {}
        });
      });
    }

    const savedScroll = sessionStorage.getItem('cw_sidebar_scroll');
    if (savedScroll !== null && !isNaN(parseInt(savedScroll, 10))) {
      sidebar.scrollTop = parseInt(savedScroll, 10);
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

  function runAll() {
    syncTheme();
    injectGuides();
    initSidebar();
    initMobileDrawer();
    initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAll);
  } else {
    runAll();
  }
})();
