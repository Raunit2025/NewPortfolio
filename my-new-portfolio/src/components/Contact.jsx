import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // The fetch request points to your new backend server
      const response = await fetch('http://localhost:3001/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setStatus(result.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
       <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 font-heading">Get in <span className="text-blue-500">Touch</span></h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Send me a message or find me on social media.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                        <input
                            type="text" name="name" id="name" required
                            value={formData.name} onChange={handleChange}
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <input
                            type="email" name="email" id="email" required
                             value={formData.email} onChange={handleChange}
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                        <textarea
                            name="message" id="message" rows="5" required
                            value={formData.message} onChange={handleChange}
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:bg-slate-500">
                            <FaPaperPlane className="mr-2"/>
                            Send Message
                        </button>
                    </div>
                    {status && <p className="text-center text-slate-400 mt-4">{status}</p>}
                </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="text-2xl font-bold mb-6 font-heading">Or find me here</h3>
                <div className="flex justify-center md:justify-start items-center space-x-8 text-5xl">
                    <motion.a href="mailto:raunitraj2336@gmail.com" className="text-slate-400 hover:text-blue-500 transition-colors" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <FaEnvelope />
                    </motion.a>
                    <motion.a href="https://linkedin.com/in/raunit-raj" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <FaLinkedin />
                    </motion.a>
                    <motion.a href="https://github.com/raunit2025" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <FaGithub />
                    </motion.a>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;