export const fetchCreditPrice = async (credId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/credit-price/${credId}`,
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar preço do crédito");
    }

    const data = await response.json();
    return data.amout;
  } catch (error) {
    console.error("Erro ao buscar preço do crédito:", error);
    throw error;
  }
};
