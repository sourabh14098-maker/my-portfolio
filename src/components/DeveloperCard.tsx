import { motion } from 'motion/react';
import { Code, MapPin, GraduationCap, Laptop } from 'lucide-react';

export default function DeveloperCard() {
  return (
    <div id="developer-card-container" className="relative group/card w-full max-w-[221px] mx-auto lg:mx-0 lg:ml-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="developer-portrait-card"
        className="relative z-10 w-full rounded-2xl border border-[#222222] bg-[#050505] p-4 shadow-2xl flex flex-col gap-4 text-center select-none hover:border-[#333333] transition-all duration-300"
      >
        <div className="flex items-center justify-between text-[8px] font-mono tracking-wider text-zinc-600 pb-2 border-b border-[#161616]">
          <span className="flex items-center gap-1 text-zinc-500">
            <Code className="w-3 h-3" />
            NYXO
          </span>
          <span className="text-zinc-600">ACTIVE</span>
        </div>

        <div className="relative mx-auto">
          <div className="relative w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden border border-[#222222] p-0.5 bg-black">
            <img
              src="/src/assets/images/developer_profile_1780135085736.png"
              alt="Sourabh Raj"
              className="w-full h-full object-cover rounded-full hover:scale-[1.03] duration-500 ease-out transition-transform pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-display font-medium text-sm text-white tracking-tight">Sourabh Raj</h3>
          <p className="flex items-center justify-center gap-1 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
            <MapPin className="w-2.5 h-2.5" /> India
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black border border-[#1a1a1a] text-[10px] font-mono text-zinc-500">
            <Laptop className="w-3 h-3" />
            Frontend Developer
          </div>
          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black border border-[#1a1a1a] text-[10px] font-mono text-zinc-500">
            <GraduationCap className="w-3 h-3" />
            CS Student
          </div>
        </div>
      </motion.div>
    </div>
  );
}
