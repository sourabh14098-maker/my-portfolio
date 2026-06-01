import React from 'react';
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
  Terminal,
  Box,
} from 'lucide-react';
import { skillsData } from '../data';

const CpuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </svg>
);

const getTechIcon = (name: string) => {
  const cls = 'w-4 h-4 text-zinc-400 group-hover/skill:text-zinc-200 transition-colors duration-300';
  switch (name) {
    case 'HTML':
      return <Code className={cls} />;
    case 'CSS':
      return <Layers className={cls} />;
    case 'JavaScript':
      return <Code className={cls} />;
    case 'React':
      return <Atom className={cls} />;
    case 'Next.js':
      return <Zap className={cls} />;
    case 'Tailwind':
      return <Wind className={cls} />;
    case 'Node.js':
      return <Server className={cls} />;
    case 'Express':
      return <CpuIcon className={cls} />;
    case 'MongoDB':
      return <Database className={cls} />;
    case 'Git':
      return <GitBranch className={cls} />;
    case 'GitHub':
      return <Github className={cls} />;
    case 'VS Code':
      return <Laptop className={cls} />;
    case 'Postman':
      return <Send className={cls} />;
    case 'Netlify':
      return <Cloud className={cls} />;
    default:
      return <Terminal className={cls} />;
  }
};

export default function SkillsPage() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <h2
            id="skills-title"
            className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-medium mb-4"
          >
            Skills
          </h2>
          <p className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
            Technical Stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {skillsData.map((categoryObj, catIdx) => (
            <motion.div
              key={categoryObj.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: catIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[#222222] bg-[#050505] p-5 md:p-6 hover:border-[#333333] transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#161616]">
                <Box className="w-3.5 h-3.5 text-zinc-600" strokeWidth={1.5} />
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  {categoryObj.category}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {categoryObj.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="group/skill flex items-center gap-2.5 rounded-xl border border-[#1a1a1a] bg-black px-3 py-2.5 hover:border-[#333333] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default"
                  >
                    {getTechIcon(skill.name)}
                    <span className="text-xs font-medium text-zinc-400 group-hover/skill:text-zinc-200 transition-colors duration-300">
                      {skill.name}
                    </span>
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
