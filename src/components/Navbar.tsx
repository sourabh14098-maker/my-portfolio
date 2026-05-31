import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  triggerResumeDownload: () => void;
}

export default function Navbar({ triggerResumeDownload }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-xl border-[#222222] bg-[#0a0a0a]/80 backdrop-blur-md">
          
          {/* Branding Signature */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo"
          >
            <div className="relative flex items-center select-none py-1">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 opacity-75 blur-md pointer-events-none group-hover:opacity-100 transition-all duration-300" />
              <span className="relative z-10 font-sans font-black text-lg md:text-xl tracking-widest text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                NYXO
              </span>
            </div>
          </Link>

          {/* Desktop Navbar Menu links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-[#3b82f6]' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navTabIndicator"
                      className="absolute inset-0 bg-[#111111] rounded-full -z-10 border border-[#222222]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Resume button & Menu trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={triggerResumeDownload}
              id="header-resume-btn"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#222222] rounded-full text-xs font-medium text-white hover:text-[#3b82f6] hover:border-[#3b82f6]/30 bg-[#0a0a0a] cursor-pointer transition-all duration-300 shadow-sm hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5 text-[#3b82f6]" />
              Resume.pdf
            </button>

            {/* Mobile slide menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-trigger"
              className="lg:hidden w-8 h-8 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-6 right-6 z-40"
          >
            <div className="glass-panel rounded-3xl p-6 shadow-2xl bg-[#0a0a0a] flex flex-col gap-4 border-[#222222]">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#111111] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="h-[1px] bg-[#222222]" />
              <button
                onClick={triggerResumeDownload}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] hover:bg-[#0a0a0a] border border-[#222222] rounded-xl text-sm font-medium text-white hover:text-[#3b82f6] transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#3b82f6]" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
