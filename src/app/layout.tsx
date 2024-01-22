import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offshorly - BlogPost",
  description: "A simple CRUD app created with ReactJS and NodeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col items-center text-black bg-slate-200 h-screen w-full ${inter.className}`} >{children}</body>
    </html>
  );
}
