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

  console.log(form.watch());

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
        className="space-y-6 p-4 bg-white rounded-xl  pb-40"
      >

        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00A19D] font-bold text-base">Nome</FormLabel>
              <FormControl>
                <Input placeholder="Augusto de C R dos Anjos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00A19D] font-bold text-base">Telefone</FormLabel>
                <FormControl>
                  <MaskedInput
                    {...field}
                    mask="(00) 00000-0000"
                    placeholder="(11) 91234-5678"
                    className="w-full h-10 px-3 border rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00A19D] font-bold text-base">CPF</FormLabel>
                <FormControl>
                  <MaskedInput
                    {...field}
                    mask="000.000.000-00"
                    placeholder="123.456.789-00"
                    className="w-full h-10 px-3 border rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00A19D] font-bold text-base">E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="AugustoCRA@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numeroCartao"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00A19D] font-bold text-base">Número do Cartão</FormLabel>
              <FormControl>
                <MaskedInput
                  {...field}
                  mask="0000 0000 0000 0000"
                  placeholder="1234 5678 9012 3456"
                  className="w-full h-10 px-3 border rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="validade"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00A19D] font-bold text-base">Validade</FormLabel>
                <FormControl>
                  <MaskedInput
                    {...field}
                    mask="00/00"
                    placeholder="MM/AA"
                    className="w-full h-10 px-3 border rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00A19D] font-bold text-base">CVC</FormLabel>
                <FormControl>
                  <MaskedInput
                    {...field}
                    mask="000"
                    placeholder="123"
                    className="w-full h-10 px-3 border rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
                  className="w-full h-10 px-3 border rounded-md text-gray-800"
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

        <div className="grid gap-2">
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
          <Button type="button" variant="outline">
             <Link href="/">Voltar</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}
