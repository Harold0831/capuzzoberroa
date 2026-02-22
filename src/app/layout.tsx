import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/layout/Footer";

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
    <html lang="es" className="scroll-smooth"> {/* Agregué scroll-smooth para enlaces ancla */}
      <body
        className={`${mitchaella.variable} ${madeEvolve.variable} font-body bg-brand-offwhite text-brand-green antialiased flex flex-col min-h-screen`}
      >
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        <WhatsAppButton />
        
      </body>
    </html>
  );
}