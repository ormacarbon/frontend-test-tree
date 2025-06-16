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
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          status: 'error',
          message: errorData.message || 'Erro ao processar pagamento',
          error_code: response.status
        },
        { status: response.status }
      );
    }

    const paymentData = await response.json();
    
    return NextResponse.json(
      {
        status: 'success',
        message: 'Pagamento realizado com sucesso',
        payment_id: paymentData.id || `pay_${Math.random().toString(36).substr(2, 9)}`,
        amout: data.co2 * data.cred,
        credit_amount: data.co2
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Erro no processamento do pagamento:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Falha na comunicação com o servidor de pagamentos',
        error_code: 500
      },
      { status: 500 }
    );
  }
}