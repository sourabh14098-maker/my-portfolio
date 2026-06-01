import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseGlow from './MouseGlow';
import PageTransition from './PageTransition';

export default function Layout() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setShowScrollUp(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerResumeDownload = () => {
    alert('Resume download triggered!\nNYXO_Resume.pdf would be fetched directly.');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <MouseGlow />

      <div className="fixed inset-0 bg-grid opacity-[0.35] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-dot-grid opacity-[0.2] pointer-events-none z-0" />

      <Navbar triggerResumeDownload={triggerResumeDownload} />

      <main className="relative z-20 pt-20 sm:pt-24 min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet context={{ triggerResumeDownload }} />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="floating-scroll-top"
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#222222] text-zinc-400 hover:text-white flex items-center justify-center backdrop-blur-md cursor-pointer premium-hover"
            title="Scroll to Top"
            type="button"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
