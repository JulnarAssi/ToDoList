import * as z from "zod/v4";

// Tool: complete_task
export const completeTaskInputSchema = z.object({
  id: z
    .string()
    .length(7, "Task ID must contain exactly 7 digits.")
    .regex(/^\d+$/, "Task ID must contain numbers only.")
    .describe(
      "The numeric ID of the task that should be marked as completed.",
    ),
});