"use client"

import { useEffect, useState } from "react"
import StatusPage from "@/components/StatusPage"
import mobileSuccess from "@/../public/mobileSuccess.svg"
import desktopSuccess from "@/../public/desktopSuccess.svg"
import Image from "next/image"

export default function SuccessPage() {
    const [imageSrc, setImageSrc] = useState(mobileSuccess)

    useEffect(() => {
        const updateImage = () => {
            const isDesktop = window.innerWidth >= 768;
            setImageSrc(isDesktop ? desktopSuccess : mobileSuccess)
        }

        updateImage();
        window.addEventListener("resize", updateImage)

        return () => window.removeEventListener("resize", updateImage)
    }, [])

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
                title="Parabéns!"
                subtitle="Você compensou suas emissões com sucesso!"
                titleColor="#00A19D"
                text={[
                    "Com essa ação você contribui para um mundo mais sustentável",
                    "Um email com o certificado de compensação será enviado para você em breve",
                ]}
                buttonText="Compartilhar"
                buttonAction={() => alert("Compartilhando...")}
            />
        </>
    )
}
