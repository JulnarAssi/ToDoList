import * as z from "zod/v4";

// Schema for the update_task P1 tool.
export const updateTaskInputSchema = z
  .object({
    id: z
      .string()
      .length(7, "Task ID must contain exactly 7 digits.")
      .regex(/^\d+$/, "Task ID must contain numbers only.")
      .describe("The 7-digit numeric ID of the task to update."),

    title: z
      .string()
      .min(1, "Task title cannot be empty.")
      .max(200, "Task title must be 200 characters or fewer.")
      .optional()
      .describe("Optional new title for the task."),

    priority: z
      .enum(["high", "medium", "low"])
      .optional()
      .describe("Optional new priority level for the task."),

    due_date: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "Due date must use YYYY-MM-DD format.",
      )
      .optional()
      .describe("Optional new due date in YYYY-MM-DD format."),
  })
  .refine(
    ({ title, priority, due_date }) =>
      title !== undefined ||
      priority !== undefined ||
      due_date !== undefined,
    {
      message: "Provide at least one field to update.",
    },
  );