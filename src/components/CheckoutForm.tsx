"use client";
import { Controller, useForm } from "react-hook-form";
import {
  CheckoutSchema,
  CheckoutSchemaType,
} from "@/@types/Schema/checkoutSchema";
import { Button } from "@/components/Button";
import { BasicInput } from "@/components/BasicInput";
import { BasicSelect } from "@/components/BasicSelect";
import { selectInstallments } from "@/utils/selectInstalment";
import { MaskedInput } from "@/components/MaskedInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { postPayment } from "@/app/service/api";
import { Loading } from "./Loading";
import { useRouter } from "next/navigation";
interface CheckoutForm {
  price: number;
}
export const CheckoutForm = ({ price }: CheckoutForm) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const co2 = Number(searchParams.get("co2")) || 1;
  const cred = Number(searchParams.get("cred")) || 2;
  const error = searchParams.get("error") === "true" || false;
  console.log("param error:", error);

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm<CheckoutSchemaType>({
    defaultValues: {
      cardholder: { identification: { type: "CPF" }, name: "" },
      co2: co2,
      cred: cred,
    },
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(CheckoutSchema),
  });

  async function onSubmit(formData: CheckoutSchemaType) {
    console.log("in form loading:", isSubmitting);
    const { paymentInstallments, email, ...data } = formData;
    console.log("data:", data);
    await postPayment(data)
      .then((response) => {
        console.log("response", response);
        if (error) {
          throw new Error("Erro ao processar transação.");
        }
        if (response.status >= 200 && response.status < 300) {
          router.push(
            `/checkout/${"success"}?message=${encodeURIComponent(
              "Transação realizada com sucesso."
            )}`
          );
        } else {
          router.push(
            `/checkout/${"error"}?message=${encodeURIComponent(
              response.data.message || "Erro ao processar transação."
            )}`
          );
        }
      })
      .catch((error) => {
        console.log(error);
        router.push(
          `/checkout/error?message=${encodeURIComponent(
            error instanceof Error ? error.message : "Erro desconhecido."
          )}`
        );
      });
  }

  console.log(isSubmitting);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-12"
    >
      {isSubmitting && <Loading />}

      <div className="flex flex-col w-full gap-3">
        <BasicInput
          {...register("cardholder.name")}
          label="Nome"
          placeholder="Nome"
        />
        <div className="flex flex-row justify-between">
          <MaskedInput
            mask="(__) _ ____.____"
            label="Telefone"
            className="max-w-[155px] lg:max-w-[300px]"
            placeholder="(99) 9 9999-9999"
            replacement={{ _: /\d/ }}
          />
          <MaskedInput
            mask="___.___.___-__"
            placeholder="000.000.000-00"
            {...register("cardholder.identification.number")}
            label="CPF"
            replacement={{ _: /\d/ }}
            className="max-w-[140px] lg:max-w-[230px]"
          />
        </div>
        <BasicInput
          {...register("email")}
          type="email"
          label="E-mail"
          placeholder="E-mail"
        />
        <MaskedInput
          mask="____ ____ ____ ____"
          {...register("card_number")}
          label="Número de Cartão"
          replacement={{ _: /\d/ }}
          placeholder="9999 9999 9999 9999"
        />

        <div className="flex flex-row justify-between items-center gap-2  ">
          <div className="flex flex-col items-start gap-[6px] ">
            <label className="text-primary-500 font-bold">
              Data de Validade
            </label>
            <div className="flex flex-row items-center gap-2">
              <MaskedInput
                mask="__"
                {...register("expiration_month")}
                className=" max-w-[55px] lg:max-w-[85px]"
                placeholder="MM"
                replacement={{ _: /\d/ }}
                maxLength={2}
                max={12}
              />
              <span className="text-primary-500 font-bold text-4xl">/</span>
              <MaskedInput
                mask="__"
                {...register("expiration_year")}
                className=" max-w-[55px] lg:max-w-[85px]"
                placeholder="AA"
                replacement={{ _: /\d/ }}
                maxLength={2}
              />
            </div>
          </div>
          <MaskedInput
            mask="___"
            {...register("security_code")}
            label="CVC/CVV"
            className="max-w-[140px] lg:max-w-[230px]"
            placeholder="999"
            replacement={{ _: /\d/ }}
            maxLength={3}
          />
        </div>
        <Controller
          name="paymentInstallments"
          control={control}
          render={({ field }) => (
            <BasicSelect
              label="Opções de Parcelamento"
              selectContent={selectInstallments(price, 12)}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center font-bold lg:justify-end gap-[36px]">
        <Button onClick={() => router.push("/")}>Voltar</Button>
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="enabled:border-primary-500 text-white font-bold enabled:bg-primary-500 disabled:bg-gray-700"
        >
          Prosseguir
        </Button>
      </div>
    </form>
  );
};
