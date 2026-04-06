import { motion, Variants } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationHistory = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University, Phagwara, Punjab",
    year: "2022 - 2026",
    details:
      "Focused on core computer science fundamentals including data structures, algorithms, and software engineering principles. Actively participated in coding clubs and hackathons.",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "M.D.J Public School, Arrah, Bihar",
    year: "2022",
    details:
      "Completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics, achieving a strong academic record.",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "M.D.J Public School, Arrah, Bihar",
    year: "2020",
    details:
      "Completed my secondary education with a focus on Physics, Chemistry, and Mathematics, achieving a strong academic record.",
  },
];

const timelineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      {" "}
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      {/* Cinematic Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="relative flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            My{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          <motion.div
            className="h-1 bg-linear-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <motion.div
          className="relative ml-4 md:ml-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={timelineVariants}
        >
          {/* Glowing Vertical Line */}
          <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-linear-to-b from-blue-500 via-cyan-400 to-transparent opacity-30 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-12 pl-8 md:pl-12 group"
              variants={itemVariants}
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-5 top-1.5 flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 z-10">
                <FaGraduationCap
                  className="text-blue-400 group-hover:text-white transition-colors duration-300"
                  size={18}
                />
              </div>

              {/* Glassmorphism Card */}
              <div className="relative p-6 md:p-8 bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Year Badge */}
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-semibold tracking-wide">
                  {edu.year}
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {edu.degree}
                </h3>

                <p className="text-lg font-medium text-slate-300 mb-4 flex items-center gap-2">
                  {edu.institution}
                </p>

                <p className="text-base text-slate-400 leading-relaxed">
                  {edu.details}
                </p>

                {/* Ambient corner glow on hover */}
                <div className="absolute -bottom-px -right-px w-24 h-24 bg-linear-to-tl from-cyan-500/20 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
