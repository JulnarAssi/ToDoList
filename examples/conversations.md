# Example Conversations

These examples show how a user might interact with the To-Do List MCP Server
through an AI assistant and which MCP tools the model is expected to call.

---

## Conversation A — Add a Task

### User Prompt

I have to submit my AI training report tomorrow. Add it to my tasks and make it high priority.

### Expected Tool Call

The model should call:

`add_task`

Arguments:

- `title`: "Submit AI training report"
- `priority`: "high"
- `due_date`: tomorrow's date in `YYYY-MM-DD` format

### Good Final Answer

Done! I added "Submit AI training report" as a high-priority task due tomorrow.

---

## Conversation B — Check Current Tasks

### User Prompt

What do I still need to get done?

### Expected Tool Call

The model should call:

`list_tasks`

Arguments:

No arguments are required.

The model should use the returned task list to tell the user which tasks
are still incomplete.

### Good Final Answer

You still have these tasks to complete:

- Submit Week 3 MCP tools — high priority
- Prepare for Week 3 demo — medium priority
- Edit the photos — low priority

---

## Conversation C — Find and Complete a Task

### User Prompt

I finally finished that MCP report I had on my list. Mark it as done.

### Expected Tool Calls

The model does not know the task ID yet, so it should first search for the task.

First call:

`search_task`

Arguments:

- Search for a keyword related to "MCP report"

After finding the matching task, the model should take its returned task ID
and call:

`complete_task`

Arguments:

- `id`: the 7-digit ID returned by `search_task`

### Good Final Answer

Done! I found your MCP report task and marked it as completed.

---

## Conversation D — Delete a Task

### User Prompt

Please delete the task about the AI training report from my list.

### Expected Tool Calls

The model does not know the task ID yet, so it should first search for the task.

First call:

`search_task`

Arguments:

- Search for a keyword related to "AI training report"

After finding the matching task, the model should take its returned task ID
and call:

`delete_task`

Arguments:

- `id`: the 7-digit ID returned by `search_task`

### Good Final Answer

Done! I found your AI training report task and removed it from your list.