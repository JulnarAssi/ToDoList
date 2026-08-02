import type { McpServer } from "@modelcontextprotocol/server";

import { completeTaskInputSchema } from "../schemas/complete_task.js";
import { readTasks, writeTasks } from "../lib/file.js";

/** Register the complete_task P0 tool. */
export function registerCompleteTaskTool(server: McpServer): void {
  server.registerTool(
    "complete_task",
    {
      description:
        "Mark an existing task as completed using its task ID and return the updated task.",
      inputSchema: completeTaskInputSchema,
    },
    async ({ id }) => {
      try {
        const tasks = await readTasks();

        const task = tasks.find((currentTask) => currentTask.id === id);

        if (!task) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    success: false,
                    message: `Task with ID ${id} was not found.`,
                  },
                  null,
                  2,
                ),
              },
            ],
            isError: true,
          };
        }

        task.completed = true;

        await writeTasks(tasks);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  message: "The task was marked as completed.",
                  task,
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        console.error("complete_task failed:", error);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: false,
                  message: "Unable to complete the task.",
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