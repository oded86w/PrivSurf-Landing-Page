
import React from 'react';
import { LockClosedIcon, ServerStackIcon, ArrowPathIcon } from './icons';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-8 bg-brand-dark-secondary rounded-2xl border border-transparent hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="inline-block p-4 bg-gray-800 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-brand-light-secondary">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose PrivSurf?</h2>
          <p className="text-lg text-brand-light-secondary">
            With PrivSurf, you can finally browse the internet with the security and peace of mind you deserve. Your privacy is our priority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <BenefitCard
            icon={<LockClosedIcon className="w-8 h-8 text-brand-purple" />}
            title="Unmatched Privacy"
            description="Our local processing model ensures no third-party can ever access your browsing information. Your data is yours alone."
          />
          <BenefitCard
            icon={<ServerStackIcon className="w-8 h-8 text-brand-purple" />}
            title="Comprehensive Security"
            description="Get a full-stack security solution that goes beyond basic ad blocking, extending to advanced GenAI content moderation."
          />
          <BenefitCard
            icon={<ArrowPathIcon className="w-8 h-8 text-brand-purple" />}
            title="Always Learning"
            description="Our on-device AI and ML engine continuously adapts to new threats and content, providing you with future-proof security."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
