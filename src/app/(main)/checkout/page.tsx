"use client";
import { BasicInput } from "@/components/BasicInput";
import { Header } from "@/components/Header";
import { Controller, useForm } from "react-hook-form";
import {
  CheckoutSchema,
  CheckoutSchemaType,
} from "@/@types/Schema/checkoutSchema";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import { BasicSelect } from "@/components/BasicSelect";
import { selectInstallments } from "@/utils/selectInstalment";
import { MaskedInput } from "@/components/MaskedInput";
export default function Checkout() {
  const searchParams = useSearchParams();

  const co2 = Number(searchParams.get("co2")) || 1;
  const cred = Number(searchParams.get("cred")) || 2;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    setError,
    clearErrors,
    watch,
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

  const onSubmit = (formData: CheckoutSchemaType) => {
    console.log("formData", formData);
  };

  return (
    <div className=" py-12 flex flex-col items-center max-w-[572px] w-full gap-6">
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-12"
      >
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
          <BasicInput type="email" label="E-mail" placeholder="E-mail" />
          <MaskedInput
            mask="____ ____ ____ ____"
            {...register("card_number")}
            label="Número de Cartão"
            replacement={{ _: /\d/ }}
            placeholder="9999 9999 9999 9999"
          />

          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
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
                selectContent={selectInstallments(300, 12)}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center font-bold lg:justify-end gap-[36px]">
          <Button>Voltar</Button>
          <Button
            type="submit"
            disabled={!isValid}
            className="enabled:border-primary-500 text-white font-bold enabled:bg-primary-500 disabled:bg-gray-700"
          >
            Prosseguir
          </Button>
        </div>
      </form>
    </div>
  );
}
