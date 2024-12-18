'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { roboto700 } from '@/app/ui/fonts';
import MyForm from '@/components/ui/myform';
import { useSearchParams } from 'next/navigation';

export default function Home() {
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
    <div className='flex flex-col items-center justify-center h-screen px-8 py-12'>
      <header className='flex flex-row items-center gap-3'>
        <Image src='/CarbonLogo.svg'  width={30} height={45} alt="Logo" />
        <h1 className={`text-4xl text-primaria ${roboto700.className}`}>Checkout Carbon</h1>
      </header>
      <main className='flex flex-row h-full'>
        <div className='w-2/3 flex flex-col items-start justify-start'>
          <MyForm total={amount} co2={co2} cred={cred}/>
        </div>
      </main>
    </div>
  );
}
