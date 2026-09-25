/**
 * WebDevWorker AI Studio — shared framework for the 11 AI instruments.
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
    },
    'ai-micro-app-smith': function (v) {
      return 'You are a micro-app architect. The user describes a small personal utility app they want (a tracker, log, ledger, checklist).\n' +
        'Requirement: ' + v[0] + '\n' +
        'Respond with ONLY a JSON object — no markdown fences, no commentary, no extra text — matching EXACTLY this schema:\n' +
        '{"appName":"short name","fields":[{"key":"snake_case_key","label":"Short Label","type":"text|number|date|select|tel","options":["a","b"],"required":true}],"tableColumns":["key1","key2"],"dashboard":[{"label":"Total Spent","op":"sum|avg|min|max|count|countWhere","field":"amount","equals":"Unpaid"}],"actions":["whatsapp"],"whatsappTemplate":"optional template using {key} placeholders"}\n' +
        'Rules: 3 to 8 fields. Field keys: lowercase snake_case, unique. "type" must be one of text, number, date, select, tel. "options" required only for select type (2-8 short options). "tableColumns" must be a subset of field keys, 2-6 columns. "dashboard": 2-4 stat cards that make this feel like a complete app — use "sum"/"avg"/"min"/"max" on numeric fields, "count" for total entries (no "field" needed), "countWhere" with "field" + "equals" to count rows matching a status (e.g. unpaid invoices). "field" must be an existing field key; for sum/avg/min/max it should be a number-type field. "actions": use ["whatsapp"] only if the app naturally needs sharing a row via WhatsApp (bills, invoices, orders), otherwise []. "whatsappTemplate": only when actions includes whatsapp — a short message with {key} placeholders. No HTML, no scripts, no code in any string. Keep labels under 30 characters.';
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

  /* ----------------------------------------------- micro-app smith */
  // Deterministic local renderer for ai-micro-app-smith. The AI returns a
  // STRICT JSON spec only; this code builds the mini-app from the parsed
  // spec. AI strings are never injected as raw HTML — everything is escaped.
  var MICROAPP_TYPES = { text: 1, number: 1, date: 1, select: 1, tel: 1 };
  var MICROAPP_LIB_KEY = 'wdw_microapp_library_v1';

  function microAppExtractJson(text) {
    // Balanced-brace extraction: finds the first {...} block even when the AI
    // wraps it in commentary. String-aware so braces inside quotes don't count.
    var s = String(text || '');
    var start = s.indexOf('{');
    if (start < 0) return null;
    var depth = 0, instr = false, esc = false, i, ch;
    for (i = start; i < s.length; i++) {
      ch = s[i];
      if (instr) {
        if (esc) esc = false;
        else if (ch === '\\') esc = true;
        else if (ch === '"') instr = false;
        continue;
      }
      if (ch === '"') instr = true;
      else if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) return s.slice(start, i + 1);
      }
    }
    return null;
  }

  function microAppSanitizeKey(k) {
    var key = String(k || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    if (!key) key = 'field';
    if (/^[0-9]/.test(key)) key = 'f_' + key;
    return key.slice(0, 30);
  }

  function microAppNormalize(raw) {
    // Repair-and-normalize: instead of rejecting imperfect AI output,
    // coerce it into a valid spec (fix keys, drop bad cards, fill defaults).
    if (!raw || typeof raw !== 'object') return null;
    var fields = [], seen = {}, i, f, key, label, type;
    var srcFields = Array.isArray(raw.fields) ? raw.fields : [];
    for (i = 0; i < srcFields.length && fields.length < 12; i++) {
      f = srcFields[i];
      if (!f || typeof f !== 'object') continue;
      key = microAppSanitizeKey(f.key);
      if (seen[key]) {
        var n = 2, kk = key + '_' + n;
        while (seen[kk] && n < 50) { n++; kk = key + '_' + n; }
        key = kk;
      }
      seen[key] = 1;
      label = String(f.label || key).trim().slice(0, 40) || key;
      type = MICROAPP_TYPES[f.type] ? f.type : 'text';
      var nf = { key: key, label: label, type: type };
      if (type === 'select') {
        var opts = [];
        if (Array.isArray(f.options)) {
          for (var j = 0; j < f.options.length && opts.length < 20; j++) {
            var o = String(f.options[j] || '').trim().slice(0, 40);
            if (o && opts.indexOf(o) < 0) opts.push(o);
          }
        }
        if (!opts.length) opts = ['Option 1', 'Option 2'];
        nf.options = opts;
      }
      if (f.required === true) nf.required = true;
      fields.push(nf);
    }
    if (!fields.length) return null;
    // tableColumns: keep valid keys only; fallback to the first fields.
    var cols = [];
    if (Array.isArray(raw.tableColumns)) {
      for (i = 0; i < raw.tableColumns.length && cols.length < 8; i++) {
        var c = microAppSanitizeKey(raw.tableColumns[i]);
        if (seen[c] && cols.indexOf(c) < 0) cols.push(c);
      }
    }
    if (!cols.length) {
      for (i = 0; i < fields.length && cols.length < 4; i++) cols.push(fields[i].key);
    }
    // dashboard: keep only valid cards, drop the rest (never kill the whole app).
    var dash = [], OPS = { sum: 1, avg: 1, min: 1, max: 1, count: 1, countWhere: 1 };
    if (Array.isArray(raw.dashboard)) {
      for (i = 0; i < raw.dashboard.length && dash.length < 6; i++) {
        var card = raw.dashboard[i];
        if (!card || typeof card !== 'object' || !OPS[card.op]) continue;
        var cl = String(card.label || '').trim().slice(0, 40);
        if (!cl) continue;
        var nc = { label: cl, op: card.op };
        if (card.op === 'count') { dash.push(nc); continue; }
        var cf = microAppSanitizeKey(card.field);
        if (!seen[cf]) continue;
        nc.field = cf;
        if (card.op === 'countWhere') {
          var eq = String(card.equals || '').trim().slice(0, 40);
          if (!eq) continue;
          nc.equals = eq;
        }
        dash.push(nc);
      }
    }
    var actions = [];
    if (Array.isArray(raw.actions) && raw.actions.indexOf('whatsapp') >= 0) actions = ['whatsapp'];
    var wa = null;
    if (actions.length && typeof raw.whatsappTemplate === 'string' && raw.whatsappTemplate.trim()) {
      wa = raw.whatsappTemplate.trim().slice(0, 500);
    }
    var spec = {
      appName: String(raw.appName || 'My Micro-App').trim().slice(0, 60) || 'My Micro-App',
      fields: fields,
      tableColumns: cols,
      actions: actions
    };
    if (dash.length) spec.dashboard = dash;
    if (wa) spec.whatsappTemplate = wa;
    return spec;
  }


  function microAppParse(answer) {
    var txt = String(answer || '').trim()
      .replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
    var candidates = [txt, microAppExtractJson(txt)];
    for (var i = 0; i < candidates.length; i++) {
      var c = candidates[i];
      if (!c) continue;
      var tries = [c, c.replace(/,\s*([}\]])/g, '$1')]; // raw, then trailing-comma repair
      for (var t = 0; t < tries.length; t++) {
        try {
          var spec = microAppNormalize(JSON.parse(tries[t]));
          if (spec) return spec;
        } catch (e) {}
      }
    }
    return null;
  }

  function microAppStorageKey(name) {
    return 'wdw_microapp_v1_' + String(name).toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
  }

  function microAppRows(key) {
    try { var r = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(r) ? r : []; }
    catch (e) { return []; }
  }

  function microAppPersist(key, rows) {
    try { localStorage.setItem(key, JSON.stringify(rows.slice(0, 2000))); } catch (e) {}
  }

  function microAppLib() {
    try { var l = JSON.parse(localStorage.getItem(MICROAPP_LIB_KEY) || '[]'); return Array.isArray(l) ? l : []; }
    catch (e) { return []; }
  }

  function microAppLibSave(l) {
    try { localStorage.setItem(MICROAPP_LIB_KEY, JSON.stringify(l.slice(0, 50))); } catch (e) {}
  }

  function renderMicroApp(root, outEl, spec) {
    var key = microAppStorageKey(spec.appName);
    var rows = microAppRows(key);
    var hasWA = Array.isArray(spec.actions) && spec.actions.indexOf('whatsapp') !== -1;
    var idp = 'ma' + Math.random().toString(36).slice(2, 8);
    var i;

    function fieldLabel(k) {
      for (var x = 0; x < spec.fields.length; x++) {
        if (spec.fields[x].key === k) return spec.fields[x].label;
      }
      return k;
    }

    function formHtml() {
      return spec.fields.map(function (f, fi) {
        var input;
        if (f.type === 'select') {
          input = '<select id="' + idp + '-f' + fi + '">' + f.options.map(function (o) {
            return '<option value="' + esc(o) + '">' + esc(o) + '</option>';
          }).join('') + '</select>';
        } else {
          input = '<input type="' + f.type + '" id="' + idp + '-f' + fi + '"' +
            (f.required ? ' required' : '') + ' autocomplete="off"/>';
        }
        return '<div class="ai-field"><label for="' + idp + '-f' + fi + '">' +
          esc(f.label) + (f.required ? ' *' : '') + '</label>' + input + '</div>';
      }).join('');
    }

    function waMessage(row) {
      var tpl = spec.whatsappTemplate ||
        ('*' + spec.appName + '*\n' + spec.fields.map(function (fr) {
          return fr.label + ': {' + fr.key + '}';
        }).join('\n'));
      return tpl.replace(/\{([a-z0-9_]+)\}/gi, function (mm, kk) {
        return row[kk] == null ? '' : String(row[kk]);
      });
    }

    function dashNum(v) {
      if (v == null || isNaN(v)) return '—';
      return (Math.round(v * 100) / 100).toString();
    }

    function dashValue(card) {
      if (card.op === 'count') return String(rows.length);
      var vals = rows.map(function (r) { return parseFloat(r[card.field]); })
        .filter(function (x) { return !isNaN(x); });
      if (card.op === 'countWhere') {
        var n = 0;
        rows.forEach(function (r) { if (String(r[card.field]) === card.equals) n++; });
        return String(n);
      }
      if (!vals.length) return '—';
      if (card.op === 'sum') return dashNum(vals.reduce(function (a, b) { return a + b; }, 0));
      if (card.op === 'avg') return dashNum(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length);
      if (card.op === 'min') return dashNum(Math.min.apply(null, vals));
      if (card.op === 'max') return dashNum(Math.max.apply(null, vals));
      return '—';
    }

    function dashHtml() {
      if (!Array.isArray(spec.dashboard) || !spec.dashboard.length) return '';
      var cards = spec.dashboard.map(function (card) {
        return '<div class="ai-ma-dashcard"><div class="ai-ma-dashval">' +
          esc(dashValue(card)) + '</div><div class="ai-ma-dashlabel">' +
          esc(card.label) + '</div></div>';
      }).join('');
      return '<div class="ai-ma-dash">' + cards + '</div>';
    }

    function paint() {
      var head = spec.tableColumns.map(function (c) { return '<th>' + esc(fieldLabel(c)) + '</th>'; }).join('');
      var body = rows.map(function (row, ri) {
        var tds = spec.tableColumns.map(function (c) {
          return '<td>' + esc(row[c] == null ? '' : String(row[c])) + '</td>';
        }).join('');
        var acts = '';
        if (hasWA) acts += '<button type="button" class="ai-mini-btn ai-ma-wa" data-ri="' + ri + '">WhatsApp</button> ';
        acts += '<button type="button" class="ai-mini-btn danger ai-ma-del" data-ri="' + ri + '">Delete</button>';
        return '<tr>' + tds + '<td class="ai-ma-acts">' + acts + '</td></tr>';
      }).join('');
      outEl.innerHTML =
        '<div class="ai-ma-app">' +
        '<div class="ai-ma-head"><h3>🏭 ' + esc(spec.appName) + '</h3>' +
        '<div class="ai-ma-tools">' +
        '<button type="button" class="ai-mini-btn ai-ma-save">★ Save to Library</button>' +
        '<button type="button" class="ai-mini-btn ai-ma-csv">Export CSV</button>' +
        '<button type="button" class="ai-mini-btn danger ai-ma-clear">Clear All</button>' +
        '</div></div>' +
        dashHtml() +
        '<div class="ai-ma-form">' + formHtml() + '</div>' +
        '<button type="button" class="ai-run-btn ai-ma-add" style="padding:11px 26px;font-size:0.9rem;"><span class="ai-run-label">＋ Add Entry</span></button>' +
        '<div class="ai-ma-tablewrap"><table class="ai-ma-table"><thead><tr>' + head + '<th>Actions</th></tr></thead>' +
        '<tbody>' + (body || '<tr><td colspan="' + (spec.tableColumns.length + 1) + '" class="ai-ma-empty">No entries yet — add your first one above.</td></tr>') +
        '</tbody></table></div>' +
        '<div class="ai-ma-count">' + rows.length + ' entr' + (rows.length === 1 ? 'y' : 'ies') + ' · stored in your browser (localStorage)</div>' +
        '</div>';
      wire();
    }

    function collect() {
      var row = {}, ok = true;
      spec.fields.forEach(function (f, fi) {
        var el = document.getElementById(idp + '-f' + fi);
        var v = el ? el.value.trim() : '';
        if (f.required && !v) { ok = false; if (el) el.style.borderColor = '#ef4444'; }
        else if (el) { el.style.borderColor = ''; }
        row[f.key] = v;
      });
      return ok ? row : null;
    }

    function clearForm() {
      spec.fields.forEach(function (f, fi) {
        var el = document.getElementById(idp + '-f' + fi);
        if (el) el.value = '';
      });
    }

    function toCSV() {
      var q = function (s) { return '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"'; };
      var lines = [spec.tableColumns.map(fieldLabel).map(q).join(',')];
      rows.forEach(function (row) {
        lines.push(spec.tableColumns.map(function (c) { return q(row[c]); }).join(','));
      });
      return lines.join('\n');
    }

    function wire() {
      outEl.querySelector('.ai-ma-add').addEventListener('click', function () {
        var row = collect();
        if (!row) {
          if (window.wdwToast) window.wdwToast('Please fill the required fields', 'error');
          return;
        }
        rows.push(row);
        microAppPersist(key, rows);
        clearForm();
        paint();
        if (window.wdwToast) window.wdwToast('Entry added ✓', 'success');
      });
      outEl.querySelector('.ai-ma-csv').addEventListener('click', function () {
        if (!rows.length) {
          if (window.wdwToast) window.wdwToast('Nothing to export yet', 'error');
          return;
        }
        var blob = new Blob([toCSV()], { type: 'text/csv;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = key + '.csv';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      });
      outEl.querySelector('.ai-ma-clear').addEventListener('click', function () {
        if (!rows.length) return;
        if (!confirm('Delete all ' + rows.length + ' entries?')) return;
        rows = [];
        microAppPersist(key, rows);
        paint();
      });
      outEl.querySelector('.ai-ma-save').addEventListener('click', function () {
        var lib = microAppLib().filter(function (it) { return it.key !== key; });
        lib.unshift({ name: spec.appName, key: key, spec: spec });
        microAppLibSave(lib);
        paintMicroAppLibrary(root);
        if (window.wdwToast) window.wdwToast('Saved to your library ✓', 'success');
      });
      outEl.querySelectorAll('.ai-ma-del').forEach(function (b) {
        b.addEventListener('click', function () {
          rows.splice(Number(b.getAttribute('data-ri')), 1);
          microAppPersist(key, rows);
          paint();
        });
      });
      outEl.querySelectorAll('.ai-ma-wa').forEach(function (b) {
        b.addEventListener('click', function () {
          var row = rows[Number(b.getAttribute('data-ri'))];
          if (!row) return;
          window.open('https://wa.me/?text=' + encodeURIComponent(waMessage(row)), '_blank', 'noopener');
        });
      });
    }

    paint();
  }

  function paintMicroAppLibrary(root) {
    var panel = root.querySelector('[data-verify="micro-app"]');
    if (!panel) return;
    var strip = panel.querySelector('.ai-lib-strip');
    var lib = microAppLib();
    if (!lib.length) {
      strip.innerHTML = '<span class="ai-rx-dim">No saved apps yet — forge one above, then hit “★ Save to Library”.</span>';
      return;
    }
    strip.innerHTML = lib.map(function (it, idx) {
      return '<span class="ai-lib-chip"><button type="button" class="ai-lib-open" data-i="' + idx + '">' +
        esc(it.name) + '</button>' +
        '<button type="button" class="ai-lib-del" data-i="' + idx + '" title="Delete">✕</button></span>';
    }).join('');
    strip.querySelectorAll('.ai-lib-open').forEach(function (b) {
      b.addEventListener('click', function () {
        var it = microAppLib()[Number(b.getAttribute('data-i'))];
        var libSpec = it && microAppNormalize(it.spec);
        if (!libSpec) return;
        var outWrap = root.querySelector('.ai-output-wrap');
        var outEl = root.querySelector('.ai-output');
        outWrap.style.display = 'block';
        renderMicroApp(root, outEl, libSpec);
        outWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
    strip.querySelectorAll('.ai-lib-del').forEach(function (b) {
      b.addEventListener('click', function () {
        var l = microAppLib();
        l.splice(Number(b.getAttribute('data-i')), 1);
        microAppLibSave(l);
        paintMicroAppLibrary(root);
      });
    });
  }

  function wireMicroAppSmith(root) {
    paintMicroAppLibrary(root);
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
      // Lock the button width before swapping the label, so "Thinking…"
      // never collapses it (width jump looked cheap/janky).
      if (on) { btn.style.minWidth = btn.offsetWidth + 'px'; }
      else { btn.style.minWidth = ''; }
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
        // Tactile nudge so the click doesn't feel dead.
        btn.classList.remove('ai-shake');
        void btn.offsetWidth;
        btn.classList.add('ai-shake');
        setTimeout(function () { btn.classList.remove('ai-shake'); }, 400);
        return;
      }
      errEl.style.display = 'none';
      setLoading(true);
      var builder = BUILDERS[cfg.tool];
      var prompt = builder ? builder(vals) : primary;
      ask(cfg.tool, prompt).then(function (answer) {
        setLoading(false);
        btn.querySelector('.ai-run-label').textContent = cfg.cta;
        if (cfg.after === 'microapp') {
          var spec = microAppParse(answer);
          if (!spec) {
            // One automatic retry with a stricter reminder — the user never
            // sees the first failure; the Thinking state simply continues.
            ask(cfg.tool, prompt + '\n\nSTRICT REMINDER: your previous reply was not valid JSON. Reply now with ONLY the JSON object — no code fences, no commentary, no extra text.').then(function (answer2) {
              setLoading(false);
              btn.querySelector('.ai-run-label').textContent = cfg.cta;
              var spec2 = microAppParse(answer2);
              if (!spec2) {
                errEl.textContent = 'The AI could not build an app from that description. Try naming the fields you need (e.g. "invoice tracker: client name, amount, due date, status").';
                errEl.style.display = 'block';
                if (window.wdwToast) window.wdwToast('Could not build app — please retry', 'error');
                outWrap.style.display = 'none';
              } else {
                renderMicroApp(root, outEl, spec2);
              }
            }).catch(function (err2) {
              setLoading(false);
              btn.querySelector('.ai-run-label').textContent = cfg.cta;
              errEl.textContent = friendlyError(err2);
              errEl.style.display = 'block';
            });
          } else {
            renderMicroApp(root, outEl, spec);
          }
        } else {
          renderMarkdown(outEl, answer);
        }
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

    // one-click example chips: fill the first input with the example text
    root.querySelectorAll('.ai-example-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var ta = root.querySelector('#ai-in-0');
        if (ta) {
          ta.value = chip.getAttribute('data-ex') || '';
          ta.focus();
        }
      });
    });

    wireRegexTester(root);
    wireApiSender(root);
    wireMicroAppSmith(root);
  }

  window.AIStudio = { initPage: initPage, ask: ask, renderMarkdown: renderMarkdown };
})();
