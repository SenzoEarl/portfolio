import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data';

import { Project } from '../types';

export default function Projects() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <h2>Featured Projects</h2>
      <div className="space-y-1 flex-grow overflow-y-auto pr-2 custom-scrollbar">
        {portfolioData.projects.map((project) => (
          <div key={project.title}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
      <motion.a 
        href={`https://${portfolioData.personalInfo.github}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 w-full py-3 border border-border rounded-lg text-xs font-semibold text-center hover:bg-white/[0.03] transition-all text-text-main block shrink-0"
      >
        View All Projects
      </motion.a>
    </div>
  );
}

const CATEGORY_MAP: Record<string, string> = {
  // Frontend
  'Vue 3': 'Frontend', 'Nuxt 4': 'Frontend', 'React 18': 'Frontend', 'Tailwind CSS': 'Frontend',
  'Bootstrap': 'Frontend', 'TypeScript': 'Frontend', 'JavaScript (ES6+)': 'Frontend',
  'HTML5': 'Frontend', 'CSS3': 'Frontend', '@nuxt/content': 'Frontend',
  // Backend
  'Python': 'Backend', 'Django': 'Backend', 'Django 5.2': 'Backend', 'DRF': 'Backend',
  'Django REST Framework (DRF)': 'Backend', 'PostgreSQL': 'Backend', 'SQLite': 'Backend',
  'ORM': 'Backend', 'Gunicorn': 'Backend',
  // DevOps
  'Docker': 'DevOps', 'Docker Compose': 'DevOps', 'Nginx': 'DevOps', 'GitHub Actions': 'DevOps',
  'Azure': 'DevOps', 'Railway': 'DevOps', 'AWS Elastic Beanstalk': 'DevOps', 'GHCR': 'DevOps',
  'Azure Pipelines': 'DevOps', 'SSL/TLS': 'DevOps', 'HSTS': 'DevOps',
};

function ProjectItem({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Group tech stack by category
  const categorizedTech = React.useMemo(() => {
    const groups: Record<string, string[]> = {
      Frontend: [],
      Backend: [],
      DevOps: [],
      Core: []
    };

    project.techStack.forEach(tech => {
      const category = CATEGORY_MAP[tech] || 'Core';
      groups[category].push(tech);
    });

    return Object.entries(groups).filter(([_, techs]) => techs.length > 0);
  }, [project.techStack]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div 
      initial={false}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      className={`group p-4 -mx-2 rounded-xl transition-all duration-300 cursor-pointer border focus:outline-none focus:ring-1 focus:ring-accent/50 ${
        isExpanded 
          ? 'bg-white/[0.06] border-accent/30 shadow-2xl shadow-accent/5' 
          : 'bg-transparent border-transparent hover:bg-white/[0.03]'
      }`}
      layout
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-semibold text-sm transition-colors ${isExpanded ? 'text-accent' : 'text-text-main group-hover:text-accent'}`}>
              {project.title}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-text-dim/50 group-hover:text-accent/50 transition-colors"
            >
              <ChevronDown size={14} />
            </motion.div>
          </div>
          {isExpanded && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-[10px] text-accent/60 font-mono mt-0.5"
            >
              {project.year} • {project.liveUrl ? 'Public' : 'Internal'}
            </motion.span>
          )}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-dim hover:text-text-main transition-colors p-1"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={14} />
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-dim hover:text-text-main transition-colors p-1"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <motion.p 
        layout
        className={`text-[12px] leading-relaxed mb-4 text-text-dim transition-all ${isExpanded ? 'text-text-main' : 'line-clamp-2'}`}
      >
        {project.description}
      </motion.p>

      <motion.div layout className="mt-3">
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
          >
            {categorizedTech.map(([category, techs], groupIdx) => (
              <div key={category} className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold opacity-60 block border-l-2 border-accent/30 pl-2">
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {techs.map((tech, idx) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, scale: 0.9, x: -5 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: (groupIdx * 0.1) + (idx * 0.03) }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      className="text-[9px] px-2 py-0.5 bg-accent/5 text-accent border border-accent/10 rounded font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div layout className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech: string) => (
              <span 
                key={tech} 
                className="text-[9px] px-2 py-0.5 bg-border/50 text-text-dim rounded uppercase tracking-tighter border border-border/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[9px] px-2 py-0.5 text-accent font-bold">
                +{project.techStack.length - 3}
              </span>
            )}
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {isExpanded && project.highlights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-5 border-t border-border/30"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-dim font-bold mb-4 block opacity-60">
              Key Achievements
            </span>
            <div className="space-y-3">
              {project.highlights.map((highlight: string, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.2 }}
                  className="flex gap-3 text-[11px] text-text-dim leading-relaxed group/highlight"
                >
                  <div className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent group-hover/highlight:scale-150 transition-transform shadow-[0_0_8px_#3b82f6]" />
                  <span className="group-hover/highlight:text-text-main transition-colors">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
