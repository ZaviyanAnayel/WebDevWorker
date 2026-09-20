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

  function runAll() {
    syncTheme();
    injectGuides();
    initSidebar();
    initMobileDrawer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAll);
  } else {
    runAll();
  }
})();
