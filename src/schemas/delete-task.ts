import * as z from "zod/v4";

// Schema for the delete-task tool
export const deleteTaskInputSchema = z.object({
  id: z
    .string()
    .min(1)
    .describe("The unique ID of the task to delete"),
});