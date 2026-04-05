import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

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
    <section id="projects" className="bg-secondary relative py-32">
      <div className="container">
        <div className="flex flex-col md-flex-row justify-between items-end mb-24 gap-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
          <div className="max-w-md w-full">
            <div className="flex items-center gap-3 mb-8" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div className="w-12 h-[2px] bg-accent-red" style={{ width: '3rem', height: '2px', background: '#ff0032' }}></div>
              <span className="text-accent uppercase tracking-widest font-bold text-sm" style={{ color: '#ff0032', textTransform: 'uppercase', fontSize: '0.875rem' }}>PROJ.LOG</span>
            </div>
            <h2 className="text-6xl font-black tracking-tighter" style={{ fontWeight: '900', letterSpacing: '-0.05em' }}>SELECTED <br /> <span className="text-accent" style={{ color: '#ff0032' }}>WORKS_</span></h2>
          </div>
          <p className="text-dim text-sm max-w-[200px] text-right font-fira md-flex" style={{ color: '#888', fontSize: '0.875rem', textAlign: 'right', display: 'none' }}>
            // Total_Deployments: 142<br />
            // Status: Operational
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {projects.map((project, i) => (
            <div key={i} className="group relative aspect-video bg-black overflow-hidden border border-white/5" style={{ aspectRatio: '16/9' }}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent transition-all group-hover:translate-y-0" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)' }}>
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ transition: 'transform 0.5s' }}>
                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: '#ff0032', fontSize: '10px', fontWeight: 'bold' }}>{project.category}</span>
                    <h3 className="text-2xl font-black mb-3 group-hover:text-accent-cyan transition-colors" style={{ fontSize: '1.5rem', fontWeight: '900' }}>{project.title}</h3>
                    <p className="text-dim text-xs opacity-0 group-hover:opacity-100 transition-opacity mb-6" style={{ color: '#888', fontSize: '0.75rem', opacity: 0, transition: 'opacity 0.3s' }}>
                      {project.desc}
                    </p>
                    <div className="flex gap-2">
                       {project.tags.map(tag => (
                          <span key={tag} className="text-[8px] uppercase tracking-widest py-1 px-2 border border-white/10" style={{ fontSize: '8px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem' }}>{tag}</span>
                       ))}
                    </div>
                 </div>

                 {/* Hover Reveal Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="https://github.com/dieeee-afterme" aria-label={`View ${project.title} on GitHub`} className="p-4 bg-accent-red text-white hover:scale-110 transition-transform" style={{ padding: '1rem', background: '#ff0032', color: 'white', display: 'flex' }}>
                      <GithubIcon size={24} />
                    </a>
                    <a href="#" aria-label={`View ${project.title} live demo`} className="p-4 bg-white text-black hover:scale-110 transition-transform" style={{ padding: '1rem', background: 'white', color: 'black', display: 'flex' }}>
                      <ExternalLink size={24} />
                    </a>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
