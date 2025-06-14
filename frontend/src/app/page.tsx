import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Card className="grid min-w-[40%] min-h-[50%] grid-cols-2 border border-[#00a19e43] bg-[#f4f4f4] shadow-md">
        
        <CardContent className="flex items-center justify-center border-r-2">
          <Image src="/Earth.svg" alt="Terra" width={500} height={100} />
        </CardContent>

        <CardContent className="flex flex-col justify-center p-6">
          <CardHeader className="mb-8">
            <CardTitle className="mb-5 text-4xl md:text-6xl">Seja bem-vindo</CardTitle>
            <CardDescription className="text-lg font-semibold">
              Realize seu checkout para compensação de carbono
            </CardDescription>
          </CardHeader>

          <Button
            asChild
            className="bg-[#00a19eb0] text-white text-xl md:text-3xl h-18 hover:bg-[#00A19D] transition-colors"
          >
            <Link href="/checkout">Realizar Checkout</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
