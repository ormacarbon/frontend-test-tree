import Image from 'next/image';
import { roboto700 } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-8'>
      <header className='flex flex-row items-center gap-3'>
        <Image src='/CarbonLogo.svg'  width={30} height={45} alt="Logo" />
        <h1 className={`text-4xl text-primaria ${roboto700.className}`}>Checkout Carbon</h1>
      </header>
      <main className='flex flex-row h-full'>
        <div className='w-2/3 flex flex-col items-start justify-start'>
          {/*formulario */}
        </div>
      </main>
    </div>
  );
}
