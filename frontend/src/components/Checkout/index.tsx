"use client"

import { CheckoutForm } from "@/components/Form"
import { LoadingOverlay } from "@/components/Loading"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getCreditPrice } from "@/server/getCreditPrice"

export default function CheckoutContent() {

  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const [co2Value, setCo2Value] = useState<number | null>(null);
  const [credValue, setCredValue] = useState<number | null>(null);
  const [creditData, setCreditData] = useState<number>();
  const [error, setError] = useState<string | null>(null);

  const cred = searchParams.get('cred');
  const co2 = searchParams.get('co2');

  const totalCredit = co2Value && creditData ? co2Value * creditData : 0;

  useEffect(() => {
    const fetchCreditData = async () => {
      if (!cred) return;

      try {
        setIsLoading(true);
        const response = await getCreditPrice(cred);
        
        if (!response?.amout) {
          throw new Error("Dados do crédito inválidos");
        }

        setCreditData(response.amout);
        setCo2Value(co2 ? Number(co2) : null);
        setCredValue(cred ? Number(cred) : null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreditData();
  }, [cred, co2]); 

  return (
    <>
      {isLoading && <LoadingOverlay />}

      <div className="h-screen flex flex-col md:grid md:grid-cols-2">
        <div className="p-5 md:p-20 md:border-r-1">
          <header className="flex items-center mb-5">
            <Image src="/Group.svg" alt="Logo" height={50} width={50} />
            <h1 className="text-3xl ml-3 text-[#00A19DF2] font-bold">
              Checkout Carbon
            </h1>
          </header>

          <CheckoutForm co2={co2Value} cred={credValue} totalPrice={totalCredit} onStartLoading={() => setIsLoading(true)} />
        </div>

        <div
          className={`
            fixed bottom-0 left-0 right-0 z-50 
            md:static md:flex md:flex-col md:justify-center md:items-center md:p-5
          `}
        >

          <Image
            className="hidden md:block mb-4"
            src="/Cart.svg"
            alt="Carrinho"
            height={214}
            width={380}
          />

          <Card className="w-full md:max-w-md rounded-t-lg md:rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 p-6">
            <h1 className="text-2xl font-bold text-[#00A19D] text-center">
              Resumo de Compra
            </h1>

            <section className="flex items-center justify-center w-full gap-4">
              <Image src="/CardIcon.svg" alt="Ícone" height={50} width={50} />
              <div className="flex flex-col">
                <p className="text-base">Compensação de emissões</p>
                <p className="text-2xl font-bold">R$: {totalCredit.toFixed(2)}</p>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </>
  )
}
