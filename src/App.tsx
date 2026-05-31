/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import HeroPage from './components/HeroPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';

export default function App() {
  // Cinematic Intro Animation states
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [showTagline, setShowTagline] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Show glow and tagline after letters are done typing (each letter delay is 0.25s, so total 1s to finish typing)
    const taglineTimer = setTimeout(() => {
      setShowGlow(true);
      setShowTagline(true);
    }, 1100);

    // End intro after 2.85 seconds, triggering smooth main reveal animation
    const endIntroTimer = setTimeout(() => {
      setIsIntroActive(false);
    }, 2850);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(endIntroTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isIntroActive ? (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#000000] z-[999] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden"
        >
          {/* Faint premium background grid patterns */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center">
            {/* Ambient blue & purple glow around the logo letters */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showGlow ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-r from-[#3b82f6]/15 via-[#8b5cf6]/15 to-[#3b82f6]/15 blur-3xl -z-10 pointer-events-none"
            />

            {/* Individual typography letters mapped cleanly for delayed staggered reveal */}
            <div className="flex items-center justify-center font-sans font-black text-6xl md:text-8xl tracking-[0.2em] md:tracking-[0.25em] pl-[0.2em] md:pl-[0.25em] text-white">
              {["N", "Y", "X", "O"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.6, y: 15, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.25,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Cinematic subtle tagline */}
            <div className="h-6 mt-6 overflow-hidden flex items-center justify-center">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={showTagline ? { opacity: 0.75, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-zinc-400 font-mono text-[10px] md:text-xs tracking-[0.18em] uppercase font-semibold text-center leading-none"
              >
                Building Modern Digital Experiences
              </motion.p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85 }}
          className="w-full"
        >
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HeroPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="skills" element={<SkillsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


