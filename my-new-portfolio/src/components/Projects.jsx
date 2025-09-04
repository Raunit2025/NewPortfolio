import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useSkill } from '../contexts/SkillContext';

// Data for projects
const allProjects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One, highlighting the problem it solves and the technologies used.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: '/Images/Project1.jpg',
    videoUrl: 'path/to/your/project-one-video.mp4',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'Describe another key project. Mention your role and the main features you implemented.',
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    imageUrl: '/Images/Project1.jpg',
    videoUrl: 'path/to/your/project-two-video.mp4',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'Showcase an app you built. Talk about the development process and challenges overcome.',
    tags: ['Swift', 'UIKit', 'iOS'],
    imageUrl: '/Images/Project1.jpg',
    videoUrl: 'path/to/your/project-three-video.mp4',
    liveUrl: '#',
    githubUrl: '#',
  },
    {
    title: 'Project Four',
    description: 'This project also uses React and is super cool.',
    tags: ['React', 'TypeScript'],
    imageUrl: '/Images/Project1.jpg',
    videoUrl: 'path/to/your/project-four-video.mp4',
    liveUrl: '#',
    githubUrl: '#',
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projectsSectionRef = useRef(null);

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
              className="relative h-full bg-cover bg-center rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ flex: hoveredIndex === index ? 4 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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