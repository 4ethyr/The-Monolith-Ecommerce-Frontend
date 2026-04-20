import type { Metadata } from "next";
import { Noto_Serif, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Configuração da fonte para Headlines (Títulos)
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

// Configuração da fonte para Body (Corpos de texto)
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Configuração da fonte para Labels (Rótulos)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seu Projeto",
  description: "Descrição do seu projeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${notoSerif.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      {/* Definimos "font-sans" como padrão aqui, que no tailwind será a Manrope */}
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}