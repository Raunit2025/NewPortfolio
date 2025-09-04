// raunit2025/newportfolio/NewPortfolio-82b8d0f1a952129aa077fe44ffdd18a28a751314/my-new-portfolio/src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-12">
          <motion.h2
            variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center font-heading"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>
          <motion.div
            className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-500"
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <motion.img
            src="Images/Profile.jpg"
            alt="Raunit Raj"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            className="max-w-2xl text-center md:text-left text-slate-300"
          >
            <p className="text-lg mb-4">
              I am a Computer Science and Engineering student with a passion for building beautiful and functional web and mobile applications. I thrive on solving real-world problems and turning ideas into tangible products.
            </p>
            <p className="text-lg">
              With experience in full-stack development using the MERN stack and Laravel, as well as native app development with Swift, I am always eager to learn new technologies and take on new challenges. I enjoy the entire development process, from the initial concept to the final deployment.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;