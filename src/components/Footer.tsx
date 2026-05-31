import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-[#222222] bg-[#000000] relative z-20 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center sm:items-start text-left gap-1">
          <Link to="/" className="font-display font-black text-sm tracking-widest text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]">NYXO</Link>
          <span className="text-[10px] text-zinc-500 font-mono leading-none">© 2026 NYXO. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/nyxodev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-200" title="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/#" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-200" title="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:hello@nyxo.dev" className="text-zinc-400 hover:text-white transition-colors duration-200" title="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          id="footer-scroll-top-btn"
          className="px-3.5 py-2.5 rounded-full bg-[#111111] hover:bg-[#1a1a1a] border border-[#222222] text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 text-xs font-mono font-medium"
        >
          Scroll to Top <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
