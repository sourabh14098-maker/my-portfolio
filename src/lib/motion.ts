/** Shared motion tokens — Apple / Linear easing */
export const easePremium = [0.16, 1, 0.3, 1] as const;

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.45, ease: easePremium },
};

export const revealTransition = {
  duration: 0.55,
  ease: easePremium,
};
