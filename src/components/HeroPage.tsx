import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeveloperCard from './DeveloperCard';
import Reveal from './ui/Reveal';
import { useIntro } from '../context/IntroContext';
import { easePremium } from '../lib/motion';

const heroStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const heroStaggerItem = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.28, ease: easePremium },
  },
};

export default function HeroPage() {
  const { playHeroEntrance } = useIntro();

  const leftContent = (
    <>
      <div className="flex max-w-[680px] flex-col gap-6 sm:gap-7 lg:gap-8">
        <motion.h1
          variants={playHeroEntrance ? heroStaggerItem : undefined}
          initial={playHeroEntrance ? undefined : { opacity: 0, y: 20 }}
          animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
          transition={playHeroEntrance ? undefined : { duration: 0.28, ease: easePremium }}
          id="main-hero-title"
          className="max-w-[760px] text-4xl sm:text-5xl md:text-6xl lg:text-[3.55rem] xl:text-[4.05rem] font-display font-medium tracking-normal text-white leading-[0.98] sm:leading-[1.01]"
        >
          <span className="block text-white">Building Modern</span>
          <span className="block bg-gradient-to-r from-white via-zinc-300 to-violet-300 bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          variants={playHeroEntrance ? heroStaggerItem : undefined}
          initial={playHeroEntrance ? undefined : { opacity: 0, y: 12 }}
          animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
          transition={playHeroEntrance ? undefined : { duration: 0.24, delay: 0.04, ease: easePremium }}
          className="max-w-[620px] text-zinc-400 font-mono text-[11px] sm:text-xs tracking-[0.13em] uppercase font-medium leading-relaxed"
        >
          Computer Science Student / Frontend Developer / Full Stack Learner
        </motion.p>
      </div>

      <motion.p
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.26, delay: 0.08, ease: easePremium }}
        id="hero-desc"
        className="max-w-[560px] text-sm md:text-base text-zinc-400/90 leading-7"
      >
        Passionate about creating modern web applications, solving real-world problems, and building
        products that make an impact.
      </motion.p>

      <motion.div
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.26, delay: 0.12, ease: easePremium }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
      >
        <Link
          to="/projects"
          id="hero-projects-btn"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/90 bg-white px-6 text-sm font-medium text-[#050505] shadow-[0_14px_36px_rgba(255,255,255,0.08)] transition-all duration-[240ms] hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-[0_18px_44px_rgba(255,255,255,0.12)]"
        >
          Explore Work
          <ArrowRight className="h-4 w-4 transition-transform duration-[240ms] group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </>
  );

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.26, ease: easePremium }}
      className="relative min-h-[86vh] sm:min-h-[88vh] flex flex-col justify-center section-page !pt-14 sm:!pt-[4.5rem] lg:!pt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 xl:gap-16 items-center">
        {playHeroEntrance ? (
          <motion.div
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start gap-8 sm:gap-9 lg:gap-10 text-left"
            variants={heroStaggerContainer}
            initial="hidden"
            animate="show"
          >
            {leftContent}
          </motion.div>
        ) : (
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start gap-8 sm:gap-9 lg:gap-10 text-left">
            {leftContent}
          </div>
        )}

        {playHeroEntrance ? (
          <motion.div
            variants={heroStaggerItem}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-start mt-4 lg:mt-0"
          >
            <div className="scale-[0.68] sm:scale-[0.72] lg:scale-[0.78] xl:scale-[0.82] origin-center">
              <DeveloperCard />
            </div>
          </motion.div>
        ) : (
          <Reveal className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-start mt-4 lg:mt-0" delay={0.15}>
            <div className="scale-[0.68] sm:scale-[0.72] lg:scale-[0.78] xl:scale-[0.82] origin-center">
              <DeveloperCard />
            </div>
          </Reveal>
        )}
      </div>

      <Reveal className="max-w-7xl mx-auto w-full mt-20 md:mt-28" delay={playHeroEntrance ? 0.45 : 0.1}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { metric: '2+', label: 'Projects Built', subtext: 'Deployed production web apps' },
            { metric: '10+', label: 'Technologies Learned', subtext: 'Modern front- & backend' },
            { metric: '100+', label: 'Hours of Coding', subtext: 'Focused build time' },
            { label: 'Open For Internship', subtext: 'Ready to contribute' },
          ].map((stat, i) => (
            <div
              key={i}
              className="premium-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[120px]"
            >
              {stat.metric ? (
                <div className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-2">
                  {stat.metric}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  Available
                </div>
              )}
              <h4 className="text-sm font-medium text-zinc-300 leading-snug">{stat.label}</h4>
              <p className="text-xs text-zinc-600 mt-2 font-mono">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Link
        to="/about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="h-8 w-px overflow-hidden rounded-full bg-white/[0.08]">
          <motion.span
            className="block h-3 w-px rounded-full bg-gradient-to-b from-white/80 to-violet-300/70"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 8 }}
            transition={{ duration: 0.28, ease: easePremium }}
          />
        </span>
        <motion.div
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.24, ease: easePremium }}
          className="text-[9px] font-mono uppercase tracking-[0.2em]"
        >
          Explore
        </motion.div>
      </Link>
    </motion.section>
  );
}
