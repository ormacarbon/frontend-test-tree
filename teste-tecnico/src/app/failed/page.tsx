import { Button } from "@/components/ui/ui/button";
import { roboto500, roboto700 } from "../ui/fonts";
import Image from 'next/image';

export default function Page() {
    return (
    <div className="h-screen p-8 md:p-32 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-80">
        <div className="flex h-full flex-col justify-evenly">
            <header className="flex flex-row items-center gap-3 mb-5 md:mb-10">
                <Image src="/CarbonLogo.svg" width={30} height={45} alt="Logo" />
                <h1 className={`text-2xl md:text-3xl text-primaria ${roboto700.className}`}>Checkout Carbon</h1>
            </header>
            <main className="max-w-md flex flex-col gap-y-5 m-auto items-start">
                <div className="flex justify-center items-center w-full md:hidden">
                    <Image src="/failed.png" width={144} height={144} alt="SucessImage" />
                </div>
                <h1 className={`text-4xl md:text-5xl text-red-500 ${roboto700.className}`}>Disculpe</h1>
                <h2 className={`text-2xl md:text-3xl text-red-500 ${roboto700.className}`}>Ocorreu um erro inesperado</h2>
                <p className={`text-lg md:text-xl text-black ${roboto500.className}`}>Mensagem de erro decorrente da resposta do cartão</p>
                <Button className="text-base text-white bg-primaria my-7 w-72">Tentar novamente</Button>
            </main>
        </div>
        <div className="hidden md:flex">
            <Image src="/failed.png" width={544} height={544} alt="SucessImage" />
        </div>
    </div>
  );
}
