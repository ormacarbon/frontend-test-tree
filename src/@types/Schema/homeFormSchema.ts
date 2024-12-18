import { z } from "zod";

export const HomeFormSchema = z.object({
  co2: z.string().transform((val) => parseInt(val)),
  cred: z.string().transform((val) => parseInt(val)),
  error: z.boolean(),
});

export type HomeFormType = z.infer<typeof HomeFormSchema>;
