import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Certificates from "./components/Certificates.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";
import CodingStats from "./components/CodingStats.js";
import Footer from "./components/Footer.js";
import ParticleBackground from "./components/ParticleBackground.js";
import Spotlight from "./components/Spotlight.js";
import ScrollToTop from "./components/ScrollToTop.js";
import CommandPalette from "./components/CommandPalette.js";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper.js";

function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Skills />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
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
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
