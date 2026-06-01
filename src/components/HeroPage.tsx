import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';
import DeveloperCard from './DeveloperCard';
import AchievementsSection from './AchievementsSection';

export default function HeroPage() {
  const { triggerResumeDownload } = useOutletContext<{ triggerResumeDownload: () => void }>();

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col justify-center pt-16 pb-20 md:pt-20 md:pb-28 px-6 md:px-8 z-20"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-12 md:gap-16 text-left">
            <div className="flex flex-col gap-10 md:gap-12 w-full">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                id="main-hero-title"
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-semibold tracking-[-0.03em] text-white leading-[1.08] max-w-2xl"
              >
                Building Modern
                <br />
                Digital Experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-zinc-500 font-mono text-[11px] md:text-xs tracking-[0.12em] uppercase"
              >
                Computer Science Student • Frontend Developer • Full Stack Learner
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              id="hero-desc"
              className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed -mt-4"
            >
              Passionate about creating modern web applications, solving real-world problems, and
              building products that make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/projects"
                id="hero-projects-btn"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-display font-medium text-sm tracking-tight transition-colors duration-300 inline-flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={triggerResumeDownload}
                id="hero-resume-btn"
                className="px-7 py-3.5 rounded-full bg-transparent border border-[#333333] hover:border-white/30 text-white font-display font-medium text-sm tracking-tight cursor-pointer transition-all duration-300 inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                Download Resume
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <DeveloperCard />
          </div>
        </div>
      </section>

      <AchievementsSection />
    </>
  );
}
