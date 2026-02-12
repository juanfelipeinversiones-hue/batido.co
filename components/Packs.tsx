
import React from 'react';
import { PACKS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, RAPPI_URL } from '../constants';

const Packs: React.FC = () => {
  return (
    <section id="packs" className="py-28 sm:py-36 lg:py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-[#557C5C] text-xs font-black uppercase tracking-[0.4em] font-secondary">Promo Medellín</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter font-heading">Six-pack Batido</h3>
          <p className="text-zinc-600 max-w-2xl mx-auto font-small">
            6 botellas de 400 ml. Combina sabores como quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {PACKS.map((pack) => (
            <div 
              key={pack.id} 
              className={`relative p-8 sm:p-10 md:p-12 rounded-[3.5rem] border transition-all duration-500 flex flex-col overflow-hidden group ${
                pack.isPopular 
                  ? 'bg-white/90 border-[#557C5C]/40 md:scale-105 shadow-[0_20px_60px_-25px_rgba(85,124,92,0.35)]' 
                  : 'bg-white/80 border-black/10 hover:border-black/20'
              }`}
            >
              {pack.isPopular && (
                <div className="absolute top-0 right-0 bg-[#557C5C] text-white px-8 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest">
                  Mejor Oferta
                </div>
              )}

              <div className="space-y-6 mb-12">
                <h4 className="text-3xl font-black tracking-tight font-heading">{pack.name}</h4>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed font-small">{pack.description}</p>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-5xl font-black tracking-tighter">{pack.price}</span>
                  <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">COP</span>
                  {pack.compareAt && (
                    <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest line-through">
                      {pack.compareAt}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600 font-secondary">
                  <span className="px-3 py-1 rounded-full border border-black/10 bg-white/70">{pack.sizeMl} ml por botella</span>
                  <span className="px-3 py-1 rounded-full border border-black/10 bg-white/70">So Green · Summer Glow · Full Recovery</span>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-black/10 space-y-6">
                <button 
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank')}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 ${
                    pack.isPopular 
                      ? 'bg-[#F4A9C0] text-[#1B1B1B] hover:scale-[1.02] shadow-lg shadow-[#F4A9C0]/30' 
                      : 'bg-[#F4A9C0] text-[#1B1B1B] hover:bg-[#ee9db7]'
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
                <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest font-black font-secondary">
                  {pack.availabilityNote}
                </p>
                <p className="text-center text-[9px] text-zinc-600 uppercase tracking-widest font-black flex items-center justify-center gap-2 font-secondary">
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
