"use client";

import { Logo } from "@/components/Logo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PaymentErrorPage() {
  const router = useRouter();

  const handleTryAgain = () => {
    router.push("/checkout?co2=1&cred=1");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-8">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
        <div className="flex-1 max-w-md">
          <div className="mb-8 flex justify-center md:mb-28 md:justify-start">
            <Logo />
          </div>
          
          <div className="mb-8 md:hidden">
            <Image 
              src="/logoSucessMobile.svg" 
              alt="Erro - Ícone" 
              width={171}
              height={171}
              className="w-32 h-32 mx-auto"
            />
          </div>
          
          <h1 className="text-xl md:text-4xl font-bold text-red-600 mb-4 md:mb-6">
            Desculpe
          </h1>
          
          <p className="text-sm md:text-3xl text-red-600 font-bold mb-4">
            Ocorreu um erro inesperado
          </p>
          
          <p className="text-xs md:text-lg font-bold mb-3 text-gray-800 md:text-black">
            Verifique as informações do seu cartão
          </p>
          
          <p className="text-xs md:hidden font-bold mb-8 text-gray-800 md:text-black">
            Se o problema persiste, contate-se com o seu banco
          </p>
          
          <button 
            onClick={handleTryAgain}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 md:py-1 px-12 md:px-16 rounded-md transition-colors w-full max-w-xs md:w-auto md:max-w-none md:mt-12 text-base md:text-lg"
          >
            Tentar novamente
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <div className="absolute right-32 top-52">
            <Image 
              src="/logoErro.svg" 
              alt="Falha - logo" 
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