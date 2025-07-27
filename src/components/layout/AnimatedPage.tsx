import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <>
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
    </>
  );
}

export default AnimatedPage;