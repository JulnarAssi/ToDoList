import { z } from "zod";

export const addTaskInputSchema = {
  title: z.string().describe("The title of the task"),
  description: z.string().optional().describe("An optional description for the task"),
};