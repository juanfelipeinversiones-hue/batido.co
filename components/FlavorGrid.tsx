
import React from 'react';
import { FLAVORS, BOTTLE_SIZE_ML } from '../constants';

const FlavorGrid: React.FC = () => {
  return (
    <section id="sabores" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {FLAVORS.map((flavor, idx) => (
          <div 
            key={flavor.id} 
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group">
              <div className={`aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden ${flavor.bgColor} border border-white/5`}>
                <img 
                  src={flavor.imageUrl} 
                  alt={flavor.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-xl border border-black/10 px-6 py-2 rounded-full">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B1B1B]">Cold-Pressed Tech</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <span className={`${flavor.color} text-xs md:text-sm font-black uppercase tracking-[0.3em] font-secondary`}>
                {flavor.focus}
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none font-heading">
                {flavor.name}
              </h3>
              <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0 font-small">
                {flavor.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600 font-secondary">
                <span className="px-3 py-1 rounded-full border border-black/10 bg-white/70">{BOTTLE_SIZE_ML} ml</span>
                <span className="px-3 py-1 rounded-full border border-black/10 bg-white/70">Sin azúcar añadida</span>
                <span className="px-3 py-1 rounded-full border border-black/10 bg-white/70">Cold-Pressed</span>
              </div>
              <div className="pt-4 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-bold font-secondary">
                  Ingredientes
                </p>
                <p className="text-zinc-700 text-sm font-medium font-small">
                  {flavor.ingredients.join(', ')}
                </p>
                <a
                  href="#packs"
                  className="inline-flex items-center justify-center bg-[#557C5C] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#4b6f52] transition-colors shadow-xl shadow-[#557C5C]/20"
                >
                  Pedir mi Six-pack
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlavorGrid;
