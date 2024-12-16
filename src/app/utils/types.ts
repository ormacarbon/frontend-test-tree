/* eslint-disable @typescript-eslint/no-explicit-any */

export type httpRequest = {
  body: any;
  url: string;
  headers: any;
  method: "get" | "post" | "put" | "delete";
};

export type dataMessage = {
  icon: string;
  title: string;
  show: boolean;
  status: string;
  subTitle: string;
  message: string[];
  loading?: boolean;
  textButton: string;
};

export interface messageConfig {
  icon: string;
  title: string;
  message: string[];
  status: string;
  subTitle: string;
  textButton: string;
}

export type optionDefault = {
  alt?: string;
  label: string;
  flag?: string;
  icon?: string;
  amout?: number;
  createdAt?: string;
  updatedAt?: string;
  value: string | number;
};

export type useAxiosRequestProps = {
  RequestResponse: any;
};

export type httpClientResponse<T = any> = {
  body: T;
  statusCode: number;
};

export type formatterProps = {
  type?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  style?: keyof Intl.NumberFormatOptionsStyleRegistry;
};

export type FormData = {
  security_code: number;
  cpf: string;
  name: string;
  phone: number;
  email: string;
  card_number: number;
  option_payment: string;
  expiration_month: number;
  expiration_year: number;
};

export type BuyCarbonData = {
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
};

export type creditPriceData = {
  id: string;
  amout: number;
  createdAt: string;
  updatedAt: string;
};

export type processPaymentResponse = {
  status: string;
  message: string;
};

export type ProductsResponse = {
  products: creditPriceData[];
};
