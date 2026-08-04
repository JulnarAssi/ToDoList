import type { McpServer } from "@modelcontextprotocol/server";

/** Week 3 — read-only resource exposing basic info about the to-do list project. */
export function registerTasksInfoResource(server: McpServer): void {
  server.registerResource(
    "tasks-info",
    "notes://tasks-info",
    {
      title: "To-Do List Project Info",
      description:
        "Read-only overview of the To-Do List MCP project: available tools, data source, and how tasks are structured.",
      mimeType: "text/plain",
    },
    async () => {
      const info = `To-Do List MCP Server — Project Overview

Available tools:
- add_task (P0): creates a new task
- list_tasks (P0): lists all tasks
- complete_task (P0): marks a task as completed
- delete_task (P1): removes a task by ID
- search_tasks (P1): searches tasks by keyword
- update_task (P1): updates an existing task's fields

Data source: local JSON file at data/tasks.json (no internet, no auth required)

Task structure:
{
  "id": string (up to 7 digits),
  "title": string,
  "priority": "high" | "medium" | "low",
  "completed": boolean,
  "due_date": string (optional, YYYY-MM-DD)
}`;

      return {
        contents: [
          {
            uri: "notes://tasks-info",
            mimeType: "text/plain",
            text: info,
          },
        ],
      };
    },
  );
}