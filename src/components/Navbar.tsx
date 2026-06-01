import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  triggerResumeDownload: () => void;
}

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ triggerResumeDownload }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="glass-panel rounded-full px-5 py-2.5 flex items-center justify-between border-[#222222] bg-[#050505]/80 backdrop-blur-xl">
          <Link to="/" className="group py-1" id="nav-logo">
            <span className="font-display font-bold text-base tracking-[0.2em] text-white group-hover:text-zinc-300 transition-colors duration-300">
              NYXO
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navTabIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={triggerResumeDownload}
              id="header-resume-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#222222] rounded-full text-xs font-medium text-white hover:border-white/20 hover:bg-white/[0.04] cursor-pointer transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              Resume
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-trigger"
              className="lg:hidden w-9 h-9 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
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
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[4.5rem] left-6 right-6 z-40"
          >
            <div className="glass-panel rounded-2xl p-5 bg-[#050505] flex flex-col gap-1 border-[#222222]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-white bg-white/[0.06]'
                        : 'text-zinc-400 hover:text-white hover:bg-[#111111]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-px bg-[#222222] my-2" />
              <button
                type="button"
                onClick={triggerResumeDownload}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] border border-[#222222] rounded-xl text-sm font-medium text-white transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
