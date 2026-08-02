import type { McpServer } from "@modelcontextprotocol/server";
import { deleteTaskInputSchema } from "../schemas/delete-task.js";
import { readTasks, writeTasks } from "../lib/file.js";

/** Week 3 — delete an existing task from data/tasks.json. */
export function registerDeleteTaskTool(server: McpServer): void {
  server.registerTool(
    "delete_task",
    {
      description:
        "Permanently remove a task from the to-do list using its task ID. This action cannot be undone.",
      inputSchema: deleteTaskInputSchema,
    },
    async ({ id }) => {
      try {
        const tasks = await readTasks();
        const taskExists = tasks.some((task) => task.id === id);

        if (!taskExists) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  { ok: false, tool: "delete_task", error: `No task found with id "${id}".` },
                  null,
                  2,
                ),
              },
            ],
            isError: true,
          };
        }

        const remainingTasks = tasks.filter((task) => task.id !== id);
        await writeTasks(remainingTasks);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                { ok: true, tool: "delete_task", id, message: "Task deleted successfully." },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                { ok: false, tool: "delete_task", error: "Failed to delete task." },
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