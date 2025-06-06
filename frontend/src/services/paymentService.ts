const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface PaymentData {
  co2: number;
  cred: number;
  card_number: string;
  expiration_month: number;
  expiration_year: number;
  security_code: string;
  cardholder: {
    name: string;
    identification: {
      type: string;
      number: string;
    };
  };
}

export interface PaymentResponse {
  status: 'success' | 'error';
  message: string;
  error_code?: number;
}

export async function processPayment(paymentData: PaymentData): Promise<PaymentResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (response.status === 201 || response.status === 200) {
      const data: PaymentResponse = await response.json();
      return {
        status: 'success',
        message: data.message || 'Transação realizada com sucesso.'
      };
    } else {
      return {
        status: 'error',
        message: 'Não foi possível processar a transação.',
        error_code: response.status
      };
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    return {
      status: 'error',
      message: 'Falha na comunicação com o servidor'
    };
  }
}