import { useState } from 'react'; // Import useState
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Spotlight from './components/Spotlight';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
  const [selectedSkill, setSelectedSkill] = useState('All'); // Add state for the filter

  return (
    <div className="bg-slate-900 text-slate-100 font-sans relative">
      <ParticleBackground />
      <Spotlight />
      <ScrollToTop /> {/* Add the button here */}
      <div className="relative z-20">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          {/* Pass state management functions to Skills and Projects */}
          <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          <Projects selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          <Certificates />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;