import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-page !pt-10 !pb-12 border-t border-[#1a1a1a] bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
          <Link
            to="/"
            className="font-display font-medium text-sm tracking-[0.2em] text-white premium-hover"
          >
            NYXO
          </Link>
          <span className="text-[11px] text-zinc-600 font-mono">
            Designed &amp; Developed by Sourabh Raj
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sourabh14098-maker"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sourabh-raj"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:sourabh14098@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          id="footer-scroll-top-btn"
          className="btn-secondary !py-2.5 !px-4 text-xs font-mono"
        >
          Scroll to Top <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
