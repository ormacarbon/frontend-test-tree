import { NextResponse } from "next/server";

const URL = process.env.NEXT_BASE_URL;

export async function processPayment(data: any) {
    try {
        const response = await fetch(`${URL}/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if(response.status != 201){
            return NextResponse.json({message: "Ocorreu um erro no pagamento!"}, { status: 500 });
        }

        const paymentData = await response.json();
        return NextResponse.json({ response: "Pagamento Realizado!", paymentData}, { status: 201 })
    } catch (error) {
        console.error(error);
        throw new Error("Erro!");
    }
}