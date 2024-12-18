"use client";

import { useRouter } from "next/navigation";
import { Loading } from "./loading";
import { useForm } from "react-hook-form";
import {
  CheckoutSchema,
  CheckoutSchemaType,
} from "../_schemas/checkout-schema";
import { totalOfInstallments } from "../_utils/generate-installment-options";
import { processPayment } from "../_data/process-payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
interface CheckoutForm {
  co2: number;
  cred: number;
}

export const CheckoutForm = ({ co2, cred }: CheckoutForm) => {
  const router = useRouter();

  const form = useForm<CheckoutSchemaType>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      cardholder: {
        identification: {
          type: "CPF",
          number: "",
        },
        name: "",
        phone: "",
      },
      card_number: "",
      expiration_month: "",
      expiration_year: "",
      security_code: "",
      email: "",
      paymentInstallments: "",
    },

    mode: "onChange",
    criteriaMode: "all",
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof CheckoutSchema>) {
    const paymentData = {
      co2: co2,
      cred: cred,
      card_number: values.card_number,
      expiration_month: Number(values.expiration_month),
      expiration_year: Number(values.expiration_year),
      security_code: values.security_code,
      cardholder: {
        name: values.cardholder.name,
        identification: {
          type: values.cardholder.identification.type,
          number: values.cardholder.identification.number,
        },
      },
    };

    try {
      await processPayment(paymentData);
      router.push("/checkout-success");
    } catch (error) {
      console.log(error);
      router.push("/checkout-error");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-12"
      >
        {isSubmitting && <Loading />}

        <div className="flex w-full flex-col gap-3">
          <FormField
            control={form.control}
            name="cardholder.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row justify-between gap-4">
            <FormField
              control={form.control}
              name="cardholder.phone"
              render={({ field }) => (
                <FormItem className="w-[302px]">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      {...field}
                      className="max-w-[302px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardholder.identification.number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="CPF" type="number" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="card_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Cartão</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Número de Cartão"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row justify-between gap-4">
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="expiration_month"
                render={({ field }) => (
                  <FormItem className="w-[85px]">
                    <FormLabel className="whitespace-nowrap">
                      Data de Validade
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="MM" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <span className="absolute ml-[87px] mt-[33px] text-3xl text-primary">
                /
              </span>

              <FormField
                control={form.control}
                name="expiration_year"
                render={({ field }) => (
                  <FormItem className="w-[85px] lg:mr-[150px]">
                    <div className="text-white">.</div>
                    <FormControl>
                      <Input placeholder="AA" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="security_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVC/CVV</FormLabel>
                  <FormControl className="col-span-2 md:col-span-1">
                    <Input placeholder="123" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="paymentInstallments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opções de Parcelamento</FormLabel>

                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={field.value ? "text-black" : "text-[#B0B0B0]"}
                    >
                      <SelectValue placeholder="Selecionar..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {totalOfInstallments(cred, 12).map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col-reverse items-center gap-3 font-bold md:justify-end lg:flex-row lg:gap-9">
          <Button variant={"outline"} type="button">
            Voltar
          </Button>
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="disabled:bg-gray-700"
          >
            Prosseguir
          </Button>
        </div>
      </form>
    </Form>
  );
};
