"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/ui/form";
import { Input } from "@/components/ui/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { cn } from "@/lib/utils";
import { roboto700 } from "@/app/ui/fonts";

const formSchema = z.object({
  name_Nome: z.string().nonempty("Nome é obrigatório"),
  name_telefone: z.string().nonempty("Telefone é obrigatório"),
  name_CPF: z.string().regex(/^\d{11}$/, "CPF inválido"),
  name_email: z.string().email("E-mail inválido"),
  name_numerocartao: z.string().regex(/^\d{16}$/, "Número do cartão inválido"),
  name_mesvalidade: z.string().regex(/^(0[1-9]|1[0-2])$/, "Mês inválido"),
  name_anovalidade: z
    .string()
    .regex(/^\d{4}$/, "Ano inválido")
    .refine((val) => parseInt(val) > 2023, { message: "Ano inválido" }),
  name_CVCCVV: z.string().regex(/^\d{3}$/, "CVC/CVV inválido"),
  name_opparcelamento: z.string().nonempty("Opção de parcelamento é obrigatória"),
});

interface MyFormProps {
  total?: number | null;
  co2: number;
  cred: number;
}

export default function MyForm({ total = 0, co2, cred }: MyFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const parcelas = Array.from({ length: 12 }, (_, i) => {
    const value = (i + 1).toString();
    const amount = ((total ?? 0) / (i + 1)).toFixed(2);
    return { label: `${value}x R$ ${amount}`, value };
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_Nome: '',
      name_telefone: '',
      name_CPF: '',
      name_email: '',
      name_numerocartao: '',
      name_mesvalidade: '',
      name_anovalidade: '',
      name_CVCCVV: '',
      name_opparcelamento: '',
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const paymentData = {
      co2,
      card_number: values.name_numerocartao,
      expiration_month: Number(values.name_mesvalidade),
      expiration_year: Number(values.name_anovalidade),
      security_code: values.name_CVCCVV,
      cardholder: {
        name: values.name_Nome,
        identification: {
          type: "CPF",
          number: values.name_CPF,
        },
      },
      id: "81",
      cred,
    };

    try {
      setIsLoading(true);

      const response = await fetch(
        "https://6751f822d1983b9597b4fa68.mockapi.io/api/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ao enviar pagamento: ${response.statusText}`);
      }

      router.push("/sucess"); // Redirecionar para a página de sucesso
    } catch (error) {
      console.error(error);
      router.push("/failed"); // Redirecionar para a página de falha
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <Image src="/Loader.svg" width={100} height={100} alt="SucessImage" />
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 h-full max-w-2xl py-10 mb-40"
        >
          <header className="flex flex-row items-center gap-3 pt-24">
            <Image src="/CarbonLogo.svg" width={30} height={45} alt="Logo" />
            <h1 className={`text-2xl md:text-3xl lg:text-4xl text-primaria ${roboto700.className}`}>
              Checkout Carbon
            </h1>
          </header>
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="name_Nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
              control={form.control}
              name="name_telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 0 0000-0000" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name_CPF"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="000.000.000-00" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="name_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="exemplo@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name_numerocartao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número do Cartão</FormLabel>
                <FormControl>
                  <Input placeholder="1234 5678 9012 3456" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="name_mesvalidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Validade</FormLabel>
                  <FormControl>
                    <Input placeholder="MM" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name_anovalidade"
              render={({ field }) => (
                <FormItem>
                  <div className="text-white">.</div>
                  <FormControl>
                    <Input placeholder="AAAA" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name_CVCCVV"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVC/CVV</FormLabel>
                    <FormControl className="col-span-2 md:col-span-1">
                    <Input className="" placeholder="123" type="number" {...field} />
                    </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="name_opparcelamento"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Opções de Parcelamento</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between rounded-full border-none bg-fundo",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? parcelas.find(
                              (parcelas) => parcelas.value === field.value
                            )?.label
                          : "Selecionar"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 items-start">
                    <Command>
                      <CommandInput placeholder="Procurar forma de pagamento..." />
                      <CommandList>
                        <CommandEmpty>Opção de pagamento não encontrada.</CommandEmpty>
                        <CommandGroup>
                          {parcelas.map((parcelas) => (
                            <CommandItem
                              value={parcelas.label}
                              key={parcelas.value}
                              onSelect={() => {
                                form.setValue("name_opparcelamento", parcelas.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  parcelas.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {parcelas.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row justify-end gap-4">
            <Button
              className="text-base text-botaoProsseguir bg-white border-2 m-4 w-72"
              type="button"
              onClick={() => router.back()}
            >
              Voltar
            </Button>
            <Button
              type="submit"
              className="text-base text-white bg-botaoProsseguir m-4 w-72"
              disabled={isLoading}
            >
              {isLoading ? "Processando..." : "Prosseguir"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
