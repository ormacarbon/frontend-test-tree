"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from "./_components/loading";

export default function Home() {
  const { push } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      push("/checkout?co2=1&cred=2");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [push]);

  if (loading) {
    return <Loading />;
  }

  return null;
}
