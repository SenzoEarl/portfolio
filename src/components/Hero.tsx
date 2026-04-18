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
      <div className="mt-auto pt-8 flex flex-wrap gap-3">
        <div className="skill-tag">Available for hire</div>
        <div className="skill-tag">7+ Years Experience</div>
        <div className="skill-tag">Full-Stack</div>
      </div>
    </div>
  );
}
