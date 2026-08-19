import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ExternalLink, Check } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';
import PageHeader from './ui/PageHeader';
import Reveal from './ui/Reveal';
import { saveLastProject } from "../hooks/usePortfolioMemory";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section-page relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-5">
              SELECTED WORK
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Projects built with focus on detail, clean code, and intuitive user experience.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {projectsData.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <Reveal key={project.id} delay={index * 0.1} className={isFeatured ? 'lg:col-span-8' : 'lg:col-span-4'}>
                <motion.article
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col h-full rounded-[24px] bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden group hover:border-[#2a2a2a]"
                  style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)" }}
                >
                  <div className="p-2 pb-0">
                    <div className={`relative overflow-hidden rounded-[20px] bg-[#111] border border-[#1a1a1a] ${isFeatured ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[16/10] sm:aspect-video lg:aspect-[4/5]'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1 text-left relative z-10">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
                      {project.subtitle}
                    </p>
                    <h3 className="font-display font-medium text-white mb-3 text-xl md:text-2xl transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-8 flex-1 text-sm md:text-[15px]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        alert(project.title);

                        saveLastProject(project.title);

                        alert("Saved!");

                        setSelectedProject(project);
                      }}
                      id={`case-study-trigger-${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors self-start"
                    >
                      <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">Explore Project</span>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="case-study-modal-backdrop"
            className="fixed inset-0 bg-[#050505]/92 backdrop-blur-md z-[60] overflow-y-auto px-4 sm:px-6 py-10 sm:py-12 flex items-start justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="glass-panel rounded-2xl sm:rounded-3xl p-6 md:p-10 w-full max-w-4xl bg-[#0a0a0a] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                id="case-study-modal-close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#222222] bg-[#050505] flex items-center justify-center text-zinc-500 hover:text-white premium-hover z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6 text-left pr-12">
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.15em] mb-1">
                  {selectedProject.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-8 border border-[#1a1a1a]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                <div className="md:col-span-7 flex flex-col gap-6">
                  <div>
                    <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.15em] mb-2">
                      Overview
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.15em] mb-3">
                      Key features
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                          <span className="mt-0.5 w-4 h-4 rounded-full border border-[#333333] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-zinc-300" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="premium-card rounded-xl p-4">
                    <p className="text-sm text-zinc-400 leading-relaxed italic">
                      &ldquo;{selectedProject.caseStudy.results}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col gap-6">
                  <div className="premium-card rounded-xl p-5">
                    <h4 className="text-[11px] font-mono text-zinc-600 uppercase tracking-[0.15em] mb-3">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono border border-[#1a1a1a] px-2 py-0.5 rounded-full text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.15em]">
                      Challenges &amp; solutions
                    </h4>
                    {selectedProject.caseStudy.challenges.map((challenge, i) => (
                      <div key={i} className="premium-card rounded-xl p-4 text-sm">
                        <p className="text-zinc-600 font-mono text-[10px] uppercase mb-1">
                          Challenge {i + 1}
                        </p>
                        <p className="text-zinc-500 leading-relaxed mb-3">{challenge}</p>
                        <p className="text-zinc-600 font-mono text-[10px] uppercase mb-1">Solution</p>
                        <p className="text-zinc-300 leading-relaxed">
                          {selectedProject.caseStudy.solutions[i]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-end gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !text-xs"
                  >
                    View repository
                  </a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary !text-xs"
                  >
                    Live demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
