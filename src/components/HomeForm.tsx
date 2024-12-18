"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { MaskedInput } from "./MaskedInput";
import { HomeFormType, HomeFormSchema } from "@/@types/Schema/homeFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SwitchField } from "./SwitchField";
import { Loading } from "./Loading";

export const HomeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<HomeFormType>({
    defaultValues: { error: false },
    resolver: zodResolver(HomeFormSchema),
  });

  const router = useRouter();

  const onSubmit = (formData: HomeFormType) => {
    console.log("aqui");
    
    const searchParams = new URLSearchParams({
      co2: String(formData.co2 ||1),
      cred: String(formData.cred||2),
      error: String(formData.error),
    }).toString();

    router.push(`/checkout?${searchParams}`);
  };

  return (
    <div className="relative">
      {isSubmitting && <Loading />}
      <div className="absolute inset-0 z-10 flex lg:hidden justify-center items-center w-full h-auto translate-y-6">
        <Image
          src={"/logo.svg"}
          alt="credit card front image"
          width={160}
          height={620}
          
        />
      </div>
      <div className="flex flex-col p-8 justify-center gap-10 items-start max-w-[375px] lg:max-w-[420px] bg-white shadow-custom-shadow-down-far border-2 rounded border-gray-300 -z-20">
        <h3 className=" text-3xl xs:text-4xl flex font-bold text-primary-500">
          Bem-vindo ao Checkout Carbon
        </h3>
        <p className=" text-xl flex font-bold text-primary-500 ">
          Por favor digite o formulário que você deseja acessar
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 p-8 z-10"
        >
          <MaskedInput
            mask="__"
            label="Co2"
            replacement={{ _: /\d/ }}
            placeholder="1"
            register={register("co2")}
          />
          <MaskedInput
            mask="__"
            label="Cred"
            replacement={{ _: /\d/ }}
            placeholder="2"
            register={register("cred")}

          />
          <SwitchField
            name="error"
            control={control}
            label=""
            description="Deseja testar a casos de erro?"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-primary-500 rounded hover:bg-primary-600"
          >
            Prosseguir
          </button>
        </form>
      </div>
    </div>
  );
};
