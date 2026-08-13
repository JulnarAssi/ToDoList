# Week 4 Peer Review Checklist

## Project

To-Do List MCP Server

## Peer Review Summary

Our project was reviewed for tool validation, security and error handling, and the README/demo path.

### 1. Tools & Validation Review

**Status:** Passed

The P0 tools were tested using MCP Inspector:

- `add_task`
- `list_tasks`
- `complete_task`

Valid inputs worked correctly, and invalid inputs such as empty task titles and invalid task IDs were rejected.

**P0 Findings:** None.

---

### 2. Security & Error Handling Review

**Status:** Passed with improvements required.

The review covered:

- Input validation
- Stored data validation
- File access
- Secrets
- Error handling
- Invalid input rejection

The project correctly uses Zod validation, fixed file access, ignored `.env` files, and short user-facing error messages.

#### Finding: Invalid Due Date

**Priority:** P1

`add_task` accepted an invalid calendar date such as:

`2026-99-99`

The current validation checks the `YYYY-MM-DD` format but does not verify that the date is a real calendar date.

#### File Path Review

**Priority:** P2 / Low Risk

No practical path traversal vulnerability was found because the application uses a fixed `data/tasks.json` path.

The current `startsWith()` path check could be strengthened with stricter directory-boundary validation.

---

### 3. README & Demo Path Review

**Status:** Passed with improvements required.

The normal demo flow worked correctly:

`add_task` → `list_tasks` → `complete_task`

However, the README still contains some starter-template content and does not clearly document the current To-Do tools and demo flow.

The `search_task` tool should also either be implemented or clearly marked as out of scope.

---

## Action Items

### Action Item 1 — Strict Due Date Validation

**Priority:** P1  
**Owner:** Julnar Assi  
**Due Date:** End of Week 4

Add strict validation for `due_date` so that it verifies both:

- The format is `YYYY-MM-DD`.
- The value represents a real calendar date.

After the fix, re-test the invalid date case using MCP Inspector.

### Action Item 2 — Update README and Demo Path

**Priority:** P1  
**Owner:** To be assigned by the team  
**Due Date:** End of Week 4

Update the README to document the actual To-Do tools and provide a clear demo flow using the P0 tools.

### Action Item 3 — Review File Path Boundary Check

**Priority:** P2  
**Owner:** To be assigned by the team  
**Due Date:** End of Week 4

Review the current file path validation and consider replacing the `startsWith()` check with a stricter directory-boundary check.

---

## Final Review Status

**Overall Result:** PASS with improvements required.

**P0 Findings:** None.

The main required improvement is strict `due_date` validation. Additional improvements include updating the README/demo path and strengthening the file path boundary validation.