# Week 4 Threat Model

## Assets

- `data/tasks.json`, which stores the application's task data.
- The local filesystem used by the MCP server.
- Valid task data and task IDs.
- MCP tool responses returned to the model.
- No API keys or external tokens are currently required by the project.

## Trust Boundaries

- Model → tool arguments: all tool inputs are treated as untrusted.
- Tool → filesystem: `add_task`, `list_tasks`, and `complete_task` read from and/or write to `data/tasks.json`.
- Tool → model response: tool output must be limited and safe to return.
- The project currently does not make external network requests.

## Top 5 Risks

1. Invalid or malicious task input could reach the tool handlers.
2. File access could accidentally read or write outside the intended `data` directory.
3. A malformed or corrupted `tasks.json` file could cause parsing or runtime failures.
4. `list_tasks` could return too many tasks and create an unnecessarily large model response.
5. Error messages or logs could expose unnecessary internal implementation details.

## Mitigations This Week

1. Strengthen Zod validation for task IDs, titles, priority values, dates, and optional filters.
2. Keep task file access restricted to the fixed `data/tasks.json` path and do not accept user-controlled file paths.
3. Validate parsed JSON with Zod before using it and return clear errors when the file is invalid.
4. Keep `list_tasks` responses capped with a maximum result limit.
5. Log detailed failures only to stderr with `console.error`, while returning short user-facing error messages.

## Out of Scope

- Authentication and multi-user access control are not included because this is a local student project.
- External API security and SSRF protection are not currently needed because the project does not make network requests.
- Encryption at rest and production-grade secret management are outside the scope of this local demo project.
