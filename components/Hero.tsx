
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, RAPPI_URL, BOTTLE_SIZE_ML } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-6 text-center">
          <h2 className="text-[#557C5C] text-xs md:text-sm font-extrabold uppercase tracking-[0.3em] opacity-90 font-secondary">
            Medellín | Cold-Pressed Premium
          </h2>
          <h1 className="text-5xl md:text-[96px] font-black tracking-tighter leading-[0.95] text-gradient italic font-heading">
            TU RESET SEMANAL<br />EMPIEZA AQUÍ
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed font-small">
            Jugos 100% cold-pressed hechos con ingredientes reales.{' '}
            <span className="text-[#1B1B1B] font-semibold">Sin agua añadida. Sin azúcar añadida. Sin relleno.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-widest text-zinc-600 font-secondary">
            <span className="px-4 py-2 rounded-full border border-black/10 bg-white/70">Entrega en Medellín (sujeta a disponibilidad)</span>
            <span className="px-4 py-2 rounded-full border border-black/10 bg-white/70">Pagos: Tarjeta · Bancolombia · Nequi</span>
            <span className="px-4 py-2 rounded-full border border-black/10 bg-white/70">PROMO SIX-PACK $99.000</span>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              className="bg-[#F4A9C0] text-[#1B1B1B] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-[#F4A9C0]/30"
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
