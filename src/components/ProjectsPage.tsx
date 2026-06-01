import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data';

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <h2
            id="projects-title"
            className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-medium mb-4"
          >
            Projects
          </h2>
          <p className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
            Selected Work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#222222] bg-[#050505] overflow-hidden flex flex-col hover:border-[#333333] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden border-b border-[#161616]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-[400ms] ease group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-display font-medium text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded-md border border-[#222222] bg-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#222222] bg-black text-xs font-medium text-zinc-300 hover:text-white hover:border-[#333333] transition-all duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-live-${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors duration-300"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
