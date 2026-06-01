import React from 'react';
import { Terminal, BookOpen, Cpu, Rocket } from 'lucide-react';
import { timelineData } from '../data';
import PageHeader from './ui/PageHeader';
import Reveal from './ui/Reveal';

export default function AboutPage() {
  return (
    <section id="about" className="section-page relative z-10">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          label="About"
          title="From Curiosity to Code"
          description="A glimpse into my journey from learning programming fundamentals to building real-world applications."
        />

        <div className="relative border-l border-[#1a1a1a] pl-8 sm:pl-10 ml-2 sm:ml-4">
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
                <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-4 h-4 rounded-full bg-[#050505] border border-[#222222] flex items-center justify-center">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isOngoing ? 'bg-[#3b82f6]' : isFuture ? 'bg-zinc-700' : 'bg-zinc-400'
                    }`}
                  />
                </div>

                <article className="premium-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-zinc-500 px-2.5 py-1 rounded-full border border-[#222222]">
                        {event.year}
                      </span>
                      <IconComp className="w-3.5 h-3.5 text-zinc-600" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">
                      {event.status === 'completed' && 'Completed'}
                      {isOngoing && 'In progress'}
                      {isFuture && 'Upcoming'}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-white mb-2 group-hover/time:text-zinc-100 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{event.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
