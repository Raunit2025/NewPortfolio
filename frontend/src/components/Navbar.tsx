import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/50 backdrop-blur-lg border-b border-slate-300/10' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#hero" className="text-2xl font-bold text-blue-500">Raunit Raj</a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-blue-500 transition-colors">Certificates</a>
          <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
          <a href="#stats" className="hover:text-blue-500 transition-colors">Stats</a>
          <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl z-50">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur-lg">
          <a href="#about" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#certificates" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>Certificates</a>
          <a href="#education" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#stats" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>Stats</a>
          <a href="#contact" className="block p-4 hover:bg-slate-700/50" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;