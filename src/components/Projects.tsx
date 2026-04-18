import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
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

function ProjectItem({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      initial={false}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group p-4 -mx-2 rounded-xl transition-colors cursor-pointer ${isExpanded ? 'bg-white/[0.05] border border-border/50' : 'hover:bg-white/[0.03] border border-transparent'}`}
      layout
    >
      <div className="flex justify-between items-center mb-2">
        <span className={`font-semibold text-sm transition-colors ${isExpanded ? 'text-accent' : 'text-text-main group-hover:text-accent'}`}>
          {project.title}
        </span>
        <div className="flex gap-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-dim hover:text-text-main transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-dim hover:text-text-main transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <motion.p 
        layout
        className={`text-[12px] leading-relaxed mb-3 text-text-dim transition-all ${isExpanded ? '' : 'line-clamp-2'}`}
      >
        {project.description}
      </motion.p>

      <motion.div layout className="mt-3">
        {isExpanded && (
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[10px] uppercase tracking-widest text-text-dim font-bold mb-3 block"
          >
            Stack & Tools
          </motion.span>
        )}
        <motion.div layout className="flex flex-wrap gap-1.5">
          {(isExpanded ? project.techStack : project.techStack.slice(0, 3)).map((tech: string) => (
            <motion.span 
              layout
              key={tech} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={isExpanded ? { y: -2, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.4)', color: '#FAFAFA' } : {}}
              className={`text-[9px] px-2 py-0.5 rounded uppercase tracking-tighter transition-colors border ${
                isExpanded 
                  ? 'bg-accent/5 text-accent border-accent/20 font-medium' 
                  : 'bg-border/50 text-text-dim border-border/20'
              }`}
            >
              {tech}
            </motion.span>
          ))}
          {!isExpanded && project.techStack.length > 3 && (
            <span className="text-[9px] px-2 py-0.5 text-accent font-bold">
              +{project.techStack.length - 3}
            </span>
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && project.highlights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-border/30 space-y-2"
          >
            {project.highlights.map((highlight: string, idx: number) => (
              <div key={idx} className="flex gap-2 text-[11px] text-text-dim leading-snug">
                <span className="text-accent">•</span>
                <span>{highlight}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
