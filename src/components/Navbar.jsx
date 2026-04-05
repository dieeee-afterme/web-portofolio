import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Terminal } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', kanji: '者' },
    { name: 'Skills', href: '#skills', kanji: '技' },
    { name: 'Projects', href: '#projects', kanji: '策' },
    { name: 'Contact', href: '#contact', kanji: '応' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`} style={{ borderBottom: scrolled ? '1px solid #222' : 'none' }}>
      <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" aria-label="Home" className="flex items-center gap-2 group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="p-2 bg-accent-red group-hover:rotate-12 transition-transform" style={{ background: '#ff0032', padding: '0.5rem', transition: 'transform 0.3s' }}>
            <Terminal size={20} color="white" />
          </div>
          <span className="font-bold tracking-widest text-xl font-orbitron" style={{ fontFamily: 'Orbitron', fontWeight: 'bold', letterSpacing: '0.1rem', fontSize: '1.25rem' }}>
            DAVID<span className="text-accent" style={{ color: '#ff0032' }}>.DEV</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} aria-label={`Scroll to ${link.name}`} className="flex flex-col items-center group transition-colors hover:text-accent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'color 0.3s' }}>
              <span className="text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: '10px', color: '#ff0032', opacity: 0 }}>{link.kanji}</span>
              <span className="uppercase text-sm tracking-widest" style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.1rem' }}>{link.name}</span>
            </a>
          ))}
          <a href="https://github.com/dieeee-afterme" target="_blank" aria-label="Visit Github Profile" className="p-2 border-brutal hover:bg-accent-red transition-all" style={{ border: '2px solid #f0f0f0', padding: '0.5rem', boxShadow: '4px 4px 0 #ff0032', transition: 'all 0.3s', display: 'flex' }}>
            <GithubIcon size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'white' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-zinc-800 p-8 flex flex-col gap-6" style={{ width: '100%', background: 'rgba(0,0,0,0.95)', borderBottom: '1px solid #222', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} aria-label={`Scroll to ${link.name}`} className="text-2xl font-orbitron uppercase tracking-widest hover:text-accent" onClick={() => setIsOpen(false)} style={{ fontFamily: 'Orbitron', textTransform: 'uppercase', fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
