"use client"

import { useState, useEffect } from 'react';
import { getAllCredit, ICreditData } from '@/server/getAllCredit';
import { CreditCard} from '@/components/CreditCard';
import Pagination from '@/components/Pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hook/screenSize';


export default function Home() {
  const [credits, setCredits] = useState<ICreditData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const isMobile = useIsMobile();
  const ITEMS_PER_PAGE = isMobile ? 3 : 8;
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setLoading(true);
        const data = await getAllCredit();
        setCredits(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, []);

  const totalPages = Math.ceil(credits.length / ITEMS_PER_PAGE);
  const currentItems = credits.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#00A19D] mb-4">
            Créditos de Carbono Disponíveis
          </h1>
          <p className="text-lg text-gray-600">
            Compense suas emissões de carbono com nossos projetos verificados
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-lg" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 text-xl mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#00A19D] text-white px-6 py-2 rounded-md hover:bg-[#008d89]"
            >
              Tentar novamente
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentItems.map((credit) => (
                <CreditCard key={credit.id} credit={credit} co2={1} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                className="mt-12"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}