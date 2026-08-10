## Week 4 — Threat Model Notes (Maysam)

My tools: add_task (P0), delete_task (P1)

1. Path traversal: NOT AT RISK — file path is hardcoded (data/tasks.json via resolve(process.cwd(), "data", "tasks.json")), never built from user input.
2. SSRF: NOT APPLICABLE — neither tool makes any network/fetch call; both only read/write a local JSON file.
3. Secret leaks: NOT AT RISK — no API keys, tokens, or credentials used anywhere in either tool; auth is "none" for the whole project.
4. Runaway responses: LOW RISK, WORTH HARDENING — add_task's title field has a Zod .max(200) bound already, but I should double check description/title lengths are enforced consistently and that list_tasks (teammate's) properly caps returned results (it already does — limit param, defaults to 10).

Action for next session: confirm all string fields across my schemas have explicit .max() bounds; verify delete_task's id field can't be used to inject anything since it's validated against a strict pattern.