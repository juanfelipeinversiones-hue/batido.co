
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorGrid from './components/FlavorGrid';
import ValueProp from './components/ValueProp';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Packs from './components/Packs';
import FAQInstagram from './components/FAQInstagram';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <FlavorGrid />
        <ValueProp />
        <HowItWorks />
        <Testimonials />
        <Packs />
        <FAQInstagram />
      </main>

      <footer className="py-20 px-6 border-t border-zinc-100 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter font-brand">Batido.</h2>
          <p className="text-zinc-600 text-sm max-w-sm mx-auto font-small">
            Hecho con amor en el corazón de Medellín. Ingredientes 100% naturales, procesos honestos.
          </p>
          <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-600 font-secondary">
            <span>Términos</span>
            <span>Privacidad</span>
            <span>Cookies</span>
          </div>
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium pt-8 font-secondary">
            © {new Date().getFullYear()} BATIDO COLD-PRESSED. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
