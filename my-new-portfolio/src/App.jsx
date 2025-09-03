// raunit2025/newportfolio/NewPortfolio-82b8d0f1a952129aa077fe44ffdd18a28a751314/my-new-portfolio/src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Education from './components/Education';
import ParticleBackground from './components/ParticleBackground';
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans relative"> {/* Re-add bg-slate-900 */}
      <ParticleBackground />
      <Spotlight />
      <div className="relative z-20">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
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
