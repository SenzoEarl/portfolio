import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Hero() {
  return (
    <div className="flex flex-col h-full">
      <h2>System Architect</h2>
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">{portfolioData.personalInfo.name}</h1>
      <p className="text-lg text-accent font-medium mb-4">{portfolioData.personalInfo.title}</p>
      <p className="text-sm leading-relaxed text-text-dim">
        {portfolioData.personalInfo.summary}
      </p>
      
      <div className="mt-8 flex items-center gap-4">
        <motion.a 
          href={`mailto:${portfolioData.personalInfo.email}`}
          title={`Send an email to ${portfolioData.personalInfo.email} for business inquiries`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-accent text-white font-bold text-xs uppercase tracking-widest rounded shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2"
        >
          Hire Me
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 group cursor-default"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_infinite] shadow-[0_0_8px_#22c55e]" />
          <span className="text-[10px] uppercase tracking-tighter text-text-dim font-bold group-hover:text-text-main transition-colors">
            Available for Projects
          </span>
        </motion.div>
      </div>

      <div className="mt-auto pt-8 flex flex-wrap gap-3">
        <div className="skill-tag">7+ Years Experience</div>
        <div className="skill-tag">Full-Stack</div>
      </div>
    </div>
  );
}
