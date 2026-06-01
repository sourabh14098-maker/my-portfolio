import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function MouseGlow() {
  const [enabled, setEnabled] = useState(false);
  const springConfig = { stiffness: 120, damping: 22, mass: 0.4 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(!prefersReduced && isFinePointer);

    if (prefersReduced || !isFinePointer) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] hidden md:block"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      aria-hidden
    >
      <div className="w-[420px] h-[420px] rounded-full bg-white/[0.025] blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#3b82f6]/[0.04] blur-[48px]" />
    </motion.div>
  );
}
