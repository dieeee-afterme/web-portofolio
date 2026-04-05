import React from 'react';
import { ArrowDownRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-dot-pattern flex items-center min-h-screen" style={{ borderBottom: '1px solid #222' }}>
      <div className="container relative z-10">
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-1 bg-accent-red text-white text-[10px] font-bold uppercase tracking-widest" style={{ background: '#ff0032', padding: '0.25rem' }}>Active Now</span>
            <span className="text-accent text-[12px] font-fira tracking-widest" style={{ color: '#ff0032' }}>v2.0.26_STABLE</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl leading-[0.9] font-black glitch-hover" style={{ fontWeight: '900', letterSpacing: '-0.05em' }}>
            CODE <br /> 
            <span className="text-accent" style={{ color: '#ff0032' }}>& MODS</span>
          </h1>
          
          <p className="text-xl text-dim max-w-sm mt-8 border-l-2 border-accent-red pl-6" style={{ color: '#888', borderLeft: '2px solid #ff0032' }}>
            Fullstack Developer & Game Modder. Crafting digital experiences with Lua, React, and blood (mostly caffeine).
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <a href="#projects" aria-label="View Projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest transition-all hover:bg-accent-red hover:text-white" style={{ background: 'white', color: 'black', transform: 'skew(-5deg)' }}>
              Explore Work <ArrowDownRight size={20} className="group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#contact" aria-label="Contact Section" className="px-8 py-4 border-2 border-white/20 hover:border-accent-red transition-all" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
              REACH OUT
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Kanji */}
      <div className="kanji-bg top-20 right-20 rotate-12 md-flex" style={{ position: 'absolute', top: '5rem', right: '5rem', transform: 'rotate(12deg)' }}>雅</div>
      <div className="kanji-bg bottom-20 left-20 -rotate-12 opacity-5 hidden md-flex" style={{ position: 'absolute', bottom: '5rem', left: '5rem', transform: 'rotate(-12deg)', opacity: 0.05 }}>龍</div>
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none md-flex" style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #ff0032 50%)', backgroundSize: '10px 10px' }}></div>
    </section>
  );
};

export default Hero;
