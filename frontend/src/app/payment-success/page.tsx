"use client";

import { Logo } from "@/components/Logo";
import Image from "next/image";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="max-w-4xl w-full flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="mb-28">
            <Logo />
          </div>
          
          <h1 className="text-4xl font-bold text-teal-600 mb-6">
            Parabéns!
          </h1>
          
          <p className="text-3xl text-teal-600 font-bold mb-4">
            Você compensou suas emissões com sucesso!
          </p>
          
          <p className="text-lg font-bold mb-3">
            Com essa ação você contribui para um mundo mais sustentável
          </p>
          
          <p className="text-lg font-bold mb-8">
            Um email com o certificado de compensação será enviado para você em breve
          </p>
          
          <button className="bg-teal-600 hover:bg-teal-700 mt-12 text-white text-lg font-medium py-1 px-16 rounded-md transition-colors">
            Compartilhar
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="absolute right-32 top-52">
            <Image 
              src="/logoSucess.svg" 
              alt="Sucesso - Folhas" 
              width={300}
              height={300}
              className="w-72 h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}