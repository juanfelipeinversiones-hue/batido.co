import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-[#557C5C] text-xs font-black uppercase tracking-[0.4em] font-secondary">Compra directa y simple</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter font-heading">
            Escríbenos por WhatsApp y listo
          </h3>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-zinc-600 text-lg font-small">
              El Six-pack incluye 6 botellas de 400 ml. Puedes combinarlas como quieras.
            </p>
            <p className="text-zinc-600 text-sm font-small">
              Precio promo: <span className="font-secondary text-[#557C5C]">$99.000 COP</span> · Precio regular: $119.000
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                className="bg-[#F4A9C0] text-[#1B1B1B] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-[#F4A9C0]/30"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[2.5rem] border border-black/10 bg-white/80 p-4 smooth-shadow">
              <img
                src="https://i.postimg.cc/tJYjdNkY/2.png"
                alt="Six-pack con sabores variados"
                className="w-full max-w-[420px] rounded-[2rem] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
