import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { easePremium } from '../lib/motion';
import IntroParticles from './intro/IntroParticles';
import TypewriterTagline from './intro/TypewriterTagline';

const LETTERS = ['N', 'Y', 'X', 'O'] as const;
const TAGLINE = 'Crafting Digital Experiences';
const LETTER_STAGGER = 0.22;
const LETTER_START = 0.18;
const GLOW_START_MS = 1050;
const TYPEWRITER_START_MS = 1380;
const TYPEWRITER_CHAR_MS = 34;
const HOLD_AFTER_TAGLINE_MS = 1000;
const EXIT_FADE_MS = 550;

/** Optional: set to true to skip intro after first view in same tab */
const REMEMBER_INTRO_IN_SESSION = false;
const STORAGE_KEY = 'nyxo-intro-seen';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [exiting, setExiting] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [typewriterActive, setTypewriterActive] = useState(false);

  const scheduleExit = useCallback(() => {
    setExiting(true);
    window.setTimeout(onComplete, EXIT_FADE_MS);
  }, [onComplete]);

  useEffect(() => {
    const glowTimer = window.setTimeout(() => setShowGlow(true), GLOW_START_MS);
    const typeTimer = window.setTimeout(() => setTypewriterActive(true), TYPEWRITER_START_MS);

    const typewriterDuration = TAGLINE.length * TYPEWRITER_CHAR_MS;
    const exitTimer = window.setTimeout(
      scheduleExit,
      TYPEWRITER_START_MS + typewriterDuration + HOLD_AFTER_TAGLINE_MS,
    );

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(typeTimer);
      clearTimeout(exitTimer);
    };
  }, [scheduleExit]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: EXIT_FADE_MS / 1000, ease: easePremium }}
      aria-label="Loading"
      role="status"
    >
      <IntroParticles />



      <div className="relative flex flex-col items-center justify-center gap-10 px-6">
        {/* Logo cluster */}
        <div className="relative flex items-center justify-center">


          <div className="relative flex items-center font-display font-semibold text-5xl sm:text-6xl md:text-7xl tracking-[0.32em] sm:tracking-[0.35em] pl-[0.32em] sm:pl-[0.35em] text-white">
            {LETTERS.map((letter, index) => (
              <motion.span
                key={letter}
                className="inline-block"
                initial={{ opacity: 0, y: 18, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.48,
                  delay: LETTER_START + index * LETTER_STAGGER,
                  ease: easePremium,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <TypewriterTagline text={TAGLINE} active={typewriterActive} speedMs={TYPEWRITER_CHAR_MS} />
      </div>
    </motion.div>
  );
}

export function usePageLoader() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === 'undefined') return true;
    // Purana flag — isse intro kabhi nahi dikhta tha jab tak console se clear na karo
    try {
      localStorage.removeItem('nyxo-intro-complete');
    } catch {
      /* ignore */
    }
    if (!REMEMBER_INTRO_IN_SESSION) return true;
    return sessionStorage.getItem(STORAGE_KEY) !== '1';
  });
  const [playHeroEntrance, setPlayHeroEntrance] = useState(false);

  const completeLoader = useCallback(() => {
    if (REMEMBER_INTRO_IN_SESSION) {
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
    setShowLoader(false);
    setPlayHeroEntrance(true);
  }, []);

  return { showLoader, completeLoader, playHeroEntrance };
}

/** Testing ke liye intro dubara chalao */
export function resetIntro() {
  sessionStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('nyxo-intro-complete');
}
