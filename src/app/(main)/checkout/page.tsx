import { CheckoutForm } from "@/components/CheckoutForm";
import { Header } from "@/components/Header";

import Image from "next/image";
interface CheckoutProps {
  searchParams: { [key: string]: string | string[] };
}

async function fetchCreditPrice(id: number) {
  const response = await fetch(
    `https://6751f822d1983b9597b4fa68.mockapi.io/api/credit-price/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch credit price");
  }

  return response.json();
}

export default async function Checkout({ searchParams }: CheckoutProps) {
  const co2 = (await searchParams.co2) || 1;
  const cred = (await searchParams.cred) || 2;

  const creditPrice: {
    createdAt: Date;
    updatedAt: Date;
    amout: number;
    id: string;
  } = await fetchCreditPrice(Number(cred));
  console.log("creditPrice", creditPrice);

  const price = creditPrice.amout * Number(co2);

  return (
    <main className="flex flex-col lg:flex-row">
      <section className="flex-2 w-full pt-[0.75rem] mt-[4rem] px-[31px] flex justify-center pb-[12rem]">
        <div className=" py-12 flex flex-col items-center max-w-[572px] w-full gap-6">
          <Header />
          <CheckoutForm price={price} />
        </div>
      </section>
      <section className="flex-1 w-full bottom-0 fixed lg:relative lg:min-w-[40rem] flex flex-col justify-center lg:items-center gap-[70px] lg:border-l-2 lg:border-l-gray-400 bg-white z-20 ">
        <div className="relative hidden lg:flex min-h-[214px] max-w-[351px] w-full h-auto">
          <Image
            src={"/credit-card-front.svg"}
            alt="credit card front image"
            fill
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-primary-500 font-bold text-4xl font-condensed hidden lg:flex">
            Resumo de compra
          </h3>
          <div className=" p-9 w-full lg:w-[450px] lg:relative rounded-t-[17px] lg:rounded-[17px]  flex flex-col justify-center items-center gap-3 z-20 shadow-custom-shadow-up lg:shadow-custom-shadow-down">
            <h3 className="text-primary-500 font-bold text-2xl font-condensed lg:hidden">
              Resumo de compra
            </h3>
            <div className="flex flex-row gap-[54px] items-center">
              <div className=" relative flex min-h-[53px] lg:min-h-[82px] lg:max-h-[82px] aspect-square  max-w-[53px] lg:max-w-[82px] w-full h-auto">
                <Image src={"/icon-summary.svg"} alt="summary image" fill />
              </div>
              <div className="max-w-[115px] lg:max-w-[175px]">
                <p className="text-black font-extralight text-base lg:text-2xl font-condensed">
                  Compensação de emissões
                </p>
                <span className="capitalize font-condensed font-bold text-base lg:text-2xl">
                  R$: {price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
