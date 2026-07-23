import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex h-[72px] w-full items-center justify-between px-8 sm:px-12 lg:px-16 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          id="nav-logo"
          className="z-10 font-display text-[18px] font-bold tracking-[0.2em] text-white transition-opacity hover:opacity-80 uppercase"
        >
          NYXO
        </Link>

        {/* Desktop Links (Centered) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative text-[14px] font-normal tracking-wide transition-colors duration-300 ${
                  active ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="navActiveUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button + Mobile Trigger */}
        <div className="z-10 flex items-center gap-4">
          <Link
            to="/contact"
            id="nav-connect-btn"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-[13px] font-medium text-white tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Let's Connect
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-trigger"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white lg:hidden"
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
            className="absolute left-0 right-0 top-[72px] z-40 lg:hidden"
          >
            <div className="flex flex-col gap-1 border-b border-white/[0.06] bg-black/95 p-4 backdrop-blur-2xl">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative rounded-xl px-4 py-3 text-sm font-medium tracking-[0.03em] transition-colors duration-[240ms] ${
                      active ? 'bg-white/[0.08] text-white' : 'text-zinc-500 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
              >
                Let's Connect
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
