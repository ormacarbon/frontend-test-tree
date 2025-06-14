
import { CheckoutForm } from "@/components/FormCheckout/formCheckout"
import { Card } from "@/components/ui/card"
import Image from "next/image"


export default function Checkout() {
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="p-5">
                    <header className="flex items-center mb-5">
                        <Image src="./Group.svg" alt="" height={50} width={50} />
                        <h1 className="text-3xl ml-3 text-[#00A19DF2] font-bold">Checkout Carbon</h1>
                    </header>
                    <div>
                        <CheckoutForm/>
                    </div>
                </div>
                <div className="fixed right-0 left-0 bottom-0 rounded-b-none shadow-2xl">  
                    <Image className="hidden" src="./Cart.svg" alt="" height={214} width={420} />
                    <Card className="flex flex-col justify-center items-center ">
                        <h1 className="flex justify-center text-2xl font-bold text-[#00A19D]">Resumo de Compra</h1>
                        <section className="flex justify-around gap-4">
                            <Image className="" src="./CardIcon.svg" alt="" height={50} width={50} />
                            <div className="flex flex-col">
                                <p className="text-base ">Compensação de emissões</p>
                                <p className="text-2xl font-bold">R$: 300</p>
                            </div>
                        </section>
                    </Card>
                </div>
            </div>
        </>
    )
}