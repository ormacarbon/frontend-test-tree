"use client"

import { CardColumn, CardRow } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import Image from "next/image";
import { Heading1, Heading2 } from "../components/ui/Title";
import { Text } from "../components/ui/Text";

export default function Success() {
    return (
        <>

            <CardRow>
                <Image src={"/imgTitle.png"} alt="" width={42} height={59} />
                <Heading1>Checkout Carbon</Heading1>
            </CardRow>
            <CardColumn>
                <Image src={"/imgTitle.png"} alt="" width={100} height={100} />
                <Heading1>Parabéns</Heading1>
                <Heading2>Você compensou suas emissões com sucesso!</Heading2>
                <Text>Com essa ação você contribui para um mundo mais sustentável</Text>
                <Text>Um email com o certificado de compensação será enviado para você em breve</Text>
            </CardColumn>
        </>
    )

}