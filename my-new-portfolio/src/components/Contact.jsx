import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        I am currently open to new opportunities and collaborations. If you have
        a project in mind or just want to say hi, feel free to reach out!
      </p>
      <div className="flex justify-center items-center space-x-8 text-4xl">
        <a
          href="mailto:your-email@example.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
