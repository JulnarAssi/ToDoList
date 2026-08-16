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
| T01 | `add_task` | Server running and `data/tasks.json` available | Valid title: `Finish Week 5 report`, priority: `high` | A new task is created successfully and returned with a valid ID |  |  |
| T02 | `add_task` | Server running | Empty title: `""` | Input is rejected by validation and no task is created |  |  |
| T03 | `add_task` | Server running | Title longer than the allowed maximum length | Input is rejected with a clear validation error |  |  |
| T04 | `list_tasks` | `data/tasks.json` contains several tasks | Default request with no filters | Stored tasks are returned successfully, respecting the default output limit |  |  |
| T05 | `list_tasks` | Server running | `limit = 101` | Input is rejected because the maximum allowed limit is 100 |  |  |
| T06 | `list_tasks` | Temporarily use an empty task list for this test | Default request | Tool returns an empty task list or a clear message without crashing |  |  |
| T07 | `complete_task` | A valid incomplete task exists in `data/tasks.json` | Valid 7-digit task ID | The selected task is marked as completed and the updated task is returned |  |  |
| T08 | `complete_task` | Server running | Invalid ID: `123` | Input is rejected because the task ID must contain exactly 7 digits |  |  |
| T09 | `complete_task` | Server running | Valid-format but non-existent ID: `9999999` | Tool returns a clear task-not-found error without crashing |  |  |
| T10 | General / simulated failure | Simulate unavailable or invalid task data source without making permanent changes | Run one P0 tool while the data source is unavailable/invalid | Tool should fail safely and return a clear error instead of exposing internal details or crashing the server |  |  |

## Notes

- Happy-path tests are included for all three P0 tools.
- Invalid-input tests are included for all three P0 tools.
- An empty-data case is included for `list_tasks`.
- A simulated failure case is included because the project does not currently use external network requests, so a real network timeout test is not applicable.
- `Result` and `Evidence` will be completed in Section 5.2 after running the tests in MCP Inspector.