import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Endereço de e-mail inválido."),
  security_code: yup
    .number()
    .required("CVC/CVV é um campo obrigatório.")
    .typeError("CVC/CVV deve ser um número.")
    .min(100, "CVC/CVV deve ser um número de 3 dígitos.")
    .max(999, "CVC/CVV deve ser um número de 3 dígitos."),
  cpf: yup
    .string()
    .required("CPF é um campo obrigatório.")
    .transform((value) => value.replace(/[^\d]/g, ""))
    .matches(/^\d{11}$/, "O CPF deve ser um número válido de 11 dígitos."),

  name: yup
    .string()
    .required("Nome é um campo obrigatório.")
    .min(3, "O nome deve ter pelo menos 3 caracteres."),

  phone: yup
    .string()
    .required("Telefone é um campo obrigatório.")
    .transform((value) => value.replace(/[^\d]/g, ""))
    .matches(/^\d{11}$/, "O telefone deve ser um número válido de 11 dígitos."),

  card_number: yup
    .string()
    .required("Número do cartão é um campo obrigatório.")
    .transform((value) => value.replace(/\s+/g, ""))
    .matches(
      /^\d{16}$/,
      "O Número do cartão deve ser um número válido de 16 dígitos."
    ),

  option_payment: yup
    .string()
    .required("Opção de pagamento é um campo obrigatório.")
    .min(1, "A opção de pagamento não pode estar vazia."),

  co2: yup
    .number()
    .required("A quantidade é obrigatória")
    .positive("A quantidade deve ser maior que 0")
    .min(1, "A quantidade deve ser maior que 0")
    .typeError("A quantidade deve ser um número válido"),

  cred: yup
    .string()
    .required("Opção de parcelamento é um campo obrigatório.")
    .min(1, "A opção de parcelamento não pode estar vazia."),

  expiration_month: yup
    .number()
    .required("Mês é um campo obrigatório.")
    .typeError("Mês deve ser um número.")
    .min(1, "Mês deve ser no mínimo 1.")
    .max(12, "Mês não pode exceder 12."),

  expiration_year: yup
    .number()
    .required("Ano é um campo obrigatório.")
    .typeError("Ano deve ser um número.")
    .min(0, "Ano deve ser no mínimo 0.")
    .max(50, "Ano não pode exceder 50."),
});
