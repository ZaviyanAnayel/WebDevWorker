/**
 * WebDevWorker AI Studio — shared framework for the 10 AI instruments.
 * Each instrument page is a thin config; all AI plumbing lives here.
 * POSTs to /api/ai (server-side Groq, rate-limited, cost-capped).
 * No API keys in the browser. AdSense / site chrome untouched.
 */
(function () {
  'use strict';

  var API_URL = '/api/ai';

  /* ---------------------------------------------------------- prompt builders */
  // v = array of input values in field order.
  var BUILDERS = {
    'ai-regex-smith': function (v) {
      return 'You are a regex expert. The user describes what to match.\n' +
        'Description: ' + v[0] + '\nFlavor: ' + v[1] + '\n' +
        'Respond in EXACTLY this structure:\n' +
        '**Pattern:** then a fenced code block containing ONLY the raw pattern, no flags unless needed\n' +
        '**Breakdown:** explain each token of the pattern on its own line\n' +
        '**Test cases:** 3 strings that SHOULD match and 2 that should NOT, as a bullet list\n' +
        'Keep it tight. No intro paragraph.';
    },
    'ai-code-doctor': function (v) {
      return 'You are a senior debugging expert. Diagnose this failure.\n' +
        'Error / stack trace:\n' + v[0] + '\n' +
        'Related code (may be empty):\n' + v[1] + '\n' +
        'Language: ' + v[2] + '\n' +
        'Respond in EXACTLY this structure:\n' +
        '**Root cause:** one paragraph explaining the actual why\n' +
        '**The fix:** a fenced code block with the corrected code\n' +
        '**Prevention:** 2-3 bullets so this never happens again\n' +
        'Be specific, no generic advice.';
    },
    'ai-code-reviewer': function (v) {
      return 'You are a staff-level code reviewer. Review this ' + v[1] + ' code/diff ruthlessly but fairly.\n' +
        'Code:\n' + v[0] + '\n' +
        'Respond in EXACTLY this structure:\n' +
        '**Verdict:** one line — Ship it / Needs work / Do not ship — with one-line reason\n' +
        '**Bugs & edge cases:** numbered list, each tagged [Critical], [Major] or [Minor]\n' +
        '**Fixes:** fenced code blocks with the corrected snippets\n' +
        '**Nits:** short bullet list (naming, style, readability)\n' +
        'If the code is genuinely fine, say so — do not invent problems.';
    },
    'ai-security-auditor': function (v) {
      return 'You are an application security auditor. Audit this ' + v[1] + ' code for vulnerabilities.\n' +
        'Code:\n' + v[0] + '\n' +
        'Respond in EXACTLY this structure:\n' +
        '**Findings:** numbered list, each tagged [Critical], [High], [Medium] or [Low]: what is wrong, and in one line how it could be exploited\n' +
        '**Patched code:** a fenced code block with the fixed version\n' +
        '**Hardening checklist:** 3-5 bullets\n' +
        'If no issues are found, say so explicitly, then give 2 hardening tips anyway.';
    },
    'ai-sql-smith': function (v) {
      var mode = v[0], dialect = v[1];
      if (mode === 'Explain this query') {
        return 'You are a SQL expert. Explain this ' + dialect + ' query in plain English, clause by clause:\n' + v[2];
      }
      if (mode === 'Optimize a slow query') {
        return 'You are a SQL performance expert. This ' + dialect + ' query is slow:\n' + v[2] + '\n' +
          'Schema context (may be empty):\n' + v[3] + '\n' +
          'Respond in EXACTLY this structure:\n**What is slow:** bullets\n' +
          '**Optimized query:** fenced SQL block\n**Index suggestions:** bullets';
      }
      return 'You are a SQL expert. Write correct ' + dialect + ' SQL for this request:\n' + v[2] + '\n' +
        'Schema context (may be empty):\n' + v[3] + '\n' +
        'Respond in EXACTLY this structure:\n**Query:** fenced SQL block\n**How it works:** 2-3 lines on the JOINs and filters used';
    },
    'ai-test-forge': function (v) {
      return 'You are a testing expert. Write ' + v[1] + ' unit tests for this ' + v[2] + ' function. ' +
        'Cover the happy path, edge cases, and failure modes. Mock external dependencies.\n' +
        'Function:\n' + v[0] + '\n' +
        'Respond in EXACTLY this structure:\n**Tests:** a fenced code block with the complete test file\n' +
        '**Edge cases covered:** bullet list';
    },
    'ai-api-oracle': function (v) {
      return 'You are an API integration expert. The user wants to: ' + v[0] + '\n' +
        (v[1] ? 'Base URL / docs hint: ' + v[1] + '\n' : '') +
        'Respond in EXACTLY this structure:\n' +
        '**Request:** HTTP METHOD and full URL template on one line\n' +
        '**Headers:** fenced block\n' +
        '**Body:** fenced JSON block, or the word none\n' +
        '**cURL:** fenced bash block\n' +
        '**Notes:** auth scheme plus 2 gotchas, as bullets';
    },
    'ai-prompt-surgeon': function (v) {
      return 'You are a prompt engineer. Analyze this AI prompt/conversation for token waste, vagueness, and structural problems:\n' + v[0] + '\n' +
        'Respond in EXACTLY this structure:\n' +
        '**Diagnosis:** bullets — what is wasting tokens or causing weak answers\n' +
        '**Rewritten prompt:** fenced block with the sharper prompt\n' +
        '**Why it is better:** 3 bullets';
    },
    'ai-refactor': function (v) {
      return 'You are a code migration expert. Migrate this code.\nMigration: ' + v[1] + '\nCode:\n' + v[0] + '\n' +
        'Respond in EXACTLY this structure:\n**Migrated code:** fenced code block\n' +
        '**Key changes:** bullets\n**Watch out:** 2 gotchas';
    },
    'ai-code-explainer': function (v) {
      return 'You are a patient senior engineer onboarding a new teammate. Explain this ' + v[1] + ' code:\n' + v[0] + '\n' +
        'Respond in EXACTLY this structure:\n' +
        '**Big picture:** what this does, in 2 sentences\n' +
        '**Architecture map:** components/modules as a nested bullet list\n' +
        '**Walkthrough:** step-by-step of the execution flow\n' +
        '**Key gotchas:** 2-3 bullets';
    }
  };

  /* ------------------------------------------------------------- AI client */
  function ask(tool, prompt) {
    return fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool: tool, question: prompt })
    }).then(function (r) {
      return r.json().then(function (data) {
        if (!r.ok) {
          var err = new Error(data && data.error ? data.error : 'AI request failed');
          err.status = r.status;
          throw err;
        }
        return data.answer;
      });
    });
  }

  function friendlyError(err) {
    if (err && err.status === 429) return 'Too many requests — the AI needs a breather. Try again in a minute.';
    if (err && err.status === 503) return 'AI service is warming up. Try again shortly.';
    return 'The AI stumbled. Check your input and try again.';
  }

  /* ------------------------------------------------------- markdown-lite */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inlineFmt(s) {
    // s is already escaped; apply inline formatting
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/`([^`]+)`/g, '<code class="ai-inline-code">$1</code>');
    return s;
  }

  function renderMarkdown(el, text) {
    var out = [];
    var lines = String(text).split('\n');
    var inCode = false, codeLang = '', codeBuf = [];
    var listOpen = false, listType = '';

    function closeList() {
      if (listOpen) { out.push(listType === 'ol' ? '</ol>' : '</ul>'); listOpen = false; listType = ''; }
    }
    function flushCode() {
      var code = esc(codeBuf.join('\n'));
      var id = 'aicode' + Math.random().toString(36).slice(2, 8);
      out.push('<div class="ai-codeblock"><div class="ai-codeblock-bar"><span>' +
        esc(codeLang || 'code') + '</span><button type="button" class="ai-copy-btn" data-codeid="' + id + '">Copy</button></div>' +
        '<pre id="' + id + '"><code>' + code + '</code></pre></div>');
      codeBuf = [];
    }

    lines.forEach(function (line) {
      var fence = line.match(/^```(\w*)\s*$/);
      if (fence) {
        if (inCode) { flushCode(); inCode = false; }
        else { closeList(); inCode = true; codeLang = fence[1] || ''; }
        return;
      }
      if (inCode) { codeBuf.push(line); return; }

      var h = line.match(/^(#{2,4})\s+(.*)$/);
      if (h) {
        closeList();
        var lvl = h[1].length;
        out.push('<h' + lvl + ' class="ai-h">' + inlineFmt(esc(h[2])) + '</h' + lvl + '>');
        return;
      }
      var ol = line.match(/^\s*\d+[.)]\s+(.*)$/);
      var ul = line.match(/^\s*[-*]\s+(.*)$/);
      if (ol || ul) {
        var t = ol ? 'ol' : 'ul';
        if (!listOpen || listType !== t) { closeList(); out.push(t === 'ol' ? '<ol class="ai-list">' : '<ul class="ai-list">'); listOpen = true; listType = t; }
        out.push('<li>' + inlineFmt(esc((ol || ul)[1])) + '</li>');
        return;
      }
      closeList();
      if (/^\s*$/.test(line)) return;
      out.push('<p class="ai-p">' + inlineFmt(esc(line)) + '</p>');
    });
    if (inCode) flushCode();
    closeList();
    el.innerHTML = out.join('\n');

    // wire copy buttons
    el.querySelectorAll('.ai-copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pre = document.getElementById(btn.getAttribute('data-codeid'));
        var txt = pre ? pre.innerText : '';
        doCopy(txt, btn);
      });
    });
  }

  function doCopy(text, btn) {
    function done() {
      if (!btn || btn.__wwCopyActive) return; // site copier already shows feedback
      var orig = btn.textContent;
      var origMinW = btn.style.minWidth;
      try { btn.style.minWidth = btn.offsetWidth + 'px'; } catch (e) {}
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(function () { btn.textContent = orig; btn.classList.remove('copied'); btn.style.minWidth = origMinW; }, 1600);
    }
    if (typeof window.copyCode === 'function') {
      // reuse the site's bulletproof copier (it owns the visual feedback + toast)
      var tmp = document.createElement('textarea');
      tmp.value = text;
      tmp.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
      tmp.id = 'aiStudioTmpCopy';
      document.body.appendChild(tmp);
      try { window.copyCode('aiStudioTmpCopy', btn); } catch (e) {
        fallbackCopy(text);
        done();
      }
      setTimeout(function () { tmp.remove(); }, 500);
      return;
    }
    fallbackCopy(text);
    done();
  }

  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    } catch (e) {
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
    }
  }

  /* ------------------------------------------------------- verify extras */
  // Deterministic local verification panels, keyed by tool.

  function wireRegexTester(root) {
    var panel = root.querySelector('[data-verify="regex-tester"]');
    if (!panel) return;
    var patEl = panel.querySelector('.ai-rx-pattern');
    var flagsEl = panel.querySelector('.ai-rx-flags');
    var textEl = panel.querySelector('.ai-rx-text');
    var outEl = panel.querySelector('.ai-rx-out');
    panel.querySelector('.ai-rx-run').addEventListener('click', function () {
      var pat = patEl.value, flags = (flagsEl.value || '').replace(/[^gimsuy]/g, '');
      var text = textEl.value;
      if (!pat) { outEl.innerHTML = '<span class="ai-rx-err">Enter a pattern first.</span>'; return; }
      var re;
      try { re = new RegExp(pat, flags); }
      catch (e) { outEl.innerHTML = '<span class="ai-rx-err">Invalid pattern: ' + esc(e.message) + '</span>'; return; }
      var matches = 0, html = '', last = 0, m;
      if (flags.indexOf('g') === -1) flags += 'g';
      try { re = new RegExp(pat, flags); } catch (e) {}
      re.lastIndex = 0;
      while ((m = re.exec(text)) !== null) {
        matches++;
        html += esc(text.slice(last, m.index)) + '<mark>' + esc(m[0]) + '</mark>';
        last = m.index + m[0].length;
        if (m[0] === '') { re.lastIndex++; }
        if (matches > 200) break;
      }
      html += esc(text.slice(last));
      outEl.innerHTML = '<div class="ai-rx-count">' + matches + ' match' + (matches === 1 ? '' : 'es') + '</div>' +
        '<div class="ai-rx-hl">' + (html || '<span class="ai-rx-dim">no matches</span>') + '</div>';
    });
  }

  function wireApiSender(root) {
    var panel = root.querySelector('[data-verify="api-sender"]');
    if (!panel) return;
    var methodEl = panel.querySelector('.ai-api-method');
    var urlEl = panel.querySelector('.ai-api-url');
    var outEl = panel.querySelector('.ai-api-out');
    panel.querySelector('.ai-api-send').addEventListener('click', function () {
      var url = urlEl.value.trim();
      if (!url) { outEl.innerHTML = '<span class="ai-rx-err">Enter a URL first.</span>'; return; }
      if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
      outEl.innerHTML = '<div class="ai-thinking"><span></span><span></span><span></span> Sending…</div>';
      var t0 = Date.now();
      fetch(url, { method: methodEl.value }).then(function (r) {
        return r.text().then(function (t) {
          var ms = Date.now() - t0;
          var pretty = t;
          try { pretty = JSON.stringify(JSON.parse(t), null, 2); } catch (e) {}
          var id = 'aicode' + Math.random().toString(36).slice(2, 8);
          outEl.innerHTML = '<div class="ai-api-status ' + (r.ok ? 'ok' : 'bad') + '">HTTP ' + r.status + ' ' + esc(r.statusText) + ' · ' + ms + ' ms</div>' +
            '<div class="ai-codeblock"><div class="ai-codeblock-bar"><span>response</span><button type="button" class="ai-copy-btn" data-codeid="' + id + '">Copy</button></div>' +
            '<pre id="' + id + '"><code>' + esc(pretty.slice(0, 20000)) + '</code></pre></div>' +
            '<p class="ai-note">If you see a network error, the target API blocks browser requests (CORS) — use the generated cURL instead.</p>';
          outEl.querySelector('.ai-copy-btn').addEventListener('click', function () {
            doCopy(document.getElementById(id).innerText, this);
          });
        });
      }).catch(function (e) {
        outEl.innerHTML = '<span class="ai-rx-err">Request failed: ' + esc(e.message) + '</span>' +
          '<p class="ai-note">Browsers block cross-origin requests unless the API allows them (CORS). The generated cURL above works anywhere.</p>';
      });
    });
  }

  /* ------------------------------------------------------------- page init */
  function initPage(cfg) {
    var root = document.querySelector('[data-ai-studio]');
    if (!root) return;
    var btn = root.querySelector('.ai-run-btn');
    var outWrap = root.querySelector('.ai-output-wrap');
    var outEl = root.querySelector('.ai-output');
    var errEl = root.querySelector('.ai-error');

    function values() {
      var vals = [];
      root.querySelectorAll('[id^="ai-in-"]').forEach(function (el) { vals.push(el.value); });
      return vals;
    }

    function setLoading(on) {
      btn.disabled = on;
      btn.querySelector('.ai-run-label').textContent = on ? 'Thinking…' : cfg.cta;
      if (on) {
        outWrap.style.display = 'block';
        outEl.innerHTML = '<div class="ai-thinking"><span></span><span></span><span></span> AI is working…</div>';
        errEl.style.display = 'none';
        outWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    btn.addEventListener('click', function () {
      var vals = values();
      var primary = (vals[0] || '').trim();
      if (!primary) {
        errEl.textContent = 'Paste or describe something first — the AI needs input to work with.';
        errEl.style.display = 'block';
        return;
      }
      errEl.style.display = 'none';
      setLoading(true);
      var builder = BUILDERS[cfg.tool];
      var prompt = builder ? builder(vals) : primary;
      ask(cfg.tool, prompt).then(function (answer) {
        setLoading(false);
        btn.querySelector('.ai-run-label').textContent = cfg.cta;
        renderMarkdown(outEl, answer);
        if (cfg.after === 'regex' && root.querySelector('.ai-rx-pattern')) {
          var m = /```(?:\w*\n)?([\s\S]*?)```/.exec(answer);
          if (m) root.querySelector('.ai-rx-pattern').value = m[1].trim().split('\n')[0];
        }
      }).catch(function (err) {
        setLoading(false);
        btn.querySelector('.ai-run-label').textContent = cfg.cta;
        errEl.textContent = friendlyError(err);
        errEl.style.display = 'block';
      });
    });

    wireRegexTester(root);
    wireApiSender(root);
  }

  window.AIStudio = { initPage: initPage, ask: ask, renderMarkdown: renderMarkdown };
})();
