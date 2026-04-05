import React from 'react';
import { Database, Layout, Shield, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Lua / Qbox', level: 95, icon: <Cpu size={20} />, color: '#ff0032' },
    { name: 'React / Web', level: 85, icon: <Layout size={20} />, color: '#00f5ff' },
    { name: 'Discord Setup', level: 90, icon: <Shield size={20} />, color: '#ff0032' },
    { name: 'SQL / Databases', level: 80, icon: <Database size={20} />, color: '#00f5ff' },
  ];

  return (
    <section id="skills" className="relative">
      <div className="container">
        <div className="grid md-flex gap-24" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
          {/* Section Header */}
          <div>
            <h2 className="text-6xl font-black mb-8 tracking-tighter" style={{ fontWeight: '900', letterSpacing: '-0.05em' }}>ARSENAL<span className="text-accent" style={{ color: '#ff0032' }}>_</span></h2>
            <p className="text-dim text-lg mb-12" style={{ color: '#888' }}>
              My technical stack is built for performance and precision. Specialized in FiveM infrastructure and modern full-stack environments.
            </p>
            
            <div className="bg-bg-secondary p-8 border-brutal" style={{ background: '#0a0a0a', padding: '2rem', border: '2px solid #f0f0f0', boxShadow: '4px 4px 0 #ff0032' }}>
              <p className="text-sm font-fira text-accent-cyan mb-4" style={{ color: '#00f5ff' }}>// CURRENT_STATUS: OPTIMIZING</p>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Vite', 'PostgreSQL', 'OxLib', 'Git', 'Figma'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest hover:border-accent-red transition-colors" style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', fontSize: '10px', textTransform: 'uppercase' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-10" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-accent" style={{ color: skill.color }}>{skill.icon}</span>
                    <span className="font-bold uppercase tracking-widest text-sm" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{skill.name}</span>
                  </div>
                  <span className="font-fira text-dim text-xs" style={{ color: '#888', fontSize: '0.75rem' }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 relative overflow-hidden" style={{ height: '0.5rem', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                  <div 
                    className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out group-hover:brightness-125"
                    style={{ 
                      width: `${skill.level}%`, 
                      background: `linear-gradient(90deg, ${skill.color}, #ffffff50)`,
                      boxShadow: `0 0 10px ${skill.color}50`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="mt-32 border-y border-white/5 py-6 overflow-hidden bg-accent-red/5">
        <div className="animate-marquee whitespace-nowrap flex gap-12" style={{ display: 'flex', gap: '3rem' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-black text-white/5 uppercase tracking-widest" style={{ fontSize: '2.25rem', fontWeight: '900', opacity: 0.05 }}>Precision & Logic // Systems Architecture // Built to Last</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
