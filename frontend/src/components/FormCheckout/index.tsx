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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react"
import Link from "next/link"
import { InputWithMask, InputWithoutMask } from "./formFild"


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

export function CheckoutForm() {
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

  function onSubmit(data: FormData) {
    const cleaned = {
      ...data,
      telefone: data.telefone.replace(/\D/g, ""),
      cpf: data.cpf.replace(/\D/g, ""),
      numeroCartao: data.numeroCartao.replace(/\D/g, ""),
      validade: data.validade.replace(/\D/g, ""),
    }
    console.log("Dados enviados:", cleaned)
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 bg-white rounded-xl pb-40 md: pb-0"
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
                <select
                  {...field}
                  className="w-full h-10 px-3 border rounded-md  bg-[#F4F4F499]"
                >
                  <option value="">Selecionar</option>
                  <option value="1x">1x R$ 300</option>
                  <option value="2x">2x R$ 150</option>
                  <option value="3x">3x R$ 100</option>
                  <option value="4x">4x R$ 75</option>
                  <option value="5x">5x R$ 60</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-2 md:grid-cols-2">
          <Button
            type="submit"
            disabled={!form.formState.isValid}
            className={`transition-colors ${form.formState.isValid
              ? "bg-[#00A19D] hover:bg-[#008d89] text-white"
              : "bg-gray-400 cursor-not-allowed text-white"
              }`}
          >
            <Link href="/success">Prosseguir</Link>
          </Button>

          <Button className="md:order-first" type="button" variant="outline">
            <Link href="/">Voltar</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}