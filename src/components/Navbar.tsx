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
    <header className="sticky top-0 left-0 right-0 z-50 pt-4">
      <div className="mx-auto w-[92%] max-w-7xl px-5 sm:px-6 lg:px-8">
        <nav
          className={`relative h-[70px] w-full lg:w-[56%] rounded-full px-5 sm:px-7 flex items-center justify-between border border-white/[0.08] bg-black/60 backdrop-blur-2xl transition-all duration-[260ms] ${
            scrolled
              ? 'shadow-[0_18px_60px_rgba(0,0,0,0.42)] bg-black/72 border-white/[0.12]'
              : 'shadow-[0_10px_34px_rgba(0,0,0,0.22)]'
          }`}
        >
          <Link
            to="/"
            id="nav-logo"
            className={`z-10 w-24 rounded-full px-3 py-2 font-display text-base sm:text-lg font-semibold tracking-[0.22em] text-white transition-all duration-[240ms] hover:opacity-80 ${
              homeActive ? 'bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]' : ''
            }`}
          >
            NYXO
          </Link>

          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.035em] transition-all duration-[240ms] ${
                    active ? 'text-white' : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.035]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 rounded-full border border-white/[0.16] bg-white/[0.14] shadow-[0_8px_24px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.14)]"
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden w-24 lg:block" aria-hidden="true" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-trigger"
            className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-400 transition-all duration-[240ms] hover:border-white/[0.14] hover:bg-white/[0.08] hover:text-white lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

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
