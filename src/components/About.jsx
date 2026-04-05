import React from 'react';
import { Terminal, Shield, Cpu, CodeXml } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-bg-secondary relative py-32" style={{ background: '#0a0a0a', padding: '8rem 0' }}>
      <div className="container relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Terminal className="text-accent" style={{ color: '#ff0032' }} />
              <h2 className="text-4xl font-black italic tracking-tighter" style={{ fontSize: '2.25rem', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-0.05em' }}>BIO<span className="text-accent" style={{ color: '#ff0032' }}>.EXE</span></h2>
            </div>
            
            <p className="text-lg text-dim leading-relaxed mb-6" style={{ fontSize: '1.125rem', color: '#888', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              I'm David—better known in the scene as <span className="text-accent" style={{ color: '#ff0032' }}>dieeee-afterme</span>. I don't just write code; I build digital ecosystems.
            </p>
            
            <p className="text-lg text-dim leading-relaxed mb-6" style={{ fontSize: '1.125rem', color: '#888', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Operating at the intersection of game development, community architecture, and visual design. Whether it's writing clean, optimized Lua scripts for FiveM (Qbox), crafting sleek web interfaces with React, or engineering complex, high-tier Discord servers from the ground up, my focus is always on precision and aesthetic.
            </p>

            <p className="text-lg text-dim leading-relaxed mb-8" style={{ fontSize: '1.125rem', color: '#888', lineHeight: 1.6, marginBottom: '2rem' }}>
              No boilerplate. No messy setups. Just sharp logic, dark aesthetics, and systems built to run flawlessly. If you need a developer who understands both the raw code and the community culture, you're in the right place.
            </p>

            <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {[
                { icon: <Shield size={18} />, label: 'Cyber Sec', color: 'accent-cyan' },
                { icon: <Cpu size={18} />, label: 'Hardware', color: 'accent-red' },
                { icon: <CodeXml size={18} />, label: 'Automation', color: 'accent-cyan' },
                { icon: <Terminal size={18} />, label: 'DevOps', color: 'accent-red' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-bg-tertiary border border-white/5 hover:border-accent-red/50 transition-all" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'all 0.3s' }}>
                  <span className={`text-${item.color}`} style={{ color: item.color === 'accent-cyan' ? '#00f5ff' : '#ff0032' }}>{item.icon}</span>
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" style={{ position: 'relative' }}>
            <div className="absolute -inset-1 bg-accent-red blur opacity-25 group-hover:opacity-50 transition-opacity" style={{ position: 'absolute', top: '-1px', bottom: '-1px', left: '-1px', right: '-1px', background: '#ff0032', filter: 'blur(8px)', opacity: 0.25, transition: 'opacity 0.3s', borderRadius: '4px' }}></div>
            <div className="bg-black border-2 border-white/10 p-2 relative" style={{ background: 'black', border: '2px solid rgba(255,255,255,0.1)', padding: '0.5rem', position: 'relative' }}>
              <div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden relative" style={{ aspectRatio: '1 / 1', background: '#18181b', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="Cyberpunk inspired creative workspace with glowing monitors representing David's setup" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.7s' }} />
                <div className="absolute bottom-0 left-0 p-4 bg-accent-red text-white font-bold" style={{ position: 'absolute', bottom: 0, left: 0, padding: '1rem', background: '#ff0032', color: 'white', fontWeight: 'bold' }}>
                  <span className="text-xs uppercase tracking-tighter" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Established</span>
                  <br /> <span className="text-xl" style={{ fontSize: '1.25rem' }}>2024</span>
                </div>
              </div>
            </div>
            
            {/* Floating Kanji */}
            <div className="kanji-bg -bottom-10 -right-10 text-8xl" style={{ position: 'absolute', bottom: '-2.5rem', right: '-2.5rem', fontSize: '5rem', opacity: 0.1 }}>力</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
