// types/credit.ts
export interface ICreditData {
  id: string;
  amout: number;
  createdAt: string;
  updatedAt: string;
}

export async function getAllCredit(): Promise<ICreditData[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/credit-price`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Falha ao buscar créditos:', error);
    throw new Error('Não foi possível obter os dados dos créditos');
  }
}