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
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Due date must use YYYY-MM-DD format.")
    .refine((val) => {
      const [year, month, day] = val.split("-").map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 &&
        date.getUTCDate() === day
      );
    }, "Due date must be a real calendar date.")
    .optional()
    .describe("Optional due date for the task, in YYYY-MM-DD format"),
});