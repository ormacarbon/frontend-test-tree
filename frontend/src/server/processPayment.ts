import { ErrorResponse, SuccessResponse, PaymentRequest } from "@/types/payment";
import { NextResponse } from "next/server";

export async function processPayment(data: PaymentRequest): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Não foi possível processar a transação.',
          error_code: 422,
        },
        { status: 422 }
      );
    }

    return NextResponse.json(
      {
        status: 'success',
        message: 'Transação realizada com sucesso.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Payment processing error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Falha ao se comunicar com o servidor de pagamentos.',
        error_code: 500,
      },
      { status: 500 }
    );
  }
}
