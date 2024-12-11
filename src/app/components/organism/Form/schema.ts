import { z as zod } from "zod";

export const schema = zod.object({
  email: zod.string().email("Invalid email address."),

  cvv: zod
    .number({
      required_error: "CVV is a required field.",
      invalid_type_error: "CVV must be a number.",
    })
    .min(100, "CVV must be a 3-digit number.")
    .max(999, "CVV must be a 3-digit number."),

  cpf: zod
    .string({
      required_error: "CPF is a required field.",
    })
    .length(14, "CPF must be exactly 11 digits."),

  name: zod
    .string({
      required_error: "Name is a required field.",
    })
    .min(3, "Name must have at least 3 characters."),

  phone: zod
    .string({
      required_error: "Phone is a required field.",
    })
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Phone must be a valid 11 digit number."),

  numberOfCard: zod
    .string({
      required_error: "Card number is a required field.",
      invalid_type_error: "Card number must be a valid 16-digit number.",
    })
    .regex(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      "Card number must be in the format #### #### #### ####."
    ),

  optionOfPayment: zod
    .string({
      required_error: "Payment option is a required field.",
    })
    .min(1, "Payment option cannot be empty."),

  monthOfExperience: zod
    .number({
      required_error: "Months of experience is a required field.",
      invalid_type_error: "Months of experience must be a number.",
    })
    .min(1, "Months of experience must be at least 1.")
    .max(12, "Months of experience cannot exceed 12."),

  yearsOfExperience: zod
    .number({
      required_error: "Years of experience is a required field.",
      invalid_type_error: "Years of experience must be a number.",
    })
    .min(0, "Years of experience must be at least 0.")
    .max(50, "Years of experience cannot exceed 50."),
});
