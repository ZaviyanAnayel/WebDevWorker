/**
 * CalcWorker — Universal Synchronized Sidebar & Scroll Memory Engine V34
 * Features:
 * - Persistent Sidebar Scroll Memory across page navigations
 * - Auto-Scroll to active calculator link
 * - Glowing PRO, HOT, NEW, 2026, LIVE badges
 * - Click ripple flash wave
 */
(function () {
  'use strict';

  const SIDEBAR_GROUPS = [
  {
    "title": "Flagship Suite",
    "items": [
      {
        "icon": "\u26a1",
        "label": "OmniCalc Ultra (6-in-1)",
        "href": "/tools/omnicalc.html",
        "badge": "HOT"
      }
    ]
  },
  {
    "title": "Taxes & Income",
    "items": [
      {
        "icon": "\ud83d\udcb5",
        "label": "Paycheck Calculator (2026)",
        "href": "/tools/paycheck-calculator.html",
        "badge": "2026"
      },
      {
        "icon": "\ud83d\udcbc",
        "label": "Freelance 1099 Tax Estimator",
        "href": "/tools/freelance-tax-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83c\udfdb\ufe0f",
        "label": "Tax Withholding (2026)",
        "href": "/tools/tax-withholding.html"
      },
      {
        "icon": "\u23f1\ufe0f",
        "label": "Hourly Rate Calculator",
        "href": "/tools/hourly-rate.html"
      },
      {
        "icon": "\u231b",
        "label": "Overtime Calculator",
        "href": "/tools/overtime-calculator.html"
      },
      {
        "icon": "\ud83d\ude97",
        "label": "Gig Worker Net Profit",
        "href": "/tools/gig-profit.html",
        "badge": "NEW"
      },
      {
        "icon": "\ud83c\udff7\ufe0f",
        "label": "US State Sales Tax",
        "href": "/tools/sales-tax-calculator.html"
      }
    ]
  },
  {
    "title": "Real Estate & Loans",
    "items": [
      {
        "icon": "\ud83c\udfe1",
        "label": "Mortgage & Amortization (PITI)",
        "href": "/tools/mortgage-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83d\ude98",
        "label": "Auto Loan Calculator",
        "href": "/tools/auto-loan.html",
        "badge": "NEW"
      },
      {
        "icon": "\ud83d\ude99",
        "label": "Car Lease Payment",
        "href": "/tools/car-lease-calculator.html"
      },
      {
        "icon": "\ud83c\udfe6",
        "label": "HELOC & Credit Line",
        "href": "/tools/heloc-calculator.html"
      },
      {
        "icon": "\u2696\ufe0f",
        "label": "Rent vs Buy Decision",
        "href": "/tools/rent-vs-buy.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83d\udcc5",
        "label": "Prorated Rent Calculator",
        "href": "/tools/prorated-rent-calculator.html"
      },
      {
        "icon": "\u2600\ufe0f",
        "label": "Solar Panel ROI Estimator",
        "href": "/tools/solar-roi.html",
        "badge": "PRO"
      }
    ]
  },
  {
    "title": "Wealth, Debt & Savings",
    "items": [
      {
        "icon": "\ud83d\udcc8",
        "label": "Compound Interest & Goal",
        "href": "/tools/compound-interest.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83c\udfd6\ufe0f",
        "label": "401(k) & Retirement Savings",
        "href": "/tools/retirement-401k.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83d\udee1\ufe0f",
        "label": "Roth IRA Tax-Free Growth",
        "href": "/tools/roth-ira-calculator.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83d\udcb3",
        "label": "Credit Card Payoff",
        "href": "/tools/credit-card-payoff.html"
      },
      {
        "icon": "\u2744\ufe0f",
        "label": "Debt Snowball & Avalanche",
        "href": "/tools/debt-payoff.html"
      },
      {
        "icon": "\ud83c\udf93",
        "label": "Student Loan Repayment",
        "href": "/tools/student-loan.html"
      },
      {
        "icon": "\ud83e\ude99",
        "label": "Cryptocurrency Profit & ROI",
        "href": "/tools/crypto-profit-calculator.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83d\udcc9",
        "label": "US Inflation & Purchasing Power",
        "href": "/tools/inflation-calculator.html",
        "badge": "PRO"
      }
    ]
  },
  {
    "title": "E-Commerce & Sellers",
    "items": [
      {
        "icon": "\ud83d\udce6",
        "label": "Amazon FBA Profit & Fee",
        "href": "/tools/amazon-fba-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83d\udecd\ufe0f",
        "label": "Etsy Fee & Profit",
        "href": "/tools/etsy-profit.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83c\udff7\ufe0f",
        "label": "eBay Seller Fee & Profit",
        "href": "/tools/ebay-fee-calculator.html"
      },
      {
        "icon": "\ud83d\uded2",
        "label": "Shopify Fee & Margin",
        "href": "/tools/shopify-fee-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83d\udcca",
        "label": "Multi-Platform Comparator",
        "href": "/tools/ecommerce-profit-comparator.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83c\udfaf",
        "label": "Business Break-Even Point",
        "href": "/tools/break-even.html"
      }
    ]
  },
  {
    "title": "Creators & Social Media",
    "items": [
      {
        "icon": "\ud83e\ude99",
        "label": "TikTok Coins & Gifts Value",
        "href": "/tools/tiktok-coins-calculator.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83d\udcb0",
        "label": "TikTok Creator Money",
        "href": "/tools/tiktok-money-calculator.html",
        "badge": "NEW"
      },
      {
        "icon": "\ud83d\udecd\ufe0f",
        "label": "TikTok Shop Affiliate",
        "href": "/tools/tiktok-shop-affiliate-calculator.html",
        "badge": "HOT"
      },
      {
        "icon": "\u25b6\ufe0f",
        "label": "YouTube Money & CPM",
        "href": "/tools/youtube-money-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83d\udcf8",
        "label": "Instagram Sponsored Rate",
        "href": "/tools/instagram-money-calculator.html"
      },
      {
        "icon": "\ud83d\udcc8",
        "label": "Channel Milestone Tracker",
        "href": "/tools/channel-growth-calculator.html"
      },
      {
        "icon": "\ud83c\udf99\ufe0f",
        "label": "Podcast Sponsorship Rates",
        "href": "/tools/podcast-sponsorship-calculator.html"
      }
    ]
  },
  {
    "title": "Currency & Global Exchange",
    "items": [
      {
        "icon": "\ud83c\udf10",
        "label": "Universal Currency Converter",
        "href": "/tools/currency-converter.html",
        "badge": "LIVE"
      },
      {
        "icon": "\ud83d\udcb6",
        "label": "USD to EUR (Euro)",
        "href": "/tools/usd-to-eur.html",
        "badge": "LIVE"
      },
      {
        "icon": "\ud83d\udcb7",
        "label": "USD to GBP (British Pound)",
        "href": "/tools/usd-to-gbp.html"
      },
      {
        "icon": "\ud83c\udf41",
        "label": "USD to CAD (Canadian Dollar)",
        "href": "/tools/usd-to-cad.html"
      },
      {
        "icon": "\ud83c\udf2e",
        "label": "USD to MXN (Mexican Peso)",
        "href": "/tools/usd-to-mxn.html"
      },
      {
        "icon": "\u20b9",
        "label": "USD to INR (Indian Rupee)",
        "href": "/tools/usd-to-inr.html"
      },
      {
        "icon": "\ud83d\udcb4",
        "label": "USD to JPY (Japanese Yen)",
        "href": "/tools/usd-to-jpy.html"
      },
      {
        "icon": "\ud83c\uddf5\ud83c\uddf0",
        "label": "USD to PKR (Pakistani Rupee)",
        "href": "/tools/usd-to-pkr.html",
        "badge": "HOT"
      }
    ]
  },
  {
    "title": "Health, Fitness & Everyday Math",
    "items": [
      {
        "icon": "\u2696\ufe0f",
        "label": "BMI & Body Composition",
        "href": "/tools/bmi-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83e\udd57",
        "label": "Calorie & Deficit Planner",
        "href": "/tools/calorie-calculator.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83d\udca7",
        "label": "Daily Water Intake Goal",
        "href": "/tools/water-intake-calculator.html"
      },
      {
        "icon": "\ud83d\udc5f",
        "label": "Steps to Miles & Calories",
        "href": "/tools/steps-to-miles.html"
      },
      {
        "icon": "\ud83c\udfcb\ufe0f",
        "label": "Bench Press 1RM Estimator",
        "href": "/tools/bench-press-calculator.html",
        "badge": "HOT"
      },
      {
        "icon": "\ud83d\udd22",
        "label": "Percentage Calculator (3-in-1)",
        "href": "/tools/percentage-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83c\udf82",
        "label": "Exact Age & Date Calculator",
        "href": "/tools/age-calculator.html",
        "badge": "NEW"
      },
      {
        "icon": "\ud83d\uddd3\ufe0f",
        "label": "Date Difference & Calendar",
        "href": "/tools/date-calculator.html"
      },
      {
        "icon": "\u26fd",
        "label": "Fuel Cost & Commute Trip",
        "href": "/tools/fuel-cost-calculator.html",
        "badge": "PRO"
      },
      {
        "icon": "\ud83c\udf7d\ufe0f",
        "label": "Tip & Dining Bill Splitter",
        "href": "/tools/tip-calculator.html"
      },
      {
        "icon": "\ud83c\udf93",
        "label": "GPA & Cumulative Grade",
        "href": "/tools/gpa-calculator.html",
        "badge": "PRO"
      }
    ]
  }
];

  function normalize(path) {
    if (!path) return '';
    path = path.toLowerCase().replace(/index\.html$/, '');
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    return path;
  }

  function renderSidebar() {
    const sidebar = document.getElementById("sidebar");
    const nav = document.querySelector("#sidebar .sidebar-nav") || document.getElementById("sidebarNav");
    if (!nav || !sidebar) return;

    const currentPath = normalize(window.location.pathname);
    let html = '';

    // Dashboard Home link
    const isHome = currentPath === "/" || currentPath === "";
    html += `
      <div class="nav-group">
        <div class="nav-group-title">Overview</div>
        <a href="/" class="sidebar-link ${isHome ? 'active' : ''}">
          <span class="tool-icon">⚡</span>
          <span class="tool-label">Dashboard Overview</span>
          ${isHome ? '<span class="active-dot"></span>' : ''}
        </a>
      </div>
    `;

    SIDEBAR_GROUPS.forEach(group => {
      html += `<div class="nav-group"><div class="nav-group-title">${group.title}</div>`;
      group.items.forEach(item => {
        const itemPath = normalize(item.href);
        const isActive = (currentPath === itemPath);
        
        let badgeClass = '';
        if (item.badge) {
          badgeClass = item.badge.toLowerCase();
          if (item.badge === '2026') badgeClass = 'y2026';
        }
        
        const badgeHtml = item.badge ? `<span class="tool-badge ${badgeClass}">${item.badge}</span>` : '';
        const dotHtml = isActive ? '<span class="active-dot"></span>' : '';
        html += `
          <a href="${item.href}" class="sidebar-link ${isActive ? 'active' : ''}">
            <span class="tool-icon">${item.icon}</span>
            <span class="tool-label">${item.label}</span>
            ${badgeHtml}
            ${dotHtml}
          </a>
        `;
      });
      html += `</div>`;
    });

    // Legal / Policy Links
    html += `
      <div class="nav-group">
        <div class="nav-group-title">Legal & Trust</div>
        <a href="/about.html" class="sidebar-link ${currentPath === '/about.html' ? 'active' : ''}">
          <span class="tool-icon">ℹ️</span><span class="tool-label">About CalcWorker</span>
        </a>
        <a href="/privacy.html" class="sidebar-link ${currentPath === '/privacy.html' ? 'active' : ''}">
          <span class="tool-icon">🔒</span><span class="tool-label">Privacy Policy</span>
        </a>
        <a href="/terms.html" class="sidebar-link ${currentPath === '/terms.html' ? 'active' : ''}">
          <span class="tool-icon">📜</span><span class="tool-label">Terms of Service</span>
        </a>
        <a href="/contact.html" class="sidebar-link ${currentPath === '/contact.html' ? 'active' : ''}">
          <span class="tool-icon">✉️</span><span class="tool-label">Contact Us</span>
        </a>
      </div>
    `;

    nav.innerHTML = html;

    // Attach click listener for smooth scroll memory
    const links = nav.querySelectorAll(".sidebar-link");
    links.forEach(link => {
      link.addEventListener("click", function () {
        sessionStorage.setItem("calcworker_sidebar_scroll", sidebar.scrollTop);
      });
    });

    // Restore scroll position
    const savedScroll = sessionStorage.getItem("calcworker_sidebar_scroll");
    if (savedScroll !== null) {
      sidebar.scrollTop = parseInt(savedScroll, 10);
    } else {
      const activeLink = nav.querySelector(".sidebar-link.active");
      if (activeLink) {
        activeLink.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderSidebar);
  } else {
    renderSidebar();
  }

  // Expose groups globally for AI search bar
  window.CW_TOOLS_DATA = SIDEBAR_GROUPS;
})();
