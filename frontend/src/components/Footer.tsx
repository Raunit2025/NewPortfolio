import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = ['About', 'Skills', 'Projects', 'Certificates', 'Education', 'Contact'];

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-slate-950/80 backdrop-blur-3xl overflow-hidden z-20">
      
      {/* Subtle Glow at the top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      {/* Ambient deep background blob */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-200 h-100 bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Section (Takes up 5 columns on desktop) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="text-3xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 inline-block">
              Raunit Raj
            </a>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
              Full-Stack Developer, iOS Engineer, and Game Developer building scalable architectures and fluid digital experiences. Always exploring the intersection of code and creativity.
            </p>
          </div>

          {/* Quick Links (Takes up 3 columns) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium group flex items-center gap-2"
                >
                  {/* Animated dash on hover */}
                  <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-4"></span>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section (Takes up 4 columns) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Let's Connect</h4>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Open to collaborative opportunities, freelance projects, and tech discussions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, link: 'https://github.com/raunit2025', aria: 'GitHub' },
                { icon: <FaLinkedin size={20} />, link: 'https://www.linkedin.com/in/raunitraj/', aria: 'LinkedIn' },
                { icon: <FaXTwitter size={20} />, link: 'https://x.com/Raunitraj_01', aria: 'X (Twitter)' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            &copy; {currentYear} Raunit Raj. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Crafted with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;