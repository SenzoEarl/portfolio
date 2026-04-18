import React from 'react';
import { portfolioData } from '../data';

export default function Contact() {
  return (
    <div className="flex flex-col h-full">
      <h2>Get in touch</h2>
      <p className="text-sm text-text-main font-medium mb-4">
        Open for senior architectural roles and consultations.
      </p>
      <a 
        href={`mailto:${portfolioData.personalInfo.email}`}
        className="mt-6 w-full py-3 bg-accent text-white font-bold rounded-lg text-xs text-center hover:bg-accent-dark transition-all shadow-lg shadow-accent/20"
      >
        Send Email
      </a>
    </div>
  );
}
