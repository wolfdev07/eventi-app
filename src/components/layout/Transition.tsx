import { motion } from 'framer-motion';
import { EventiLogo } from './EventiLogo';

function Transition() {
  return (
    <>
      <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
      >
      <EventiLogo className="h-24 w-24 text-white" />
      </motion.div>
      </motion.div>
    </>
  );
}

export default Transition;