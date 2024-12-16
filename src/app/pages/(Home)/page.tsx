"use client";

import Image from "next/image";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

import { generateDataMessage, initialValues, messagesConfig } from "./utils";
import { icons } from "@/app/assets/icons";
import { processPayment } from "./services";
import { formatter } from "@/app/utils/utils";
import { emptyDataMessage } from "@/app/utils/emptys";
import { useAxiosRequest } from "@/app/hooks/axiosAdapter";
import { Header, Message } from "@/app/components/modules";
import { Load, Text, Title } from "@/app/components/elements";
import { schema } from "@/app/components/organism/Form/schema";
import { CreditCard, Form, Layout } from "@/app/components/organism";
import { BuyCarbonData, dataMessage, messageConfig } from "@/app/utils/types";

export default function Home() {
  const [notFlip, setNotFlip] = useState(true);
  const [loading, setLoading] = useState(false);
  const { response, request, error } = useAxiosRequest<BuyCarbonData>();
  const [dataMessage, setDataMessage] = useState<dataMessage>(emptyDataMessage);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const body: BuyCarbonData = {
        co2: Number(values.co2),
        cred: Number(values.cred),
        card_number: values.card_number,
        expiration_month: Number(values.expiration_month),
        expiration_year: Number(values.expiration_year),
        security_code: values.security_code,
        cardholder: {
          name: values.name,
          identification: {
            type: "CPF",
            number: values.cpf.replace(/[^\d]/g, ""),
          },
        },
      };

      await processPayment({
        request,
        data: body,
        setLoading,
      });
    },
    validationSchema: schema,
  });

  const { values, errors, touched, resetForm, handleSubmit, handleChange } =
    formik;

  const handleClick = () => {
    if (dataMessage.status === "success") {
      window.print();
    }
    resetForm();
    setDataMessage({ ...emptyDataMessage, show: false });
  };

  useEffect(() => {
    if (error.status) {
      const errorConfig =
        messagesConfig[error.status as keyof typeof messagesConfig];

      const updatedErrorConfig = {
        ...errorConfig,
        message: [error.message],
      };
      setDataMessage(generateDataMessage(updatedErrorConfig as messageConfig));
    } else if (response?.statusCode) {
      const responseConfig =
        messagesConfig[response.statusCode as keyof typeof messagesConfig];
      setDataMessage(generateDataMessage(responseConfig as messageConfig));
    }
  }, [response, error]);

  return (
    <Layout>
      {dataMessage.show ? (
        <Message {...dataMessage} handleClick={handleClick} />
      ) : (
        <div className="w-full min-h-screen h-auto grid grid-cols-1 pt-[2rem] gap-4 m-auto place-items-center place-content-start divide-x-0 divide-line lg:pt-0 lg:grid-cols-2 lg:divide-x-2 lg:place-content-center">
          <div className="w-full col-start-1 col-end-1 place-items-center lg:min-h-svh place-content-center">
            <Header className="mb-10" />

            <Form
              errors={errors}
              values={values}
              touched={touched}
              loading={loading}
              resetForm={resetForm}
              setNotFlip={setNotFlip}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </div>

          <div className="h-auto w-full col-start-1 col-end-1 place-content-center  summary_buy_mobile sticky custom_absolute bottom-0 lg:min-h-svh lg:col-start-2 lg:col-end-3 lg:relative lg:bg-transparent lg:shadow-none">
            <div className="flex flex-col items-center pt-10 max-w-[572px] m-auto h-auto lg:min-h-[550px] gap-20 lg:pt-24">
              <CreditCard
                className="hidden lg:block"
                notFlip={notFlip}
                name={values?.name}
                number={values?.card_number}
                year={values?.expiration_year}
                month={values?.expiration_month}
                security_code={values?.security_code}
              />

              <div className="flex flex-col items-center lg:gap-10">
                <Title>Resumo de compra</Title>
                <div className="flex items-center justify-center gap-8 w-full h-[15.7rem] lg:shadow-md lg:w-[45rem]">
                  <Image
                    className="size-[8.2rem]"
                    src={icons.summaryBuyLogo}
                    alt="Image Summary Buy Logo"
                  />
                  <div className="flex flex-col items-start gap-4">
                    <Text className="text-span font-light text-[2.4rem] max-w-[20rem]">
                      Compensação de emissoes
                    </Text>
                    <Text className="text-span font-medium text-[2.4rem]">
                      {formatter({
                        type: "pt-BR",
                        currency: "BRL",
                        style: "currency",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(Number(values.cred) * Number(values.co2) || 0)}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Load />}
    </Layout>
  );
}
