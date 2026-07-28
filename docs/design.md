# Design doc — Week 2

> Mandatory for mentor review. Open a GitHub Issue linking to this file before Week 3.

**Student:** Maysam AbuEid || Julnar Assi || Lana Says

**Repo:**  https://github.com/JulnarAssi/ToDoList.git
**Branch:** `week-2-design`  
**GitHub Issue:** https://github.com/JulnarAssi/ToDoList/issues/2#issue-5002843237  

---

## 1. Pitch

Most people and students have issues in organising there daily tasks and its updates, this project well be an MCP Server that allows AI assistant to create tasks, search in it, updates it, write on it using a specific tools. Also the project will store tasks locally on the device and it dose not need internet and paid APIs.

## 2. Demo Day user story

The target users are students and people who wants to organise there daily responsibilities.

1. Host / Inspector starts the To-Do List MCP Server.
2. The user asks: Create a task called "complete MCP design" with high priority.
3. The AI will use `add_task`, create the task, and return its ID.
4. The user asks to see all uncompleted tasks, so the AI uses `list_tasks`.
5. The user asks to complete the task, so the AI uses `complete_task`.
6. The audience sees the task created, displayed, and marked as completed in the MCP Inspector.

## 3. Tool inventory (4–7 tools)

Mark exactly **three** tools as **P0** (must work for Demo Day). Others can be P1 stubs.

| Priority | Tool name (`verb_noun`) | Description (for the model) | Inputs | Outputs |
| --- | --- | --- | --- | --- |
| P0 | `add_task` | Adds a new task and returns the saved task with its generated ID. | `title`, `priority`, optional `due_date` | Task object |
| P0 | `list_tasks` | Returns the stored tasks and can optionally filter them by completion status. | optional `status` | Array of task objects |
| P0 | `complete_task` | Marks an existing task as completed using its task ID. | `id` | Updated task object |
| P1 | `update_task` | Updates the title, priority, or due date of an existing task. | `id`, optional updated fields | Updated task object |
| P1 | `search_tasks` | Searches stored tasks using a keyword in the task title. | `keyword` | Array of matching task objects |
| P1 | `delete_task` | Permanently removes a task using its task ID. | `id` | Confirmation object |

## 4. Out of scope

The project will not contain these:

- users accounts
- login
- multi user service
- mobil app
- graphical interface
- paid API's
- cloud data base
- notification and alarms

## 5. Success criteria

You succeed on Demo Day if:

- [ ] user can creat a task and get its id.
- [ ] user can display tasks and see the new task.
- [ ] user can complete the task.
- [ ] all tools are shown correctlly in the MCP inspector.

## 6. Top risks

| Risk | Likelihood | Mitigation |
| --- | --- | --- |
| Task data may be lost when the server restarts. | Medium | Start with in-memory storage for the skeleton, then add a local JSON file for persistence. |
| Invalid task IDs or incorrect inputs may cause tool errors. | Medium | Use Zod schemas to validate every input and return clear error messages. |
|  |  |  |

## 7. Evidence for Week 2

- [ ] `docs/project-choice.md` filled
- [ ] ≥3 Zod schemas under `src/schemas/`
- [ ] Tools registered (stubs OK)
- [ ] `examples/<tool>.json` for each registered tool
- [ ] Inspector screenshots attached to the GitHub Issue

## Mentor decision

- Status: pending / approved / changes requested
- Comments:
