// raunit2025/newportfolio/NewPortfolio-82b8d0f1a952129aa077fe44ffdd18a28a751314/my-new-portfolio/src/components/Contact.jsx
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center bg-slate-800">
       <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 font-heading">Get in <span className="text-blue-500">Touch</span></h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          I am currently open to new opportunities and collaborations. If you have
          a project in mind or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center items-center space-x-8 text-5xl">
          <motion.a
            href="mailto:raunitraj2336@example.com"
            className="text-slate-400 hover:text-blue-500 transition-colors"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;