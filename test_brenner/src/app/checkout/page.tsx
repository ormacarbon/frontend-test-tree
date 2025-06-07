"use client"

import { CardColumn, CardRow, SummaryCard } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Heading1, Heading2 } from "../components/ui/Title";
import { Text } from "../components/ui/Text";
import Image from "next/image";
import { FormCheckout } from "../components/FormCheckout";

export default function Checkout() {
  return (
    <>
      <Container>
        <CardRow>
          <Image src={"/imgTitle.png"} alt="" width={42} height={59} />
          <Heading1>Checkout Carbon</Heading1>
          <FormCheckout/>
        </CardRow>
        <SummaryCard>
          <CardRow>
            <Heading2>Resumo de compra</Heading2>
          </CardRow>
          <CardRow>
            <Image src={"/Group.png"} alt="" width={53} height={53} />
            <div>
              <Text fontsize="1rem">Compensação de emissoes</Text>
              <Text>R$: 300</Text>
            </div>
          </CardRow>
        </SummaryCard>
      </Container>
    </>
  );
}
