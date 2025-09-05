import React from 'react';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-secondary border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-6 text-center text-brand-light-secondary">
        <div className="flex items-center justify-center space-x-2 mb-2">
            <LogoIcon className="w-6 h-6" />
            <span className="text-lg font-bold text-brand-light">PrivSurf</span>
        </div>
        <p>&copy; {new Date().getFullYear()} PrivSurf. All rights reserved. Your privacy is our priority.</p>
      </div>
    </footer>
  );
};

export default Footer;