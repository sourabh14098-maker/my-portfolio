import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };
  const homeActive = location.pathname === '/';

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4">
      <nav
        className={`mx-auto flex h-[70px] w-full max-w-[95%] md:max-w-[75%] lg:max-w-[800px] items-center justify-between rounded-full border border-[rgba(255,255,255,0.08)] bg-black/40 px-4 sm:px-6 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'shadow-[0_10px_40px_rgba(0,0,0,0.6)] border-[rgba(255,255,255,0.12)] bg-black/60' : 'shadow-none'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          id="nav-logo"
          className="z-10 w-24 font-display text-lg font-bold tracking-[0.15em] text-white transition-opacity hover:opacity-80 flex items-center"
        >
          NYXO
        </Link>

        {/* Desktop Links (Centered) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full p-1.5">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative rounded-full px-5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  active ? 'text-[#050505]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Status Dot / Mobile Menu Trigger */}
        <div className="z-10 flex w-24 justify-end items-center">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-white/[0.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Available</span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-trigger"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-white/[0.04] text-zinc-400 transition-colors hover:border-[rgba(255,255,255,0.15)] hover:bg-white/[0.08] hover:text-white lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-[5.75rem] z-40 w-[92%] -translate-x-1/2 lg:hidden"
          >
            <div className="flex flex-col gap-1 rounded-[28px] border border-white/[0.08] bg-black/75 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative rounded-2xl px-4 py-3 text-sm font-medium tracking-[0.03em] transition-colors duration-[240ms] ${
                      active ? 'bg-white/[0.13] text-white' : 'text-zinc-500 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute left-2 top-1/2 h-5 w-px -translate-y-1/2 rounded-full bg-white/45" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
