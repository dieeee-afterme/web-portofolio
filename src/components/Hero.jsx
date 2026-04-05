import React from 'react';
import { ArrowDownRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-dot-pattern" style={{ borderBottom: '1px solid #222', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="flex flex-col gap-4 max-w-2xl" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '42rem' }}>
          <div className="flex items-center gap-2 mb-6" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span className="p-1 bg-accent-red text-white text-[10px] font-bold uppercase tracking-widest" style={{ background: '#ff0032', padding: '0.25rem', color: 'white', fontSize: '10px', fontWeight: 'bold' }}>Active Now</span>
            <span className="text-accent text-[12px] font-fira tracking-widest" style={{ color: '#ff0032', fontSize: '12px', letterSpacing: '0.1rem' }}>v2.0.26_STABLE</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl leading-[0.9] font-black glitch-hover" style={{ fontSize: 'min(9rem, 15vw)', fontWeight: '900', lineHeight: 0.9, letterSpacing: '-0.05em' }}>
            CODE <br /> 
            <span className="text-accent" style={{ color: '#ff0032' }}>& MODS</span>
          </h1>
          
          <p className="text-xl text-dim max-w-sm mt-8 border-l-2 border-accent-red pl-6" style={{ fontSize: '1.25rem', color: '#888', maxWidth: '24rem', marginTop: '2rem', borderLeft: '2px solid #ff0032', paddingLeft: '1.5rem' }}>
            Fullstack Developer & Game Modder. Crafting digital experiences with Lua, React, and blood (mostly caffeine).
          </p>

          <div className="flex gap-4 mt-12" style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <a href="#projects" aria-label="View Projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest transition-all hover:bg-accent-red hover:text-white" style={{ background: 'white', color: 'black', padding: '1rem 2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.75rem', transform: 'skew(-5deg)' }}>
              Explore Work <ArrowDownRight size={20} className="group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#contact" aria-label="Contact Section" className="px-8 py-4 border-2 border-white/20 hover:border-accent-red transition-all" style={{ padding: '1rem 2rem', border: '2px solid rgba(255,255,255,0.2)', transition: 'all 0.3s' }}>
              REACH OUT
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Kanji */}
      <div className="kanji-bg top-20 right-20 rotate-12" style={{ top: '5rem', right: '5rem', transform: 'rotate(12deg)' }}>雅</div>
      <div className="kanji-bg bottom-20 left-20 -rotate-12 opacity-5" style={{ bottom: '5rem', left: '5rem', transform: 'rotate(-12deg)', opacity: 0.05 }}>龍</div>
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none" style={{ right: 0, top: 0, height: '100%', width: '33.33%', opacity: 0.2, backgroundImage: 'linear-gradient(45deg, transparent 50%, #ff0032 50%)', backgroundSize: '10px 10px' }}></div>
    </section>
  );
};

export default Hero;
