"use client";
import Image from "next/image";
import { Header } from "../_components/header";
import { CheckoutForm } from "../_components/checkout-form";
import { icon } from "../_constants/credit-icons";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCreditPrice } from "../_data/fetch-credit-price";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [amout, setAmout] = useState<number | null>(null);
  const [co2, setCo2] = useState<number>(0);
  const [cred, setCred] = useState<number>(0);
  useEffect(() => {
    const co2Param = Number(searchParams.get("co2")) || 0;
    const credParam = Number(searchParams.get("cred")) || 0;

    if (credParam) {
      const fetchAndCalculate = async () => {
        try {
          const result = await fetchCreditPrice(credParam);
          setAmout(result * co2Param);
          setCo2(co2Param);
          setCred(result * co2Param);
        } catch (error) {
          console.error("Erro ao calcular o valor:", error);
        }
      };

      fetchAndCalculate();
    }
  }, [searchParams]);

  return (
    <main className="flex flex-col lg:flex-row">
      <section className="flex-2 mt-20 flex w-full justify-center px-8 pb-48 pt-3">
        <div className="flex w-full max-w-[572px] flex-col items-center gap-6 py-12">
          <Header />
          <CheckoutForm co2={co2} cred={cred} />
          <div className="flex gap-5 lg:hidden">
            <Image
              src="/dss-icon.svg"
              width={94}
              height={36}
              className="auto"
              alt="Logo DSS"
            />
            <p className="font-roboto-300 text-xs">
              É garantida a confidencialidade, disponibilidade e integridade de
              todos os processos seguindo as melhores práticas do mercado para
              que você possa utilizar todos os produtos com segurança.
            </p>
          </div>
          <div className="flex w-full flex-1 justify-center gap-4 lg:hidden">
            {icon.map((i) => (
              <Image
                src={i.path}
                key={i.path}
                width={i.with}
                height={i.height}
                alt={i.alt}
              />
            ))}
            <p className="font-roboto-300">e mais...</p>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 z-20 flex w-full flex-1 flex-col justify-center gap-16 bg-white lg:relative lg:mb-8 lg:min-w-[640px] lg:items-center lg:border-l-2 lg:border-l-[#F1F0F0]">
        <div className="relative hidden h-auto min-h-[214px] w-full max-w-[351px] lg:flex">
          <Image src={"/credit-card.svg"} alt="credit card front image" fill />
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-[0_-4px_10px_rgba(0,0,0,0.10)] lg:shadow-xl">
          <h3 className="hidden text-4xl font-bold text-primary lg:flex">
            Resumo de compra
          </h3>
          <div className="z-20 flex w-full flex-col items-center justify-center gap-3 rounded-t-[17px] p-9 lg:relative lg:w-[450px] lg:rounded-[17px]">
            <h3 className="text-2xl font-bold text-primary lg:hidden">
              Resumo de compra
            </h3>
            <div className="flex flex-row items-center gap-[54px]">
              <div className="relative flex aspect-square h-auto min-h-[53px] w-full max-w-[53px] lg:max-h-[82px] lg:min-h-[82px] lg:max-w-[82px]">
                <Image
                  src={"/logo-purchase-summary.svg"}
                  alt="summary image"
                  fill
                />
              </div>
              <div className="max-w-[115px] lg:max-w-[175px]">
                <p className="text-base font-extralight text-black lg:text-2xl">
                  Compensação de emissões
                </p>
                <span className="text-2xl font-bold">R$: {amout}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
