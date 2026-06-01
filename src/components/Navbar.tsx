import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  triggerResumeDownload: () => void;
}

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ triggerResumeDownload }: NavbarProps) {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav
          className={`rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'glass-panel bg-[#0a0a0a]/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <Link to="/" id="nav-logo" className="font-display font-semibold text-base sm:text-lg tracking-[0.2em] text-white premium-hover">
            NYXO
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 relative">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
                    active ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 rounded-full bg-[#111111] border border-[#222222]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={triggerResumeDownload}
              id="header-resume-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-zinc-300 border border-[#222222] bg-[#0a0a0a] hover:text-white hover:border-[#333333] premium-hover cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-trigger"
              className="lg:hidden w-9 h-9 rounded-full bg-[#0a0a0a] border border-[#222222] flex items-center justify-center text-zinc-400 hover:text-white premium-hover"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-[4.25rem] left-4 right-4 sm:left-6 sm:right-6 z-40"
          >
            <div className="glass-panel rounded-2xl p-4 flex flex-col gap-1 border-[#222222]">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active ? 'text-white bg-[#111111]' : 'text-zinc-500 hover:text-white hover:bg-[#0a0a0a]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#3b82f6] rounded-full" />
                    )}
                  </Link>
                );
              })}
              <div className="h-px bg-[#222222] my-2" />
              <button
                type="button"
                onClick={triggerResumeDownload}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white border border-[#222222] bg-[#0a0a0a] premium-hover cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
