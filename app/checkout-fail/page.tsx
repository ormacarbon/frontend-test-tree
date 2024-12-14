"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutFailPage() {
  return (
    <div className="container flex items-center justify-center mx-auto min-h-screen p-4 sm:p-8 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center max-w-5xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" width={42.58} height={59} alt="Logo" />
            <p className="text-primary text-3xl font-semibold">
              Checkout Carbon
            </p>
          </div>

          <div className="flex justify-center items-center sm:hidden">
            <div className="bg-gray-100/60 rounded-full p-6">
              <Image
                src="/checkout-fail.svg"
                width={171}
                height={171}
                alt="Success"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center sm:items-start">
            <h1 className="text-4xl font-bold text-red-500">Desculpe</h1>
            <p className="text-lg text-red-500">Ocorreu um erro inesperado</p>
            <p className="text-sm font-roboto-500">
              Verifique as informações do seu cartão
              <br />
              Se o problema persiste, contate-se com o seu banco
            </p>
          </div>

          <Button className="w-full sm:w-fit mt-2 bg-primary text-white">
            <Link href="/">Tentar novamente</Link>
          </Button>
        </div>

        <div className="sm:flex justify-center items-center hidden">
          <div className="bg-gray-100/60 rounded-full p-6">
            <Image
              src="/checkout-fail.svg"
              width={436}
              height={367}
              alt="Success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
