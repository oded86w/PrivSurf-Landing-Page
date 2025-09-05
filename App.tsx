
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ExtensionScanner from './components/ExtensionScanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark font-sans antialiased relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(56,139,253,0.1)_0%,_rgba(13,17,23,0)_25%)]"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeaturesSection />
          <WhyChooseUs />
          <ExtensionScanner />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;