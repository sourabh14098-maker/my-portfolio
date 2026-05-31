import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';
import DeveloperCard from './DeveloperCard';

export default function HeroPage() {
  const { triggerResumeDownload } = useOutletContext<{ triggerResumeDownload: () => void }>();

  return (
    <section 
      id="hero" 
      className="relative min-h-[80vh] flex flex-col justify-center pt-8 pb-20 px-6 z-20"
    >
      {/* Subtle, premium, non-distracting background vignetting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#111111]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left panel text contents */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Visual badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-[#222222] bg-[#111111]/80 inline-flex items-center gap-2 backdrop-blur-sm self-start shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span className="text-[11px] font-mono font-medium tracking-wider text-zinc-400 uppercase">
              Now accepting internship briefs • 2026
            </span>
          </motion.div>

          {/* Headline elements with mask overlays */}
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-flex self-start"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 opacity-70 blur-sm" />
              <span className="relative z-10 px-3.5 py-1 text-[11px] font-mono font-black uppercase text-white bg-[#111111] border border-[#222222] rounded-full tracking-widest leading-none">
                NYXO
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              id="main-hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-none mt-2"
            >
              Building Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] bg-size-200">Digital Experiences</span>
            </motion.h1>

            {/* Static premium subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-zinc-400 font-mono text-xs md:text-sm tracking-wider uppercase font-semibold leading-relaxed border-l-2 border-[#3b82f6]/50 pl-3.5 mt-2"
            >
              Computer Science Student • Frontend Developer • Full Stack Learner
            </motion.p>
          </div>

          {/* Short brand details */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            id="hero-desc"
            className="text-[#a1a1aa] text-sm md:text-base max-w-xl leading-relaxed"
          >
            Passionate about creating modern web applications, solving real-world problems, and building products that make an impact.
          </motion.p>

          {/* Quick action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            <Link
              to="/projects"
              id="hero-projects-btn"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-zinc-200 text-black font-display font-semibold text-xs tracking-tight shadow-md cursor-pointer transition-colors duration-300 inline-flex items-center justify-center gap-1.5"
            >
              View Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={triggerResumeDownload}
              id="hero-resume-btn"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] hover:bg-[#1a1a1a] border border-[#222222] text-white font-display font-semibold text-xs tracking-tight cursor-pointer transition-colors duration-300 inline-flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#3b82f6]" />
              Download Resume
            </button>

            <Link
              to="/contact"
              id="hero-contact-btn"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#000000] hover:bg-[#0d0d0d] border border-[#222222] text-[#a1a1aa] hover:text-white font-display font-medium text-xs tracking-tight cursor-pointer transition-colors duration-300 inline-flex items-center justify-center"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>

        {/* Right panel visuals: Clean profile layout */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <DeveloperCard />
        </div>

      </div>

      {/* Apple + Vercel inspired premium grid of stats cards below the main hero panels */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto w-full mt-16 md:mt-24 z-10 px-0"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { metric: "2+", label: "Projects Built", subtext: "Deployed production web apps" },
            { metric: "10+", label: "Technologies Learned", subtext: "Across modern front- & backend" },
            { metric: "100+", label: "Hours of Coding", subtext: "Systematic program duration" },
            { label: "Open For Internship", highlight: true, subtext: "Ready to contribute immediately" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="relative group/stat rounded-2xl border border-[#222222] bg-black p-5 text-left transition-all duration-300 hover:border-[#333333] flex flex-col justify-between shadow-lg"
            >
              {/* Subtle spotlight reflect effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.005] via-transparent to-transparent rounded-2xl pointer-events-none" />
              
              <div>
                {stat.metric ? (
                  <div className="text-3xl md:text-4xl font-display font-normal text-white tracking-tight mb-2">
                    {stat.metric}
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950 border border-[#222222] text-[10px] font-mono text-zinc-350 font-medium mb-4">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    AVAILABLE
                  </div>
                )}

                <h4 className="text-sm font-medium text-zinc-300 leading-snug">
                  {stat.label}
                </h4>
              </div>

              <p className="text-xs text-zinc-500 mt-2 font-mono tracking-normal">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cinematic static down indicators */}
      <Link to="/about" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Read More</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-[#222222] rounded-full flex justify-center pt-1"
        >
          <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
        </motion.div>
      </Link>

    </section>
  );
}

