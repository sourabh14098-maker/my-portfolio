import { motion } from 'motion/react';
import { Terminal, BookOpen, Cpu } from 'lucide-react';
import { timelineData } from '../data';

const iconMap = {
  Terminal,
  BookOpen,
  Cpu,
} as const;

export default function AboutPage() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            id="about-title"
            className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-medium mb-4"
          >
            About
          </h2>
          <p className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
            My Journey
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[#222222]" />

          {timelineData.map((event, index) => {
            const Icon = iconMap[event.icon as keyof typeof iconMap] ?? Terminal;
            const isOngoing = event.status === 'ongoing';

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-14 last:pb-0 group"
              >
                <div
                  className={`absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full border bg-[#050505] flex items-center justify-center ${
                    isOngoing ? 'border-white/40' : 'border-[#333333]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isOngoing ? 'bg-white' : 'bg-zinc-600'}`}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase">
                      {event.year}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-zinc-600" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-medium text-white tracking-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
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
