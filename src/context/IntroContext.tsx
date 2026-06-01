import { createContext, useContext } from 'react';

interface IntroContextValue {
  /** True right after the cinematic intro finishes — triggers hero stagger */
  playHeroEntrance: boolean;
}

export const IntroContext = createContext<IntroContextValue>({ playHeroEntrance: false });

export function useIntro() {
  return useContext(IntroContext);
}
