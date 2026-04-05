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
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md-flex gap-24 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          <div>
            <h2 className="text-6xl font-black mb-8 tracking-tighter" style={{ fontWeight: '900', letterSpacing: '-0.05em' }}>LET'S <br /> <span className="text-accent" style={{ color: '#ff0032' }}>CONNECT_</span></h2>
            <p className="text-dim text-lg mb-12" style={{ color: '#888' }}>
              Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations in game modding and web development.
            </p>

            <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <button 
                onClick={() => handleCopy('athyaa066@gmail.com', 'email')}
                aria-label="Copy Email address"
                className="flex items-center gap-6 group bg-transparent border-none text-left cursor-pointer w-full"
              >
                <div className="p-4 bg-bg-secondary border border-white/5 group-hover:border-accent-red group-hover:bg-accent-red/10 transition-all" style={{ padding: '1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {copied === 'email' ? <Check className="text-green-500" style={{ color: '#22c55e' }} /> : <Mail className="text-accent" style={{ color: '#ff0032' }} />}
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}>
                    {copied === 'email' ? 'Copied!' : 'Email Me'}
                  </span>
                  <span className="text-xl font-bold group-hover:text-accent transition-colors" style={{ fontWeight: 'bold' }}>athyaa066@gmail.com</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleCopy('cosmic_frills', 'discord')}
                aria-label="Copy Discord tag"
                className="flex items-center gap-6 group bg-transparent border-none text-left cursor-pointer w-full"
              >
                <div className="p-4 bg-bg-secondary border border-white/5 group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-all" style={{ padding: '1rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {copied === 'discord' ? <Check className="text-green-500" style={{ color: '#22c55e' }} /> : <MessageSquare className="text-accent-cyan" style={{ color: '#00f5ff' }} />}
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}>
                    {copied === 'discord' ? 'Copied!' : 'Discord'}
                  </span>
                  <span className="text-xl font-bold group-hover:text-accent-cyan transition-colors" style={{ fontWeight: 'bold' }}>cosmic_frills</span>
                </div>
              </button>
            </div>

            <div className="flex gap-6 mt-16" style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}>
              <a href="https://github.com/dieeee-afterme" aria-label="Github Profile" className="p-3 text-dim hover:text-accent transition-colors" style={{ padding: '0.75rem', color: '#888', display: 'flex' }}><GithubIcon size={24} /></a>
              <a href="#" aria-label="Twitter Profile" className="p-3 text-dim hover:text-accent transition-colors" style={{ padding: '0.75rem', color: '#888', display: 'flex' }}><TwitterIcon size={24} /></a>
            </div>
          </div>

          <div className="bg-bg-secondary border-brutal p-10 relative" style={{ background: '#0a0a0a', padding: '2.5rem', border: '2px solid #f0f0f0', boxShadow: '4px 4px 0 #ff0032' }}>
            <div className="absolute -top-4 -right-4 bg-white text-black text-[8px] font-black px-2 py-1 uppercase" style={{ background: 'white', color: 'black', fontSize: '8px', fontWeight: '900', padding: '0.25rem 0.5rem' }}>Form_77x</div>
            <form className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="relative group">
                <label className="text-[10px] font-black uppercase text-accent tracking-widest block mb-1" style={{ fontSize: '10px', fontWeight: '900', color: '#ff0032' }}>Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent-red transition-colors outline-none text-sm" placeholder="John Doe" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0', color: 'white', fontSize: '0.875rem' }} />
              </div>
              <div className="relative group">
                <label className="text-[10px] font-black uppercase text-accent tracking-widest block mb-1" style={{ fontSize: '10px', fontWeight: '900', color: '#ff0032' }}>Project Inquiry</label>
                <textarea className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent-red h-32 transition-colors outline-none text-sm resize-none" placeholder="Briefly describe your vision..." style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0', color: 'white', fontSize: '0.875rem', height: '8rem' }}></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-accent-red text-white flex items-center justify-center gap-3 font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all" style={{ width: '100%', padding: '1rem', background: '#ff0032', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontWeight: '900' }}>
                Transmit Data <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer Text */}
      <div className="container mt-32 border-t border-white/5 py-12 flex flex-col md-flex-row justify-between items-center text-dim text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3rem 20px', color: '#888' }}>
        <p>© 2026 DAVID.DEV - MANUFACTURED IN NIGHT CITY</p>
        <p className="font-fira uppercase tracking-widest text-[10px] mt-4 md-mt-0" style={{ letterSpacing: '0.1rem', fontSize: '10px' }}>EST. 2024//SYSTEM_ONLINE</p>
      </div>
    </section>
  );
};

export default Contact;
