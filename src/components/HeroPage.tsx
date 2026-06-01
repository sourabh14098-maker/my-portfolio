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
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroStaggerItem = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: easePremium },
  },
};

export default function HeroPage() {
  const { playHeroEntrance } = useIntro();

  const leftContent = (
    <>
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 max-w-2xl">
        <motion.h1
          variants={playHeroEntrance ? heroStaggerItem : undefined}
          initial={playHeroEntrance ? undefined : { opacity: 0, y: 20 }}
          animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
          transition={playHeroEntrance ? undefined : { duration: 0.7, ease: easePremium }}
          id="main-hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-display font-medium tracking-[-0.03em] text-white leading-[1.08]"
        >
          Building Modern <span className="text-zinc-400">Digital Experiences</span>
        </motion.h1>

        <motion.p
          variants={playHeroEntrance ? heroStaggerItem : undefined}
          initial={playHeroEntrance ? undefined : { opacity: 0, y: 12 }}
          animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
          transition={playHeroEntrance ? undefined : { duration: 0.6, delay: 0.08, ease: easePremium }}
          className="text-zinc-500 font-mono text-xs sm:text-sm tracking-[0.14em] uppercase font-medium leading-relaxed"
        >
          Computer Science Student · Frontend Developer · Full Stack Learner
        </motion.p>
      </div>

      <motion.p
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.65, delay: 0.14, ease: easePremium }}
        id="hero-desc"
        className="text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed"
      >
        Passionate about creating modern web applications, solving real-world problems, and building
        products that make an impact.
      </motion.p>

      <motion.div
        variants={playHeroEntrance ? heroStaggerItem : undefined}
        initial={playHeroEntrance ? undefined : { opacity: 0, y: 16 }}
        animate={playHeroEntrance ? undefined : { opacity: 1, y: 0 }}
        transition={playHeroEntrance ? undefined : { duration: 0.65, delay: 0.22, ease: easePremium }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
      >
        <Link to="/projects" id="hero-projects-btn" className="btn-primary">
          View Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </>
  );

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-center section-page !pt-8 sm:!pt-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
        {playHeroEntrance ? (
          <motion.div
            className="lg:col-span-7 flex flex-col items-start gap-10 sm:gap-12 lg:gap-14 text-left"
            variants={heroStaggerContainer}
            initial="hidden"
            animate="show"
          >
            {leftContent}
          </motion.div>
        ) : (
          <div className="lg:col-span-7 flex flex-col items-start gap-10 sm:gap-12 lg:gap-14 text-left">
            {leftContent}
          </div>
        )}

        {playHeroEntrance ? (
          <motion.div
            variants={heroStaggerItem}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 flex items-center justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="scale-[0.65] origin-center">
              <DeveloperCard />
            </div>
          </motion.div>
        ) : (
          <Reveal className="lg:col-span-5 flex items-center justify-center lg:justify-end mt-6 lg:mt-0" delay={0.15}>
            <div className="scale-[0.65] origin-center">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-[#222222] rounded-full flex justify-center pt-1.5"
        >
          <span className="w-1 h-1 bg-zinc-500 rounded-full" />
        </motion.div>
      </Link>
    </section>
  );
}
