import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em]">Compra fácil</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">Así pides tu Sickpack</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Elige tu pack',
              desc: 'Selecciona el Sickpack y los sabores que más se ajustan a tu objetivo.'
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
            <div key={step.title} className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
              <div className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">
                Paso {idx + 1}
              </div>
              <h4 className="text-2xl font-black tracking-tight mt-4">{step.title}</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mt-3">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 flex justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            className="bg-emerald-500 text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-emerald-500/20"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
