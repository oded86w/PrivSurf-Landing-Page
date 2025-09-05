import React from 'react';
import { CpuChipIcon, CubeTransparentIcon, EyeOffIcon, ShieldExclamationIcon, SparklesIcon, CursorArrowRaysIcon, MagnifyingGlassCircleIcon } from './icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-brand-dark-secondary p-6 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-brand-blue/50 hover:shadow-2xl hover:shadow-brand-blue/10">
        <div className="flex items-center space-x-4 mb-3">
            {icon}
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-brand-light-secondary">{children}</p>
    </div>
);

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Makes PrivSurf Different?</h2>
                    <p className="text-lg text-brand-light-secondary">
                        A seamless, all-in-one extension designed to protect your privacy and secure your browsing without compromises.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                     <FeatureCard
                        icon={<CpuChipIcon className="w-8 h-8 text-brand-purple" />}
                        title="Absolute Privacy, Built-In"
                    >
                        Our unique on-device AI and Machine Learning engine ensures all security analysis happens locally. Your data never leaves your device.
                    </FeatureCard>
                     <FeatureCard
                        icon={<CubeTransparentIcon className="w-8 h-8 text-brand-green" />}
                        title="A Complete Privacy Suite"
                    >
                        No need to juggle multiple extensions. PrivSurf combines all the tools you need into a single, seamless solution for total peace of mind.
                    </FeatureCard>
                     <FeatureCard
                        icon={<MagnifyingGlassCircleIcon className="w-8 h-8 text-brand-purple" />}
                        title="AI-Powered Risk Scanner"
                    >
                        Analyzes other extensions for threats, demonstrating our powerful security engine and commitment to a safer web for everyone.
                    </FeatureCard>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                     <FeatureCard
                        icon={<EyeOffIcon className="w-7 h-7 text-brand-blue" />}
                        title="Ad & Tracker Blocker"
                    >
                        Stop invasive ads and prevent hidden trackers from following you across the web.
                    </FeatureCard>
                     <FeatureCard
                        icon={<ShieldExclamationIcon className="w-7 h-7 text-brand-blue" />}
                        title="Secure Browsing"
                    >
                        Our AI actively identifies and blocks malicious sites and phishing attempts in real-time.
                    </FeatureCard>
                     <FeatureCard
                        icon={<SparklesIcon className="w-7 h-7 text-brand-blue" />}
                        title="GenAI Content Filtering"
                    >
                       Proactively helps prevent display of sensitive content on Generative AI websites.
                    </FeatureCard>
                     <FeatureCard
                        icon={<CursorArrowRaysIcon className="w-7 h-7 text-brand-blue" />}
                        title="Simple & Intuitive"
                    >
                        Just install and get instant protection. No complicated settings or configurations.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;