"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ICreditData } from "@/server/getAllCredit";
import { useState } from "react";

interface CreditCardProps {
  credit: ICreditData;
  co2: number;
}

export function CreditCard({ credit, co2: initialCo2 }: CreditCardProps) {
  const [co2, setCo2] = useState(initialCo2);

  const totalPrice = credit.amout * co2;

  const increment = () => setCo2(prev => prev + 1);
  const decrement = () => setCo2(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Crédito #{credit.id}</span>
          <Badge variant="secondary" className="bg-[#00A19D] text-white">
            R$ {credit.amout.toFixed(2)} uni
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="text-center">
          <div className="text-2xl font-bold text-[#00A19D]">
            Total: R$ {totalPrice.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-center border rounded-md w-full max-w-[120px] mx-auto">
          <Button variant="ghost" size="sm" onClick={decrement}>
            -
          </Button>
          <span className="px-4 text-lg font-medium">{co2}</span>
          <Button variant="ghost" size="sm" onClick={increment}>
            +
          </Button>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="w-full bg-[#00A19D] hover:bg-[#008d89]"
        >
          <Link href={`/checkout?co2=${co2}&cred=${credit.id}`}>
            Compensar Emissões
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
