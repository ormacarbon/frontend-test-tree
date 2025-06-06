"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Loading() {
  const [currentSpinner, setCurrentSpinner] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpinner((prev) => (prev % 4) + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-[-25px] bg-black bg-opacity-30 flex items-center justify-center">
      <div className="w-20 h-20">
        <Image
          src={`/cicularSpinner-${currentSpinner}.svg`}
          alt="Loading"
          width={80}
          height={80}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}