import { z } from "zod";

export const searchTasksInputSchema = z.object({
  keyword: z
    .string()
    .min(1, "Search keyword is required.")
    .max(50, "Search keyword must not exceed 50 characters.")
    .describe("The keyword used to search inside task titles."),
  });
