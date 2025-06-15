// src/server/getCreditPrice.ts
interface ICreditData {
  id: string;
  amout: number;
  createdAt: string;
  updatedAt: string;
}

export async function getCreditPrice(credId: string): Promise<ICreditData> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/credit-price/${credId}`
    );

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Falha ao buscar crédito:', error);
    throw new Error('Não foi possível obter os dados do crédito');
  }
}