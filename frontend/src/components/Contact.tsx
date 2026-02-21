import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };


  return (
    <section id="contact" className="py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="relative inline-block mb-12">
            <h2 className="text-4xl font-bold text-center font-heading">
                Get in <span className="text-blue-500">Touch</span>
            </h2>
            <motion.div
                className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
            />
        </div>
        
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:bg-slate-500"
              disabled={status === 'Sending...'}
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {status && <p className="mt-6 text-center text-lg">{status}</p>}

        <div className="mt-16">
          <p className="text-slate-400 mb-6">Or connect with me on social media</p>
          <div className="flex justify-center items-center space-x-8 text-4xl">
            <motion.a
              href="https://github.com/raunit2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raunitraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/Raunitraj_01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="X (formerly Twitter)"
            >
              <FaXTwitter />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;