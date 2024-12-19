import { Payment } from "../../_types/payment";
import { redirect } from "next/navigation";
export const processPayment = async (data: Payment) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      redirect("/checkout-error");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao processar pagamento:", error);
    throw error;
  }
};
