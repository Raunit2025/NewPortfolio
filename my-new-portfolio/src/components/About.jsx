import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center">
        {/* ... rest of your component */}
      </div>
    </section>
  );
};

export default About;