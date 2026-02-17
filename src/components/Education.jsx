import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationHistory = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University, Phagwara, Punjab',
    year: '2022 - 2026',
    details: 'Focused on core computer science fundamentals including data structures, algorithms, and software engineering principles. Actively participated in coding clubs and hackathons.',
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'M.D.J Public School, Arrah, Bihar',
    year: '2022',
    details: 'Completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics, achieving a strong academic record.',
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'M.D.J Public School, Arrah, Bihar',
    year: '2020',
    details: 'Completed my secondary education with a focus on Physics, Chemistry, and Mathematics, achieving a strong academic record.',
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-4xl font-bold text-center font-heading">
            My <span className="text-blue-500">Education</span>
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

      <div className="container mx-auto">
        <motion.div
          className="relative border-l-2 border-blue-500/30 ml-4 md:ml-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={timelineVariants}
        >
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8"
              variants={itemVariants}
            >
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full -left-4 ring-4 ring-slate-900 text-blue-400">
                <FaGraduationCap />
              </span>
              <div className="p-6 bg-slate-800/50 backdrop-blur-lg rounded-lg border border-slate-300/10 shadow-lg">
                <h3 className="text-xl font-bold text-blue-400 font-heading">{edu.degree}</h3>
                <p className="text-md font-semibold text-slate-300 mt-1">{edu.institution}</p>
                <time className="block my-2 text-sm font-normal leading-none text-slate-500">{edu.year}</time>
                <p className="text-base font-normal text-slate-400">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;