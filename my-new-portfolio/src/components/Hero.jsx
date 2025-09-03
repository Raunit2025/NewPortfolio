import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'; // Import it

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
      
      {/* Typewriter Effect */}
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        href="#contact"
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Get in Touch
      </motion.a>
    </section>
  );
};

export default Hero;