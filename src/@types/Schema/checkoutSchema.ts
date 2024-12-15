import { z } from "zod";

const CardholderSchema = z.object({
  name: z.string().min(1, "O nome do titular do cartão é obrigatório."),
  identification: z.object({
    type: z.enum(["CPF"]),
    number: z.string().regex(/^\d{11}$/, "O número deve conter 11 dígitos."),
  }),
});

export const CheckoutSchema = z.object({
  co2: z.number().min(1, "A quantidade de crédito deve ser no mínimo 1."),
  cred: z.number().min(1, "O valor unitário do crédito deve ser no mínimo 1."),
  card_number: z
    .string()
    .regex(/^\d{16}$/, "O número do cartão deve conter 16 dígitos."),
  expiration_month: z
    .string()
    .regex(/^\d+$/, "O mês de expiração deve ser um número.")
    .transform((val) => parseInt(val))
    .refine((val) => val >= 1 && val <= 12, {
      message: "O mês de expiração deve estar entre 1 e 12.",
    }),
  expiration_year: z
    .string()
    .regex(/^\d+$/, "O ano de expiração deve ser um número.")
    .transform((val) => parseInt(`20${val}`))
    .refine((val) => val >= new Date().getFullYear(), {
      message: "O ano de expiração deve ser válido.",
    }),
  security_code: z
    .string()
    .regex(/^\d{3}$/, "O código de segurança deve conter 3 dígitos."),
  cardholder: CardholderSchema,
  paymentInstallments: z.string(),
});

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>;
