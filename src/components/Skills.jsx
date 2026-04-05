import React from 'react';
import { Database, Code, Globe, MessageSquare, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Lua / FiveM', level: 90, icon: <Database size={24} />, desc: 'Custom scripts, Qbox, ESX integration', kanji: '月' },
    { name: 'React / Web', level: 85, icon: <Code size={24} />, desc: 'Modern SPAs, Vite, Tailwind, UI/UX', kanji: '網' },
    { name: 'Discord Setup', level: 95, icon: <MessageSquare size={24} />, desc: 'Bot dev, Server architecture, Security', kanji: '談' },
    { name: 'DevOps / Linux', level: 75, icon: <Cpu size={24} />, desc: 'Docker, VPS management, Nginx', kanji: '機' },
  ];

  return (
    <section id="skills" className="relative py-32" style={{ padding: '8rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="text-center mb-24" style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="text-5xl font-black mb-4 tracking-widest" style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '0.1rem' }}>ARSENAL<span className="text-accent" style={{ color: '#ff0032' }}>.DIR</span></h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-6" style={{ width: '6rem', height: '0.25rem', background: '#ff0032', margin: '0 auto 1.5rem' }}></div>
          <p className="text-dim max-w-lg mx-auto" style={{ color: '#888', maxWidth: '32rem', margin: '0 auto' }}>A specialized toolkit for digital creation and server infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {skills.map((skill, i) => (
            <div key={i} className="group relative p-8 bg-bg-secondary border border-white/5 hover:border-accent-red transition-all duration-500 overflow-hidden" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', padding: '2rem', transition: 'all 0.5s', overflow: 'hidden' }}>
              <div className="absolute top-0 right-0 p-4 text-accent/10 font-black text-6xl group-hover:text-accent/20 transition-all" style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', color: 'rgba(255,0,50,0.1)', fontWeight: '900', fontSize: '3.75rem', transition: 'all 0.3s' }}>
                {skill.kanji}
              </div>
              
              <div className="mb-6 p-3 bg-bg-tertiary w-fit text-accent" style={{ background: '#111', padding: '0.75rem', width: 'fit-content', color: '#ff0032', marginBottom: '1.5rem' }}>{skill.icon}</div>
              
              <h3 className="text-xl font-bold mb-2 uppercase" style={{ fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{skill.name}</h3>
              <p className="text-sm text-dim mb-8" style={{ fontSize: '0.875rem', color: '#888', marginBottom: '2rem' }}>{skill.desc}</p>
              
              <div className="w-full bg-white/5 h-1 relative" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '0.25rem', position: 'relative' }}>
                <div 
                  className="h-full bg-accent-red group-hover:bg-accent-cyan transition-all duration-1000" 
                  style={{ width: `${skill.level}%`, height: '100%', background: '#ff0032', transition: 'all 1s' }}
                ></div>
                <div className="absolute -top-6 right-0 text-[10px] font-fira text-dim" style={{ position: 'absolute', top: '-1.5rem', right: 0, fontSize: '10px', color: '#888' }}>{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated Banner */}
        <div className="mt-24 border-y border-white/5 py-4 overflow-hidden" style={{ marginTop: '6rem', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0' }}>
          <div className="flex gap-12 whitespace-nowrap animate-marquee" style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}>
             {[...Array(5)].map((_, i) => (
               <span key={i} className="text-4xl font-black text-white/5 italic flex items-center gap-4" style={{ fontSize: '2.25rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 OPTIMIZED <Zap size={24} /> PERFORMANCE <Zap size={24} /> SCALABLE <Zap size={24} />
               </span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
