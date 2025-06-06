const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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