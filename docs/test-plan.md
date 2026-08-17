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
| T01 | `add_task` | Server running and `data/tasks.json` available | Valid title: `Finish Week 5 report`, priority: `high` | A new task is created successfully and returned with a valid ID | PASS | MCP Inspector screenshot - successful `add_task` call |
| T02 | `add_task` | Server running | Empty title: `""` | Input is rejected by validation and no task is created | PASS | MCP Inspector screenshot - empty title rejected by validation |
| T03 | `add_task` | Server running | Attempt to enter a title longer than 200 characters | Input exceeding the 200-character maximum is prevented or rejected by the schema | PASS | MCP Inspector enforced the 200-character maximum and did not allow additional characters |
| T04 | `list_tasks` | `data/tasks.json` contains several tasks | Default request with no filters | Stored tasks are returned successfully, respecting the default output limit | PASS | MCP Inspector returned 10 stored tasks successfully using the default request |
| T05 | `list_tasks` | Server running | Attempt to set `limit = 101` | Input above the maximum is prevented or adjusted to the allowed maximum of 100 | PASS | MCP Inspector automatically adjusted `101` to `100` before execution |
| T06 | `list_tasks` | Temporarily use an empty task list for this test | Default request | Tool returns an empty task list or a clear message without crashing | PASS | MCP Inspector screenshot - `list_tasks` returned `count: 0` and `tasks: []` without crashing |
| T07 | `complete_task` | A valid incomplete task exists in `data/tasks.json` | Valid 7-digit task ID | The selected task is marked as completed and the updated task is returned | PASS | Initial run failed due to malformed test data (trailing comma in `tasks.json`). After fixing the fixture, the test was re-run and passed in MCP Inspector. |
| T08 | `complete_task` | Server running | Invalid ID: `123` | Input is rejected because the task ID must contain exactly 7 digits | PASS | Initial test failed because the schema allowed IDs shorter than 7 digits. Fixed in commit `39ff3c9`, then re-tested successfully in MCP Inspector. |
| T09 | `complete_task` | Server running | Valid-format but non-existent ID: `9999999` | Tool returns a clear task-not-found error without crashing | PASS | MCP Inspector returned `Task with ID 9999999 was not found.` |
| T10 | General / simulated failure | Simulate unavailable or invalid task data source without making permanent changes | Run one P0 tool while the data source is unavailable/invalid | Tool should fail safely and return a clear error instead of exposing internal details or crashing the server | PASS | Invalid `tasks.json` was simulated. `list_tasks` returned `Failed to load tasks.` without crashing the server. |

## Notes

- Happy-path tests are included for all three P0 tools.
- Invalid-input tests are included for all three P0 tools.
- An empty-data case is included for `list_tasks`.
- A simulated failure case is included because the project does not currently use external network requests, so a real network timeout test is not applicable.
- All planned test cases were executed in MCP Inspector.
- All 10 test cases passed after required fixes and re-testing.
- T07 initially failed because the test data contained malformed JSON; after correcting the fixture, the test was re-run and passed.
- T08 initially failed because `complete_task` accepted IDs shorter than 7 digits. The schema was fixed in commit `39ff3c9`, and the test passed after re-testing.