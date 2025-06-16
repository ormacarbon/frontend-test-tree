"use client"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) {
  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-md disabled:opacity-50"
      >
        Anterior
      </button>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        let pageNum;
        if (totalPages <= 5) {
          pageNum = i + 1;
        } else if (currentPage <= 3) {
          pageNum = i + 1;
        } else if (currentPage >= totalPages - 2) {
          pageNum = totalPages - 4 + i;
        } else {
          pageNum = currentPage - 2 + i;
        }

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === pageNum
                ? 'bg-[#00A19D] text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <span className="px-2">...</span>
      )}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-md disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
}