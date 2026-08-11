import * as z from "zod/v4";

// Tool: complete_task
export const completeTaskInputSchema = z.object({
  id: z
    .string()
    .max(7, "Task ID must be less than 8 digits.")
    .regex(/^\d+$/, "Task ID must contain numbers only.")
    .describe(
      "The numeric ID of the task that should be marked as completed.",
    ),
});