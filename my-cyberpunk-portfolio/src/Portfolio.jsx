import React, { useState, useEffect, useRef } from 'react';
import { Mail, User, Code, Briefcase, Sparkles, Send } from 'lucide-react'; // Importing icons from lucide-react

// Main Portfolio component
function Portfolio() {
  // State for managing the contact form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State for managing the form submission status (loading, success, error)
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  // Ref for the About section for intersection observer
  const aboutSectionRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);

  // Ref for the Skills section for intersection observer
  const skillsSectionRef = useRef(null);
  const [skillsInView, setSkillsInView] = useState(false);

  // Ref for the Projects section for intersection observer
  const projectsSectionRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);


  // Intersection Observer for About section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for Skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for Projects section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => {
      if (projectsSectionRef.current) {
        observer.unobserve(projectsSectionRef.current);
      }
    };
  }, []);

  // Handle input changes for the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // IMPORTANT: Replace 'YOUR_BACKEND_API_URL' with the actual URL of your Node.js backend.
      // For local development, this will likely be 'http://localhost:3001/send-email'.
      // For deployment, it will be your deployed backend URL.
      const response = await fetch('YOUR_BACKEND_API_URL/send-email', { // <<< REMEMBER TO UPDATE THIS!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false, message: data.message });
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setFormStatus({ loading: false, success: false, error: true, message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ loading: false, success: false, error: true, message: 'Network error. Please try again later.' });
    }
  };

  return (
    // Main container for content. Body in index.html handles the background.
    <div className="min-h-screen text-gray-100 font-inter antialiased relative overflow-hidden">
      {/* Tailwind CSS CDN for styling - This makes Tailwind work without local setup */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter for a clean, modern look */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header/Navigation */}
      <header className="fixed w-full z-50 bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-xl py-4 px-6 md:px-12">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <span className="font-mono">&lt;</span><span className="text-purple-400">COSMIC</span><span className="font-mono">/&gt;</span>
          </a>
          <ul className="flex space-x-6 md:space-x-10">
            <li><a href="#about" className="text-lg text-gray-300 hover:text-green-300 transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="text-lg text-gray-300 hover:text-purple-300 transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="text-lg text-gray-300 hover:text-blue-300 transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="text-lg text-gray-300 hover:text-red-300 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center px-4 z-10">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-fade-in-up glow-text">
            <span className="block">Journey Through My</span>
            <span className="block">Digital Universe</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide animate-fade-in-up delay-200">
            I am a <span className="text-green-300 font-medium">B.Tech CSE Student</span> at LPU.
            <br />Navigating the cosmos of code, one innovation at a time.
          </p>
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in-up delay-400">
            <a href="#projects" className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 cosmic-btn-purple">
              Explore My Creations
            </a>
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cosmic-btn-blue">
              Chart a Course
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutSectionRef} className="py-20 px-6 md:px-12 bg-gray-900 bg-opacity-70 border-t border-b border-gray-800 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-4xl font-bold text-center text-green-300 mb-12 glow-text-green ${aboutInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <User className="inline-block mr-3 mb-1" size={36} />About My Orbit<span className="text-gray-600">_</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg leading-relaxed text-gray-300 space-y-4">
              <p className={`${aboutInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                As a passionate B.Tech CSE student at LPU, I delve deep into the world of technology, constantly seeking to expand my knowledge and build innovative solutions. My journey is fueled by curiosity and a drive to transform complex ideas into elegant, functional code.
              </p>
              <p className={`${aboutInView ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                I thrive in dynamic environments where I can apply my problem-solving skills and contribute to impactful projects. My focus areas include web development, with a keen interest in creating engaging user experiences and robust backend systems.
              </p>
              <p className={`${aboutInView ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                Beyond coding, I enjoy exploring new tech trends, contributing to open-source projects, and collaborating with fellow enthusiasts. I believe in continuous learning and adapting to the ever-evolving tech landscape.
              </p>
            </div>
            <div className={`flex justify-center ${aboutInView ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
              <img
                src="https://placehold.co/350x350/1A1A1A/00FFFF?text=YOUR+COSMIC+PIC" // Slightly larger size
                alt="Profile Picture"
                className="rounded-full border-4 border-purple-500 shadow-xl transform hover:scale-105 transition-transform duration-300 glow-on-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsSectionRef} className="py-20 px-6 md:px-12 bg-black bg-opacity-70 border-t border-b border-gray-800 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className={`text-4xl font-bold text-center text-purple-300 mb-12 glow-text-purple ${skillsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Code className="inline-block mr-3 mb-1" size={36} />My Stellar Skills<span className="text-gray-600">_</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Skill Card Example */}
            {[
              { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
              { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
              { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
              { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            ].map((skill, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 cosmic-card-border-blue ${skillsInView ? `animate-fade-in-up animation-delay-${index * 100}` : 'opacity-0'}`}
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsSectionRef} className="py-20 px-6 md:px-12 border-t border-b border-gray-800 relative z-10 cosmic-projects-section-bg"> {/* New class for section background */}
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl font-bold text-center text-blue-300 mb-12 glow-text-blue ${projectsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Briefcase className="inline-block mr-3 mb-1" size={36} />My Cosmic Creations<span className="text-gray-600">_</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card Example */}
            {[
              {
                title: 'AI Chatbot Interface',
                description: 'A responsive web interface for an AI chatbot, featuring real-time message display and user input handling.',
                tech: ['React', 'Tailwind CSS', 'Node.js'],
                link: '#',
                image: 'https://placehold.co/400x250/2A2A2A/00FFFF?text=Chatbot+UI'
              },
              {
                title: 'E-commerce Dashboard',
                description: 'Admin dashboard for an e-commerce platform with sales analytics, product management, and user roles.',
                tech: ['React', 'Chart.js', 'Express'],
                link: '#',
                image: 'https://placehold.co/400x250/2A2A1A/FF00FF?text=E-commerce+Dashboard'
              },
              {
                title: 'Task Management App',
                description: 'A full-stack application for managing tasks, including user authentication, task creation, and categorization.',
                tech: ['React', 'Node.js', 'MongoDB'],
                link: '#',
                image: 'https://placehold.co/400x250/2A2A2A/00FF00?text=Task+Manager'
              },
              {
                title: 'Decentralized Voting System',
                description: 'A blockchain-based voting system ensuring transparency and immutability of votes using smart contracts.',
                tech: ['Solidity', 'React', 'Web3.js'],
                link: '#',
                image: 'https://placehold.co/400x250/2A2A2A/FFFF00?text=Blockchain+Voting'
              },
              {
                title: 'Real-time Data Visualizer',
                description: 'An application that visualizes real-time data streams using WebSockets and D3.js for interactive charts.',
                tech: ['React', 'D3.js', 'WebSockets'],
                link: '#',
                image: 'https://placehold.co/400x250/2A2A2A/FF8C00?text=Data+Viz'
              },
              {
                title: 'Portfolio V1 (This one!)',
                description: 'My personal portfolio website, designed with a cyberpunk aesthetic to showcase my skills and projects.',
                tech: ['React', 'Tailwind CSS', 'Node.js', 'Nodemailer'],
                link: '#',
                image: 'https://placehold.co/400x250/2A2A2A/8A2BE2?text=Portfolio+V1'
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cosmic-card-border-purple cosmic-project-card-hover cosmic-project-card-bg ${projectsInView ? `animate-fade-in-up animation-delay-${index * 100}` : 'opacity-0'}`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover border-b border-gray-700" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/2A2A2A/CCCCCC?text=Image+Error"; }} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 text-xs text-green-300 px-3 py-1 rounded-full glow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                    View Project <Sparkles className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-black bg-opacity-70 border-t border-b border-gray-800 relative z-10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-red-300 mb-12 glow-text-red">
            <Mail className="inline-block mr-3 mb-1" size={36} />Connect Through the Void<span className="text-gray-600">_</span>
          </h2>
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg cosmic-card-border-blue">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500 transition-all duration-200"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500 transition-all duration-200 resize-y"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 cosmic-btn-green disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={formStatus.loading}
            >
              {formStatus.loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2" size={20} />
                </>
              )}
            </button>

            {/* Form Status Messages */}
            {formStatus.success && (
              <div className="mt-4 p-3 bg-green-800 text-white rounded-lg text-center">
                {formStatus.message}
              </div>
            )}
            {formStatus.error && (
              <div className="mt-4 p-3 bg-red-800 text-white rounded-lg text-center">
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-gray-950 bg-opacity-70 text-center text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved. // <span className="text-purple-400">Powered by React & Node.js</span></p>
      </footer>
    </div>
  );
}

export default Portfolio;