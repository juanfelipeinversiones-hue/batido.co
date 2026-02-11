
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, RAPPI_URL, BOTTLE_SIZE_ML } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-emerald-400 text-xs md:text-sm font-extrabold uppercase tracking-[0.3em] opacity-80">
            Medellín | Cold-Pressed Premium
          </h2>
          <h1 className="text-5xl md:text-[96px] font-black tracking-tighter leading-[0.95] text-gradient italic">
            TU RESET<br />SEMANAL
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Jugos 100% cold-pressed con ingredientes reales. Cada botella es de {BOTTLE_SIZE_ML} ml.{' '}
            <span className="text-white font-medium">Sin agua, sin azúcar añadida, sin excusas.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="px-4 py-2 rounded-full border border-white/10">Entrega sujeta a disponibilidad</span>
            <span className="px-4 py-2 rounded-full border border-white/10">Pagos: Nequi, Daviplata, tarjeta o efectivo</span>
            <span className="px-4 py-2 rounded-full border border-white/10">Promo Sickpack $99.900</span>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

        <div className="relative w-full flex justify-center">
          <div className="w-full max-w-[360px] group">
            <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden smooth-shadow border border-white/10 relative bg-black">
              <video
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://i.postimg.cc/15wsnXfN/Whats-App-Image-2026-02-07-at-10-58-03-PM-(1).jpg"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Reel oficial</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Batido.</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              Desliza · Mira · Compra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
