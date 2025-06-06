"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleStartCheckout = () => {
    router.push("/checkout?co2=1&cred=2");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 gap-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Clique no botão para ir a página solicitada
      </h1>
      <Button
        onClick={handleStartCheckout}
        className="w-[300px] bg-primary hover:bg-primary"
        size="lg"
      >
        Ir para o checkout
      </Button>
    </div>
  );
}