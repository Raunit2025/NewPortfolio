import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useSkill } from '../contexts/SkillContext.js';

// Data for projects
const allProjects = [
  {
    title: 'UI Forge AI',
    description: 'This is a full-stack AI Component Generator that allows users to create React components using natural language prompts. It features a Next.js frontend with a playground interface where users can chat with an AI to generate, preview, and refine JSX and CSS code in real-time. The backend is a Node.js/Express server that handles user authentication (email/password, Google, and GitHub), manages user sessions in a MongoDB database, and communicates with the Google Generative AI (Gemini) API to generate the component code.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js', 'JWT', 'Tailwind CSS', 'Google Gemini AI'],
    imageUrl: 'Images/Project1.jpg',
    videoUrl: 'Videos/Project1.mp4',
    liveUrl: 'https://component-generator-frontend-xzms-f3krgpah6.vercel.app/',
    githubUrl: 'https://github.com/Raunit2025/component-generator-frontend.git',
  },
  {
    title: 'Affiliate++',
    description: 'This is a full-stack MERN (MongoDB, Express, React, Node.js) application called "Affiliate++" designed for affiliate link management. Users can create, organize, shorten, and track affiliate links. The application provides detailed analytics on link clicks, including geolocation, device type, and referral source. It also features a role-based access control system, allowing admins to manage other users (developers, viewers). The application supports payments for credit packs and subscriptions using Razorpay.',
    tags: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS', 'Material-UI (MUI)', 'Chart.js', 'Razorpay'],
    imageUrl: 'Images/Project2.jpg',
    videoUrl: 'Videos/Project2.mp4',
    liveUrl: 'https://guileless-caramel-64d8b5.netlify.app/',
    githubUrl: 'https://github.com/Raunit2025/MERN_Prac.git',
  },
  {
    title: 'SmartQA',
    description: 'This is a full-stack MERN (MongoDB, Express, React, Node.js) application called "SmartQA" for real-time Q&A sessions. Hosts can create rooms and share a code with participants. Participants can then join and ask questions, which are updated in real-time for everyone. The host has moderation controls to delete questions and can use the Google Gemini API to generate a summary of the top questions asked.',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Socket.IO', 'Tailwind CSS', 'Google Gemini AI'],
    imageUrl: 'Images/Project3.jpg',
    videoUrl: 'Videos/Project3.mp4',
    liveUrl: '#',
    githubUrl: 'https://github.com/Raunit2025/SmartQA.git',
  },
    {
    title: 'Invetory',
    description: 'This is a responsive and dark-mode-ready Inventory Management Web App built with React and Tailwind CSS. It is designed for managing a clothing store stock, prices, and statuses.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'Images/Project4.jpg',
    videoUrl: 'Videos/Project4.mp4',
    liveUrl: 'https://clever-medovik-330bb3.netlify.app/',
    githubUrl: 'https://github.com/Raunit2025/Inventory_Frontend.git',
  },
];

// Data for skill buttons
const skills = [
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
  { name: 'Tailwind CSS' },
  { name: 'Laravel' },
  { name: 'PHP' },
  { name: 'MySQL' },
  { name: 'REST API' },
  { name: 'Swift' },
  { name: 'UIKit' },
  { name: 'iOS' },
  { name: 'TypeScript' },
];

const Projects = () => {
  // Use the context instead of props
  const { selectedSkill, setSelectedSkill } = useSkill();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);

  const filteredProjects = selectedSkill === 'All'
    ? allProjects
    : allProjects.filter(p => p.tags.includes(selectedSkill));

  useEffect(() => {
    if (selectedSkill !== 'All' && projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedSkill]);

  return (
    <section id="projects" className="py-20" ref={projectsSectionRef}>
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-4xl font-bold text-center font-heading">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <motion.div
            className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        <button
          onClick={() => setSelectedSkill('All')}
          className={`font-semibold py-2 px-4 rounded-full transition-colors duration-300 ${selectedSkill === 'All' ? 'bg-blue-600 text-white' : 'bg-slate-700/50 text-slate-300 hover:bg-blue-500/50'}`}
        >
          All
        </button>
        {skills.map((skill) => (
          <button
            key={skill.name}
            onClick={() => setSelectedSkill(skill.name)}
            className={`font-semibold py-2 px-4 rounded-full transition-colors duration-300 ${selectedSkill === skill.name ? 'bg-blue-600 text-white' : 'bg-slate-700/50 text-slate-300 hover:bg-blue-500/50'}`}
          >
            {skill.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSkill}
          className="w-full h-[60vh] max-h-[500px] flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="relative h-full bg-slate-900 rounded-2xl overflow-hidden cursor-pointer"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ flex: hoveredIndex === index ? 4 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <AnimatePresence>
                  {hoveredIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 }}
                      className="flex-grow flex flex-col justify-center"
                    >
                      <div className="w-full h-48 bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                        <p className="text-slate-400">Project Video Placeholder</p>
                      </div>
                      <p className="text-slate-300 mb-4">{project.description}</p>
                      <div className="flex items-center space-x-4">
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                           <FaExternalLinkAlt className="mr-2" /> Live Demo
                         </a>
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                           <FaGithub className="mr-2" /> Source Code
                         </a>
                       </div>
                    </motion.div>
                  ) : (
                    <h3 className="text-2xl font-bold font-heading [writing-mode:vertical-rl] rotate-180">
                      {project.title}
                    </h3>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;