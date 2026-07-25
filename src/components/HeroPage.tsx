import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download, Code2, FolderKanban, Users, Star, Mouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { useIntro } from '../context/IntroContext';
import { easePremium } from '../lib/motion';
import heroImage from '../assets/images/hero_workspace.png';
import MemoryBanner from "./MemoryBanner";

const heroStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const heroStaggerItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: easePremium },
  },
};

const stats = [
  { icon: FolderKanban, metric: '5+', label: 'Projects Built' },
  { icon: Code2, metric: 'Web', label: 'Developer' },
  { icon: Code2, metric: 'Java', label: 'Developer' },
  { icon: Code2, metric: 'AI', label: 'Projects' },
];

export default function HeroPage() {
  const { playHeroEntrance } = useIntro();

  const renderLeftContent = (isDesktop: boolean) => (
    <>
      {/* Subtitle / Label */}
      <motion.div
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.4, ease: easePremium }}
        className="flex items-center gap-3 mb-2 sm:mb-3"
      >
        <span className="w-8 h-[1px] bg-zinc-600" />
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 font-medium">
          Founder & Software Developer
        </span>
      </motion.div>

      {/* Desktop MemoryBanner (lg and above): Positioned directly BELOW the Founder label with 14px top spacing and 14px bottom spacing */}
      {isDesktop && (
        <motion.div
          variants={playHeroEntrance ? heroStaggerItem : undefined}
          initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
          animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
          transition={playHeroEntrance ? undefined : { duration: 0.45, ease: easePremium }}
          className="mt-3.5 mb-3.5 w-full max-w-[400px] xl:max-w-[420px]"
        >
          <MemoryBanner />
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h1
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 24 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.5, ease: easePremium }}
        id="main-hero-title"
        className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-extrabold tracking-tight text-white leading-[0.85] uppercase"
      >
        NYXO
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 20 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.45, ease: easePremium }}
        className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-zinc-300 tracking-tight leading-snug"
      >
        Crafting Digital Experiences.
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.4, delay: 0.05, ease: easePremium }}
        id="hero-desc"
        className="max-w-[440px] text-[15px] sm:text-base text-zinc-400 leading-7"
      >
        I build modern, scalable and high-performance
        web applications that solve real problems
        and deliver exceptional user experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.4, delay: 0.1, ease: easePremium }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2"
      >
        <Link
          to="/projects"
          id="hero-projects-btn"
          className="group inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-transparent px-7 text-[14px] font-medium text-white tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          View Projects
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center rounded-full border border-zinc-700 px-7 text-[14px] font-medium text-zinc-300 transition-all duration-300 hover:border-white hover:text-white"
        >
          Contact Me
        </Link>
      </motion.div>
    </>
  );

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: easePremium }}
      className="relative min-h-screen flex flex-col"
    >
      {/* Mobile Header MemoryBanner (<768px / md) */}
      <div className="w-full md:hidden pt-6 px-4 flex justify-center">
        <div className="w-[calc(100%-32px)] max-w-[420px]">
          <MemoryBanner />
        </div>
      </div>

      {/* Hero Content — Split Layout */}
      <div className="flex-1 flex items-center w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-6 md:pt-12 lg:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* Left — Content Column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Tablet Banner (768px - 1023px): Centered above hero heading */}
            <div className="hidden md:block lg:hidden mb-2 w-full max-w-[460px] mx-auto">
              <MemoryBanner />
            </div>

            {playHeroEntrance ? (
              <motion.div
                className="flex flex-col gap-5 sm:gap-6"
                variants={heroStaggerContainer}
                initial="hidden"
                animate="show"
              >
                {/* Render desktop-specific layout containing MemoryBanner under label */}
                <div className="hidden lg:flex flex-col gap-5 sm:gap-6">
                  {renderLeftContent(true)}
                </div>
                {/* Render mobile/tablet left content without internal MemoryBanner */}
                <div className="flex lg:hidden flex-col gap-5 sm:gap-6">
                  {renderLeftContent(false)}
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="hidden lg:flex flex-col gap-5 sm:gap-6">
                  {renderLeftContent(true)}
                </div>
                <div className="flex lg:hidden flex-col gap-5 sm:gap-6">
                  {renderLeftContent(false)}
                </div>
              </div>
            )}
          </div>

          {/* Right — Hero Image (Completely clean image without overlays) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: playHeroEntrance ? 0.3 : 0.1, ease: easePremium }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={heroImage}
                alt="Developer workspace"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <Reveal className="w-full border-t border-white/[0.06]" delay={playHeroEntrance ? 0.5 : 0.15}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/[0.08]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 justify-start px-2 sm:px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:scale-105">
                  <stat.icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
                    {stat.metric}
                  </div>
                  <div className="text-xs text-zinc-500 font-mono tracking-wider uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Scroll to Explore */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: playHeroEntrance ? 0.7 : 0.3, ease: easePremium }}
        className="hidden lg:flex flex-col items-center gap-3 pb-8"
      >
        <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-2">
          <motion.div
            className="w-1 h-2.5 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
          Scroll to Explore
        </span>
      </motion.div>
    </motion.section>
  );
}
