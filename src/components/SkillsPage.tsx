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
  Terminal,
} from 'lucide-react';
import { skillsData } from '../data';
import PageHeader from './ui/PageHeader';
import Reveal from './ui/Reveal';

const getTechIcon = (name: string) => {
  const iconClass = 'w-4 h-4 text-zinc-500';
  switch (name) {
    case 'HTML':
      return <Code className={iconClass} />;
    case 'CSS':
      return <Layers className={iconClass} />;
    case 'JavaScript':
      return <Code className={iconClass} />;
    case 'React':
      return <Atom className={iconClass} />;
    case 'Next.js':
      return <Zap className={iconClass} />;
    case 'Tailwind CSS':
      return <Wind className={iconClass} />;
    case 'Node.js':
      return <Server className={iconClass} />;
    case 'Express.js':
      return <CpuIcon className={iconClass} />;
    case 'MongoDB':
      return <Database className={iconClass} />;
    case 'Git':
      return <GitBranch className={iconClass} />;
    case 'GitHub':
      return <Github className={iconClass} />;
    case 'VS Code':
      return <Laptop className={iconClass} />;
    case 'Postman':
      return <Send className={iconClass} />;
    case 'Netlify':
      return <Cloud className={iconClass} />;
    default:
      return <Terminal className={iconClass} />;
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

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const;

export default function SkillsPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');

  return (
    <section id="skills" className="section-page relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <PageHeader
            align="left"
            label="Skills"
            title="Technical Stack"
            description="Languages, frameworks, and tools I use to build scalable web applications."
          />

          <Reveal className="flex flex-wrap gap-2" delay={0.1}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveSkillCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono premium-hover cursor-pointer ${
                  activeSkillCategory === cat
                    ? 'bg-white text-[#050505] border border-white'
                    : 'bg-transparent text-zinc-500 border border-[#222222] hover:text-zinc-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillsData
            .filter((sc) => activeSkillCategory === 'All' || sc.category === activeSkillCategory)
            .map((categoryObj, catIdx) => (
              <Reveal key={categoryObj.category} delay={catIdx * 0.06}>
                <motion.div layout className="premium-card rounded-2xl p-6 sm:p-8 flex flex-col gap-6 h-full">
                  <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.15em]">
                      {categoryObj.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600">
                      {categoryObj.skills.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {categoryObj.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl border border-[#1a1a1a] bg-[#050505] p-3 flex flex-col gap-3 premium-hover hover:bg-[#080808]"
                      >
                        <div className="p-2 rounded-lg border border-[#1a1a1a] w-fit">{getTechIcon(skill.name)}</div>
                        <div>
                          <p className="text-xs font-medium text-zinc-300">{skill.name}</p>
                          <div className="mt-2 h-0.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-zinc-600 rounded-full transition-all duration-700"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
