export default function Home() {
  return (
    <div className="min-h-screen bg-brand-green flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Brillo de fondo elegante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h1 className="font-heading text-4xl md:text-6xl text-brand-gold mb-6 tracking-wider">
          CAPUZZO & BERROA
        </h1>
        <p className="font-heading text-xl md:text-2xl text-brand-offwhite mb-4 italic">
          Firma de Abogados
        </p>
        
        <div className="w-16 h-1 bg-brand-gold mx-auto mb-8"></div>
        
        <h2 className="font-body text-lg md:text-xl text-brand-beige max-w-md mx-auto leading-relaxed">
          Nuestra nueva experiencia digital está en desarrollo. <br/>
          Pronto estaremos en línea para brindarle la mejor asesoría legal.
        </h2>
      </div>
    </div>
  );
}