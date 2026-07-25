import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import AIChatbot from './AIChatbot';

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

  return (

    <div className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">

      <Navbar />

      <main className="relative z-20 pt-[72px] min-h-[calc(100vh-200px)]">

        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
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
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.1] hover:border-white/20 flex items-center justify-center backdrop-blur-md cursor-pointer transition-all duration-300"
            title="Scroll to Top"
            type="button"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <AIChatbot />
    </div>
  );
}
