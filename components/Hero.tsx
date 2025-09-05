import React from 'react';
import { LogoIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 animate-fade-in-up">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <LogoIcon className="w-24 h-24 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Your All-in-One <span className="bg-gradient-to-r from-brand-blue to-brand-purple text-transparent bg-clip-text">Privacy & Security</span> Solution
          </h1>
          <p className="text-lg md:text-xl text-brand-light-secondary max-w-2xl mx-auto mb-8">
            In today's digital world, your personal data is constantly at risk. PrivSurf is the simple, powerful solution that puts you back in control.
          </p>
          <div
            className="inline-block border-2 border-brand-blue text-brand-light font-bold px-10 py-4 rounded-lg text-lg tracking-wider"
          >
            Launching Soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
