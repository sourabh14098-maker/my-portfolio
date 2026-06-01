import { motion } from 'motion/react';
import { achievementsData } from '../data';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-medium mb-3">
            Achievements
          </h2>
          <p className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white">
            Milestones &amp; Focus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {achievementsData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group rounded-2xl border border-[#222222] bg-[#050505] p-5 md:p-6 flex items-center gap-4 hover:border-[#333333] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <span className="text-2xl leading-none select-none" aria-hidden>
                {item.emoji}
              </span>
              <p className="text-sm md:text-base font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
