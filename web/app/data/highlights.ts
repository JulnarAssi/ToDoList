// ---------------------------------------------------------------------------
// PROJECT HIGHLIGHTS
// ---------------------------------------------------------------------------
// Every line here is backed by something in the repository:
// README.md, docs/test-plan.md, docs/threat-model.md, docs/data-plan.md,
// package.json. No invented metrics, benchmarks, or user counts.
// ---------------------------------------------------------------------------

export const highlights: string[] = [
  "Seven MCP tools covering the full task lifecycle: add, list, complete, search, update, delete",
  "Local, persistent storage in data/tasks.json — no database or internet connection required",
  "Every tool input validated with Zod schemas, including strict 7-digit task ID checks",
  "Multi-tool workflows: the assistant chains search_task \u2192 complete_task or search_task \u2192 delete_task",
  "10/10 manual test cases passed in MCP Inspector, covering happy paths, invalid input, and failure handling",
  "Documented threat model and data plan for every P0/P1 tool",
  "Real Google Calendar integration via OAuth 2.0 and the Calendar API for create_calendar_event",
  "OAuth credentials and tokens kept in a git-ignored .secrets/ directory, never in source control",
  "Public v1.0.0 release tagged on GitHub",
];
