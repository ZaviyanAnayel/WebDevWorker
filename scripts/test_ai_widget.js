const fs = require('fs');

const dummyEl = {
  classList: { toggle: () => {}, contains: () => false, add: () => {}, remove: () => {} },
  addEventListener: () => {},
  querySelectorAll: () => [],
  value: "",
  focus: () => {}
};

global.document = {
  getElementById: (id) => (id === "cw-ai-root" ? null : dummyEl),
  head: { appendChild: () => {} },
  body: { appendChild: () => {} },
  createElement: () => dummyEl,
  readyState: 'complete'
};
global.window = {
  location: { pathname: '/' }
};

let scriptContent = fs.readFileSync('js/ai-widget.js', 'utf8');

// Expose resolveKnowledge to global scope for testing
scriptContent = scriptContent.replace(
  /function\s+resolveKnowledge\s*\(\s*query\s*\)\s*\{/,
  'global.resolveKnowledge = function(query) {'
);

eval(scriptContent);

const testQueries = [
  { q: "salam", expectGreeting: true },
  { q: "hello", expectGreeting: true },
  { q: "who is the owner", expectOwner: true },
  { q: "16px to rem", expectPX: true },
  { q: "bycript", expectBcrypt: true },
  { q: "dokker", expectDocker: true },
  { q: "html to jsx", expectJSX: true },
  { q: "total tools", expect85: true },
  { q: "guides", expectGuides: true }
];

console.log("==========================================");
console.log("       AI WIDGET VERIFICATION TEST        ");
console.log("==========================================");

let passed = 0;
for (const tc of testQueries) {
  const ans = global.resolveKnowledge(tc.q);
  let ok = false;
  if (tc.expectGreeting && (ans.includes("Walaikum Assalam") || ans.includes("Hello! Welcome"))) ok = true;
  if (tc.expectOwner && ans.includes("Zaviyan") && ans.includes("Zaviyan LLC")) ok = true;
  if (tc.expectPX && ans.includes("16px") && ans.includes("1rem")) ok = true;
  if (tc.expectBcrypt && ans.includes("Bcrypt")) ok = true;
  if (tc.expectDocker && ans.includes("Dockerfile")) ok = true;
  if (tc.expectJSX && ans.includes("HTML to JSX")) ok = true;
  if (tc.expect85 && ans.includes("85")) ok = true;
  if (tc.expectGuides && ans.includes("Guides &amp; Research Hub")) ok = true;

  if (ok) {
    console.log(`[PASS] Query: "${tc.q}" -> Result verified`);
    passed++;
  } else {
    console.error(`[FAIL] Query: "${tc.q}" -> Unexpected response:`, ans.slice(0, 150));
  }
}

console.log(`\nResults: ${passed} / ${testQueries.length} passed.`);
if (passed === testQueries.length) {
  console.log("ALL AI WIDGET TESTS PASSED 100%!");
} else {
  process.exit(1);
}
