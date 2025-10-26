// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider"; // <-- Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuredin Bajrami - Portfolio", // You can change this
  description: "My personal portfolio website.", // You can change this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* <-- Add suppressHydrationWarning */}
      <body className={inter.className}>
        <ThemeProvider // <-- Wrap your children
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}