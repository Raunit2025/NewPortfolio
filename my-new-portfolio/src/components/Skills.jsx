import { DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiSwift, DiPhp, DiLaravel } from 'react-icons/di';
import { SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <DiJavascript1 className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
  { icon: <DiReact className="text-blue-400" />, name: 'React' },
  { icon: <DiNodejsSmall className="text-green-500" />, name: 'Node.js' },
  { icon: <DiMongodb className="text-green-400" />, name: 'MongoDB' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
  { icon: <DiPhp className="text-purple-500" />, name: 'PHP' },
  { icon: <DiLaravel className="text-red-500" />, name: 'Laravel' },
  { icon: <DiSwift className="text-orange-500" />, name: 'Swift' },
  { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind CSS' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <h2 className="text-4xl font-bold text-center mb-12 font-heading">My Tech <span className="text-blue-500">Stack</span></h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-lg shadow-lg transform hover:scale-110 transition-transform"
          >
            <div className="text-7xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;