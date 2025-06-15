export type  CheckoutFormProps = {
  co2: number | null;
  cred: number | null;
  totalPrice: number;
  onStartLoading: () => void
}

interface IPaymentRequest {
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
