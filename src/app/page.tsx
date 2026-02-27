import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-green flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Orbes decorativos */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Esquinas decorativas */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-brand-gold/20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-brand-gold/20" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Capuzzo & Berroa Legal Studio"
          width={320}
          height={120}
          className="w-64 md:w-80 h-auto object-contain mb-10 brightness-75 contrast-125"
          priority
        />

        <div className="w-16 h-px bg-brand-gold/50 mb-10" />

        <p className="font-body text-lg md:text-xl text-brand-beige/90 max-w-lg mx-auto leading-relaxed mb-12">
          Nuestra nueva experiencia digital está en desarrollo.
          <br />
          Pronto estaremos en línea para brindarle la mejor asesoría legal.
        </p>

        <div className="w-12 h-px bg-brand-gold/30 mb-10" />

        {/* Contacto temporal */}
        <div className="space-y-3">
          <p className="font-body text-sm text-brand-gray tracking-wider uppercase">
            Mientras tanto, contáctenos
          </p>
          <a
            href="mailto:info@capuzzoberroa.com"
            className="font-body text-brand-gold hover:text-brand-offwhite transition-colors duration-300 text-lg"
          >
            info@capuzzoberroa.com
          </a>
        </div>
      </div>

      {/* Footer mínimo */}
      <p className="absolute bottom-6 font-body text-xs text-brand-gray/50 tracking-wider">
        © {new Date().getFullYear()} Capuzzo & Berroa Legal Studio
      </p>
    </div>
  );
}