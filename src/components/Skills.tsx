import React from 'react';
import { portfolioData } from '../data';

export default function Skills() {
  const allSkills = portfolioData.skillGroups.flatMap(group => group.skills).slice(0, 15);
  
  return (
    <div className="flex flex-col h-full">
      <h2>Core Tech</h2>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill) => (
          <span 
            key={skill}
            className="skill-tag"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[12px] text-text-dim italic">
        + {portfolioData.skillGroups.flatMap(group => group.skills).length - 15} more specialized tools in my stack.
      </p>
    </div>
  );
}
