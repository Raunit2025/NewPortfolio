import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const certificates = [
  {
    title: 'Data Structures and Algorithms',
    issuer: 'GeeksforGeeks',
    date: 'Issued June 2024',
    imageUrl: 'Images/Certificate1.jpg',
    verifyUrl: 'https://www.geeksforgeeks.org/certificate/bb72aff9003a1bdab09dd9aee05ca953?utm_source=socials&utm_medium=cc_link',
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'Coursera',
    date: 'Issued April 2024',
    imageUrl: 'Images/Certificate2.jpg',
    verifyUrl: 'https://coursera.org/share/b1e0832842db822f0ed8ff736b5d4900',
  },
  {
    title: 'Server side JavaScript with Node.js',
    issuer: 'Coursera',
    date: 'Issued May 2024',
    imageUrl: 'Images/Certificate3.jpg',
    verifyUrl: 'https://coursera.org/share/4622299bc2c4a13b2a2221e5e395ab2e',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-20">
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-4xl font-bold text-center font-heading">
            My <span className="text-blue-500">Certifications</span>
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-lg rounded-lg overflow-hidden border border-slate-300/10 shadow-lg group cursor-pointer"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.2)" 
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(cert.imageUrl)}
          >
            <div className="relative">
              <img src={cert.imageUrl} alt={cert.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-blue-400 font-heading">{cert.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{cert.issuer} &bull; {cert.date}</p>
              <a 
                href={cert.verifyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-400 hover:underline text-sm font-semibold"
              >
                Verify Certificate <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative"
            >
              <img src={selectedImage} alt="Certificate" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute top-4 right-4 text-white text-2xl"
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;