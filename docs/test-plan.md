# Week 5 Manual Test Plan

## Project
To-Do List MCP Server

## P0 Tools
- `add_task`
- `list_tasks`
- `complete_task`

## Test Cases

| ID | Tool | Setup | Input | Expected | Result | Evidence |
|---|---|---|---|---|---|---|
| T01 | `add_task` | Server running and `data/tasks.json` available | Valid title: `Finish Week 5 report`, priority: `high` | A new task is created successfully and returned with a valid ID | PASS | [Before](evidence/T01-add-task-before.png) · [After](evidence/T01-add-task-after.png) |
| T02 | `add_task` | Server running | Empty title: `""` | Input is rejected by validation and no task is created | PASS | [Before](evidence/T02-add-task-empty-title-before.png) · [After](evidence/T02-add-task-empty-title-after.png) |
| T03 | `add_task` | Server running | Attempt to enter a title longer than 200 characters | Input exceeding the 200-character maximum is prevented or rejected by the schema | PASS | [Before](evidence/T03-add-task-max-length-before.png) · [After](evidence/T03-add-task-max-length-after.png) |
| T04 | `list_tasks` | `data/tasks.json` contains several tasks | Default request with no filters | Stored tasks are returned successfully, respecting the default output limit | PASS | [Before](evidence/T04-list-tasks-before.png) · [After](evidence/T04-list-tasks-after.png) |
| T05 | `list_tasks` | Server running | Attempt to set `limit = 101` | Input above the maximum is prevented or adjusted to the allowed maximum of 100 | PASS | [Before](evidence/T05-list-tasks-limit-before.png) · [After](evidence/T05-list-tasks-limit-after.png) |
| T06 | `list_tasks` | Temporarily use an empty task list for this test | Default request | Tool returns an empty task list or a clear message without crashing | PASS | [Before](evidence/T06-list-tasks-empty-before.png) · [After](evidence/T06-list-tasks-empty-after.png) |
| T07 | `complete_task` | A valid incomplete task exists in `data/tasks.json` | Valid 7-digit task ID | The selected task is marked as completed and the updated task is returned | PASS | [Before](evidence/T07-complete-task-before.png) · [After](evidence/T07-complete-task-after.png) |
| T08 | `complete_task` | Server running | Invalid ID: `123` | Input is rejected because the task ID must contain exactly 7 digits | PASS | [Before](evidence/T08-complete-task-invalid-id-before.png) · [After](evidence/T08-complete-task-invalid-id-after.png) |
| T09 | `complete_task` | Server running | Valid-format but non-existent ID: `9999999` | Tool returns a clear task-not-found error without crashing | PASS | [Before](evidence/T09-complete-task-not-found-before.png) · [After](evidence/T09-complete-task-not-found-after.png) |
| T10 | General / simulated failure | Simulate unavailable or invalid task data source without making permanent changes | Run one P0 tool while the data source is unavailable/invalid | Tool should fail safely and return a clear error instead of exposing internal details or crashing the server | PASS | [Setup](evidence/T10-invalid-data-setup.png) · [Before](evidence/T10-list-tasks-before.png) · [Error Result](evidence/T10-list-tasks-error-after.png) |

## Notes

- Happy-path tests are included for all three P0 tools.
- Invalid-input tests are included for all three P0 tools.
- An empty-data case is included for `list_tasks`.
- A simulated failure case is included because the project does not currently use external network requests, so a real network timeout test is not applicable.
- All planned test cases were executed in MCP Inspector.
- All 10 test cases passed after required fixes and re-testing.
- T07 initially failed because the test data contained malformed JSON; after correcting the fixture, the test was re-run and passed.
- T08 initially failed because `complete_task` accepted IDs shorter than 7 digits. The schema was fixed in commit `39ff3c9`, and the test passed after re-testing.