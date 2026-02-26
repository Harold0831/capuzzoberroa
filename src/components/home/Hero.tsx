"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Imagen de fondo con zoom sutil */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/home/hero-image.jpg"
          alt="Capuzzo & Berroa - La Justicia"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay con gradiente más sofisticado */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-green/90 via-brand-green/80 to-brand-green/95 z-0" />

      {/* Línea decorativa dorada superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-brand-gold z-10 origin-center mt-28"
      />

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10 mt-16">
        {/* Subtítulo superior elegante */}
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-body text-sm md:text-base text-brand-gold/80 tracking-[0.35em] uppercase mb-6"
        >
          Legal Studio
        </motion.span>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-brand-gold mb-8 leading-[1.1] max-w-5xl tracking-wide drop-shadow-lg"
        >
          La Excelencia <br />
          está en Cada Caso Legal
        </motion.h1>

        {/* Línea separadora dorada */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-16 h-px bg-brand-gold/60 mb-8"
        />

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-body text-lg md:text-xl text-brand-offwhite/90 mb-14 max-w-2xl leading-relaxed"
        >
          Protegemos su patrimonio y tranquilidad con estrategias jurídicas sólidas,
          brindando asesoría legal personalizada y de alto nivel.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Link
            href="/servicios"
            className="group relative bg-brand-gold text-brand-green font-body font-semibold text-base tracking-wider uppercase px-10 py-4 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(159,135,91,0.3)] rounded-sm"
          >
            <span className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500">
              Nuestros Servicios
            </span>
            <span className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
          <Link
            href="/#contacto"
            className="group relative border border-brand-gold/60 text-brand-gold font-body font-semibold text-base tracking-wider uppercase px-10 py-4 overflow-hidden transition-all duration-500 hover:border-brand-gold rounded-sm"
          >
            <span className="relative z-10 group-hover:text-brand-green transition-colors duration-500">
              Agendar Consulta
            </span>
            <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </div>

      {/* Indicador de scroll animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] text-brand-gold/50 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-brand-gold/40"
        />
      </motion.div>
    </section>
  );
}