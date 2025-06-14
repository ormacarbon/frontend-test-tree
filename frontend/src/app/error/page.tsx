"use client"

import { useState } from "react"
import StatusPage from "@/components/StatusPage"

import mobileError from "@/../public/mobileError.svg"
import Image from "next/image"

export default function ErrorPage() {
    const [imageSrc, setImageSrc] = useState(mobileError);

    return (
        <StatusPage
            image={imageSrc}
            title="Desculpe"
            subtitle="Ocorreu um erro inesperado"
            titleColor="#FC311D"
            text={[
                "Verifique as informações do seu cartão",
                "Se o problema persiste, contate-se com o seu banco",
            ]}
            buttonText="Tentar Novamente"
            buttonAction={() => alert("Voltando para o checkout...")}
        />
    )
}
