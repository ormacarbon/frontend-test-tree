import { Header } from "@/components/Header";
import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 flex flex-col  gap-[0.75rem]">
      <main className="flex flex-col lg:flex-row">
        <section className="flex-2 w-full pt-[0.75rem] mt-[4rem] px-[31px] flex justify-center pb-[12rem]">
          {children}
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
                    R$: 300
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
