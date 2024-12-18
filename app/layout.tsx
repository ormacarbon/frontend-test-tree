import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Loading } from "./_components/loading";

const roboto = Roboto({
  weight: ["700", "300", "500"],
  variable: "--font-roboto",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Checkout Carbon",
  description: "Checkout para compensação de emissões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
