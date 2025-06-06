"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getCreditPrice, type CreditPrice } from '@/services/creditService';

export function useCreditPrice() {
  const searchParams = useSearchParams();
  const [creditPrice, setCreditPrice] = useState<CreditPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const co2Quantity = Number(searchParams.get('co2')) || 1;
  const creditPriceId = searchParams.get('cred') || '2';

  useEffect(() => {
    async function fetchCreditPrice() {
      try {
        setLoading(true);
        setError(null);
        const price = await getCreditPrice(creditPriceId);
        setCreditPrice(price);
      } catch (err) {
        setError('Erro ao carregar preço');
        console.error('Error fetching credit price:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCreditPrice();
  }, [creditPriceId]);

  const unitPrice = creditPrice?.amout ?? 0;
  const totalValue = co2Quantity * unitPrice;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return {
    creditPrice,
    loading,
    error,
    co2Quantity,
    creditPriceId,
    unitPrice,
    totalValue,
    formatCurrency
  };
}