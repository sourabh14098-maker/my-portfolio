import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowScrollUp(scrollTop > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const triggerResumeDownload = () => {
    alert('Resume download triggered!\nSourabh_Raj_Resume.pdf would be fetched directly.');
  };

  const backdropParticles = useRef(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 18,
    }))
  ).current;

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-white/10 overflow-x-hidden">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-px bg-[#222222] z-[60]">
        <motion.div
          className="h-full bg-white/40 origin-left"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {backdropParticles.map((pt) => (
          <motion.div
            key={pt.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${pt.x}%`,
              top: `${pt.y}%`,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
            }}
            animate={{ y: ['0px', '-24px', '0px'], opacity: [0.08, 0.25, 0.08] }}
            transition={{ duration: pt.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <Navbar triggerResumeDownload={triggerResumeDownload} />

      <main className="relative z-20 pt-24 min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet context={{ triggerResumeDownload }} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="floating-scroll-top"
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#111111]/90 border border-[#222222] text-zinc-400 hover:text-white flex items-center justify-center backdrop-blur-md cursor-pointer hover:border-white/20 transition-all duration-300"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
