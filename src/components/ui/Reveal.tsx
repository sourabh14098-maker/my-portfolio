import React from 'react';
import { motion, type Variants } from 'motion/react';
import { easePremium } from '../../lib/motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  once?: boolean;
}

const offsets = {
  up: 20,
  down: -20,
  none: 0,
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: RevealProps) {
  const y = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: easePremium },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-48px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
