
import React from 'react';

const ValueProp: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 sm:py-32 lg:py-40 px-6 bg-[#EAEDE2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-[#557C5C] text-xs font-black uppercase tracking-[0.5em] font-secondary">Hecho en Medellín</h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] font-heading">Puro.<br />Fresco.<br />Potente.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: '0% Relleno', desc: 'Sin agua añadida. Sin azúcar añadida.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Cold-Pressed', desc: 'Extracción en frío para mantener sabor y frescura.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                { title: 'Ingredientes Reales', desc: 'Manzana, limón, remolacha, zanahoria y más.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
                { title: 'Entrega Medellín', desc: 'Confirmamos disponibilidad y tiempos por WhatsApp.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
              ].map((item, i) => (
                <div key={i} className="group space-y-4">
                  <div className="w-10 h-10 bg-white/80 border border-black/10 rounded-xl flex items-center justify-center text-[#557C5C] group-hover:bg-[#557C5C] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
                  </div>
                  <h4 className="text-xl font-black tracking-tight font-heading">{item.title}</h4>
                  <p className="text-zinc-600 text-sm font-light leading-relaxed font-small">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden smooth-shadow grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
                <video
                  className="w-full h-full object-cover scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://i.postimg.cc/Ls6J3L1x/Captura-de-pantalla-2026-02-10-203018.png"
                >
                  <source src="/videos/medellin.mp4" type="video/mp4" />
                </video>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-emerald-500 text-black p-12 rounded-[3rem] hidden lg:block shadow-2xl">
                <p className="text-2xl font-black tracking-tighter leading-none italic uppercase">Tu mejor<br />versión,<br />embotellada.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
