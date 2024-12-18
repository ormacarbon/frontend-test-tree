import React from 'react';
import { roboto500 } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto500.className} antialiased`}>{children}</body>
    </html>
  )
}