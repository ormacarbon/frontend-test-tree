"use client";

import { useEffect, useState } from "react";

import { FormProps } from "./@types";
import { getAllCreditPrice } from "./services";
import { handleFormateCreditPrice } from "./utils";
import { emptyDatacredOptions } from "@/app/utils/emptys";
import { useAxiosRequest } from "@/app/hooks/axiosAdapter";
import { creditPriceData, optionDefault } from "@/app/utils/types";
import { Input, Text, Button, Select } from "@/app/components/elements";
import { useInstallmentOptions } from "@/app/hooks/useInstallmentOptions";
import { maskCard, maskCpf, maskPhone } from "@/app/utils/utils";

export const Form = ({
  errors,
  values,
  loading,
  touched,
  resetForm,
  setNotFlip,
  handleChange,
  handleSubmit,
}: FormProps) => {
  const { response, request } = useAxiosRequest<creditPriceData[]>();
  const [credOptions, setCredOptions] =
    useState<optionDefault[]>(emptyDatacredOptions);

  const installmentOptions = useInstallmentOptions({
    price: values.cred,
    quantity: values.co2,
  });

  const fetchPageData = async () => {
    await getAllCreditPrice({
      request,
    });
  };

  useEffect(() => {
    fetchPageData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const options = handleFormateCreditPrice({ list: response?.body || [] });
    setCredOptions(options);
  }, [response]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[572px] h-full grid gap-4 grid_form px-[1.5rem] lg:px-0"
    >
      <div className="w-full col-span-2">
        <Input
          label="Nome"
          type={"text"}
          name={"name"}
          maxLength={40}
          value={values.name}
          onChange={handleChange}
          helperText={errors.name}
          placeholder={"Digite aqui..."}
          error={touched.name && Boolean(errors.name)}
        />
      </div>
      <div className="row-start-2 h-auto">
        <Input
          type={"text"}
          name={"phone"}
          maxLength={15}
          label="Telefone"
          onChange={handleChange}
          helperText={errors.phone}
          placeholder={"Digite aqui..."}
          value={maskPhone(values.phone)}
          error={touched.phone && Boolean(errors.phone)}
        />
      </div>
      <div className="row-start-2">
        <Input
          label="CPF"
          name={"cpf"}
          type={"text"}
          maxLength={14}
          onChange={handleChange}
          helperText={errors.cpf}
          value={maskCpf(values.cpf)}
          placeholder={"Digite aqui..."}
          error={touched.cpf && Boolean(errors.cpf)}
        />
      </div>

      <div className="col-span-2">
        <Input
          type={"email"}
          name={"email"}
          label="E-mail"
          value={values.email}
          onChange={handleChange}
          helperText={errors.email}
          placeholder={"Digite aqui..."}
          error={touched.email && Boolean(errors.email)}
        />
      </div>
      <div className="col-span-2 row-start-4">
        <Input
          type={"text"}
          maxLength={19}
          name={"card_number"}
          onChange={handleChange}
          label="Numero de Cartão"
          placeholder={"Digite aqui..."}
          helperText={errors.card_number}
          value={maskCard(values.card_number)}
          error={touched.card_number && Boolean(errors.card_number)}
        />
      </div>
      <div className="row-start-5">
        <div className="label relative">
          <Text>Data de Validade</Text>
        </div>
        <div className="flex items-start gap-3">
          <Input
            maxLength={2}
            type={"text"}
            placeholder={"MM"}
            onChange={handleChange}
            className="input-secondary"
            name={"expiration_month"}
            value={values.expiration_month}
            helperText={errors.expiration_month}
            error={touched.expiration_month && Boolean(errors.expiration_month)}
          />
          <div className="text-[2.7rem] font-medium">/</div>
          <Input
            type={"text"}
            maxLength={2}
            placeholder={"AA"}
            onChange={handleChange}
            name={"expiration_year"}
            className="input-secondary"
            value={values.expiration_year}
            helperText={errors.expiration_year}
            error={touched.expiration_year && Boolean(errors.expiration_year)}
          />
        </div>
      </div>
      <div className="row-start-5">
        <Input
          name={"security_code"}
          type={"text"}
          maxLength={3}
          label="CVC/CVV"
          value={values.security_code}
          placeholder={"000"}
          onChange={handleChange}
          helperText={errors.security_code}
          onBlur={() => setNotFlip(true)}
          onFocus={() => setNotFlip(false)}
          error={touched.security_code && Boolean(errors.security_code)}
        />
      </div>
      <div className="row-start-6">
        <Select
          name="cred"
          value={values.cred}
          options={credOptions}
          onChange={handleChange}
          helperText={errors.cred}
          defaultOption="Selecionar"
          label="Opções de Compra"
          error={touched.cred && Boolean(errors.cred)}
        />
      </div>
      <div className="row-start-6">
        <Input
          name={"co2"}
          type={"text"}
          maxLength={3}
          label="Quantidade"
          value={values.co2}
          onChange={handleChange}
          helperText={errors.co2}
          placeholder={"Digite aqui..."}
          error={touched.co2 && Boolean(errors.co2)}
        />
      </div>
       <div className="col-span-2 row-start-7">
        <Select
          name="option_payment"
          onChange={handleChange}
          defaultOption="Selecionar"
          options={installmentOptions}
          value={values.option_payment}
          label="Opções de Parcelamento"
          helperText={errors.option_payment}
          disabled={!values.cred && !values.co2}
          error={touched.option_payment && Boolean(errors.option_payment)}
        />
      </div>
      <div className="col-span-2 row-start-8 place-content-center place-items-end">
        <div className="flex justify-end flex-wrap items-center gap-x-10 gap-y-3 w-full">
          <Button
            type="button"
            loading={loading}
            disabled={loading}
            onClick={() => resetForm()}
            className={`bg-transparent w-full btn-voltar min-h-[36px] border-border hover:bg-button hover:border-button group sm:max-w-[19.7rem]`}
          >
            <Text className="text-current group-hover:text-background">
              Voltar
            </Text>
          </Button>
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            className={`btn bg-button w-full min-h-[36px] text-background border-none sm:max-w-[19.7rem] `}
          >
            <Text className="text-current group-hover:text-background">
              Prosseguir
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
};
