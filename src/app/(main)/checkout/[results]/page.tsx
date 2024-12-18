import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { error } from "console";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
type ResultadoProps = {
  result: string;
  data: { title: string; subTitle: string; content: string };
};
type Props = {
  params: {
    results: string;
    data: { title: string; subTitle: string; content: string };
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Status: ${params.results}`,
  };
};

const StatusPage = async ({ params }: Props) => {
  const resultData = await getResultData(params.results);
  const result = resultData?.result || "error";
  const data = resultData?.data;
  const contents = data?.content.split("\n\n");
  console.log("data", data);

  return (
    <main className="flex-1 flex flex-col mx-auto max-w-[1080px] w-full py-10 gap-8 justify-center">
      <Header />
      <div
        className={
          "flex w-full flex-col-reverse lg:flex-row justify-center lg:justify-between gap-8 items-center"
        }
      >
        <section className="flex-1 flex-col flex justify-start items-center lg:items-start gap-4 lg:gap-9 lg:justify-normal w-full max-w-[28rem] py-[0.75rem] lg:mt-[4rem] px-[31px] ">
          <h3
            className={`font-condensed text-primary-500 font-bold text-3xl lg:text-5xl text-center ${
              result === "error" && "text-error"
            } `}
          >
            {data?.title}
          </h3>
          <h4
            className={`font-condensed text-primary-500 font-bold text-xl lg:text-3xl text-center lg:text-left ${
              result === "error" && "text-error"
            }`}
          >
            {data?.subTitle}
          </h4>

          <div
            className={
              "flex flex-col gap-3 items-start lg:justify-start px-6 lg:px-0 max-w-[19rem] lg:max-w-none"
            }
          >
            {contents?.map((content, index) => (
              <strong
                key={index}
                className="font-condensed font-semibold text-sm lg:text-base"
              >
                {content}
              </strong>
            ))}
          </div>
          <div className=" w-full flex flex-row justify-center lg:justify-normal p-12 lg:p-0">
            {result === "success" ? (
              <Button className="border-primary-500 text-white font-bold bg-primary-500 max-w-[285px]">
                Compartilhar
              </Button>
            ) : (
              <Link className="w-full max-w-[285px] flex justify-center" href="/" passHref>
                <Button className=" w-full border-primary-500 text-white font-bold bg-primary-500 ">
                  Tentar novamente
                </Button>
              </Link>
            )}
          </div>
        </section>
        <section className="flex flex-row">
          <div className="bg-gray-300 p-12 lg:p-20 rounded-full">
            <div className="relative lg:flex min-w-[6rem] lg:min-w-[18rem] w-full aspect-square h-auto">
              {result === "success" && (
                <Image
                  src={"/icon-success.svg"}
                  alt="credit card front image"
                  fill
                />
              )}
              {result === "error" && (
                <Image
                  src={"/icon-credit-card-error.svg"}
                  alt="credit card front image"
                  fill
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

async function getResultData(result: string): Promise<ResultadoProps | null> {
  const title = result === "success" ? "Parabéns!" : "Desculpe";
  const subTitle =
    result === "success"
      ? "Você compensou suas emissões com sucesso!"
      : "Ocorreu um erro inesperado";
  const content =
    result === "success"
      ? "Com essa ação você contribui para um mundo mais sustentável. \n\n Um email com o certificado de compensação será enviado para você em breve."
      : "Verifique as informações do seu cartão.\n\n Se o problema persiste, contate-se com o seu banco";

  return {
    result,
    data: {
      title,
      subTitle,
      content,
    },
  };
}

export async function generateStaticParams() {
  // Aqui você define os parâmetros estáticos que deseja gerar
  return [{ results: "success" }, { results: "error" }];
}
export default StatusPage;
