
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, RAPPI_URL, BOTTLE_SIZE_ML } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-6 text-center">
          <h2 className="text-emerald-400 text-xs md:text-sm font-extrabold uppercase tracking-[0.3em] opacity-80">
            Medellín | Cold-Pressed Premium
          </h2>
          <h1 className="text-5xl md:text-[96px] font-black tracking-tighter leading-[0.95] text-gradient italic">
            TU RESET<br />SEMANAL
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Jugos 100% cold-pressed con ingredientes reales. Cada botella es de {BOTTLE_SIZE_ML} ml.{' '}
            <span className="text-white font-medium">Sin agua, sin azúcar añadida, sin excusas.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="px-4 py-2 rounded-full border border-white/10">Entrega sujeta a disponibilidad</span>
            <span className="px-4 py-2 rounded-full border border-white/10">Pagos: Nequi, Daviplata, tarjeta o efectivo</span>
            <span className="px-4 py-2 rounded-full border border-white/10">Promo Sickpack $99.900</span>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              className="bg-emerald-500 text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-emerald-500/20"
            >
              Pedir por WhatsApp
            </a>
            {RAPPI_URL && (
              <a
                href={RAPPI_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:border-emerald-400 hover:text-emerald-400 transition-colors"
              >
                Pedir por Rappi
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
