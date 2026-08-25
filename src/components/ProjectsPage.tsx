import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';
import Reveal from './ui/Reveal';
import { saveLastProject } from "../hooks/usePortfolioMemory";

export default function ProjectsPage() {
  return (
    <section className="relative z-10 w-full bg-[#050505] min-h-screen pb-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        
        {/* 
          ==================================================
          SECTION HEADER
          ==================================================
        */}
        <div className="pt-32 pb-24 md:pt-40 md:pb-40 flex flex-col items-center md:items-start text-center md:text-left">
          <Reveal>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-display font-medium text-[#f4f4f5] tracking-tight uppercase mb-6 leading-none">
              Selected Work
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-[#a1a1aa] max-w-[500px] leading-[1.8] font-normal">
              A selection of digital products, experiments and experiences I've designed and built.
            </p>
          </Reveal>
        </div>

        {/* 
          ==================================================
          PROJECT STORYTELLING LAYOUT
          ==================================================
        */}
        <div className="flex flex-col gap-32 md:gap-48 lg:gap-64">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = `0${index + 1}`;

            return (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 lg:gap-24 items-center`}
              >
                
                {/* ── PROJECT VISUAL CONTAINER ── */}
                <div className="w-full lg:w-[65%] group cursor-pointer" onClick={() => {
                  saveLastProject(project.title);
                  if (project.liveUrl && project.liveUrl !== '#') {
                    window.open(project.liveUrl, '_blank');
                  } else if (project.githubUrl) {
                    window.open(project.githubUrl, '_blank');
                  }
                }}>
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#08090C] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out group-hover:border-white/10 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[0.22,1,0.36,1] group-hover:scale-[1.03]"
                    />
                    {/* Subtle internal gradient shadow for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-60" />
                  </div>
                </div>

                {/* ── EDITORIAL INFORMATION ── */}
                <div className="w-full lg:w-[35%] flex flex-col items-start text-left">
                  <div className="flex flex-col gap-6 w-full max-w-[500px]">
                    
                    {/* Project Number */}
                    <span className="text-[11px] font-mono text-[#52525b] uppercase tracking-[0.2em]">
                      {projectNumber}
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#f4f4f5] tracking-tight transition-colors duration-500 hover:text-white">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[15px] sm:text-base text-[#a1a1aa] leading-[1.8] font-normal">
                      {project.longDescription || project.description}
                    </p>

                    {/* Metadata / Tags */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => saveLastProject(project.title)}
                      className="group inline-flex items-center gap-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#d4d4d8] transition-colors hover:text-white"
                    >
                      View Project
                      <ArrowRight className="w-3.5 h-3.5 text-[#71717a] transition-transform duration-500 ease-out group-hover:text-white group-hover:translate-x-1" />
                    </a>

                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
