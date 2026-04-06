import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
}

export default function ScrollAnimationWrapper({ children }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1 
      }}
    >
      {children}
    </motion.div>
  );
}