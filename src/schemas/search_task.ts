import { z } from "zod";

export const searchTasksInputSchema = z.object({
  keyword: z
    .string()
    .min(1, "Search keyword is required.")
    .max(20, "Search keyword must not exceed 20 characters.")
    .describe("The keyword used to search inside task titles."),
  });
