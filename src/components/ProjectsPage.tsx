import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ExternalLink, Check } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 id="projects-title" className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest font-semibold mb-2">Projects</h2>
          <p className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white font-sans">Selected Work</p>
          <p className="text-zinc-400 text-xs mt-2 max-w-xl mx-auto">
            Selected projects built with meticulous focus on details, code cleanliness, and intuitive UX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-[#161616] bg-[#050505]/95 hover:border-[#2a2a2a] overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-2xl"
            >
              {/* Subtle backlight glow */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />
              
              <div>
                
                {/* Visual Banner Backdrop */}
                <div className="relative h-44 overflow-hidden border-b border-[#111111]">
                  <div className="absolute inset-0 bg-[#000000] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                    <img 
                      src={project.image} 
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-85 transition-opacity" 
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[9px] font-mono tracking-wider font-extrabold uppercase text-white bg-[#000000]/80 border border-white/5 rounded-full select-none">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Listing metadata contents */}
                <div className="p-6 md:p-8 text-left">
                  
                  <h3 className="text-xl font-display font-bold text-white mb-2 leading-none group-hover:text-[#3b82f6] transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs md:text-sm line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono text-zinc-400 px-2.5 py-1 bg-[#111111] rounded-md border border-[#222222]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Action layout bottom border triggers details dialog */}
              <div className="p-6 md:p-8 pt-0 border-t border-[#111111]/70 flex items-center justify-between text-zinc-400">
                
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`case-study-trigger-${project.id}`}
                  className="px-4 py-2.5 rounded-full bg-[#111111] border border-[#222222] text-xs font-mono font-bold tracking-tight text-white hover:text-[#3b82f6] cursor-pointer hover:border-zinc-800 transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm hover:scale-[1.01]"
                >
                  Analyze Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* DETAILED PROJECT CASE STUDY MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="case-study-modal-backdrop"
            className="fixed inset-0 bg-[#000000]/90 backdrop-blur-md z-[60] overflow-y-auto px-6 py-12 flex items-start justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="glass-panel rounded-3xl p-6 md:p-10 w-full max-w-4xl shadow-2xl bg-[#0a0a0a] border-[#222222] relative"
            >
              
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedProject(null)}
                id="case-study-modal-close"
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center hover:bg-[#1a1a1a] text-zinc-400 hover:text-white cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header with Glowing Accents */}
              <div className="mb-6 flex flex-col text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase block mb-1">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                  {selectedProject.title} Case Analysis
                </h3>
              </div>

              {/* Visual image view */}
              <div className="w-full h-64 md:h-80 bg-black rounded-2xl overflow-hidden mb-8 border border-[#222222]">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} Case Banner`}
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Multi-column grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                
                {/* Left primary documentation summary column */}
                <div className="md:col-span-7 flex flex-col gap-6">
                  
                  <div>
                    <h4 className="text-sm font-mono tracking-wider font-bold text-[#3b82f6] uppercase mb-2">Project Overview</h4>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono tracking-wider font-bold text-[#3b82f6] uppercase mb-3">Key Features Implemented</h4>
                    <ul className="flex flex-col gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/25 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#3b82f6]" />
                          </span>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono tracking-wider font-bold text-[#3b82f6] uppercase mb-2">Ultimate Project Results</h4>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed p-4 bg-[#000000] rounded-xl border border-[#222222] italic font-medium">
                      "{selectedProject.caseStudy.results}"
                    </p>
                  </div>

                </div>

                {/* Right sidebar details column */}
                <div className="md:col-span-5 flex flex-col gap-6">
                  
                  <div className="p-6 bg-[#111111]/80 rounded-2xl border border-[#222222] flex flex-col gap-4">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">TECHNOLOGIES EMBEDDED</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono bg-[#0a0a0a] border border-[#222222] px-2.5 py-0.5 rounded-full text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-wider font-bold text-[#3b82f6] uppercase">Challenges &amp; Solutions</h4>
                    <div className="flex flex-col gap-4">
                      {selectedProject.caseStudy.challenges.map((challenge, i) => (
                        <div key={i} className="p-4 bg-[#000000] rounded-xl border border-[#222222] text-xs">
                          <p className="text-[#a1a1aa] font-mono font-bold mb-1">CHALLENGE {i + 1}:</p>
                          <p className="text-zinc-400 leading-normal mb-2">{challenge}</p>
                          
                          <p className="text-[#3b82f6] font-mono font-bold mb-1">STABILIZED SOLUTION:</p>
                          <p className="text-zinc-200 leading-normal">{selectedProject.caseStudy.solutions[i]}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Modal base buttons footer details */}
              <div className="mt-8 pt-6 border-t border-[#222222] flex justify-end gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] border border-[#222222] text-white font-display text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-colors"
                  >
                    <img src="https://unpkg.com/simple-icons@v9/icons/github.svg" className="w-4 h-4 invert" alt="" /> Codebase Repo
                  </a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-display text-xs font-semibold cursor-pointer flex items-center gap-1.5 border border-transparent shadow-sm transition-colors"
                  >
                    View Live Dashboard Launch <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

