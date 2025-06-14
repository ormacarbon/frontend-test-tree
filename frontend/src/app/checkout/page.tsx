import { FormCheckout } from "@/components/FormCheckout/form"
import { Card } from "@/components/ui/card"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import Image from "next/image"


export default function Checkout() {
    return (
        <>
            <div className="bg-red-700 h-screen grid grid-cols-2 items-center">
                <div className=" bg-blue-700 h-9/12 p-24">
                    <header className="flex items-center">
                        <Image src="./Group.svg" alt="" height={70} width={65} />
                        <h1 className="text-4xl ml-3 font-bold">Checkout Carbon</h1>
                    </header>
                    <FormCheckout/>
                </div>
                <div className="bg-blue-700 h-9/12 flex flex-col items-center justify-center gap-5">
                    <Image src="./Cart.svg" alt="" height={214} width={420} />
                    <Card className="w-5/12 h-3/12">
                        <h1 className="flex justify-center text-4xl font-bold text-[#00A19D]">Resumo de Compra</h1>
                        <section className="flex justify-around p-10">
                            <Image src="./CardIcon.svg" alt="" height={100} width={100} />
                            <div className="flex flex-col">
                                <p className="text-3xl">Compensação de emissões</p>
                                <p className="text-2xl font-bold">R$: 300</p>
                            </div>
                        </section>
                    </Card>
                </div>
            </div>
        </>
    )
}