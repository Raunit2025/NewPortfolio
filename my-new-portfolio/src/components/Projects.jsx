import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 text-sm font-semibold px-2 py-1 rounded">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;