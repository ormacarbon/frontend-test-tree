'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';
import { Button } from '@/components/ui/ui/button';
import { Input } from '@/components/ui/ui/input';

const Page = () => {
    const [co2, setCo2] = useState<number | string>('');
    const [credito, setCredito] = useState<number | string>('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = () => {
        const co2Value = Number(co2);
        if (co2Value < 1 || co2Value > 100) {
            setError('Código Co2 não encontrado');
        } else {
            setError(null);
            router.push(`/checkout?co2=${co2}&cred=${credito}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Compra de crédito de carbono</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700">CO2</label>
                    <Input
                        type="number"
                        value={co2}
                        onChange={(e) => setCo2(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Crédito</label>
                    <Input
                        type="number"
                        value={credito}
                        onChange={(e) => setCredito(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>
                <Button onClick={handleSubmit} className="w-full">
                    Prosseguir
                </Button>
            </div>
        </div>
    );
};

export default Page;