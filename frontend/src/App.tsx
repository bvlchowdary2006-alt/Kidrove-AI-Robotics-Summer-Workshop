import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkshopHighlights } from './components/WorkshopHighlights';
import { LearningOutcomes } from './components/LearningOutcomes';
import { ParentsWhy } from './components/ParentsWhy';
import { Timeline } from './components/Timeline';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111827]">
      <Navbar />
      <main>
        <Hero />
        <WorkshopHighlights />
        <LearningOutcomes />
        <ParentsWhy />
        <Timeline />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
