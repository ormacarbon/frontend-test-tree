"use client"

import { CheckoutForm } from "@/components/FormCheckout"
import { LoadingOverlay } from "@/components/Loading"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function Checkout() {
  
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {isLoading && <LoadingOverlay />}

      <div className="h-screen flex flex-col md:grid md:grid-cols-2">
        <div className="p-5">
          <header className="flex items-center mb-5">
            <Image src="/Group.svg" alt="Logo" height={50} width={50} />
            <h1 className="text-3xl ml-3 text-[#00A19DF2] font-bold">
              Checkout Carbon
            </h1>
          </header>

          <CheckoutForm onStartLoading={() => setIsLoading(true)}/>
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
                <p className="text-2xl font-bold">R$: 300</p>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </>
  )
}
