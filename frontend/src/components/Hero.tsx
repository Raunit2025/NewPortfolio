import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-dvh flex items-center justify-center pt-20 relative"
    >
      {/* Ambient Glowing Blobs for Depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Intro Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-cyan-400 font-medium tracking-widest uppercase text-sm md:text-base"
          >
            Welcome to my digital universe
          </motion.p>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Raunit Raj
            </span>
          </motion.h1>

          {/* Typewriter Effect Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-4xl font-semibold text-slate-300 h-16 mt-4"
          >
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "iOS & SwiftUI Developer",
                  "Game Developer",
                  "DevOps Practitioner",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName:
                  "bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent",
              }}
            />
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mt-6"
          >
            I build scalable web architectures, fluid mobile apps, and immersive
            digital experiences. Let's turn your complex problems into elegant
            solutions.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 120 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/60 backdrop-blur-md border border-slate-700 text-slate-200 font-semibold text-lg hover:bg-slate-700/80 hover:text-white transition-all hover:-translate-y-1 hover:border-slate-500"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
