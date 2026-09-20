/**
 * WebDevWorker — Universal Production Engine
 * Fixes: Permanent Light/Dark Mode Persistence across all tools + Guides Navbar Injection
 */
(function() {
  'use strict';

  // 1. Unified Theme Storage Engine (Supports wdw_theme, webdevworker_theme, calcworker_theme)
  function getStoredTheme() {
    return localStorage.getItem('wdw_theme') || 
           localStorage.getItem('webdevworker_theme') || 
           localStorage.getItem('theme') || 
           localStorage.getItem('calcworker_theme') || 
           'dark';
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem('wdw_theme', theme);
      localStorage.setItem('webdevworker_theme', theme);
      localStorage.setItem('theme', theme);
      localStorage.setItem('calcworker_theme', theme);
    } catch (e) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
    setStoredTheme(theme);
    updateThemeBtnUI(theme);
  }

  function updateThemeBtnUI(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      if (theme === 'dark') {
        btn.innerHTML = '☀️ Light';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        btn.innerHTML = '🌙 Dark';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    }
  }

  function initTheme() {
    const currentTheme = getStoredTheme();
    // Apply user's selected theme (no forced dark lock)
    applyTheme(currentTheme);

    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.onclick = function(e) {
        if (e) e.preventDefault();
        const active = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = (active === 'dark') ? 'light' : 'dark';
        applyTheme(next);
      };
    }
  }

  // 2. Auto-Inject "Guides" button into Header (Matches Screenshot 5)
  function injectGuidesButton() {
    if (document.getElementById('navGuidesBtn')) return;

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn && themeBtn.parentNode) {
      const guidesBtn = document.createElement('a');
      guidesBtn.id = 'navGuidesBtn';
      guidesBtn.href = '/articles/';
      guidesBtn.innerHTML = '📚 Guides';
      guidesBtn.className = 'btn-guides-nav';
      guidesBtn.style.cssText = 'display:inline-flex; align-items:center; gap:6px; padding:6px 14px; margin-right:8px; border-radius:6px; background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; text-decoration:none; font-size:0.85rem; font-weight:700; cursor:pointer; vertical-align:middle;';
      
      themeBtn.parentNode.insertBefore(guidesBtn, themeBtn);
    }
  }

  // 3. Mobile Navigation Drawer & Backdrop Click Fix
  function initMobileDrawer() {
    const btn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');

    if (backdrop) {
      backdrop.style.pointerEvents = 'none';
      backdrop.style.opacity = '0';
    }

    if (btn && sidebar && backdrop) {
      btn.onclick = function(e) {
        if (e) e.stopPropagation();
        const isOpen = sidebar.classList.toggle('open');
        backdrop.classList.toggle('open', isOpen);
        backdrop.style.pointerEvents = isOpen ? 'auto' : 'none';
        backdrop.style.opacity = isOpen ? '1' : '0';
      };
      backdrop.onclick = function() {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
        backdrop.style.pointerEvents = 'none';
        backdrop.style.opacity = '0';
      };
    }
  }

  // 4. Silent Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').catch(function() {});
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      injectGuidesButton();
      initMobileDrawer();
    });
  } else {
    initTheme();
    injectGuidesButton();
    initMobileDrawer();
  }
})();
