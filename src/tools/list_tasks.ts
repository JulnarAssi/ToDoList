import type { McpServer } from "@modelcontextprotocol/server";

import { listTasksInputSchema } from "../schemas/list_tasks.js";
import { readTasks } from "../lib/file.js";

/** Week 3 — list tasks from data/tasks.json with optional filters. */
export function registerListTasksTool(server: McpServer): void {
  server.registerTool(
    "list_tasks",
    {
      description:
        "Lists tasks from the saved task file, optionally filtered by completion status and priority.",
      inputSchema: listTasksInputSchema,
    },
    async ({ status, priority, limit }) => {
      try {
        let tasks = await readTasks();

        if (status === "completed") {
          tasks = tasks.filter((task) => task.completed);
        }

        if (status === "pending") {
          tasks = tasks.filter((task) => !task.completed);
        }

        if (priority) {
          tasks = tasks.filter((task) => task.priority === priority);
        }

        const maxResults = limit ?? 10;
        const limitedTasks = tasks.slice(0, maxResults);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  tool: "list_tasks",
                  count: limitedTasks.length,
                  tasks: limitedTasks,
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        console.error("list_tasks failed:", error);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  tool: "list_tasks",
                  error: "Failed to load tasks.",
                },
                null,
                2,
              ),
            },
          ],
          isError: true,
        };
      }
    },
  );
}