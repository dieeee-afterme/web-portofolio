import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Neon Drift v3',
      category: 'Lua / FiveM',
      desc: 'High-performance vehicle handling and custom drift mechanics for Qbox servers.',
      tags: ['Lua', 'Optimization', 'Qbox'],
      img: '/assets/neon_drift.png',
    },
    {
      title: 'Aether Hub',
      category: 'React / Web',
      desc: 'Next-gen dashboard for server management with real-time analytics.',
      tags: ['React', 'WebSocket', 'Node.js'],
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SecureNet Bot',
      category: 'Discord / Security',
      desc: 'Advanced moderation bot with automated threat detection and logging.',
      tags: ['Discord.js', 'Redis', 'Python'],
      img: '/assets/securenet.png',
    },
    {
      title: 'Glitch UI Kit',
      category: 'UI / Design',
      desc: 'A collection of edgy, cyberpunk-inspired UI components for web apps.',
      tags: ['Figma', 'CSS', 'Design'],
      img: '/assets/glitch_ui.png',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-bg-secondary" style={{ background: '#0a0a0a', padding: '8rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', gap: '2rem' }}>
          <div className="max-w-xl" style={{ maxWidth: '36rem' }}>
            <h2 className="text-6xl font-black mb-6 tracking-tighter" style={{ fontSize: '3.75rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '1.5rem' }}>PROJECTS<span className="text-accent" style={{ color: '#ff0032' }}>_LIST</span></h2>
            <p className="text-dim text-lg" style={{ color: '#888', fontSize: '1.125rem' }}>A selection of recent works spanning across game modding, web development, and digital tools.</p>
          </div>
          <button className="px-8 py-4 bg-transparent border-2 border-accent-red text-accent-red font-bold hover:bg-accent-red hover:text-white transition-all uppercase" style={{ padding: '1rem 2rem', background: 'transparent', border: '2px solid #ff0032', color: '#ff0032', fontWeight: 'bold', transition: 'all 0.3s', textTransform: 'uppercase' }}>
            View Full Archive
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
          {projects.map((project, i) => (
            <div key={i} className="group relative bg-bg-tertiary overflow-hidden border border-white/5 hover:border-accent-cyan/30 transition-all duration-700" style={{ background: '#111', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.7s' }}>
              <div className="relative aspect-video overflow-hidden" style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden' }}>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'all 0.7s' }} />
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center' }}>
                   <a href="#" aria-label={`View ${project.title} on GitHub`} className="p-4 bg-accent-red text-white hover:scale-110 transition-transform" style={{ padding: '1rem', background: '#ff0032', color: 'white', transition: 'transform 0.3s', display: 'flex' }}>
                     <GithubIcon size={24} />
                   </a>
                   <a href="#" aria-label={`View ${project.title} live demo`} className="p-4 bg-white text-black hover:scale-110 transition-transform" style={{ padding: '1rem', background: 'white', color: 'black', transition: 'transform 0.3s', display: 'flex' }}>
                     <ExternalLink size={24} />
                   </a>
                </div>
              </div>

              <div className="p-8 pb-12" style={{ padding: '2rem', paddingBottom: '3rem' }}>
                <div className="flex justify-between items-start mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest mb-2 block" style={{ fontSize: '10px', color: '#ff0032', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem', marginBottom: '0.5rem', display: 'block' }}>{project.category}</span>
                    <h3 className="text-3xl font-black" style={{ fontSize: '1.875rem', fontWeight: '900' }}>{project.title}</h3>
                  </div>
                  <Code className="text-white/10" />
                </div>
                
                <p className="text-dim mb-10 line-clamp-2" style={{ color: '#888', marginBottom: '2.5rem' }}>{project.desc}</p>
                
                <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 font-bold italic" style={{ fontSize: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontWeight: 'bold', fontStyle: 'italic' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-red via-accent-cyan to-accent-red opacity-0 group-hover:opacity-100 transition-opacity" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '0.25rem', background: 'linear-gradient(to right, #ff0032, #00f5ff, #ff0032)', opacity: 0, transition: 'opacity 0.3s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
