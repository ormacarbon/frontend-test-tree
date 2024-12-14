"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container grid gric-cols-1 mx-auto sm:h-screen p-4 sm:p-8 lg:p-12 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 ">
        <div className="md:col-span-2 flex flex-col gap-6 max-w-[572px] sm:h-screen ">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" width={42.58} height={59} alt="Logo" />
            <p className="text-primary text-3xl font-semibold">
              Checkout Carbon
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <Label>Nome</Label>
              <Input type="text" placeholder="Digite seu nome..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Telefone</Label>
                <Input type="number" placeholder="(51) 990000000" />
              </div>
              <div>
                <Label>CPF</Label>
                <Input type="text" placeholder="Digite seu CPF..." />
              </div>
            </div>

            <div>
              <Label>E-mail</Label>
              <Input type="email" placeholder="Digite seu e-mail..." />
            </div>

            <div>
              <Label>Número do Cartão</Label>
              <Input
                type="number"
                placeholder="Digite os 16 números do seu cartão..."
              />
            </div>

            <div className="grid grid-cols-2 col-span-3 gap-4">
              <div>
                <Label>Data de Validade</Label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="MM" />
                  <span className="text-2xl items-center justify-center flex text-primary">
                    /
                  </span>
                  <Input type="number" placeholder="AA" />
                </div>
              </div>

              <div>
                <Label>CVC/CVV</Label>
                <Input type="number" placeholder="123" />
              </div>
            </div>

            <div>
              <Label>Opções de Parcelamento</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1x">1x sem juros</SelectItem>
                  <SelectItem value="2x">2x sem juros</SelectItem>
                  <SelectItem value="3x">3x sem juros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-end sm:gap-8 mt-4">
            <Button variant={"outline"}>Voltar</Button>
            <Link href={"/checkout-success"}>
              <Button>Prosseguir</Button>
            </Link>
          </div>
        </div>

        <div className=" flex flex-col gap-4 mt-24">
          <div className="justify-center flex">
            <Image
              src="/credit-card.svg"
              width={250}
              height={150}
              alt="Cartão "
            />
          </div>

          <h2 className="text-xl flex justify-center text-primary font-semibold mb-2">
            Resumo de compra
          </h2>
          <Card className="flex justify-center max-w-[450px] h-[157px]">
            <CardHeader>
              <CardDescription>
                <Image
                  src="/logo-purchase-summary.svg"
                  width={82.34}
                  height={82.34}
                  alt="Logo"
                />
              </CardDescription>
            </CardHeader>
            <CardContent className=" flex flex-col justify-center max-w-[174px]">
              <p className="font-roboto-300 text-md ">
                Compensação de{"\n"} emissões
              </p>
              <p className="text-2xl font-roboto-500 mt-2">R$: 300</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
