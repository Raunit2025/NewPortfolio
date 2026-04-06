import { useState } from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiSwift,
  DiPhp,
  DiLaravel,
} from "react-icons/di";
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useSkill } from "../contexts/SkillContext.js";

const skills = [
  {
    icon: <DiJavascript1 />,
    name: "JavaScript",
    color: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "text-blue-500",
    dot: "bg-blue-500",
  },
  {
    icon: <DiReact />,
    name: "React",
    color: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    icon: <DiNodejsSmall />,
    name: "Node.js",
    color: "text-green-500",
    dot: "bg-green-500",
  },
  {
    icon: <DiMongodb />,
    name: "MongoDB",
    color: "text-green-400",
    dot: "bg-green-400",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    color: "text-blue-600",
    dot: "bg-blue-600",
  },
  {
    icon: <DiPhp />,
    name: "PHP",
    color: "text-purple-500",
    dot: "bg-purple-500",
  },
  {
    icon: <DiLaravel />,
    name: "Laravel",
    color: "text-red-500",
    dot: "bg-red-500",
  },
  {
    icon: <DiSwift />,
    name: "Swift",
    color: "text-orange-500",
    dot: "bg-orange-500",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "text-teal-400",
    dot: "bg-teal-400",
  },
];

const Skills = () => {
  const { selectedSkill, setSelectedSkill } = useSkill();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const displaySkill = hoveredSkill || selectedSkill || "Tech Stack";

  return (
    <section
      id="skills"
      className="py-32 relative min-h-[60vh] flex flex-col justify-center items-center"
    >
      {/* 1. Cinematic Hollow Typography with Dynamic Sizing */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <AnimatePresence mode="wait">
          <motion.h2
            key={displaySkill}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 0.15, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-black whitespace-nowrap text-center tracking-tighter"
            style={{
              fontSize: `clamp(4rem, min(24vw, ${140 / displaySkill.length}vw), 15rem)`,
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
              color: "transparent",
            }}
          >
            {displaySkill.toUpperCase()}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* 2. Interactive Foreground Display */}
        <div className="mb-24 h-24 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={displaySkill}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg">
                {displaySkill}
              </h3>
              <p className="text-cyan-400 text-sm md:text-base uppercase tracking-[0.2em] font-bold">
                {displaySkill === "Tech Stack"
                  ? "Explore the dock"
                  : "Core Technology"}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. The Mac-Style Floating Dock */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 md:gap-4 p-4 md:px-8 md:py-5 rounded-[2.5rem] md:rounded-full bg-slate-900/40 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]"
        >
          {skills.map((skill) => {
            const isActive = selectedSkill === skill.name;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.button
                key={skill.name}
                onClick={() => setSelectedSkill(skill.name)}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`
                  relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-full
                  transition-all duration-300
                  ${isActive ? "bg-white/10 shadow-inner" : "bg-transparent hover:bg-white/5"}
                `}
                whileHover={{
                  scale: 1.5,
                  y: -16,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Active Selection Dot Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillDot"
                    className={`absolute -bottom-3 w-1.5 h-1.5 rounded-full ${skill.dot} shadow-[0_0_10px_currentColor]`}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}

                {/* Icon rendering with reflection effect */}
                <div
                  className={`text-4xl md:text-5xl transition-all duration-300 ${isHovered || isActive ? `${skill.color} drop-shadow-[0_0_15px_currentColor]` : "text-slate-400"}`}
                >
                  {skill.icon}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
