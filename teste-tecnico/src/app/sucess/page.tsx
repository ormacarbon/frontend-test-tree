import { Button } from "@/components/ui/ui/button";
import { roboto500, roboto700 } from "../ui/fonts";
import Image from 'next/image';

export default function Page() {
    return (
        <div className="h-screen p-8 md:p-32 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-80">
            <div className="flex h-full flex-col justify-evenly items-center md:items-start">
                <header className="flex flex-row items-center gap-3 mb-10">
                    <Image src="/CarbonLogo.svg" width={30} height={45} alt="Logo" />
                    <h1 className={`text-3xl text-primaria ${roboto700.className}`}>Checkout Carbon</h1>
                </header>
                <main className="max-w-md flex flex-col gap-y-5 m-auto items-center md:items-start text-center md:text-left">
                    <div className="mt-10 md:mt-0 block md:hidden">
                        <Image src="/sucess.png" width={154} height={154} alt="SucessImage" />
                    </div>
                    <h1 className={`text-5xl text-primaria ${roboto700.className}`}>Parabéns!</h1>
                    <h2 className={`text-3xl text-primaria ${roboto700.className}`}>Você compensou suas emissões com sucesso!</h2>
                    <p className={`text-xl text-black ${roboto500.className}`}>Com essa ação você contribui para um mundo mais sustentável</p>
                    <p className={`text-xl text-black ${roboto500.className}`}>Um e-mail com o certificado de compensação será enviado para você em breve</p>
                    <Button className="text-base text-white bg-primaria my-7 w-72">Compartilhar</Button>
                </main>
            </div>
            <div className="mt-10 md:mt-0 hidden md:block">
                <Image src="/sucess.png" width={544} height={544} alt="SucessImage" />
            </div>
        </div>
    );
}
