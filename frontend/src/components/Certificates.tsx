import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaLayerGroup, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

// Upgraded Data Structure to support "Collections"
const certificates = [
  {
    id: 'devops-bundle',
    title: 'DevOps & CI/CD Specialization',
    issuer: 'Coursera / IBM',
    date: 'Issued Aug 2024',
    isCollection: true,
    coverImage: 'Images/Certificate2.jpg', // The image shown on the main card
    items: [
      { subTitle: 'Docker & Containers Basics', imageUrl: 'Images/Certificate2.jpg', verifyUrl: '#' },
      { subTitle: 'Kubernetes Orchestration', imageUrl: 'Images/Certificate2.jpg', verifyUrl: '#' },
      { subTitle: 'Advanced CI/CD Pipelines', imageUrl: 'Images/Certificate2.jpg', verifyUrl: '#' },
      { subTitle: 'Cloud Native Deployment', imageUrl: 'Images/Certificate2.jpg', verifyUrl: '#' },
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures and Algorithms',
    issuer: 'GeeksforGeeks',
    date: 'Issued June 2024',
    isCollection: false,
    coverImage: 'Images/Certificate1.jpg',
    items: [
      { subTitle: 'Data Structures and Algorithms', imageUrl: 'Images/Certificate1.jpg', verifyUrl: 'https://www.geeksforgeeks.org/certificate/bb72aff9003a1bdab09dd9aee05ca953' }
    ]
  },
  {
    id: 'node-js',
    title: 'Server side JavaScript with Node.js',
    issuer: 'Coursera',
    date: 'Issued May 2024',
    isCollection: false,
    coverImage: 'Images/Certificate3.jpg',
    items: [
      { subTitle: 'Server side JavaScript with Node.js', imageUrl: 'Images/Certificate3.jpg', verifyUrl: 'https://coursera.org/share/4622299bc2c4a13b2a2221e5e395ab2e' }
    ]
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const Certificates = () => {
  const [activeGroup, setActiveGroup] = useState<typeof certificates[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (certGroup: typeof certificates[0]) => {
    setActiveGroup(certGroup);
    setActiveIndex(0);
  };

  const nextCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGroup) {
      setActiveIndex((prev) => (prev + 1) % activeGroup.items.length);
    }
  };

  const prevCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGroup) {
      setActiveIndex((prev) => (prev - 1 + activeGroup.items.length) % activeGroup.items.length);
    }
  };

  return (
    <section id="certificates" className="py-24 relative">
      
      {/* Cinematic Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="relative flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            My <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.div
            className="h-1 bg-linear-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative bg-slate-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-full cursor-pointer"
              whileHover={{ y: -8 }}
              onClick={() => openModal(cert)}
            >
              <div className="absolute inset-0 bg-linear-to-b from-blue-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative h-56 p-4 pb-0">
                {/* Collection Badge */}
                {cert.isCollection && (
                  <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 z-20 shadow-lg">
                    <FaLayerGroup className="text-cyan-400 text-xs" />
                    <span className="text-xs font-bold text-white tracking-wider">{cert.items.length} CERTS</span>
                  </div>
                )}

                {/* Stack Effect Backgrounds */}
                {cert.isCollection && (
                  <>
                    <div className="absolute top-1 left-8 right-8 h-full bg-white/5 rounded-t-2xl border border-white/10 transition-transform duration-500 group-hover:-translate-y-2" />
                    <div className="absolute top-2.5 left-6 right-6 h-full bg-white/5 rounded-t-2xl border border-white/10 transition-transform duration-500 group-hover:-translate-y-1" />
                  </>
                )}

                {/* Main Image */}
                <div className="w-full h-full rounded-t-2xl overflow-hidden border border-white/10 relative z-10 bg-slate-900">
                  <img 
                    src={cert.coverImage} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent mix-blend-multiply" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-6">
                  {cert.issuer} <span className="mx-2 text-slate-600">•</span> {cert.date}
                </p>
                
                {/* Dynamic Button */}
                <div className="mt-auto">
                  {cert.isCollection ? (
                    <button 
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-cyan-300 text-sm font-semibold transition-all duration-300"
                    >
                      View Collection <FaLayerGroup className="text-xs" />
                    </button>
                  ) : (
                    <a 
                      href={cert.items[0].verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-all duration-300"
                    >
                      Verify Credential <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Upgraded Cinematic Modal with Carousel */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/90 flex items-center justify-center z-100 p-4 md:p-8"
            onClick={() => setActiveGroup(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveGroup(null)} 
                className="absolute -top-12 right-0 md:-right-4 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 z-50"
              >
                <FaTimes size={20} />
              </button>
              
              {/* Image Display */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900 flex items-center justify-center aspect-4/3 md:aspect-auto md:h-[70vh]">
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={activeGroup.items[activeIndex].imageUrl} 
                    alt={activeGroup.items[activeIndex].subTitle} 
                    className="w-full h-full object-contain" 
                  />
                </AnimatePresence>

                {/* Carousel Controls (Only show if it's a collection) */}
                {activeGroup.isCollection && (
                  <>
                    <button 
                      onClick={prevCert}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextCert}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer Info */}
              <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {activeGroup.items[activeIndex].subTitle}
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    {activeGroup.issuer}
                    {activeGroup.isCollection && (
                      <span className="ml-3 px-2 py-1 bg-white/5 rounded-md border border-white/10 text-cyan-400 font-semibold">
                        {activeIndex + 1} of {activeGroup.items.length}
                      </span>
                    )}
                  </p>
                </div>
                
                <a 
                  href={activeGroup.items[activeIndex].verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full md:w-auto"
                >
                  Verify <span className="hidden md:inline">Credential</span> <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;