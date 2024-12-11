"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input, Text, Button, Select } from "@/app/components/elements";
import { FormData, ValidFieldNames } from "@/app/utils/types";
import { paymentOptions } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

export const Form = () => {
  const [loading, setLoading] = useState(false);

  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const isAnyFieldFilled = Object.values(watch()).some(
    (value) => value !== undefined && value !== null && value !== ""
  );

  const onSubmit = async (data: FormData) => {
    setLoading((prev) => !prev);
    const timeoutId = setTimeout(() => {
      setLoading((prev) => !prev);

      const fieldErrorMapping: Record<string, ValidFieldNames> = {
        name: "name",
        cvv: "cvv",
        cpf: "cpf",
        phone: "phone",
        email: "email",
        numberOfCard: "numberOfCard",
        optionOfPayment: "optionOfPayment",
        monthOfExperience: "monthOfExperience",
        yearsOfExperience: "yearsOfExperience",
      };

      console.log("fieldErrorMapping ::", fieldErrorMapping);
      console.log("SUCCESS ::", data);
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[572px] flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <Input
          type="text"
          name="name"
          label="Nome"
          register={register}
          error={errors.name}
          placeholder="Type here..."
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <Input
            type="string"
            name="phone"
            maxLength={15}
            label="Telefone"
            register={register}
            error={errors.phone}
            mask={"(##) #####-####"}
            placeholder="Type here..."
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <Input
            name="cpf"
            label="CPF"
            type="string"
            maxLength={14}
            error={errors.cpf}
            register={register}
            mask={"###.###.###-##"}
            placeholder="Type here..."
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Input
          type="email"
          name="email"
          label="E-mail"
          maxLength={255}
          register={register}
          error={errors.email}
          placeholder="Type here..."
        />
      </div>

      <div className="flex flex-col">
        <Input
          type="string"
          maxLength={18}
          name="numberOfCard"
          register={register}
          label="Numero de Cartão"
          placeholder="Type here..."
          error={errors.numberOfCard}
          mask={"#### #### #### ####"}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1 min-w-[120px]">
          <Input
            type="number"
            maxLength={2}
            valueAsNumber
            placeholder="MM"
            register={register}
            name="monthOfExperience"
            className="input-secondary"
            error={errors.monthOfExperience}
          />
        </div>
        <div className="flex-1 min-w-[120px]">
          <Input
            type="number"
            maxLength={2}
            valueAsNumber
            placeholder="AA"
            register={register}
            name="yearsOfExperience"
            className="input-secondary"
            error={errors.yearsOfExperience}
          />
        </div>
        <div className="flex-1 min-w-[120px]">
          <Input
            name="cvv"
            valueAsNumber
            type="number"
            maxLength={3}
            label="CVC/CVV"
            placeholder="Type here..."
            register={register}
            error={errors.cvv}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Select
          register={register}
          name="optionOfPayment"
          options={paymentOptions}
          defaultOption="Selecionar"
          error={errors.optionOfPayment}
          label="Opções de Parcelamento"
        />
      </div>

      <div className="flex justify-center gap-10">
        <Button
          type="button"
          loading={loading}
          onClick={() => reset()}
          disabled={loading || !isAnyFieldFilled}
          className={`bg-transparent btn-voltar min-w-[19.7rem] min-h-[36px] border-border hover:bg-button hover:border-button group`}
        >
          <Text className="text-current group-hover:text-background">
            Voltar
          </Text>
        </Button>
        <Button
          type="submit"
          loading={loading}
          disabled={loading || !isValid}
          className={`btn min-w-[19.7rem] min-h-[36px] text-background border-none`}
        >
          <Text className="text-current group-hover:text-background">
            Prosseguir
          </Text>
        </Button>
      </div>
    </form>
  );
};
