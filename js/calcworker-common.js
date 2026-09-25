/**
 * CalcWorker — Universal Common Runtime, Theme Engine & PWA Manager (V26 Production)
 * 100% Zero White Flash, Zero Layout Shift (CLS), and Universal Clipboard Utilities.
 */
(function() {
  'use strict';

  // 1. Theme Management (Always dark by default)
  function initTheme() {
    var t = localStorage.getItem('calcworker_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
    var btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = (t === 'dark') 
        ? '<span style="font-size:14px;">☀️</span> <span class="btn-label">Light</span>' 
        : '<span style="font-size:14px;">🌙</span> <span class="btn-label">Dark</span>';
      
      btn.onclick = function() {
        var cur = document.documentElement.getAttribute('data-theme') || 'dark';
        var nxt = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nxt);
        localStorage.setItem('calcworker_theme', nxt);
        btn.innerHTML = (nxt === 'dark') 
          ? '<span style="font-size:14px;">☀️</span> <span class="btn-label">Light</span>' 
          : '<span style="font-size:14px;">🌙</span> <span class="btn-label">Dark</span>';
        if (typeof window.cwToast === 'function') {
          window.cwToast('Theme updated: ' + (nxt === 'dark' ? 'Obsidian Dark' : 'Clean Alpine'));
        }
      };
    }
  }

  // 2. Mobile Drawer Navigation Toggle
  function initMobileDrawer() {
    var btn = document.getElementById('hamburgerBtn');
    var sidebar = document.getElementById('sidebar');
    var backdrop = document.getElementById('sidebarBackdrop');

    if (btn && sidebar && backdrop) {
      btn.onclick = function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
        backdrop.classList.toggle('open');
      };
      backdrop.onclick = function() {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
      };
    }
  }

  // 3. Universal Copy Summary Function
  window.cwCopySummary = function(title, dataObj, btnEl) {
    // 1. Dynamic stylish button state transition (Matches user design)
    var btn = btnEl || document.querySelector('.cw-calc-copy-btn') || document.getElementById('shareBtn') || document.querySelector('.share-btn');
    if (btn && !btn._isCopying) {
      btn._isCopying = true;
      var origHTML = btn.innerHTML;
      btn.innerHTML = '<span style="font-size:1.1rem; margin-right:4px;">✓</span> Copied to Clipboard!';
      btn.classList.add('copied');
      setTimeout(function() {
        btn.innerHTML = origHTML;
        btn.classList.remove('copied');
        btn._isCopying = false;
      }, 2500);
    }

    var text = "📊 CalcWorker — " + title + "
";
    text += "────────────────────────────────
";
    for (var key in dataObj) {
      if (dataObj.hasOwnProperty(key)) {
        text += "• " + key + ": " + dataObj[key] + "
";
      }
    }
    text += "────────────────────────────────
";
    text += "Generated via https://calcworker.com/ • 100% Client-Side Privacy";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        window.cwToast("✓ Calculation summary copied to clipboard!");
      }).catch(function() {
        fallbackCopyText(text);
      });
    } else {
      fallbackCopyText(text);
    }
  };

  function fallbackCopyText(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      window.cwToast("✓ Calculation summary copied to clipboard!");
    } catch(err) {
      alert("Summary ready:\n\n" + text);
    }
    document.body.removeChild(ta);
  }

  // 4. Toast Notification System
  window.cwToast = function(msg) {
    var existing = document.querySelector('.cw-toast-msg');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'cw-toast-msg';
    toast.innerHTML = msg;
    toast.style.cssText = "position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%); background: #0c1017; border: 1px solid #38bdf8; color: #f8fafc; padding: 10px 22px; border-radius: 9999px; font-size: 0.88rem; font-weight: 600; box-shadow: 0 10px 30px rgba(0,0,0,0.6); z-index: 9999; animation: toastIn 0.3s ease forwards;";
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 350);
    }, 2800);
  };

  // 5. Universal Share Modal
  window.openCalcWorkerShareModal = function() {
    var title = document.title || "CalcWorker — 2026 Precision Calculator Suite";
    var url = window.location.href;

    if (navigator.share) {
      navigator.share({ title: title, url: url }).catch(function(){});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function() {
        window.cwToast("✓ Tool link copied to clipboard!");
      });
    } else {
      prompt("Copy calculator link:", url);
    }
  };

  // 6. Non-Shifting PWA Offline Notification
  function setupPWABanner() {
    var strip = document.getElementById('pwaOfflineStrip');
    if (strip) {
      if (sessionStorage.getItem('cw_pwa_dismiss') === '1') {
        strip.style.display = 'none';
      }
      var closeBtn = document.getElementById('pwaCloseBtn');
      if (closeBtn) {
        closeBtn.onclick = function() {
          strip.style.display = 'none';
          sessionStorage.setItem('cw_pwa_dismiss', '1');
        };
      }
    }
  }

  // 7. PWA Service Worker Registration
  if ('serviceWorker' in navigator) {
    
  // 8. Universal PWA Install Trigger & Event Capture
  var deferredPwaPrompt = null;
  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPwaPrompt = e;
    document.querySelectorAll('.pwa-install-btn, .topbar-install-btn').forEach(function(btn) {
      btn.style.display = 'inline-flex';
    });
  });

  window.triggerPwaInstall = async function() {
    if (deferredPwaPrompt) {
      deferredPwaPrompt.prompt();
      var choice = await deferredPwaPrompt.userChoice;
      deferredPwaPrompt = null;
      if (choice.outcome === 'accepted' && typeof window.cwToast === 'function') {
        window.cwToast('✓ CalcWorker app installed successfully!');
      }
    } else {
      if (typeof window.cwToast === 'function') {
        window.cwToast('💡 To install: Tap your browser menu (⋮ / Share) and select "Add to Home Screen" or "Install".');
      } else {
        alert('To install CalcWorker: Tap your browser menu (⋮ / Share) and select "Add to Home Screen" or "Install".');
      }
    }
  };

  // Support both hamburger button IDs
  function initMobileDrawerEnhanced() {
    var btn = document.getElementById('hamburgerBtn') || document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('sidebar');
    var backdrop = document.getElementById('sidebarBackdrop');

    if (btn && sidebar && backdrop) {
      btn.onclick = function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
        backdrop.classList.toggle('open');
      };
      backdrop.onclick = function() {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
      };
    }
  }

    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').catch(function(e){});
    });
  }

  
  // Global Copy & Share Button Visual State Sync
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('#shareBtn, .cw-calc-copy-btn, .share-btn, button[id*="share"], button[id*="Share"]');
    if (btn && !btn._isCopying) {
      btn._isCopying = true;
      btn.classList.add('copied');
      var btnText = btn.querySelector('#shareBtnText') || btn.querySelector('.btn-text') || btn.querySelector('span:last-child');
      if (btnText && btnText !== btn) {
        var origText = btnText.textContent;
        btnText.textContent = '✓ Copied to Clipboard!';
        setTimeout(function() {
          btnText.textContent = origText;
          btn.classList.remove('copied');
          btn._isCopying = false;
        }, 2500);
      } else {
        var origHTML = btn.innerHTML;
        btn.innerHTML = '<span style="font-size:1.1rem; margin-right:4px;">✓</span> Copied to Clipboard!';
        setTimeout(function() {
          btn.innerHTML = origHTML;
          btn.classList.remove('copied');
          btn._isCopying = false;
        }, 2500);
      }
    }
  });

  // DOM Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      initMobileDrawerEnhanced();
      setupPWABanner();
    });
  } else {
    initTheme();
    initMobileDrawerEnhanced();
    setupPWABanner();
  }
})();
