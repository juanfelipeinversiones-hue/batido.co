
import React from 'react';
import { PACKS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, RAPPI_URL } from '../constants';

const Packs: React.FC = () => {
  return (
    <section id="packs" className="py-28 sm:py-36 lg:py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em]">Promo Medellín</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter">Sickpack Batido</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Precio especial por tiempo limitado. Confirmamos disponibilidad y tiempos por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {PACKS.map((pack) => (
            <div 
              key={pack.id} 
              className={`relative p-8 sm:p-10 md:p-12 rounded-[3.5rem] border transition-all duration-500 flex flex-col overflow-hidden group ${
                pack.isPopular 
                  ? 'bg-gradient-to-br from-zinc-800 to-zinc-900 border-emerald-500/50 md:scale-105 shadow-[0_0_80px_-15px_rgba(52,211,153,0.15)]' 
                  : 'bg-zinc-900/40 border-white/5 hover:border-white/20'
              }`}
            >
              {pack.isPopular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-black px-8 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest">
                  Mejor Oferta
                </div>
              )}

              <div className="space-y-6 mb-12">
                <h4 className="text-3xl font-black tracking-tight">{pack.name}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{pack.description}</p>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-5xl font-black tracking-tighter">{pack.price}</span>
                  <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">COP</span>
                  {pack.compareAt && (
                    <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest line-through">
                      {pack.compareAt}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <span className="px-3 py-1 rounded-full border border-white/10">{pack.sizeMl} ml por botella</span>
                  <span className="px-3 py-1 rounded-full border border-white/10">So Green · Summer Glow · Full Recovery</span>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
                <button 
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank')}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 ${
                    pack.isPopular 
                      ? 'bg-emerald-500 text-black hover:scale-[1.02] shadow-lg shadow-emerald-500/20' 
                      : 'bg-white text-black hover:bg-emerald-400'
                  }`}
                >
                  {pack.cta}
                </button>
                {RAPPI_URL && (
                  <a
                    href={RAPPI_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] border border-white/15 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors"
                  >
                    Pedir por Rappi
                  </a>
                )}
                <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-black">
                  {pack.availabilityNote}
                </p>
                <p className="text-center text-[9px] text-zinc-600 uppercase tracking-widest font-black flex items-center justify-center gap-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Pagos por WhatsApp y entrega local
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packs;
