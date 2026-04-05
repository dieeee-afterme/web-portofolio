import React from 'react';
import { User, CodeXml, Terminal, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-secondary">
      <div className="container">
        <div className="grid md-flex gap-24 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-8" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div className="w-12 h-[2px] bg-accent-red" style={{ width: '3rem', height: '2px', background: '#ff0032' }}></div>
              <span className="text-accent uppercase tracking-widest font-bold text-sm" style={{ color: '#ff0032', textTransform: 'uppercase', fontSize: '0.875rem' }}>BIO.EXE</span>
            </div>
            
            <h2 className="text-6xl font-black mb-12 tracking-tighter" style={{ fontSize: '3.75rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '3rem' }}>SUITS <span className="text-accent" style={{ color: '#ff0032' }}>& INK.</span></h2>
            
            <p className="text-lg text-dim leading-relaxed mb-6" style={{ color: '#888', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              I'm David—better known in the scene as <span className="text-accent" style={{ color: '#ff0032' }}>dieeee-afterme</span>. I don't just write code; I build digital ecosystems.
            </p>
            
            <p className="text-lg text-dim leading-relaxed mb-6" style={{ color: '#888', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Operating at the intersection of game development, community architecture, and visual design. Whether it's writing clean, optimized Lua scripts for FiveM (Qbox), crafting sleek web interfaces with React, or engineering complex, high-tier Discord servers from the ground up, my focus is always on precision and aesthetic.
            </p>

            <p className="text-lg text-dim leading-relaxed mb-8" style={{ color: '#888', lineHeight: 1.6, marginBottom: '2rem' }}>
              No boilerplate. No messy setups. Just sharp logic, dark aesthetics, and systems built to run flawlessly. If you need a developer who understands both the raw code and the community culture, you're in the right place.
            </p>

            <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div className="p-4 border border-white/5 bg-black/40" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}>
                <span className="block text-accent font-bold mb-1" style={{ color: '#ff0032', fontWeight: 'bold' }}>100+</span>
                <span className="text-[10px] uppercase text-dim tracking-widest" style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Scripts Written</span>
              </div>
              <div className="p-4 border border-white/5 bg-black/40" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}>
                <span className="block text-accent font-bold mb-1" style={{ color: '#ff0032', fontWeight: 'bold' }}>50+</span>
                <span className="text-[10px] uppercase text-dim tracking-widest" style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Servers Built</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative group mx-auto md:mx-0 max-w-md w-full">
            <div className="absolute -inset-1 bg-accent-red blur opacity-25 group-hover:opacity-50 transition-opacity" style={{ position: 'absolute', top: '-1px', bottom: '-1px', left: '-1px', right: '-1px', background: '#ff0032', filter: 'blur(8px)', opacity: 0.25 }}></div>
            <div className="bg-black border-2 border-white/10 p-2 relative">
              <div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden relative" style={{ aspectRatio: '1 / 1' }}>
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="Cyberpunk inspired creative workspace with glowing monitors representing David's setup" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-4 bg-accent-red text-white font-bold" style={{ background: '#ff0032' }}>
                  <span className="text-xs uppercase tracking-tighter" style={{ fontSize: '0.75rem' }}>Established</span>
                  <br /> <span className="text-xl" style={{ fontSize: '1.25rem' }}>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
