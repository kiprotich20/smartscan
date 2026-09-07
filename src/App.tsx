import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { KeyFeatures } from './components/KeyFeatures';
import { HowItWorks } from './components/HowItWorks';
import { DashboardPreview } from './components/DashboardPreview';
import { SecuritySection } from './components/SecuritySection';
import { ImpactSection } from './components/ImpactSection';
import { ScalabilitySection } from './components/ScalabilitySection';
import { PresentationDemoSection } from './components/PresentationDemoSection';
import { AboutProject } from './components/AboutProject';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { PortalModal } from './components/PortalModal';

export default function App() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleScrollToDemo = () => {
    const el = document.getElementById('presentation-demo');
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-900 font-sans antialiased">
      {/* Navigation Header */}
      <Navbar
        onOpenDemo={handleScrollToDemo}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDemo={handleScrollToDemo}
          onExploreFeatures={handleScrollToFeatures}
          onOpenPortal={() => setIsPortalOpen(true)}
        />

        {/* 2. Problem Section (7 Traditional Attendance Challenges) */}
        <ProblemSection />

        {/* 3. Solution Section (Fast, Secure, Smart, Scalable, Data-Driven) */}
        <SolutionSection onExploreFeatures={handleScrollToFeatures} />

        {/* 4. 10 Key Features Suite */}
        <KeyFeatures />

        {/* 5. How It Works (4-Step Visual Process) */}
        <HowItWorks />

        {/* 6. Dashboard Preview (Metrics, Trends, Course Stats, Feed, Demo Data) */}
        <DashboardPreview />

        {/* 7. Security Section (Built With Security in Mind) */}
        <SecuritySection />

        {/* 8. Impact Section (5 Expected Benefits + Interactive ROI Calculator) */}
        <ImpactSection />

        {/* 9. Scalability Section (Beyond Attendance + Future Capabilities) */}
        <ScalabilitySection />

        {/* 10. Presentation / Live Demo Section ("See SMARTSCAN in Action") */}
        <PresentationDemoSection onOpenPortal={() => setIsPortalOpen(true)} />

        {/* 11. About the Project (SMARTSCAN, Bomet University, Innovator, Mentor) */}
        <AboutProject />

        {/* 12. Contact / Call to Action ("Ready for Smarter Attendance Management?") */}
        <CallToAction onExploreDemo={handleScrollToDemo} />
      </main>

      {/* 13. Institutional Footer */}
      <Footer onOpenPortal={() => setIsPortalOpen(true)} />

      {/* Interactive Portal Modal for Live Presentations */}
      <PortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
