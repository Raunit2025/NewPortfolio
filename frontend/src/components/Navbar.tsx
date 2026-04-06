import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Trigger the float effect earlier for a snappier feel
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Education",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out flex justify-center ${
        isScrolled ? "top-4 px-4" : "top-0 px-0"
      }`}
    >
      <div
        className={`w-full max-w-7xl transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "bg-slate-900/40 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center p-4 px-6 md:px-8">
          <a
            href="#hero"
            className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Raunit Raj
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600/90 hover:bg-blue-500 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-slate-200 z-50 relative focus:outline-none hover:text-white transition-colors"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl"
            >
              <div className="flex flex-col p-4 gap-2">
                {[...navLinks, "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
