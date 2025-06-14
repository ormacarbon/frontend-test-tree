"use client"

import { useState } from "react"
import StatusPage from "@/components/StatusPage"

import mobileError from "@/../public/mobileError.svg"
import Image from "next/image"

export default function ErrorPage() {
    const [imageSrc, setImageSrc] = useState(mobileError);

    return (
        <>
            <div className="flex justify-center items-center p-5">
                <header className="flex items-center mb-5">
                    <Image src="./Group.svg" alt="" height={50} width={50} />
                    <h1 className="text-3xl ml-3 text-[#00A19DF2] font-bold">Checkout Carbon</h1>
                </header>
            </div>
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
        </>
    )
}
