"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { getCreditPrice, type CreditPrice } from '@/services/creditService'

interface SummaryCardProps {
  isDesktop?: boolean
}

export function SummaryCard({ isDesktop = false }: Readonly<SummaryCardProps>) {
  const searchParams = useSearchParams();
  const [creditPrice, setCreditPrice] = useState<CreditPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract parameters from URL
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

  const displayValue = loading ? 'Carregando...' : error ? 'Erro' : formatCurrency(totalValue);

  if (isDesktop) {
    return (
      <div>
        <h2 className="text-xl font-bold text-primary text-center mb-3">Resumo de compra</h2>
        <Card className="shadow-md p-0 rounded-none border-t-0 border-l border-r border-b w-[90%] mx-auto">
          <CardContent className="pt-3">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/resumeLogo.svg" 
                  alt="Resume Logo" 
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-tight">Compensação de<br></br> emissões</p>
                <p className="text-lg font-bold text-foreground">{displayValue}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg md:hidden">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <Image 
              src="/resumeLogo.svg" 
              alt="Resume Logo" 
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div>
            <p className="text-base font-bold text-primary">Resumo de compra</p>
            <p className="text-sm text-muted-foreground max-w-[120px]">Compensação de emissões</p>
            <p className="text-lg font-bold text-foreground">{displayValue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}