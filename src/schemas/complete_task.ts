import { z } from "zod";

export const completeTaskInputSchema = z.object({
  id: z
    .string()
    .min(1, "Task ID is required.")
    .max(7, "Task ID must be less than 8 digits")
    .regex(/^\d+$/, "Task ID must contain numbers only.")
    .describe("The unique ID of the task that should be marked as completed."),
  });
