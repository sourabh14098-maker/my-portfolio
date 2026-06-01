/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineEvent, SkillCategory, Project, Achievement } from './types';

export const timelineData: TimelineEvent[] = [
  {
    year: '2025',
    title: 'Started Programming Journey',
    description:
      'Explored HTML, CSS, JavaScript and frontend fundamentals.',
    icon: 'Terminal',
    status: 'completed',
  },
  {
    year: '2026',
    title: 'Built StudyHub Platform',
    description:
      'Created a complete notes sharing platform with search, uploads and modern UI.',
    icon: 'BookOpen',
    status: 'completed',
  },
  {
    year: 'Present',
    title: 'Learning MERN & Building Real Projects',
    description:
      'Focused on scalable web applications and frontend engineering.',
    icon: 'Cpu',
    status: 'ongoing',
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind' },
    ],
  },
  {
    category: 'Backend',
    skills: [{ name: 'Node.js' }, { name: 'Express' }],
  },
  {
    category: 'Database',
    skills: [{ name: 'MongoDB' }],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Netlify' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'studyhub',
    title: 'StudyHub',
    subtitle: 'Notes Sharing Platform',
    description:
      'A student notes sharing platform with file uploads, search, and a clean modern interface.',
    longDescription:
      'StudyHub is a peer-to-peer web application for students to search, upload, and download community study resources.',
    image: '/src/assets/images/studyhub_preview_1780135104255.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    liveUrl: 'https://studyhub-notes.netlify.app',
    githubUrl: 'https://github.com/sourabh14098-maker',
    features: [],
    caseStudy: { overview: '', challenges: [], solutions: [], results: '' },
  },
  {
    id: 'fitness',
    title: 'Aura Fitness',
    subtitle: 'Fitness Tracking App',
    description:
      'A modern workout and fitness tracking platform with fluid animations and responsive design.',
    longDescription:
      'Aura Fitness helps users view schedules, track workouts, and explore a premium dark UI fitness experience.',
    image: '/src/assets/images/fitness_preview_1780135127831.png',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://aura-fitness.netlify.app',
    githubUrl: 'https://github.com/sourabh14098-maker',
    features: [],
    caseStudy: { overview: '', challenges: [], solutions: [], results: '' },
  },
];

export const achievementsData: Achievement[] = [
  { id: 'studyhub', emoji: '🏆', title: 'Built StudyHub Platform' },
  { id: 'deployed', emoji: '🚀', title: 'Deployed Multiple Real Projects' },
  { id: 'student', emoji: '📚', title: 'Computer Science Student' },
  { id: 'mern', emoji: '💻', title: 'Active MERN Stack Learner' },
];
