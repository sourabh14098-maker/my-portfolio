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
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 88 },
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 78 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind', level: 84 },
    ],
  },
  {
    category: 'Backend',
    skills: [{ name: 'Node.js', level: 68 }, { name: 'Express', level: 64 }],
  },
  {
    category: 'Database',
    skills: [{ name: 'MongoDB', level: 66 }],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 76 },
      { name: 'GitHub', level: 78 },
      { name: 'VS Code', level: 88 },
      { name: 'Postman', level: 62 },
      { name: 'Netlify', level: 72 },
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
    liveUrl: "https://dainty-bienenstitch-127b68.netlify.app",
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
