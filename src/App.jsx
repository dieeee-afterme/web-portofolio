import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Custom Cursor logic
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      cursorDot.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    // Scroll Progress bar logic
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.querySelector('.scroll-progress').style.width = scrolled + "%";
    };

    window.addEventListener('scroll', handleScroll);

    // Reveal Intersection Observer
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section');
    revealElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-main selection:bg-accent-red selection:text-white">
      {/* Interactive Elements */}
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
      <div className="scroll-progress"></div>
      
      {/* Noise Background Overlay */}
      <div className="noise-bg"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Animated Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] h-full w-full opacity-[0.03]" 
           style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}>
      </div>
    </div>
  );
}

export default App;
