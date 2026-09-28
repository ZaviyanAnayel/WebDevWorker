# -*- coding: utf-8 -*-
"""Factual expansion content for the 11 AI Studio tool pages.

Every claim is grounded in the tool's actual UI (input fields, buttons,
ai-note disclaimer). No invented statistics, reviews, or authority claims.
"""

SECTIONS = {
'ai-api-oracle': {
 'how': [
   ("Describe the call", "Write what the API request should do in plain English — the endpoint's job, the data it needs, and what a successful response looks like."),
   ("Add context (optional)", "Paste the base URL or a hint from the API docs so the generated request targets the right host and path."),
   ("Get the request", "The instrument returns the HTTP method, full URL, headers, and a ready-to-run cURL command you can paste into a terminal."),
 ],
 'notes': [
   "Always verify the generated request against the official API documentation before using it with real credentials.",
   "Never paste live API keys or secrets into the description field — use placeholders and substitute the real values locally.",
 ],
 'related': [('ai-regex-smith', 'AI Regex Smith'), ('ai-test-forge', 'AI Test Forge'), ('ai-code-explainer', 'AI Code Explainer')],
},
'ai-code-doctor': {
 'how': [
   ("Paste the error", "Drop in the full error message or stack trace — the more complete it is, the better the diagnosis."),
   ("Add the surrounding code", "Optionally include the code that produced the error and select the language so the fix matches your stack."),
   ("Get the cure", "The instrument explains the root cause in plain language and returns corrected code you can apply."),
 ],
 'notes': [
   "AI-generated fixes are suggestions, not guarantees — run your test suite after applying any change.",
   "Strip secrets, tokens, and personal data from stack traces before pasting them anywhere online.",
 ],
 'related': [('ai-code-reviewer', 'AI Code Reviewer'), ('ai-code-explainer', 'AI Code Explainer'), ('ai-test-forge', 'AI Test Forge')],
},
'ai-code-explainer': {
 'how': [
   ("Paste the code", "Drop in any snippet, function, or file that is hard to follow — legacy code is the classic use case."),
   ("Pick the language", "Select the language so terminology and idioms in the explanation match your codebase."),
   ("Read the walkthrough", "The instrument breaks the code down step by step: what each part does and how the pieces fit together."),
 ],
 'notes': [
   "Explanations describe what the code appears to do — they cannot verify intent, so confirm against the original requirements.",
   "For very large files, explain one function or module at a time for clearer results.",
 ],
 'related': [('ai-code-reviewer', 'AI Code Reviewer'), ('ai-code-doctor', 'AI Code Doctor'), ('ai-refactor', 'AI Refactor')],
},
'ai-code-reviewer': {
 'how': [
   ("Paste code or a diff", "Drop in a snippet or a unified diff straight from your pull request."),
   ("Select the language", "Choose from JavaScript, TypeScript, Python, PHP, Java, Go, Rust, C#, Ruby, or SQL."),
   ("Get the verdict", "The instrument returns an overall verdict plus bugs ranked by severity, edge cases you missed, and corrected snippets."),
 ],
 'notes': [
   "Treat the review as a tireless junior reviewer, not a replacement for human judgment on architecture and product decisions.",
   "Do not paste proprietary code you are not authorized to share with an external AI service.",
 ],
 'related': [('ai-security-auditor', 'AI Security Auditor'), ('ai-test-forge', 'AI Test Forge'), ('ai-code-explainer', 'AI Code Explainer')],
},
'ai-micro-app-smith': {
 'how': [
   ("Describe the mini-app", "Write what the tool should do in plain English — for example, an invoice tracker or a budget calculator."),
   ("Forge it", "The instrument generates a working single-purpose web app from your description."),
   ("Use it immediately", "The result runs in your browser — no build step, no deployment, no signup."),
 ],
 'notes': [
   "Generated apps are starting points for personal productivity, not audited production software — review the code before trusting it with important data.",
   "Keep descriptions specific: the more precisely you describe inputs, outputs, and behavior, the closer the result.",
 ],
 'related': [('ai-prompt-surgeon', 'AI Prompt Surgeon'), ('ai-api-oracle', 'AI API Oracle'), ('ai-code-explainer', 'AI Code Explainer')],
},
'ai-prompt-surgeon': {
 'how': [
   ("Paste your prompt", "Drop in the prompt or conversation that is underperforming or costing too many tokens."),
   ("Operate", "The instrument diagnoses bloat, ambiguity, and missing constraints in your prompt."),
   ("Get the sharpened version", "You receive a tighter, clearer rewrite engineered to get better answers with fewer tokens."),
 ],
 'notes': [
   "Token savings depend on the model and the task — measure before-and-after on your real workload rather than trusting estimates.",
   "Remove confidential instructions or data from prompts before submitting them.",
 ],
 'related': [('ai-micro-app-smith', 'AI Micro-App Smith'), ('ai-code-explainer', 'AI Code Explainer'), ('ai-test-forge', 'AI Test Forge')],
},
'ai-refactor': {
 'how': [
   ("Paste the legacy code", "Drop in the code that needs modernizing — outdated syntax, deprecated patterns, or framework-specific legacy."),
   ("Choose the migration", "Select the target migration, such as moving to a newer language version or framework."),
   ("Get modern code", "The instrument rewrites the code using current idioms and APIs while preserving its behavior."),
 ],
 'notes': [
   "Refactored code must be validated by your tests — automated rewrites can subtly change behavior at the edges.",
   "Migrate incrementally: refactor one module at a time instead of entire codebases in a single pass.",
 ],
 'related': [('ai-code-reviewer', 'AI Code Reviewer'), ('ai-test-forge', 'AI Test Forge'), ('ai-code-explainer', 'AI Code Explainer')],
},
'ai-regex-smith': {
 'how': [
   ("Describe the pattern", "Write in plain English what the regex should match — for example, email addresses or dates in a specific format."),
   ("Pick the flavor", "Select your regex flavor so the syntax matches your engine (JavaScript, Python, PCRE, and others)."),
   ("Forge and test", "The instrument returns the pattern plus an explanation, and the built-in tester lets you verify it against sample text."),
 ],
 'notes': [
   "Always test generated patterns against both matching and non-matching examples — regex edge cases are where bugs hide.",
   "For complex validation (like full email RFC compliance), prefer a dedicated parser over a single regex.",
 ],
 'related': [('ai-test-forge', 'AI Test Forge'), ('ai-code-explainer', 'AI Code Explainer'), ('ai-prompt-surgeon', 'AI Prompt Surgeon')],
},
'ai-security-auditor': {
 'how': [
   ("Paste the code", "Drop in the code you want audited — authentication handlers, API endpoints, and data-processing functions are the highest-value targets."),
   ("Select the language", "Choose the language so the findings reference the right vulnerability patterns for your stack."),
   ("Review the findings", "The instrument reports potential vulnerabilities with severity ratings and remediation guidance."),
 ],
 'notes': [
   "An AI audit is a screening pass, not a security guarantee — critical systems still need professional penetration testing.",
   "Fix findings in severity order and re-audit after changes; fixes sometimes introduce new issues.",
 ],
 'related': [('ai-code-reviewer', 'AI Code Reviewer'), ('ai-test-forge', 'AI Test Forge'), ('ai-code-doctor', 'AI Code Doctor')],
},
'ai-sql-smith': {
 'how': [
   ("Choose the mode", "Pick whether you want to generate SQL from a request, explain an existing query, or optimize one."),
   ("Set the dialect", "Select your database dialect so the syntax matches — quoting, functions, and pagination differ across engines."),
   ("Describe or paste", "Write the request in plain English, optionally adding your schema as context for accurate table and column names."),
 ],
 'notes': [
   "Review generated SQL before running it against production data — especially UPDATE and DELETE statements.",
   "Providing your actual schema dramatically improves accuracy; without it the AI must guess table and column names.",
 ],
 'related': [('ai-code-explainer', 'AI Code Explainer'), ('ai-test-forge', 'AI Test Forge'), ('ai-api-oracle', 'AI API Oracle')],
},
'ai-test-forge': {
 'how': [
   ("Paste the function", "Drop in the function or module you want covered by tests."),
   ("Pick the framework and language", "Select your test framework (Jest, pytest, and others) and language so the output plugs straight into your suite."),
   ("Get the tests", "The instrument generates test cases covering the main paths plus edge cases, ready to paste into your project."),
 ],
 'notes': [
   "Generated tests assert what the code currently does — verify the assertions encode the behavior you actually want.",
   "Aim coverage at critical logic first; 100% coverage of trivial getters adds maintenance cost without safety.",
 ],
 'related': [('ai-code-reviewer', 'AI Code Reviewer'), ('ai-refactor', 'AI Refactor'), ('ai-security-auditor', 'AI Security Auditor')],
},
}
