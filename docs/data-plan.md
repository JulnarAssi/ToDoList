# Week 3 Data Plan

| Tool | Source | Fixture Path | Auth | Rate Limits | Failure Modes | Happy-Path Example Response |
|---|---|---|---|---|---|---|
| `add_task` | Local JSON file | `data/tasks.json` | None | None | File not found, invalid JSON, or failure to write the file | `{"id":"1","title":"Complete MCP assignment","priority":"high","completed":false}` |
| `list_tasks` | Local JSON file | `data/tasks.json` | None | None | File not found, invalid JSON, or empty task list | `[{"id":"1","title":"Complete MCP assignment","priority":"high","completed":false}]` |
| `complete_task` | Local JSON file | `data/tasks.json` | None | None | File not found, invalid JSON, or task ID not found | `{"id":"1","title":"Complete MCP assignment","priority":"high","completed":true}` |

## Notes

- All P0 tools use the same local JSON fixture at `data/tasks.json`.
- The project does not require authentication, paid APIs, or an internet connection.
- Local file access has no API rate limit.
- This project uses a local JSON fixture instead of an HTTP API, so an HTTP timeout helper is not required. Safe file reading, JSON parsing, Zod validation, and error handling are implemented in `src/lib/file.ts`.
