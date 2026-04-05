import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Check } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="grid md:grid-cols-2 gap-24 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6rem', alignItems: 'center' }}>
          <div>
            <h2 className="text-6xl font-black mb-8 tracking-tighter" style={{ fontSize: '3.75rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '2rem' }}>LET'S <br /> <span className="text-accent" style={{ color: '#ff0032' }}>CONNECT_</span></h2>
            <p className="text-dim text-lg mb-12" style={{ color: '#888', fontSize: '1.125rem', marginBottom: '3rem' }}>
              Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations in game modding and web development.
            </p>

            <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <button 
                onClick={() => handleCopy('athyaa066@gmail.com', 'email')}
                aria-label="Copy Email address"
                className="flex items-center gap-6 group bg-transparent border-none text-left cursor-pointer w-full" 
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              >
                <div className="p-4 bg-bg-secondary border border-white/5 group-hover:border-accent-red group-hover:bg-accent-red/10 transition-all" style={{ padding: '1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }}>
                  {copied === 'email' ? <Check className="text-green-500" style={{ color: '#22c55e' }} /> : <Mail className="text-accent" style={{ color: '#ff0032' }} />}
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'block' }}>
                    {copied === 'email' ? 'Copied!' : 'Email Me'}
                  </span>
                  <span className="text-xl font-bold group-hover:text-accent transition-colors" style={{ fontSize: '1.25rem', fontWeight: 'bold', transition: 'color 0.3s' }}>athyaa066@gmail.com</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleCopy('cosmic_frills', 'discord')}
                aria-label="Copy Discord tag"
                className="flex items-center gap-6 group bg-transparent border-none text-left cursor-pointer w-full" 
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              >
                <div className="p-4 bg-bg-secondary border border-white/5 group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-all" style={{ padding: '1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }}>
                  {copied === 'discord' ? <Check className="text-green-500" style={{ color: '#22c55e' }} /> : <MessageSquare className="text-accent-cyan" style={{ color: '#00f5ff' }} />}
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'block' }}>
                    {copied === 'discord' ? 'Copied!' : 'Discord'}
                  </span>
                  <span className="text-xl font-bold group-hover:text-accent-cyan transition-colors" style={{ fontSize: '1.25rem', fontWeight: 'bold', transition: 'color 0.3s' }}>cosmic_frills</span>
                </div>
              </button>
            </div>

            <div className="flex gap-6 mt-16" style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}>
              <a href="https://github.com/dieeee-afterme" aria-label="Github Profile" className="p-3 text-dim hover:text-accent transition-colors" style={{ padding: '0.75rem', color: '#888', transition: 'color 0.3s', display: 'flex' }}><GithubIcon size={24} /></a>
              <a href="#" aria-label="Twitter Profile" className="p-3 text-dim hover:text-accent transition-colors" style={{ padding: '0.75rem', color: '#888', transition: 'color 0.3s', display: 'flex' }}><TwitterIcon size={24} /></a>
            </div>
          </div>

          <div className="bg-bg-secondary border-2 border-white/5 p-12 relative" style={{ background: '#0a0a0a', border: '2px solid rgba(255,255,255,0.05)', padding: '3rem', position: 'relative' }}>
             <form className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               <div>
                  <label className="text-[10px] text-accent font-bold uppercase tracking-widest block mb-1" style={{ fontSize: '10px', color: '#ff0032', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'block', marginBottom: '0.25rem' }}>Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-white/10 p-2 font-bold focus:border-accent-red outline-none transition-colors" style={{ width: '100%', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', padding: '0.5rem', fontWeight: 'bold', transition: 'all 0.3s', color: 'white' }} />
               </div>
               
               <div>
                  <label className="text-[10px] text-accent font-bold uppercase tracking-widest block mb-1" style={{ fontSize: '10px', color: '#ff0032', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1rem', display: 'block', marginBottom: '0.25rem' }}>Project Inquiry</label>
                  <textarea rows="4" className="w-full bg-transparent border-b-2 border-white/10 p-2 font-bold focus:border-accent-red outline-none transition-colors resize-none" style={{ width: '100%', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid rgba(255,255,255,0.1)', padding: '0.5rem', fontWeight: 'bold', transition: 'all 0.3s', color: 'white', resize: 'none' }}></textarea>
               </div>

               <button className="w-full py-4 bg-accent-red text-white font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3" style={{ width: '100%', padding: '1rem', background: '#ff0032', color: 'white', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                 TRANSMIT DATA <Send size={18} />
               </button>
             </form>
             
             {/* Decorative Elements */}
             <div className="absolute -top-4 -right-4 p-2 bg-white text-black font-bold text-[8px]" style={{ position: 'absolute', top: '-1rem', right: '-1rem', padding: '0.5rem', background: 'white', color: 'black', fontWeight: 'bold', fontSize: '8px' }}>FORM_77X</div>
             <div className="kanji-bg -top-12 -right-12 text-6xl opacity-10" style={{ position: 'absolute', top: '-3rem', right: '-3rem', fontSize: '3.75rem', opacity: 0.1 }}>信</div>
          </div>
        </div>
      </div>
      
      {/* Footer Text */}
      <div className="container mt-32 border-t border-white/5 py-12 flex justify-between items-center text-dim text-xs" style={{ maxWidth: '1200px', margin: '8rem auto 0', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#888' }}>
        <p>© 2026 DAVID.DEV - MANUFACTURED IN NIGHT CITY</p>
        <p className="font-fira uppercase tracking-widest text-[10px]" style={{ fontStyle: 'italic', letterSpacing: '0.1rem', fontSize: '10px' }}>EST. 2024//SYSTEM_ONLINE</p>
      </div>
    </section>
  );
};

export default Contact;
