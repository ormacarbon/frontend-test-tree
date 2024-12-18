
import React from 'react';
import Image from "next/image";
import { roboto300, roboto500, roboto700 } from '@/app/ui/fonts';
import MyForm from '@/components/myform';

export default function page() {
  return (
   <div className='h-screen p-32'>
      <header className='flex flex-row items-center gap-3'>
        <Image src='/CarbonLogo.svg'  width={30} height={45} alt="Logo" />
        <h1 className={`text-4xl text-primaria ${roboto700.className}`}>Checkout Carbon</h1>
      </header>
      <main className='flex flex-row h-full'>
        <div className='w-2/3 flex flex-col items-start justify-start'>
          <MyForm />
        </div>
        <div className='w-1/3 flex flex-col items-center justify-center gap-y-4'>
          <Image src='/Cartao.svg'  width={351} height={214} alt="Logo"/>
          <div className='shadow-md p-9 rounded-md m-10'>
            <h1 className={`text-3xl text-primaria p-3 ${roboto700.className}`}>Resumo de compra</h1>
            <div className='flex flex-row gap-8'>
              <Image src='/Globo.svg' width={82} height={82} alt="Logo" />
              <div className=''>
                <p className={`text-lg ${roboto300.className}`}>Compensacao de <br/>emissoes</p>
                <p className={`text-lg ${roboto500.className}`}>R$: 300</p>
              </div>
            </div>
          </div>
        </div>
      </main>
   </div>
  );
}
