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

export interface NavItem {
  name: string;
  path: string;
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

export interface GitHubStats {
  followers: number;
  stars: number;
  commitsThisYear: number;
  contributions: {
    labels: string[];
    values: number[]; // Activity frequency
  };
  topLanguages: {
    name: string;
    percentage: number;
    color: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  value?: string;
  subtext?: string;
  iconName?: string;
  emoji?: string;
}
