// raunit2025/newportfolio/NewPortfolio-82b8d0f1a952129aa077fe44ffdd18a28a751314/my-new-portfolio/src/components/Hero.jsx
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-8xl font-extrabold mb-4 font-heading"
      >
        Hi, I&apos;m <span className="text-blue-500">Raunit Raj</span>
      </motion.h1>
      
      <div className="text-xl md:text-3xl mb-8 max-w-3xl text-slate-300">
        <Typewriter
          options={{
            strings: [
              'A passionate Full-Stack Developer.',
              'I build modern web applications.',
              'I create awesome mobile apps.',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>

      <motion.a
        href="#contact"
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.03, 1], 
        }}
        transition={{
          default: { duration: 0.8, delay: 0.5 },
          scale: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          },
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
};

export default Hero;