import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#hero" className="text-2xl font-bold text-blue-500">Raunit Raj</a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <a href="#about" className="block p-4 hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="block p-4 hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="block p-4 hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block p-4 hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;