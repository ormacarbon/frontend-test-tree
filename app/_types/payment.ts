interface Cardholder {
  name: string;
  identification: {
    type: string;
    number: string;
  };
}

export interface Payment {
  co2: number;
  cred: number;
  card_number: string;
  expiration_month: string | number;
  expiration_year: string | number;
  security_code: string;
  cardholder: Cardholder;
}
