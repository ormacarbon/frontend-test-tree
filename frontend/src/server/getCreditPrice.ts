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
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch credit data:', error);
    throw new Error('Unable to retrieve credit data');
  }
}