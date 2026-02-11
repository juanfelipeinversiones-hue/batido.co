
import React, { useState } from 'react';
import { FAQS, INSTAGRAM_REELS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const FAQInstagram: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32">
        {/* FAQ Section */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-[#557C5C] text-xs font-black uppercase tracking-[0.4em] font-secondary">Resuelve tus dudas</h2>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter font-heading">Preguntas frecuentes</h3>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-[2rem] border transition-all duration-300 ${
                  openIndex === idx ? 'bg-white/80 border-black/20' : 'bg-white/60 border-black/10 hover:border-black/20'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-8 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-lg tracking-tight font-heading">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-8 pb-8 text-zinc-600 font-light leading-relaxed font-small">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-[#557C5C] text-xs font-black uppercase tracking-[0.4em] font-secondary">@batido_co</h2>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter italic font-heading">Vida real.</h3>
            <p className="text-zinc-600 max-w-md font-small">
              Así se ve nuestro Instagram. Reels reales, sin filtros raros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTAGRAM_REELS.map((url, idx) => (
              <div key={url} className="rounded-[2.5rem] border border-black/10 bg-white/80 p-4">
                <div className="flex items-center justify-between px-2 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-emerald-400 p-[2px]">
                      <div className="w-full h-full rounded-full bg-[#b8d79c] flex items-center justify-center">
                        <span className="text-[9px] font-black font-brand text-[#3e5b3f] tracking-tight">batido</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold">@batido_co</p>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Reel</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Instagram</span>
                </div>
                <div className="rounded-2xl overflow-hidden bg-black h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px]">
                  <iframe
                    src={`${url}embed`}
                    title={`Reel Batido ${idx + 1}`}
                    className="w-full h-full"
                    scrolling="no"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 0, overflow: 'hidden' }}
                  />
                </div>
                <div className="pt-3 px-2 flex items-center justify-between text-zinc-500 text-xs">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.716-4.353-9.33-7.008C.768 12.17.3 9.528 2.05 7.71 3.8 5.894 6.5 6.02 8.05 7.57L12 11.52l3.95-3.95c1.55-1.55 4.25-1.676 6-0.86 1.75 1.818 1.282 4.46-.62 6.282C18.716 16.647 12 21 12 21z" /></svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h4l4 4 4-4h4a2 2 0 002-2V6a2 2 0 00-2-2z" /></svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 2L2 11l7 2 2 7 11-18z" /></svg>
                  </div>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12a1 1 0 011 1v19l-7-4-7 4V3a1 1 0 011-1z" /></svg>
                </div>
                <div className="px-2 pt-2 pb-4 text-[11px] text-zinc-600">
                  {idx === 0 ? '2.1k Me gusta' : '1.6k Me gusta'}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
            <a
              href="https://www.instagram.com/batido_co/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-[#557C5C] pb-2 hover:text-[#557C5C] transition-colors"
            >
              Síguenos en Instagram
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black/20 pb-2 hover:text-[#557C5C] transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQInstagram;
