import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image 
        src="/logo.svg" 
        alt="Logo" 
        width={32}
        height={44}
        className="w-8 h-11"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-teal-600">Checkout Carbon</h1>
    </div>
  )
}