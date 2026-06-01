import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface TypewriterTaglineProps {
  text: string;
  active: boolean;
  speedMs?: number;
  onComplete?: () => void;
}

export default function TypewriterTagline({
  text,
  active,
  speedMs = 34,
  onComplete,
}: TypewriterTaglineProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;

    setDisplayed('');
    setDone(false);
    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speedMs);

    return () => window.clearInterval(interval);
  }, [active, text, speedMs, onComplete]);

  return (
    <div className="h-6 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-[11px] sm:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] text-center"
      >
        {displayed}
        {!done && active && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-[1px] h-3 bg-zinc-400 ml-0.5 align-middle"
          />
        )}
      </motion.p>
    </div>
  );
}
