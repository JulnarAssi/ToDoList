# Demo Script — To-Do List MCP

## 0:00–0:40 — Problem

Managing tasks usually requires users to manually create, search, update, and organize their to-do lists.

Our project explores a simpler approach: what if users could manage their tasks just by talking naturally to an AI assistant?

We built a To-Do List MCP Server that gives the AI structured tools to perform real actions, such as adding, searching, updating, completing, and deleting tasks.

Instead of only understanding what the user wants, the AI can actually act on the user's task list through MCP.


## 0:40–1:10 — Architecture

The architecture is simple. The user talks naturally to an AI assistant, which acts as the MCP host.

Based on the user's request, the AI selects one of the tools exposed by our To-Do List MCP Server. The server performs the requested action and persists the task data locally in `data/tasks.json`.

We also extended the server with a Google Calendar API integration, allowing it to create real calendar events through our custom MCP tool.

## 1:10–3:30 — Live Demo

Now let's see the MCP server working through an AI assistant.

### Live Prompt 1 — Add a Task

**Prompt:**

> I have to submit my AI training report tomorrow. Add it to my tasks and make it high priority.

The AI should call `add_task` and create the task with a high priority and tomorrow's due date.

After the tool call succeeds, briefly show that the task was actually added.

### Live Prompt 2 — Find and Complete a Task

**Prompt:**

> I finally finished that MCP report I had on my list. Mark it as done.

The AI should first call `search_task` to find the matching task and retrieve its ID. It should then call `complete_task` using that ID.

This demonstrates a multi-tool workflow where the AI uses the result of one MCP tool to perform the next action.

### Backup Prompt

If either live prompt cannot be used, use:

> What do I still need to get done?

This should call `list_tasks` and return the current incomplete tasks.


## 3:30–4:30 — What We Would Build Next

Our next step would be to make the Google Calendar integration more deeply connected to our task-management system.

Instead of only creating independent calendar events, we could link each scheduled event to a specific task in our to-do list. This would allow the MCP server to apply task-specific rules, such as preventing scheduling after a due date, avoiding duplicate scheduling, and keeping task and calendar information synchronized.

We would also like to continue improving the project with smarter scheduling and a more complete user-facing experience while keeping the MCP server as the core of the system.


## 4:30–5:00 — Questions

That concludes our demo of the To-Do List MCP Server.

We demonstrated how natural-language requests can be translated into real actions through MCP tools, including a multi-tool workflow and an external Google Calendar API integration.

Thank you. We're ready for your questions.


## Backup Plan

If the internet connection is unavailable during the demo, demonstrate the core task-management tools locally using MCP Inspector. The main task tools and `data/tasks.json` work locally without an external network service.

The Google Calendar API integration requires internet access, so it will not be part of the offline fallback demo.