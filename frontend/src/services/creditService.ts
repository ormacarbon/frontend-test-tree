const BASE_URL = 'https://6751f822d1983b9597b4fa68.mockapi.io/api';

export interface CreditPrice {
  createdAt: string;
  updatedAt: string;
  amout: number;
  id: string;
}

export async function getCreditPrice(creditPriceId: string): Promise<CreditPrice> {
  const response = await fetch(`${BASE_URL}/credit-price/${creditPriceId}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch credit price: ${response.status}`);
  }
  
  return response.json();
}