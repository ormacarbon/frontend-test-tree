import type { Metadata } from "next";
import "../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
