/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  status: 'completed' | 'ongoing' | 'future';
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface CaseStudy {
  overview: string;
  challenges: string[];
  solutions: string[];
  architecture?: string[];
  results: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  caseStudy: CaseStudy;
}

export interface Achievement {
  id: string;
  emoji: string;
  title: string;
}
