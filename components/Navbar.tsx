
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-nav h-20 flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-tighter font-brand">
          Batido<span className="text-[#557C5C]">.</span>
        </a>
        <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-600 uppercase tracking-widest">
          <a href="#sabores" className="hover:text-[#557C5C] transition-colors">Sabores</a>
          <a href="#nosotros" className="hover:text-[#557C5C] transition-colors">Proceso</a>
          <a href="#packs" className="hover:text-[#557C5C] transition-colors">Sickpack</a>
        </div>
        <a 
          href="#packs" 
          className="bg-[#557C5C] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#4b6f52] transition-colors"
        >
          Pedir ahora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
