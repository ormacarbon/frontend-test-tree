import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-roboto",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Checkout Carbon",
  description: "Challenge Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
