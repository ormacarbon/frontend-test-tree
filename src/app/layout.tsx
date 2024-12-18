import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});
const condensedRoboto = Roboto_Condensed({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Checkout Carbon",
  description: "Checkout for compensation of carbon",
  icons: { icon: { url: "/images/favicon.png", href: "/images/favicon.png" } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${condensedRoboto.style} antialiased transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
