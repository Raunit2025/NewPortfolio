import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 font-heading">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.img
            src="https://via.placeholder.com/300"
            alt="Raunit Raj"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <div className="max-w-2xl text-center md:text-left text-slate-300">
            <p className="text-lg mb-4">
              I am a Computer Science and Engineering student with a passion for building beautiful and functional web and mobile applications.
            </p>
            <p className="text-lg">
              With experience in full-stack development using the MERN stack and Laravel, as well as native app development with Swift, I am always eager to learn new technologies and take on new challenges.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;