import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[#557C5C] text-xs font-black uppercase tracking-[0.4em] font-secondary">Compra fácil</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter font-heading">Así pides tu Six-pack</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Elige tu pack',
              desc: 'Selecciona el Six-pack y los sabores que más se ajustan a tu objetivo.'
            },
            {
              title: 'Confirma por WhatsApp',
              desc: 'Te escribimos para confirmar disponibilidad, dirección y tiempo estimado.'
            },
            {
              title: 'Recibe en Medellín',
              desc: 'Pagas con el método que prefieras y recibes en tu puerta.'
            }
          ].map((step, idx) => (
            <div key={step.title} className="rounded-[2.5rem] border border-black/10 bg-white/80 p-8">
              <div className="text-[#557C5C] text-sm font-black uppercase tracking-[0.3em] font-secondary">
                Paso {idx + 1}
              </div>
              <h4 className="text-2xl font-black tracking-tight mt-4 font-heading">{step.title}</h4>
              <p className="text-zinc-600 text-sm font-light leading-relaxed mt-3 font-small">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 flex justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            className="bg-[#F4A9C0] text-[#1B1B1B] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-[#F4A9C0]/30"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
