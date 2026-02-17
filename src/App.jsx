import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import CodingStats from './components/CodingStats';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Spotlight from './components/Spotlight';
import ScrollToTop from './components/ScrollToTop';
import CommandPalette from './components/CommandPalette';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper';

function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 font-sans relative">
      <AnimatePresence>
        {isPaletteOpen && <CommandPalette setIsOpen={setIsPaletteOpen} />}
      </AnimatePresence>
      <ParticleBackground />
      <Spotlight />
      <ScrollToTop />
      <div className="relative z-20">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <ScrollAnimationWrapper>
            <About />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            {/* No props needed here anymore */}
            <Skills />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            {/* No props needed here anymore */}
            <Projects />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Certificates />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Education />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <CodingStats />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Contact />
          </ScrollAnimationWrapper>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;