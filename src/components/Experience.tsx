import React from 'react';
import { portfolioData } from '../data';

export default function Experience() {
  return (
    <div className="flex flex-col h-full">
      <h2>Work History</h2>
      <div className="space-y-4">
        {portfolioData.experience.slice(0, 3).map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="flex justify-between items-start mb-1">
              <span className="font-semibold text-text-main text-sm">{exp.role} @ {exp.company}</span>
              <span className="text-[10px] font-mono text-text-dim shrink-0 ml-4">{exp.period}</span>
            </div>
            <p className="text-[12px] leading-relaxed line-clamp-2">
              {exp.description[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
