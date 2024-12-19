import { Button } from "@/components/ui/button";
import { Header } from "../_components/header";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ["500"],
  subsets: ["latin-ext"],
});
const CheckoutSuccessPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col justify-center gap-8 py-10">
      <Header />
      <div
        className={
          "flex w-full flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between"
        }
      >
        <section className="flex w-full flex-1 flex-col items-center justify-start gap-4 px-[31px] py-3 lg:mt-16 lg:items-start lg:justify-normal lg:gap-9">
          <h3 className="text-center text-3xl font-bold text-primary lg:text-5xl">
            Parabéns!
          </h3>

          <h6 className="whitespace-pre text-center text-xl font-bold text-primary lg:text-left lg:text-2xl">
            Você compensou suas emissões {"\n"}com sucesso!
          </h6>
          <h4
            className={`text-md ${robotoCondensed.className} text-center lg:text-left lg:text-lg`}
          >
            <p className="whitespace-pre">
              Com essa ação você contribui para um mundo mais {"\n"}sustentável
            </p>
            <p className="whitespace-pre">
              Um email com o certificado de compensação será {"\n"}enviado para
              você em breve
            </p>
          </h4>

          <div className="flex w-full flex-row justify-center p-12 lg:justify-normal lg:p-0">
            <Button className="max-w-[285px] border-primary bg-primary font-bold">
              Compartilhar
            </Button>
          </div>
        </section>
        <section className="flex flex-row">
          <div className="rounded-full bg-[#F3F1F1] p-12 lg:p-20">
            <div className="relative aspect-square h-auto w-full min-w-24 lg:flex lg:min-w-72">
              <Image
                src={"/checkout-success.svg"}
                alt="credit card front image"
                fill
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CheckoutSuccessPage;
