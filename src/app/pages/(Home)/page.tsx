"use client";

import Image from "next/image";
import { icons } from "@/app/assets/icons";
import { Form, Layout } from "@/app/components/organism";
import { Title } from "@/app/components/elements";

export default function Home() {
  return (
    <Layout>
      <div className="w-full min-h-screen h-auto grid grid-cols-2 gap-4 m-auto place-items-center place-content-center divide-x-2 divide-line">
        <div className="w-full col-start-1 col-end-1 place-items-center min-h-svh place-content-center">
          <div className="flex justify-start items-center w-full gap-3 mb-7 max-w-[572px]">
            <Image alt="Image logo" src={icons.logo} className="max-w-[70%]" />
            <Title>Checkout Carbon</Title>
          </div>
          <Form />
        </div>
        <div className="h-full w-full col-start-2 col-end-3 min-h-svh place-content-center">
          <div className="bg-slate-400 max-w-[572px] m-auto h-auto min-h-[550px]">
            03
          </div>
        </div>
      </div>
    </Layout>
  );
}
