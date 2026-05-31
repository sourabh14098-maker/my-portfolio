import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollUp, setShowScrollUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // PDF CV mock downloader alert
  const triggerResumeDownload = () => {
    alert("Resume download triggered!\nNYXO_Resume.pdf would be fetched directly.");
  };

  const backdropParticles = useRef(
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15
    }))
  ).current;

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#3b82f6]/40 selection:text-white overflow-x-hidden">
      
      {/* Interactive mouse radial ambient bloom */}
      <div 
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full w-[400px] h-[400px] bg-white/[0.02] border border-white/[0.01] blur-[80px] z-10 transition-transform duration-75 hidden md:block"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />

      {/* Grid background + abstract stars overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none z-0" />
      
      {/* Abstract floating dynamic stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {backdropParticles.map((pt) => (
          <motion.div
            key={pt.id}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${pt.x}%`,
              top: `${pt.y}%`,
              width: `${pt.size}px`,
              height: `${pt.size}px`
            }}
            animate={{
              y: ['0px', '-40px', '0px'],
              opacity: [0.15, 0.6, 0.15]
            }}
            transition={{
              duration: pt.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <Navbar triggerResumeDownload={triggerResumeDownload} />

      <main className="relative z-20 pt-24 min-h-[calc(100vh-250px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet context={{ triggerResumeDownload }} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Persistent floating Scroll to Top Trigger */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="floating-scroll-top"
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#111111] border border-[#222222] text-[#3b82f6] flex items-center justify-center shadow-md backdrop-blur-md cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-200"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
