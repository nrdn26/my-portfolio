import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuredin Bajrami - Portfolio",
  description: "Computer Science Student at JKU Linz | Specializing in Networks, Cloud Computing & Cybersecurity",
  keywords: ["Nuredin Bajrami", "Portfolio", "JKU", "Computer Science", "Austria"],
  authors: [{ name: "Nuredin Bajrami" }],
  openGraph: {
    title: "Nuredin Bajrami - Portfolio",
    description: "Computer Science Student at JKU Linz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
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