import React from 'react';
import { motion } from 'motion/react';
import { Terminal, BookOpen, Cpu, Rocket } from 'lucide-react';
import { timelineData } from '../data';

export default function AboutPage() {
  return (
    <section 
      id="about" 
      className="py-12 px-6 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 id="about-title" className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest font-semibold mb-3">About Me</h2>
          <p className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white leading-tight">From Curiosity to Code</p>
          <p className="text-[#a1a1aa] text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            A glimpse into my journey from learning programming fundamentals to building real-world applications and continuously growing as a developer.
          </p>
        </div>

        {/* Premium Timeline Engine */}
        <div className="relative border-l-2 border-[#161616] pl-6 md:pl-12 ml-4 md:ml-6 py-2">
          {timelineData.map((event, index) => {
            // Node mapping to support diverse icons
            const IconComp = event.icon === 'Terminal' ? Terminal 
              : event.icon === 'BookOpen' ? BookOpen
              : event.icon === 'Cpu' ? Cpu 
              : Rocket;

            // Setup styles according to the precise status
            const isCompleted = event.status === 'completed';
            const isOngoing = event.status === 'ongoing';
            const isFuture = event.status === 'future';

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-14 last:mb-0 group/time"
              >
                
                {/* Outer circle indicator connecting with the left track */}
                <div className="absolute -left-[35px] md:-left-[59px] top-1 w-6 h-6 rounded-full bg-black border border-[#222222] flex items-center justify-center z-20 transition-all duration-300 group-hover/time:scale-110">
                  <span className={`w-2 h-2 rounded-full ${
                    isCompleted ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                    : isOngoing ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                    : 'bg-zinc-750'
                  }`} />
                </div>

                {/* Body card with premium Vercel/Linear elements and backlighting */}
                <div className="relative rounded-2xl border border-[#222222] bg-[#050505]/95 hover:bg-black/95 p-6 md:p-8 hover:border-[#333333] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden shadow-2xl">
                  
                  {/* Glowing highlight corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl pointer-events-none transition-all duration-500 group-hover/time:opacity-20 ${
                    isCompleted ? 'bg-emerald-500/30'
                    : isOngoing ? 'bg-blue-500/30'
                    : 'bg-zinc-500/30'
                  }`} />

                  {/* Header elements badge metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold px-3 py-1 bg-black rounded-full text-zinc-350 border border-[#222222] group-hover/time:border-zinc-700 transition-colors duration-300">
                        {event.year}
                      </span>
                      <div className="p-1 px-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-400 group-hover/time:text-white transition-colors duration-300">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    
                    {/* Precise design badges requested */}
                    <div>
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-medium tracking-wider text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/15">
                          ✓ Completed
                        </span>
                      )}
                      {isOngoing && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-medium tracking-wider text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/5 border border-blue-500/15">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                          </span>
                          ⚡ In Progress
                        </span>
                      )}
                      {isFuture && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-medium tracking-wider text-zinc-400 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                          🎯 Target
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-medium text-white mb-2 group-hover/time:text-[#3b82f6] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed group-hover/time:text-zinc-300 transition-colors duration-300">
                    {event.description}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
