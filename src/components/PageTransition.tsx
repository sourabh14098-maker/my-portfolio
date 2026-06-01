import React from 'react';
import { motion } from 'motion/react';
import { pageTransition } from '../lib/motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
