import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Layers, 
  Atom, 
  Zap, 
  Wind, 
  Server, 
  Database, 
  GitBranch, 
  Github, 
  Laptop, 
  Send, 
  Cloud, 
  Terminal 
} from 'lucide-react';
import { skillsData } from '../data';

const getTechIcon = (name: string) => {
  switch (name) {
    case 'HTML': return <Code className="w-4 h-4 text-orange-500" />;
    case 'CSS': return <Layers className="w-4 h-4 text-blue-400" />;
    case 'JavaScript': return <Code className="w-4 h-4 text-yellow-500" />;
    case 'React': return <Atom className="w-4 h-4 text-[#60a5fa] animate-[spin_12s_linear_infinite]" />;
    case 'Next.js': return <Zap className="w-4 h-4 text-white" />;
    case 'Tailwind CSS': return <Wind className="w-4 h-4 text-[#38bdf8]" />;
    case 'Node.js': return <Server className="w-4 h-4 text-emerald-500" />;
    case 'Express.js': return <CpuIcon className="w-4 h-4 text-zinc-400" />;
    case 'MongoDB': return <Database className="w-4 h-4 text-emerald-600" />;
    case 'Git': return <GitBranch className="w-4 h-4 text-orange-600" />;
    case 'GitHub': return <Github className="w-4 h-4 text-white" />;
    case 'VS Code': return <Laptop className="w-4 h-4 text-sky-500" />;
    case 'Postman': return <Send className="w-4 h-4 text-orange-400" />;
    case 'Netlify': return <Cloud className="w-4 h-4 text-teal-400" />;
    default: return <Terminal className="w-4 h-4 text-zinc-400" />;
  }
};

const CpuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </svg>
);

export default function SkillsPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

  return (
    <section 
      id="skills" 
      className="py-12 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 id="skills-title" className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest font-semibold mb-2">Skills</h2>
            <p className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white font-sans">Technical Stack</p>
            <p className="text-zinc-400 text-xs mt-2 max-w-xl">
              The languages, frameworks, databases, and professional tools that I use to build scalable web applications.
            </p>
          </div>

          {/* In-app visual categories selector */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Frontend', 'Backend', 'Database', 'Tools'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                  activeSkillCategory === cat 
                    ? 'bg-gradient-to-r from-white to-zinc-200 text-black border border-transparent shadow' 
                    : 'bg-[#111111] hover:bg-[#1a1a1a] text-zinc-400 border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered Grid of Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData
            .filter(sc => activeSkillCategory === 'All' || sc.category === activeSkillCategory)
            .map((categoryObj, catIdx) => (
              <motion.div 
                key={catIdx}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                className="rounded-2xl border border-[#161616] bg-[#050505]/80 p-6 md:p-8 hover:border-[#222222] transition-colors duration-300 flex flex-col gap-6 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-[#111111]/85 pb-4">
                  <span className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
                    {categoryObj.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {categoryObj.skills.length} {categoryObj.skills.length === 1 ? 'Technology' : 'Technologies'}
                  </span>
                </div>

                {/* Tech stack grid with custom animations */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categoryObj.skills.map((skill, skIdx) => (
                    <motion.div
                      key={skIdx}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative group/tech bg-black border border-[#161616] rounded-xl p-3 flex flex-col gap-3 hover:border-zinc-800 hover:bg-[#070707] transition-all duration-300 cursor-default select-none overflow-hidden"
                    >
                      {/* Glow flare background */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.005] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-350 group-hover/tech:text-white transition-colors duration-300">
                          {getTechIcon(skill.name)}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-zinc-350 group-hover/tech:text-white transition-colors duration-200">
                          {skill.name}
                        </p>
                        <p className="text-[9px] font-mono text-zinc-650 tracking-wider uppercase mt-0.5">
                          Active Stack
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
