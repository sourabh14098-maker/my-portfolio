import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Code2, FolderKanban, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntro } from '../context/IntroContext';
import { easePremium } from '../lib/motion';
import heroImage from '../assets/images/cinematic_futuristic_hero.jpg';
import MemoryBanner from "./MemoryBanner";

// Subtly different float animations for each card to create organic feel
const getFloatAnimation = (delay: number, duration: number, yRange: number[]) => ({
  y: yRange,
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  },
});

export default function HeroPage() {
  const { playHeroEntrance } = useIntro();
  const { scrollY } = useScroll();
  
  // Subtle parallax effect on scroll for the background
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);

  // Floating info cards data
  const cards: Array<{
    id: number;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    hiddenMobile?: boolean;
    floatConfig: number | number[] | any;
  }> = [
    { id: 1, icon: FolderKanban, title: '5+', subtitle: 'PROJECTS BUILT', top: '20%', right: '12%', floatConfig: [0, 4, [-5, 5]] },
    { id: 2, icon: Code2, title: 'FRONTEND', subtitle: 'DEVELOPER', top: '45%', right: '8%', floatConfig: [1.2, 5, [-8, 4]] },
    { id: 3, icon: Terminal, title: 'CURRENTLY', subtitle: 'BUILDING', bottom: '25%', right: '28%', hiddenMobile: true, floatConfig: [0.5, 4.5, [-4, 6]] },
    { id: 4, icon: Sparkles, title: 'AI', subtitle: 'PROJECTS', bottom: '15%', right: '10%', floatConfig: [2, 5.5, [-6, 3]] },
  ];

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-start overflow-hidden pt-28 pb-12 bg-[#020205]">
      {/* 1. Cinematic Parallax Background */}
      <motion.div
        initial={playHeroEntrance ? { scale: 1.05, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: easePremium }}
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img
          src={heroImage}
          alt="Cinematic 3D Digital Workspace"
          className="w-full h-[120%] object-cover -mt-[10%]"
        />
        {/* Cinematic Overlays: Deep charcoal, muted cyan/violet hints */}
        <div className="absolute inset-0 bg-black/40 backdrop-saturate-[0.85]" />
        
        {/* Left-side dark gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030308] via-[#030308]/80 to-transparent w-[80%]" />
        
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-90 h-full" />
        
        {/* Top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-transparent to-transparent opacity-50 h-[30%]" />
      </motion.div>

      {/* 2. Floating Cards (Desktop/Tablet) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block max-w-[1500px] mx-auto w-full">
        {cards.map((card, index) => {
          const [delay, duration, yRange] = card.floatConfig as [number, number, number[]];
          return (
            <motion.div
              key={card.id}
              initial={playHeroEntrance ? { opacity: 0, scale: 0.9, y: 30 } : false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: playHeroEntrance ? 0.8 + index * 0.15 : 0, ease: easePremium }}
              style={{ top: card.top, right: card.right, bottom: card.bottom, left: card.left }}
              className={`absolute pointer-events-auto ${card.hiddenMobile ? 'hidden lg:flex' : 'flex'}`}
            >
              <motion.div
                animate={getFloatAnimation(delay, duration, yRange)}
                whileHover={{ scale: 1.05, y: -4, backgroundColor: 'rgba(20, 25, 40, 0.45)' }}
                className="group flex flex-col gap-1.5 p-4 rounded-[20px] bg-[#0a0c12]/40 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/20 transition-all duration-500 shadow-[0_16px_40px_rgba(0,0,0,0.6)] cursor-default min-w-[150px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <card.icon className="w-4 h-4 text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-300" />
                  <span className="text-[#f4f4f5] font-display text-[15px] font-semibold tracking-tight">{card.title}</span>
                </div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8b92a5] group-hover:text-[#b8bed3] transition-colors duration-300">
                  {card.subtitle}
                </span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* 3. Main Hero Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col items-start justify-center h-full">
        <div className="w-full max-w-[600px] mt-4 lg:mt-0 flex flex-col gap-7">
          <motion.div
            initial={playHeroEntrance ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: playHeroEntrance ? 0.3 : 0, ease: easePremium }}
            className="flex flex-col gap-7"
          >
            {/* Memory Banner placement */}
            <div className="w-full max-w-[420px] mb-2 hidden md:block">
              <MemoryBanner />
            </div>

            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-[#8b92a5] font-semibold">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Cinematic Headline */}
            <h1 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-display font-extrabold text-[#f4f4f5] leading-[0.9] tracking-[-0.03em] uppercase">
              I BUILD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b8bed3] to-[#606a85]">DIGITAL</span><br />
              EXPERIENCES.
            </h1>

            {/* Supporting Description */}
            <p className="text-[15px] sm:text-lg text-[#8b92a5] leading-[1.8] max-w-[480px] font-medium">
              Frontend developer focused on building modern, responsive and high-performance digital experiences with React, JavaScript and AI-powered technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
              <Link
                to="/projects"
                className="group relative flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#111420]/60 hover:bg-[#161a29]/80 border border-white/10 hover:border-cyan-400/30 backdrop-blur-xl text-[13px] tracking-[0.1em] font-semibold text-[#f4f4f5] transition-all duration-500 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10">VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-[13px] tracking-[0.1em] font-semibold text-[#8b92a5] hover:text-[#f4f4f5] transition-all duration-400"
              >
                LET'S CONNECT
              </Link>
            </div>
          </motion.div>

          {/* Mobile Memory Banner */}
          <div className="w-full md:hidden mt-2">
             <MemoryBanner />
          </div>

          {/* Mobile Cards (stacked horizontally below text) */}
          <motion.div 
            initial={playHeroEntrance ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: playHeroEntrance ? 0.6 : 0, ease: easePremium }}
            className="md:hidden grid grid-cols-2 gap-3 mt-8 w-full pb-10"
          >
            {cards.filter(c => !c.hiddenMobile).map((card) => (
              <div key={card.id} className="flex flex-col gap-1 p-4 rounded-xl bg-[#0a0c12]/80 backdrop-blur-xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <card.icon className="w-3.5 h-3.5 text-cyan-300/80" />
                  <span className="text-[#f4f4f5] font-display text-[13px] font-semibold">{card.title}</span>
                </div>
                <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#8b92a5]">{card.subtitle}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
