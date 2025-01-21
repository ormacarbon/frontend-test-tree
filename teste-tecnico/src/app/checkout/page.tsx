'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { roboto300, roboto500, roboto700 } from '@/app/ui/fonts';
import MyForm from '@/components/ui/myform';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const co2 = Number(searchParams.get('co2') || 1);
    const cred = searchParams.get('cred');

    if (cred) {
      fetch(`https://6751f822d1983b9597b4fa68.mockapi.io/api/credit-price/${cred}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.amout) {
            setAmount(data.amout * co2);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [searchParams]);

  const co2 = Number(searchParams.get('co2') || 1);
  const cred = Number(searchParams.get('cred') || 1);

  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 md:items-start md:px-16 lg:px-32 py-6">
      <main className="flex flex-col md:flex-row md:m-auto md:gap-80 h-full mt-8">
        <div className="flex flex-col w-full md:w-2/4 items-start justify-start">
          <MyForm total={amount} co2={co2} cred={cred} />
        </div>
        <div className="md:w-2/4 hidden md:flex flex-col justify-center gap-y-10">
          <Image src="/CardIcon.svg" width={351} height={214} alt="Cartão" />
          <PurchaseResume amount={amount} />
        </div>
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
          <PurchaseResume amount={amount} />
        </div>
      </main>
    </div>
  );
}

function PurchaseResume({ amount }: { amount: number | null }) {
  return (
    <div className="p-6 rounded-md md:shadow-md">
      <h1 className={`text-xl md:text-2xl lg:text-3xl text-primaria p-3 ${roboto700.className}`}>
        Resumo de compra
      </h1>
      <div className="flex flex-row gap-4 md:gap-8 items-center">
        <Image src="/Globo.svg" width={82} height={82} alt="Globo" />
        <div>
          <p className={`text-base md:text-lg ${roboto300.className}`}>
            Compensação de <br /> emissões
          </p>
          <p className={`text-base md:text-lg ${roboto500.className}`}>
            R$: {amount !== null ? amount.toFixed(2) : "300.00"}
          </p>
        </div>
      </div>
    </div>
  );
}
