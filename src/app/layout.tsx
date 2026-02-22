import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "@/components/layout/Header";

// 1. Fuente para Títulos
const mitchaella = localFont({
  src: "../fonts/mitchaella-modern-Free.ttf",
  variable: "--font-mitchaella",
  display: 'swap',
});

// 2. Fuente para Textos
const madeEvolve = localFont({
  src: "../fonts/made-evolve-sans-regular.otf",
  variable: "--font-made-evolve",
  display: 'swap',
});

// 3. SEO Básico 
export const metadata: Metadata = {
  title: "Capuzzo & Berroa | Legal Studio",
  description: "Firma de abogados expertos brindando soluciones legales de excelencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        // Las variables CSS de las fuentes se inyectan aquí para que estén disponibles en todo el DOM
        className={`${mitchaella.variable} ${madeEvolve.variable} bg-brand-offwhite text-brand-green antialiased`}
      >
       {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}