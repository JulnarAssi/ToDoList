import * as z from "zod/v4";

// Schema for the add-task tool
export const addTaskInputSchema = z.object({
  title: z
    .string()
    .min(1)
    .max(200)
    .describe("The title of the task"),
  description: z
    .string()
    .max(1000)
    .optional()
    .describe("An optional description for the task"),
});