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
export default function Checkout() {
  const searchParams = useSearchParams();

  // Pegando os valores dos parâmetros
  const co2 = Number(searchParams.get("co2")) | 1;
  const cred = Number(searchParams.get("cred")) | 2;
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
      card_number: "",
      cardholder: { identification: { number: "", type: "CPF" }, name: "" },
      co2: co2,
      cred: cred,
    },
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(CheckoutSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log("form data:", watch(), isValid);
  console.log(errors);

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
            <BasicInput
              label="Telefone"
              className="max-w-[155px] lg:max-w-[300px]"
              placeholder="(99) 9 9999-9999"
            />
            <BasicInput
              {...register("cardholder.identification.number")}
              label="CPF"
              className="max-w-[140px] lg:max-w-[230px]"
              placeholder="999.999.999-99"
            />
          </div>
          <BasicInput label="E-mail" placeholder="E-mail" />
          <BasicInput
            {...register("card_number")}
            label="Número de Cartão"
            placeholder="9999 9999 9999 9999"
          />

          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label className="text-primary-500 font-bold">
                Data de Validade
              </label>
              <div className="flex flex-row items-center gap-2">
                <BasicInput
                  {...register("expiration_month")}
                  className="lgmax-w-[85px] max-w-[55px]"
                  placeholder="MM"
                />
                <span className="text-primary-500 font-bold text-4xl">/</span>
                <BasicInput
                  {...register("expiration_year")}
                  className="lgmax-w-[85px] max-w-[55px]"
                  placeholder="AA"
                />
              </div>
            </div>
            <BasicInput
              {...register("security_code")}
              label="CVC/CVV"
              className="max-w-[140px] lg:max-w-[230px]"
              placeholder="999"
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

        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-end gap-[36px]">
          <Button>Voltar</Button>
          <Button
            type="submit"
            disabled={!isValid}
            className="enabled:border-primary-500 text-white enabled:bg-primary-500 bg-gray-700"
          >
            Prosseguir
          </Button>
        </div>
      </form>
    </div>
  );
}
