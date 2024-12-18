import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["700", "300", "500"],
  variable: "--font-roboto",
  subsets: ["latin-ext"],
});

export const robotoCondensed = Roboto_Condensed({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
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
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
