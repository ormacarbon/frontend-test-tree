"use client";

import { Layout } from "@/app/components/organism";

export default function Home() {
  return (
    <Layout>
      <div className="flex w-screen h-auto items-start justify-start flex-wrap p-4 gap-3">
        <div className="flex w-full min-h-[90vh] justify-center items-center">
          <h2 className="w-full mt-2 text-center text-title text-[20px] font-semibold">
            Home
          </h2>
        </div>
      </div>
    </Layout>
  );
}
