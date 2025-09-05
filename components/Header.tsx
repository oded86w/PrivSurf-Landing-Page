import React from 'react';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-brand-dark-secondary">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="w-8 h-8" />
          <span className="text-2xl font-bold text-white">PrivSurf</span>
        </div>
        <span
          className="border border-brand-blue text-brand-light font-semibold px-6 py-2 rounded-lg"
        >
          Launching Soon
        </span>
      </div>
    </header>
  );
};

export default Header;