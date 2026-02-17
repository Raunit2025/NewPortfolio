import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimationWrapper = ({ children }) => {
  const ref = useRef(null);
  
  // useScroll tracks the scroll progress of the target element (ref)
  const { scrollYProgress } = useScroll({
    target: ref,
    // Animate when the top of the element is at the bottom of the viewport,
    // and end when the bottom of the element is at the top of the viewport.
    offset: ["start end", "end start"],
  });

  // useTransform maps the scroll progress (0 to 1) to other values.
  // This creates the "condensing" or scaling effect.
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // This creates the "dissolving" or fading effect.
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;