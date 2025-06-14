import Image from "next/image"

type StatusPageProps = {
  image: string
  title: string
  subtitle: string
  text: string[]
  buttonText: string
  buttonAction: () => void
  titleColor?: string
}

export default function StatusPage({
  image,
  title,
  subtitle,
  text,
  buttonText,
  buttonAction,
  titleColor = "text-[#FC311D]",
}: StatusPageProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center p-5">

      <div className="order-1 md:hidden flex justify-center mb-5">
        <header className="flex items-center">
          <Image src="/Group.svg" alt="Logo" height={50} width={50} />
          <h1 className="text-3xl ml-3 text-[#00A19DF2] font-bold">Checkout Carbon</h1>
        </header>
      </div>

      <div className="order-2 md:order-last flex justify-center">
        <Image
          src={image}
          alt="Status Image"
          width={300}
          height={300}
          className="w-40 h-40 md:w-80 md:h-80 object-contain"
        />
      </div>

      <div className="order-3 flex flex-col items-center p-4 md:items-start gap-6 max-w-md mx-auto">

        <div className="hidden md:flex justify-center items-center">
          <header className="flex items-center mb-5">
            <Image src="/Group.svg" alt="Logo" height={50} width={50} />
            <h1 className="text-3xl ml-3 text-[#00A19DF2] font-bold">Checkout Carbon</h1>
          </header>
        </div>

        <h1 className={`text-2xl font-bold text-[${titleColor}] md: text-5xl`}>{title}</h1>
        <h2 className={`text-lg font-semibold text-[${titleColor}] md: text-4xl`}>{subtitle}</h2>

        <div className="text-sm text-gray-700 space-y-2 font-bold">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <button
          onClick={buttonAction}
          className="bg-[#00A19D] hover:bg-[#008d89] text-white w-full h-9 rounded-md mt-4"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
