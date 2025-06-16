export interface PaymentRequest {
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

export interface SuccessResponse {
  status: 'success';
  message: string;
}

export interface ErrorResponse {
  status: 'error';
  message: string;
  error_code?: number;
}