import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Methodology } from './components/Methodology'; // Imported Methodology
import { Pricing } from './components/Pricing'; // This is now the Registration Modal
import { AIAdvisor } from './components/AIAdvisor';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Instructor } from './components/Instructor';
import { ActionOptions } from './components/ActionOptions';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-lux-black text-white selection:bg-lux-accent selection:text-black">
      <Navbar onOpenRegistration={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenRegistration={() => setIsModalOpen(true)} />
        <Features />
        <Curriculum />
        <Methodology onOpenRegistration={() => setIsModalOpen(true)} /> 
        <Instructor />
        <Testimonials />
        <ActionOptions onOpenRegistration={() => setIsModalOpen(true)} />
        {/* We keep Pricing component mounted but controlled via props, 
            or we can conditionally render it. Since it uses portal/fixed positioning, 
            rendering it at the end is fine. */}
        <Pricing isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>

      <Footer />
      <AIAdvisor />
    </div>
  );
}

export default App;