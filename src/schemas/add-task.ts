import * as z from "zod/v4";

// Schema for the add-task tool
export const addTaskInputSchema = z.object({
  title: z
    .string()
    .min(1)
    .max(200)
    .describe("The title of the task"),
  priority: z
    .enum(["high", "medium", "low"])
    .optional()
    .describe("Priority level of the task, defaults to 'medium' if not provided"),
  due_date: z
    .string()
    .optional()
    .describe("Optional due date for the task, in YYYY-MM-DD format"),
});