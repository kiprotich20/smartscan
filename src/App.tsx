import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemVsSolution } from './components/ProblemVsSolution';
import { KeyFeatures } from './components/KeyFeatures';
import { InteractiveSystemDemo } from './components/InteractiveSystemDemo';
import { WhySmartScan } from './components/WhySmartScan';
import { GreenSustainabilityImpact } from './components/GreenSustainabilityImpact';
import { InnovatorAndEvent } from './components/InnovatorAndEvent';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToDemo = () => {
    const el = document.getElementById('interactive-system');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFeatures = () => {
    const el = document.getElementById('key-features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      {/* Navigation Header */}
      <Navbar onOpenDemo={handleScrollToDemo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDemo={handleScrollToDemo}
          onExploreFeatures={handleScrollToFeatures}
        />

        {/* Section 1 & 2: The Problem vs The Solution & Innovation Story */}
        <ProblemVsSolution />

        {/* The 7 Key Features Suite */}
        <KeyFeatures />

        {/* Section 3: The System (Interactive Live Simulator: Lecturer Dashboard + Student Phone QR Scanner) */}
        <InteractiveSystemDemo />

        {/* Why SmartScan: 5 Value Pillars + Impact Calculator */}
        <WhySmartScan />

        {/* Green University for Sustainability Environmental Impact */}
        <GreenSustainabilityImpact />

        {/* Innovator, Supervisor, Client Institution & Event Showcase */}
        <InnovatorAndEvent />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
