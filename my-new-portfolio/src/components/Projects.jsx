import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One Title',
    description: 'A brief description of the project, highlighting the problem it solves and the technologies used. Keep it concise and impactful.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/400x250',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Two Title',
    description: 'Describe another one of your key projects. Mention your role and the main features you implemented.',
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    image: 'https://via.placeholder.com/400x250',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Three Title',
    description: 'Showcase an app you built. Talk about the development process and any challenges you overcame.',
    tags: ['Swift', 'UIKit', 'iOS'],
    image: 'https://via.placeholder.com/400x250',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 font-heading">My <span className="text-blue-500">Projects</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-400 font-heading">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-slate-700 text-slate-300 text-sm font-semibold px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                  <FaGithub className="mr-2" /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;