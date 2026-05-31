/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineEvent, SkillCategory, Project, GitHubStats, Achievement } from './types';

export const timelineData: TimelineEvent[] = [
  {
    year: '2025',
    title: 'Started Programming Journey',
    description: 'Began learning HTML, CSS, JavaScript, and programming fundamentals. Developed a strong interest in web development, problem solving, and user interface design.',
    icon: 'Terminal',
    status: 'completed'
  },
  {
    year: '2026',
    title: 'Launched StudyHub Platform',
    description: 'Designed and deployed StudyHub, a student notes sharing platform featuring file uploads, search functionality, contact integration, SEO optimization, and responsive design.',
    icon: 'BookOpen',
    status: 'completed'
  },
  {
    year: '2026 (Present)',
    title: 'Learning MERN Stack',
    description: 'Currently expanding my skills in React, Node.js, Express.js, and MongoDB while building full-stack projects and preparing for software engineering opportunities.',
    icon: 'Cpu',
    status: 'ongoing'
  },
  {
    year: 'Future',
    title: 'Software Engineer',
    description: 'My goal is to build scalable products, contribute to impactful projects, work with modern technologies, and grow into a highly skilled full-stack software engineer.',
    icon: 'Rocket',
    status: 'future'
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 82 }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Netlify', level: 82 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'studyhub',
    title: 'StudyHub',
    subtitle: 'Notes Sharing SaaS Platform',
    description: 'A complete student notes sharing platform featuring rich upload capabilities, high-speed documentation retrieval, and secure database integrations.',
    longDescription: 'StudyHub is a robust peer-to-peer web application designed to bridge the gap between academic preparation and available study material. The application provides an elegant interface for students to easily search, upload, index, and grab community-vetted educational resources with minimal latency.',
    image: '/src/assets/images/studyhub_preview_1780135104255.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Postman'],
    liveUrl: 'https://studyhub-notes.netlify.app',
    githubUrl: 'https://github.com/nyxo/StudyHub',
    features: [
      'Upload high-quality notes / documents matching multiple file extension schemas',
      'Download documents directly indexed by cloud bucket assets securely',
      'Fully-integrated contact and review forms notifying creators in real-time',
      'Scalable MongoDB database tracking document likes, downloads, and classifications',
      'Automatic email integration alerting administrators of newly requested studies',
      'Dynamic metadata-injection for high-ranking SEO index placement',
      'Fully set up and verified on Google Search Console for dynamic tracking analytics'
    ],
    caseStudy: {
      overview: 'StudyHub was born from a common problem: students struggle to locate neatly organized lecture summaries and study reference manuals. This project solved that issue by launching a centralized hub that processes indexing, dynamic search filters, and content downloads in active speed.',
      challenges: [
        'Secure file uploading structures protecting against malicious script execution.',
        'Ensuring zero-delay response rendering when querying notes across growing database collections.',
        'Setting up complete Search Engine Optimization targeting specific university courses.'
      ],
      solutions: [
        'Utilized strictly sandboxed upload buffers and enforced double mime-type verification tags.',
        'Created optimized compound indexes in MongoDB clusters to achieve search benchmarks below 40ms.',
        'Designed JSON-LD structured schema maps and submitted customized target sitemaps directly to Google Search Console.'
      ],
      results: 'Achieved an SEO audit score of 100 on lighthouse, serving hundreds of successful note requests without storage downtime.'
    }
  },
  {
    id: 'fitness',
    title: 'Aura Fitness',
    subtitle: 'High-End Training Visualizer',
    description: 'Modern, fluid workout and physical fitness tracking platform engineered for high-performance responsive screen sizes.',
    longDescription: 'A custom, performance-focused single-page application built to help physical training enthusiasts view schedules, preview visual dynamic demonstrations of routines, track core reps, and plan healthy calorie intake targets through structured, elegant dashboards.',
    image: '/src/assets/images/fitness_preview_1780135127831.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    liveUrl: 'https://aura-fitness.netlify.app',
    githubUrl: 'https://github.com/nyxo/aura-fitness',
    features: [
      'Stark cyber-dark interactive visual exercise scheduler and daily targets',
      'Responsive dashboard mapping live cardiac simulations and visual hydration rates',
      'Clean bento-box layouts highlighting key macro-nutrients and rest alerts',
      'High contrast custom progress indicators matching premium touch interface standards'
    ],
    caseStudy: {
      overview: 'Most fitness trackers are overcrowded with telemetry logs that overwhelm beginners. Aura Fitness strips the bloat away, highlighting high-fidelity health animations, micro-metric wheels, and structured workout blueprints that animate dynamically on swipe or load.',
      challenges: [
        'Syncing custom SVG hydration dials and workout indicators with component rendering variables without performance bottlenecks.',
        'Crafting responsive grids with complex layout offsets that resize smoothly on standard smartphone display dimensions.'
      ],
      solutions: [
        'Implemented lightweight, memoized status parameters and optimized animation frame cycles.',
        'Created CSS Grid breakpoints matched with flexible flex structures for seamless cross-device adaptivity.'
      ],
      results: 'Created a stunning, completely immersive web design that functions as a native device app on smart devices.'
    }
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    subtitle: 'Personal Developer Portfolio',
    description: 'A premium personal developer portfolio showcasing my skills, projects, GitHub activity, achievements, and professional journey with modern animations and responsive design.',
    longDescription: 'A premium personal developer portfolio website designed with highly responsive layouts and beautiful micro-interactions. Emphasizes modern design ethics of spacing, typography, and contrast to ensure recruiter-friendly presentation of technical capabilities.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    liveUrl: 'https://nyxo-portfolio.netlify.app',
    githubUrl: 'https://github.com/nyxo/portfolio-website',
    features: [
      'Responsive Design',
      'Dark Luxury UI',
      'Smooth Animations',
      'GitHub Integration',
      'Contact Form',
      'Resume Download'
    ],
    caseStudy: {
      overview: 'This custom portfolio is designed to showcase my journey, projects, and work ethic in a highly clean and presentable format inspired by industry-leading platform websites like Linear and Vercel.',
      challenges: [
        'Presenting multi-dimensional information cleanly in a highly readable format.',
        'Ensuring fast performance and access levels across different physical screens.'
      ],
      solutions: [
        'Utilized a high contrast minimalist dark luxury aesthetic paired with card containers.',
        'Set up modular codebase configurations, smooth scroll targets, and crisp svg outlines.'
      ],
      results: 'Builds a professional, highly polished recruiter portal showcasing verifiable source code repos.'
    }
  }
];

export const githubStats: GitHubStats = {
  followers: 43,
  stars: 128,
  commitsThisYear: 1420,
  contributions: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [48, 72, 95, 120, 84]
  },
  topLanguages: [
    { name: 'JavaScript', percentage: 45, color: '#f1e05a' },
    { name: 'React/TSX', percentage: 35, color: '#3178c6' },
    { name: 'HTML/CSS', percentage: 15, color: '#e34c26' },
    { name: 'Other', percentage: 5, color: '#c0c0c0' }
  ]
};

export const achievementsData: Achievement[] = [
  {
    id: 'projects',
    title: 'Projects Built',
    value: '12+',
    subtext: 'Web Apps & Prototypes',
    iconName: 'FolderCode'
  },
  {
    id: 'github',
    title: 'GitHub Repositories',
    value: '35+',
    subtext: 'Open Source & Dev Labs',
    iconName: 'GitBranch'
  },
  {
    id: 'tech_learned',
    title: 'Technologies Leaped',
    value: '15+',
    subtext: 'Frontend & Fullstack stack',
    iconName: 'CodeXml'
  },
  {
    id: 'hours_coding',
    title: 'Hours of Coding',
    value: '1,800+',
    subtext: 'Active terminal sessions',
    iconName: 'Timer'
  }
];
