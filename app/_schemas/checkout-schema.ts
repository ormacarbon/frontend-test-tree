import { z } from "zod";

const CardholderSchema = z.object({
  name: z.string().min(1, "O nome do titular do cartão é obrigatório."),
  identification: z.object({
    type: z.enum(["CPF"]),
    number: z
      .string()
      .transform((val) => val.replace(/[^0-9]+/g, ""))
      .refine((val) => val.length === 11, {
        message: "O número do CPF deve conter 11 dígitos.",
      }),
  }),
  phone: z.string().nonempty("Telefone é obrigatório"),
});

export const CheckoutSchema = z.object({
  card_number: z
    .string()
    .transform((val) => val.replace(/[^0-9]+/g, ""))
    .refine((val) => val.length === 16, {
      message: "O número do cartão deve conter 16 dígitos.",
    }),

  expiration_month: z.string().regex(/^(0[1-9]|1[0-2])$/, "Mês inválido"),
  expiration_year: z
    .string()
    .regex(/^\d{2}$/, "Formato inválido")
    .refine(
      (val) => {
        const year = parseInt(val, 10);
        const currentYear = new Date().getFullYear();
        const currentYearShort = currentYear.toString().slice(-2); // Pega os dois últimos dígitos do ano atual
        return year >= parseInt(currentYearShort, 10); // Permite anos de 2023 em diante
      },
      {
        message: `Ano inválido, deve ser no mínimo ${new Date().getFullYear().toString().slice(-2)}`, // Pega os dois últimos dígitos do ano atual
      },
    )
    .transform((val) => `20${val}`),
  security_code: z
    .string()
    .regex(/^\d{3}$/, "O código de segurança deve conter 3 dígitos."),
  cardholder: CardholderSchema,
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  paymentInstallments: z
    .string()
    .nonempty("Opção de parcelamento é obrigatória"),
});

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>;
