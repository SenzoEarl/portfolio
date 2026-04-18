/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen p-6 md:p-10 flex flex-col max-w-[1400px] mx-auto">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-4 flex-grow">
        {/* Profile Card */}
        <div className="bento-card lg:col-span-2 lg:row-span-2 justify-center">
          <Hero />
        </div>

        {/* Skills Card */}
        <div className="bento-card lg:col-span-1 lg:row-span-2">
          <Skills />
        </div>

        {/* Projects Card */}
        <div className="bento-card lg:col-span-1 lg:row-span-3">
          <Projects />
        </div>

        {/* Experience Card */}
        <div className="bento-card lg:col-span-2 lg:row-span-2">
          <Experience />
        </div>

        {/* Education Card (Simple in-place or separate component? Let's do simple in-place for theme match) */}
        <div className="bento-card lg:col-span-1 lg:row-span-1">
          <h2>Education</h2>
          <div className="timeline-title text-sm font-semibold text-text-main">
            {portfolioData.education[0].degree}
          </div>
          <div className="timeline-date text-xs text-text-dim font-mono">
            {portfolioData.education[0].institution}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-surface to-[#1e293b]">
          <Contact />
        </div>
      </main>

      <footer className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-text-dim">
        <div className="flex items-center">
          <span className="status-dot"></span>
          <span>System Status: Online & Accepting Inquiries</span>
        </div>
        <div>
          v1.0.0-Production &bull; {currentYear} &bull; Built with React & TypeScript
        </div>
      </footer>
    </div>
  );
}
