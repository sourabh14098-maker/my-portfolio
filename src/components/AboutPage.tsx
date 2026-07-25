import React from 'react';
import { Terminal, BookOpen, Cpu, Rocket } from 'lucide-react';
import { timelineData } from '../data';
import PageHeader from './ui/PageHeader';
import Reveal from './ui/Reveal';

export default function AboutPage() {
  return (
    <section id="about" className="section-page relative z-10">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          label="About"
          title="From Curiosity to Code"
          description="A glimpse into my journey from learning programming fundamentals to building real-world applications."
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 mt-14">
          {/* Terminal-style developer card */}
          <Reveal delay={0.1}>
            <div className="premium-card rounded-3xl overflow-hidden font-mono text-sm shadow-2xl border border-white/5 hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.05)] bg-[#050505]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] text-zinc-500 uppercase tracking-widest">developer.sh</span>
              </div>
              <div className="p-6 sm:p-8 bg-[#090909] text-zinc-400">
                <p className="mb-4">
                  <span className="text-accent">~</span> <span className="text-white">whoami</span>
                </p>
                <p className="mb-6 leading-relaxed">
                  I'm a passionate Computer Science student and Frontend Developer from India. I focus on building modern, responsive, and highly interactive web applications.
                </p>
                <p className="mb-4">
                  <span className="text-accent">~</span> <span className="text-white">cat</span> interests.txt
                </p>
                <ul className="list-disc list-inside mb-6 space-y-1">
                  <li>Frontend Architecture</li>
                  <li>UI/UX Design</li>
                  <li>Open Source</li>
                  <li>Performance Optimization</li>
                </ul>
                <p className="mb-2">
                  <span className="text-accent">~</span> <span className="text-white">echo</span> $STATUS
                </p>
                <p className="text-green-400">Open for internships and exciting opportunities.</p>
                <div className="mt-6 flex items-center gap-2 animate-pulse">
                  <span className="w-2.5 h-5 bg-white/80 inline-block" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative border-l border-white/10 pl-8 sm:pl-10 ml-2 sm:ml-4 flex flex-col justify-center">
            {timelineData.map((event, index) => {
              const IconComp =
                event.icon === 'Terminal'
                  ? Terminal
                  : event.icon === 'BookOpen'
                    ? BookOpen
                    : event.icon === 'Cpu'
                      ? Cpu
                      : Rocket;

              const isOngoing = event.status === 'ongoing';
              const isFuture = event.status === 'future';

              return (
                <Reveal key={index} delay={index * 0.08} className="relative mb-12 last:mb-0 group/time">
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-5 h-5 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shadow-lg">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${isOngoing ? 'bg-[var(--color-accent)]' : isFuture ? 'bg-zinc-700' : 'bg-zinc-400'
                        }`}
                    />
                  </div>

                  <article className="premium-card rounded-3xl p-6 border border-white/5 transition-all duration-500 hover:border-white/10 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.02)]">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">
                          {event.year}
                        </span>
                        <IconComp className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        {event.status === 'completed' && 'Completed'}
                        {isOngoing && 'In progress'}
                        {isFuture && 'Upcoming'}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover/time:text-accent transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-7">{event.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
