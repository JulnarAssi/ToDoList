import type { McpServer } from "@modelcontextprotocol/server";

import { readTasks, writeTasks } from "../lib/file.js";
import { updateTaskInputSchema } from "../schemas/update-task.js";

/** P1 tool — updates the title, priority, or due date of an existing task. */
export function registerUpdateTaskTool(server: McpServer): void {
  server.registerTool(
    "update_task",
    {
      description:
        "Updates the title, priority, or due date of an existing task using its task ID.",
      inputSchema: updateTaskInputSchema,
    },
    async ({ id, title, priority, due_date }) => {
      try {
        const tasks = await readTasks();

        const task = tasks.find((t) => t.id === id);

        if (!task) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    ok: false,
                    tool: "update_task",
                    error: `Task with ID ${id} not found.`,
                  },
                  null,
                  2,
                ),
              },
            ],
            isError: true,
          };
        }

        if (title !== undefined) {
          task.title = title;
        }

        if (priority !== undefined) {
          task.priority = priority;
        }

        if (due_date !== undefined) {
          task.due_date = due_date;
        }

        await writeTasks(tasks);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  tool: "update_task",
                  task,
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        console.error("update_task failed:", error);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  tool: "update_task",
                  error: "Failed to update task.",
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