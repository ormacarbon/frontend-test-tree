"use client"

import { CardColumn, CardRow, SummaryCard } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Heading1, Heading2 } from "../components/ui/Title";
import { Text } from "../components/ui/Text";
import Image from "next/image";
import { FormCheckout } from "../components/FormCheckout";
import { CardSummaryRow } from "../components/ui/Card/style";
import { DivCheckout, DivImage } from "./styles";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Checkout() {
  const searchParams = useSearchParams();
  const co2 = Number(searchParams.get("co2"));
  const cred = searchParams.get("cred");


  const [creditValue, setCreditValue] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCreditPrice() {
      if (!cred) return;

      try {
        const res = await fetch(`https://6751f822d1983b9597b4fa68.mockapi.io/api'/credit-price/${cred}`);
        console.log(res)
        const data = await res.json();
        console.log("Resposta da API:", data);
        setCreditValue(Number(data.amout));
      } catch (error) {
        console.error("Erro ao buscar crédito:", error);
      }
    }

    fetchCreditPrice();
  }, [cred]);


  const total = creditValue && co2 ? creditValue * co2 : 0;

  return (
    <Container>
      <DivCheckout marginBottom={"10rem"} >
        <CardRow>
          <Image src={"/imgTitle.png"} alt="" width={42} height={59} />
          <Heading1>Checkout Carbon</Heading1>
        </CardRow>
        <FormCheckout />
      </DivCheckout>
      <DivCheckout>
        <DivImage>
          <Image src={"/cartao.png"} alt="" width={351} height={214} />    
        </DivImage>
        <SummaryCard>
          <CardSummaryRow>
            <Heading2>Resumo de compra</Heading2>
          </CardSummaryRow>
          <CardSummaryRow>
              <Image src={"/Group.png"} alt="" width={53} height={53} />
            <div>
              <Text>Compensação de emissoes</Text>
              <Text>
                <b>R$: {creditValue !== null ? total.toFixed(2) : 'Carregando...'}</b>
              </Text>
            </div>
          </CardSummaryRow>
        </SummaryCard>
      </DivCheckout>
    </Container>
  );
}
