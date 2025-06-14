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
    <div className="min-h-screen flex flex-col justify-center items-center p-5 text-center md:flex-row md:gap-10 md:text-left">
      <div className="flex flex-col items-center justify-center gap-6 md:w-1/2">
        <Image
          src={image}
          alt="Status Image"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32"
        />

        <h1 className={`text-2xl font-bold text-[${titleColor}]`}>{title}</h1>
        <h2 className={`text-lg font-semibold text-[${titleColor}]`}>{subtitle}</h2>

        <div className="text-sm text-gray-700 space-y-2">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <button
          onClick={buttonAction}
          className="bg-[#00A19D] hover:bg-[#008d89] text-white w-full h-9  rounded-md mt-4"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
