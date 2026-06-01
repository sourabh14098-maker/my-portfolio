/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import HeroPage from './components/HeroPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';
import PageLoader, { usePageLoader } from './components/PageLoader';
import { IntroContext } from './context/IntroContext';
import { easePremium } from './lib/motion';

export default function App() {
  const { showLoader, completeLoader, playHeroEntrance } = usePageLoader();

  return (
    <IntroContext.Provider value={{ playHeroEntrance }}>
      <AnimatePresence mode="wait">
        {showLoader && <PageLoader onComplete={completeLoader} />}
      </AnimatePresence>

      {!showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easePremium }}
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
    </IntroContext.Provider>
  );
}
