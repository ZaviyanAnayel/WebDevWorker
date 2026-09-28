// Smoke test for the current js/ai-widget.js (floating chat UI backed by /api/ai).
// Verifies: script loads without exceptions, injects #cw-ai-root into the DOM,
// and all key interactive elements exist with sane content.
const fs = require('fs');

const byId = {};
function mkEl() {
  const e = {
    children: [], style: {}, dataset: {}, id: '',
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    addEventListener() {}, removeEventListener() {},
    appendChild(c) { e.children.push(c); if (c.id) byId[c.id] = c; return c; },
    querySelector() { return mkEl(); },
    querySelectorAll() { return []; },
    setAttribute(k, v) { if (k === 'id') { e.id = v; byId[v] = e; } },
    getAttribute() { return null; },
    _html: '',
    textContent: '', value: '',
    scrollTop: 0, scrollHeight: 0,
    closest() { return null; }, focus() {}, click() {}, remove() {},
    insertAdjacentHTML() {}, append() {},
    getBoundingClientRect() { return { top: 0, left: 0, width: 0, height: 0 }; },
  };
  // Track ids declared inside assigned innerHTML so getElementById works like a browser.
  Object.defineProperty(e, 'innerHTML', {
    get() { return e._html; },
    set(v) {
      e._html = v;
      for (const m of String(v).matchAll(/\sid="([^"]+)"/g)) {
        if (!byId[m[1]]) byId[m[1]] = mkEl();
      }
    },
  });
  return e;
}
const head = mkEl(), body = mkEl();
global.document = {
  readyState: 'complete',
  addEventListener() {},
  head, body,
  querySelector() { return null; },
  querySelectorAll() { return []; },
  createElement() { return mkEl(); },
  getElementById(id) { return byId[id] || null; },
  documentElement: mkEl(),
};
global.window = global;
global.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
global.sessionStorage = global.localStorage;
global.fetch = async () => ({ ok: true, json: async () => ({ answer: 'ok' }) });
global.location = { pathname: '/tools/json-formatter-validator.html', href: 'https://www.webdevworker.com/tools/json-formatter-validator.html' };
global.navigator = { userAgent: 'node', clipboard: {} };

const src = fs.readFileSync('js/ai-widget.js', 'utf8');
eval(src);

let passed = 0, failed = 0;
function check(name, cond) {
  if (cond) { console.log(`[PASS] ${name}`); passed++; }
  else { console.error(`[FAIL] ${name}`); failed++; }
}

const root = body.children.find(c => c.id === 'cw-ai-root');
check('widget root #cw-ai-root injected into body', !!root);
check('launcher markup present', root && root.innerHTML.includes('cwAiLauncher'));
check('chat window markup present', root && root.innerHTML.includes('cwAiWindow'));
check('message form present', root && root.innerHTML.includes('cwAiForm'));
check('input present', root && root.innerHTML.includes('cwAiInput'));
check('messages box present', root && root.innerHTML.includes('cwAiMessages'));
check('greeting mentions WebDevWorker AI', root && root.innerHTML.includes('WebDevWorker AI'));
check('greeting names founder Zaviyan', root && root.innerHTML.includes('Zaviyan'));
check('suggestion chips present', root && root.innerHTML.includes('cw-ai-chip'));
check('embedded CSS injected into head', head.children.length > 0);

console.log(`\nResults: ${passed} passed, ${failed} failed.`);
process.exit(failed ? 1 : 0);
