import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {" "}
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="container mx-auto flex flex-col items-center relative z-10"
      >
        {/* Animated Heading */}
        <div className="relative mb-16 flex flex-col items-center">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-4xl md:text-5xl font-extrabold text-center tracking-tight text-white"
          >
            About{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.div
            className="h-1 bg-linear-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: "80px", opacity: 1 },
            }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl">
          {/* Profile Image with Glowing Animated Border */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative group"
          >
            {/* Ambient Glow behind image */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative w-56 h-56 md:w-72 md:h-72 p-1.5 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-purple-600">
              <img
                src="Images/Profile.jpg"
                alt="Raunit Raj"
                className="rounded-full w-full h-full object-cover border-4 border-slate-900 z-10 relative transition-transform duration-500 group-hover:scale-[0.98]"
              />
            </div>
          </motion.div>

          {/* Glassmorphism Bio Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full lg:w-1/2 p-8 md:p-10 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle card hover glow */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed relative z-10">
              <p>
                I am a Computer Science and Engineering student with a passion
                for building beautiful, high-performance web and mobile
                applications. I thrive on solving complex architectural problems
                and turning ambitious ideas into tangible, scalable products.
              </p>
              <p>
                With deep expertise in full-stack development using the{" "}
                <span className="text-cyan-400 font-semibold">MERN stack</span>{" "}
                and <span className="text-red-400 font-semibold">Laravel</span>,
                alongside native mobile development in{" "}
                <span className="text-orange-400 font-semibold">Swift</span>, I
                build across the entire spectrum. From crafting fluid UI/UX to
                deploying robust backend systems, I am driven by the entire
                lifecycle of software engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
