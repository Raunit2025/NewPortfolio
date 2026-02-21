import { DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiSwift, DiPhp, DiLaravel } from 'react-icons/di';
import { SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useSkill } from '../contexts/SkillContext.js'; // Import the hook

const skills = [
    { icon: <DiJavascript1 className="text-yellow-400" />, name: 'JavaScript', shadowColor: 'shadow-yellow-400' },
    { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript', shadowColor: 'shadow-blue-500' },
    { icon: <DiReact className="text-blue-400" />, name: 'React', shadowColor: 'shadow-blue-400' },
    { icon: <DiNodejsSmall className="text-green-500" />, name: 'Node.js', shadowColor: 'shadow-green-500' },
    { icon: <DiMongodb className="text-green-400" />, name: 'MongoDB', shadowColor: 'shadow-green-400' },
    { icon: <SiMysql className="text-blue-600" />, name: 'MySQL', shadowColor: 'shadow-blue-600' },
    { icon: <DiPhp className="text-purple-500" />, name: 'PHP', shadowColor: 'shadow-purple-500' },
    { icon: <DiLaravel className="text-red-500" />, name: 'Laravel', shadowColor: 'shadow-red-500' },
    { icon: <DiSwift className="text-orange-500" />, name: 'Swift', shadowColor: 'shadow-orange-500' },
    { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind CSS', shadowColor: 'shadow-teal-400' },
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
  // Use the context instead of props
  const { selectedSkill, setSelectedSkill } = useSkill()

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-4xl font-bold text-center font-heading">
            My Tech <span className="text-blue-500">Stack</span>
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
        viewport={{ once: true }}
        className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className={`flex flex-col items-center justify-center p-6 bg-slate-800/50 backdrop-blur-lg rounded-lg border shadow-lg transform hover:scale-110 transition-all duration-300 group cursor-pointer ${
              selectedSkill === skill.name
                ? 'border-blue-500'
                : 'border-slate-300/10'
            }`}
            onClick={() => setSelectedSkill(skill.name)}
          >
            <div className={`text-7xl mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_var(--tw-shadow-color)] ${skill.shadowColor}`}>{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;