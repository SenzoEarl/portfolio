import React from 'react';
import { portfolioData } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            SENZO<span className="text-primary">.</span>
          </a>
          <p className="text-slate-500 text-sm mt-2">
            © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-400">
           <a href="#about" className="hover:text-white transition-colors">About</a>
           <a href="#skills" className="hover:text-white transition-colors">Skills</a>
           <a href="#projects" className="hover:text-white transition-colors">Projects</a>
           <a href={`https://${portfolioData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
