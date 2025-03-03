import './globals.css'

import type { Metadata } from "next";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "devstore",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${inter.variable}`}>
      <body className='bg-zinc-950 text-zinc-50 antialiased'>{children}</body>
    </html>
  );
}
