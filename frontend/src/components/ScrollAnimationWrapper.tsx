import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimationWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div ref={ref} className="relative" style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;