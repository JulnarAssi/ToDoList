import * as z from "zod/v4";

// Schema for the list-tasks tool
export const listTasksInputSchema = z.object({
  status: z
    .enum(["pending", "completed"])
    .optional()
    .describe("Filter tasks by completion status"),

  priority: z
    .enum(["low", "medium", "high"])
    .optional()
    .describe("Filter tasks by priority level"),

  limit: z
    .number()
    .int()
    .positive()
    .max(100)
    .optional()
    .describe("Maximum number of tasks to return"),
});