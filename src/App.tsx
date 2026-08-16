import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhySmartAttend } from './components/WhySmartAttend';
import { AboutSection } from './components/AboutSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { HowItWorks } from './components/HowItWorks';
import { BuiltForEveryone } from './components/BuiltForEveryone';
import { TeamSection } from './components/TeamSection';
import { SmarterClassroomsCTA } from './components/SmarterClassroomsCTA';
import { DownloadSection } from './components/DownloadSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#363543] selection:bg-[#98CE94] selection:text-[#1E3A1D] flex flex-col antialiased">
      {/* Navigation Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero onOpenModal={handleOpenModal} />
        <WhySmartAttend />
        <AboutSection />
        <FeaturesGrid />
        <HowItWorks />
        <BuiltForEveryone />
        <TeamSection />
        <SmarterClassroomsCTA />
        <DownloadSection onOpenModal={handleOpenModal} />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Modals */}
      <Modals activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
}
