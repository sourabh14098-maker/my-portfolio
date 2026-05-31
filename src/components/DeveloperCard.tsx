import { motion } from 'motion/react';
import { Code, MapPin, GraduationCap, Laptop, Sparkles } from 'lucide-react';

export default function DeveloperCard() {
  return (
    <div id="developer-card-container" className="relative group/card">
      {/* Sleek backlight glow - inspired by Linear's glowing border backgrounds */}
      <div 
        id="developer-card-backlight"
        className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 opacity-0 group-hover/card:opacity-100 blur-xl transition-all duration-700 z-0"
      />
      
      {/* Subtle secondary colored glow */}
      <div 
        id="developer-card-color-glow"
        className="absolute inset-10 rounded-full bg-[#3b82f6]/10 opacity-50 group-hover/card:opacity-85 blur-2xl transition-all duration-700 z-0 pointer-events-none"
      />

      {/* Main card body with precise bordered minimalism */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="developer-portrait-card"
        className="relative z-10 w-full max-w-[340px] rounded-[24px] border border-[#222222] bg-black p-6 shadow-2xl backdrop-blur-xl flex flex-col gap-6 text-center select-none overflow-hidden hover:border-[#333333] transition-all duration-300"
      >
        {/* Apple-style top glass reflection accent */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent pointer-events-none" />
        
        {/* Header - Vercel style label */}
        <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-zinc-500 pb-3 border-b border-[#161616]">
          <span className="flex items-center gap-1.5 font-medium text-zinc-400">
            <Code className="w-3.5 h-3.5 text-zinc-400" />
            NYXO // RESUME
          </span>
          <span className="flex items-center gap-1 text-zinc-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-400"></span>
            </span>
            ACTIVE
          </span>
        </div>

        {/* Profile photo container with supreme minimalist styling */}
        <div className="relative mx-auto mt-1">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 opacity-40 group-hover/card:opacity-80 transition-all duration-500 pointer-events-none" />
          <div className="relative w-28 h-28 rounded-full overflow-hidden border border-[#222222] p-1 bg-black">
            <img
              src="/src/assets/images/developer_profile_1780135085736.png"
              alt="NYXO professional developer portrait"
              className="w-full h-full object-cover rounded-full z-10 grayscale-[15%] hover:grayscale-0 hover:scale-[1.03] duration-500 ease-out transition-all pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute -bottom-1 -right-1 bg-black border border-[#222222] p-1.5 rounded-full text-zinc-400 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
          </div>
        </div>

        {/* Info Area */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="font-display font-medium text-lg leading-tight text-white tracking-tight">
              NYXO
            </h3>
            <p className="flex items-center justify-center gap-1 text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
              <MapPin className="w-3 h-3 text-zinc-650" /> India
            </p>
          </div>

          {/* Badges Layout */}
          <div className="flex flex-col gap-1.5 pt-3">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-900/80 text-xs font-mono text-zinc-300">
              <Laptop className="w-3.5 h-3.5 text-zinc-400" />
              <span>Frontend Developer</span>
            </div>

            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-900/80 text-xs font-mono text-zinc-300">
              <GraduationCap className="w-4 h-4 text-zinc-400" />
              <span>Computer Science Student</span>
            </div>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="grid grid-cols-4 gap-1 pt-1 text-[9px] font-mono font-medium text-zinc-500">
          <span className="py-1 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400">REACT</span>
          <span className="py-1 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400">NEXT.JS</span>
          <span className="py-1 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400">TS</span>
          <span className="py-1 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400">TAILWIND</span>
        </div>

        {/* Available for Internships bottom status */}
        <div className="mt-1 pt-4 border-t border-[#111111]">
          <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-900 text-left">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">OPPORTUNITIES</span>
              <span className="text-xs font-medium text-zinc-300">Available for Internships</span>
            </div>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-200"></span>
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
