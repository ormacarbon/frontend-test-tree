"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IMaskInput } from "react-imask"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import Link from "next/link"
import { InputWithMask, InputWithoutMask } from "./formInput"
import { CheckoutFormProps, IPaymentRequest } from "@/types/checkout"
import { processPayment } from "@/server/processPayment"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  telefone: z.string().min(14, "Telefone inválido"),
  cpf: z.string().length(14, "CPF inválido"),
  email: z.string().email("E-mail inválido"),
  numeroCartao: z.string().min(19, "Número de cartão inválido"),
  validade: z.string().length(5, "Formato deve ser MM/AA"),
  cvc: z.string().length(3, "CVC inválido"),
  parcelamento: z.string().min(1, "Selecione uma opção"),
})

type FormData = z.infer<typeof formSchema>

const MaskedInput = React.forwardRef<HTMLInputElement, any>(
  ({ mask, ...props }, ref) => (
    <IMaskInput mask={mask} inputRef={ref} {...props} />
  )
)
MaskedInput.displayName = "MaskedInput"

const installmentOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function CheckoutForm({ co2, cred, totalPrice, onStartLoading }: CheckoutFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      nome: "",
      telefone: "",
      cpf: "",
      email: "",
      numeroCartao: "",
      validade: "",
      cvc: "",
      parcelamento: "",
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const transformToPaymentData = (formData: FormData): IPaymentRequest => {
    const [expiryMonth, expiryYear] = formData.validade.split('/')
    
    return {
      co2: Number(co2),
      cred: Number(cred),
      card_number: formData.numeroCartao.replace(/\D/g, ""),
      expiration_month: Number(expiryMonth),
      expiration_year: Number(`20${expiryYear}`),
      security_code: formData.cvc,
      cardholder: {
        name: formData.nome,
        identification: {
          type: "CPF",
          number: formData.cpf.replace(/\D/g, "")
        }
      }
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)
    onStartLoading()

    try {
      const cleanedData = {
        ...data,
        telefone: data.telefone.replace(/\D/g, ""),
        cpf: data.cpf.replace(/\D/g, ""),
        numeroCartao: data.numeroCartao.replace(/\D/g, ""),
        validade: data.validade.replace(/\D/g, ""),
      }

      const paymentData = transformToPaymentData(cleanedData)
      const result = await processPayment(paymentData)

      if ( result.ok) {
        const responseData = await result.json()
        if (responseData.status === 'success') {
          window.location.href = "/success"
        } else {
          setErrorMessage(responseData.message || "Erro ao processar pagamento")
        }
      } else {
        const errorData = await result.json().catch(() => ({}))
        setErrorMessage(errorData.message || "Erro na requisição")
      }
    } catch (error) {
      console.error("Erro no processamento:", error)
      setErrorMessage("Ocorreu um erro inesperado. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 bg-white rounded-xl pb-40 md:pb-5"
      >
        <InputWithoutMask
          type={"text"}
          control={form.control}
          name={"nome"}
          labelName={"Nome"}
          placeholder={"Augusto de C R dos Anjos"}
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <InputWithMask
            control={form.control}
            name={"telefone"}
            labelName={"Telefone"}
            mask={"(00) 00000-0000"}
            placeholder={"(11) 91234-5678"}
          />

          <InputWithMask
            control={form.control}
            name={"cpf"}
            labelName={"CPF"}
            mask={"000.000.000-00"}
            placeholder={"123.456.789-00"}
          />
        </div>

        <InputWithoutMask
          type={"email"}
          control={form.control}
          name={"email"}
          labelName={"E-mail"}
          placeholder={"AugustoCRA@gmail.com"}
        />

        <InputWithMask
          control={form.control}
          name={"numeroCartao"}
          labelName={"Número do Cartão"}
          mask={"0000 0000 0000 0000"}
          placeholder={"1234 5678 9012 3456"}
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <InputWithMask
            control={form.control}
            name={"validade"}
            labelName={"Validade"}
            mask={"00/00"}
            placeholder={"MM/AA"}
          />

          <InputWithMask
            control={form.control}
            name={"cvc"}
            labelName={"CVC"}
            mask={"000"}
            placeholder={"578"}
          />
        </div>

        <FormField
          control={form.control}
          name="parcelamento"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00A19D] font-bold text-base">Opções de Parcelamento</FormLabel>
              <FormControl>
                <select {...field}
                  className="w-full h-10 px-3 border rounded-md  bg-[#F4F4F499]"
                >
                  <option value="">Selecionar</option>
                  {installmentOptions.map((num) => (
                    <option key={num} value={`${num}x`}>
                      {num}x de R$ {(totalPrice / num).toFixed(2)}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-2 md:grid-cols-2">
          <Button
            type="submit"
            disabled={!form.formState.isValid || isSubmitting}
            className={`transition-colors ${
              form.formState.isValid
                ? "bg-[#00A19D] hover:bg-[#008d89] text-white"
                : "bg-gray-400 cursor-not-allowed text-white"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              "Prosseguir"
            )}
          </Button>
          <Button className="md:order-first" type="button" variant="outline">
            <Link href="/">Voltar</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}