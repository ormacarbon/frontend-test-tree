"use client"

import { CardColumn, CardRow } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import Image from "next/image";
import { Heading1, Heading2 } from "../components/ui/Title";
import { Text } from "../components/ui/Text";
import { DivCheckout } from "../checkout/styles";
import { Button } from "../components/ui/Button";
import { CardColumnImg } from "./styles";

export default function Success() {
    return (
        <Container>
            <DivCheckout>
                <CardRow>
                    <Image src={"/imgTitle.png"} alt="" width={42} height={59} />
                    <Heading1>Checkout Carbon</Heading1>
                    <CardColumn>
                        <Heading2>Parabéns</Heading2>
                        <Heading2>Você compensou suas emissões com sucesso!</Heading2>
                        <Text>Com essa ação você contribui para um mundo mais sustentável</Text>
                        <Text>Um email com o certificado de compensação será enviado para você em breve</Text>
                        <Button variant={"success"}>Compartilhar</Button>
                    </CardColumn>
                </CardRow>
            </DivCheckout>
            <DivCheckout>
                <CardColumnImg >
                    <Image
                        src="/Group28.png"
                        alt="Folha verde"
                        width={300}
                        height={300}
                        style={{
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        }}
                    />
                </CardColumnImg>
            </DivCheckout>
        </Container>
    )

}