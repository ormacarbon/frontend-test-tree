import { z } from "zod";

export const HomeFormSchema = z.object({
  co2: z.number(),
  cred: z.number(),
  error: z.boolean(),
});

export type HomeFormType = z.infer<typeof HomeFormSchema>;
