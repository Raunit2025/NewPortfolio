import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { useSkill } from "../contexts/SkillContext.js";

// Data for projects (Fixed 'Invetory' typo)
const allProjects = [
  {
    title: "UI Forge AI",
    description:
      "A full-stack AI Component Generator. Features a Next.js playground where users chat with an AI (Gemini) to generate, preview, and refine JSX/CSS in real-time.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Google Gemini AI",
    ],
    imageUrl: "Images/Project1.jpg",
    liveUrl: "https://uiforge.raunit.dpdns.org",
    githubUrl: "https://github.com/Raunit2025/component-generator-frontend.git",
  },
  {
    title: "Affiliate++",
    description:
      "A comprehensive affiliate link management platform. Features detailed geolocation analytics, role-based access control, and Razorpay subscription integration.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS", "Razorpay"],
    imageUrl: "Images/Project2.jpg",
    liveUrl: "https://affiliate.raunit.dpdns.org",
    githubUrl: "https://github.com/Raunit2025/MERN_Prac.git",
  },
  {
    title: "SmartQA",
    description:
      "Real-time Q&A platform for live sessions. Hosts create rooms, participants ask questions via WebSockets, and Gemini AI summarizes the top questions.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Google Gemini AI",
    ],
    imageUrl: "Images/Project3.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Raunit2025/SmartQA.git",
  },
  {
    title: "Inventory",
    description:
      "A responsive and dark-mode-ready Inventory Management Web App designed for managing clothing store stock, prices, and statuses.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    imageUrl: "Images/Project4.jpg",
    liveUrl: "https://clever-medovik-330bb3.netlify.app/",
    githubUrl: "https://github.com/Raunit2025/Inventory_Frontend.git",
  },
];

const skills = [
  { name: "React" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "Tailwind CSS" },
  { name: "Laravel" },
  { name: "PHP" },
  { name: "MySQL" },
  { name: "REST API" },
  { name: "Swift" },
  { name: "UIKit" },
  { name: "iOS" },
  { name: "TypeScript" },
];

const Projects = () => {
  const { selectedSkill, setSelectedSkill } = useSkill();
  const projectsSectionRef = useRef<HTMLElement | null>(null);

  const filteredProjects =
    selectedSkill === "All"
      ? allProjects
      : allProjects.filter((p) =>
          p.tags.some((tag) => tag.includes(selectedSkill)),
        );

  useEffect(() => {
    // When a skill is selected from the Skills section, smoothly scroll here
    if (selectedSkill !== "All" && projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSkill]);

  return (
    <section id="projects" className="py-24 relative" ref={projectsSectionRef}>
      {/* Cinematic Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="relative flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
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

      {/* Filter Pills (Apple Style Segmented Control) */}
      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedSkill("All")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
              selectedSkill === "All"
                ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            All Works
          </button>
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill.name)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
                selectedSkill === skill.name
                  ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Project Grid */}
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative h-100 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl cursor-pointer"
                >
                  {/* Background Image with Hover Zoom */}
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  {/* Persistent Title at the top */}
                  <div className="absolute top-0 left-0 w-full p-6 z-20 bg-linear-to-b from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>

                  {/* Magic Reveal Overlay (Slides up on hover) */}
                  <div className="absolute inset-0 bg-slate-950/90 md:bg-slate-950/80 backdrop-blur-md translate-y-[60%] md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 md:p-8 z-10 border-t border-white/10">
                    {" "}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-3 py-1 bg-white/10 text-cyan-300 rounded-full border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500"
              >
                <p className="text-xl">
                  No projects found for this technology.
                </p>
                <button
                  onClick={() => setSelectedSkill("All")}
                  className="mt-4 text-blue-400 hover:text-blue-300 underline"
                >
                  View all projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
