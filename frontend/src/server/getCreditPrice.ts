import { NextResponse } from "next/server";

const URL = process.env.NEXT_BASE_URL;

export async function getCreditPrice(credId: string) {
    try {
        const response = await fetch(`${URL}/credit-price/${credId}`);
        console.log(response);

        if(!response) {
            return NextResponse.json({message: "Ocorreu um erro na response!"});
        }

        return NextResponse.json( response , { status: 200 });
    } catch (error) {
        throw new Error("Erro ao buscar o crédito!");
    }
}