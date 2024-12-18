import { HomeForm } from "@/components/HomeForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen xl:p-40 lg:p-16  flex-1 flex flex-col justify-center items-center lg:items-start bg-primary-500">
      <div className="absolute hidden lg:flex top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 min-h-[214px] max-w-[351px] w-full h-auto">
        <Image src={"/logo-white.svg"} alt="credit card front image" fill />
      </div>
      <section className="max-w-[720px] lg:max-w-[1440px] flex ">
        <HomeForm/>
      </section>
    </main>
  );
}
