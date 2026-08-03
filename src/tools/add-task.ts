import type { McpServer } from "@modelcontextprotocol/server";
import { addTaskInputSchema } from "../schemas/add-task.js";
import { readTasks, writeTasks, type Task } from "../lib/file.js";

/** Week 3 — add a new task to the to-do list, persisted to data/tasks.json. */
export function registerAddTaskTool(server: McpServer): void {
  server.registerTool(
    "add_task",
    {
      description:
        "Create a new task with a title, optional priority, and optional due date. Saves it to the task list and returns the saved task with its generated ID.",
      inputSchema: addTaskInputSchema,
    },
    async ({ title, priority, due_date }) => {
      try {
        const tasks = await readTasks();

        const newTask: Task = {
          id: Math.floor(1000000 + Math.random() * 9000000).toString(),
          title,
          priority: priority ?? "medium",
          completed: false,
          ...(due_date ? { due_date } : {}),
        };

        tasks.push(newTask);
        await writeTasks(tasks);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                { ok: true, tool: "add_task", task: newTask },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        console.error("add_task failed:", error);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                { ok: false, tool: "add_task", error: "Failed to add task." },
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