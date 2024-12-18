import Image from 'next/image';
import { roboto700 } from './ui/fonts';

export default function Home() {
  return (
    <div>
      <header className='flex flex-row items-center gap-3'>
        <Image src='/CarbonLogo.svg'  width={30} height={45} alt="Logo" />
        <h1 className={`text-4xl text-primaria ${roboto700.className}`}>Checkout Carbon</h1>
      </header>
    </div>
  );
}
