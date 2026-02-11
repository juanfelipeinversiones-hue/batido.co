import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em]">Reseñas reales</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter">Clientes que repiten</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Experiencias de Medellín y otros lugares. Lo que más se repite: sabor real, frescura y energía.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={`${item.name}-${item.city}`}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 text-emerald-400">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <svg
                    key={`${item.name}-star-${idx}`}
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.114 3.431a1 1 0 00.95.69h3.61c.969 0 1.371 1.24.588 1.81l-2.922 2.123a1 1 0 00-.364 1.118l1.115 3.431c.3.921-.755 1.688-1.538 1.118l-2.922-2.123a1 1 0 00-1.176 0l-2.922 2.123c-.783.57-1.838-.197-1.538-1.118l1.115-3.431a1 1 0 00-.364-1.118L2.98 8.858c-.783-.57-.38-1.81.588-1.81h3.61a1 1 0 00.95-.69l1.114-3.431z" />
                  </svg>
                ))}
              </div>

              <p className="text-zinc-200 text-lg font-medium leading-relaxed">“{item.quote}”</p>

              <div className="mt-auto flex items-center justify-between text-sm">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-zinc-500">{item.city}</p>
                </div>
                {item.result && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-black">
                    {item.result}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
