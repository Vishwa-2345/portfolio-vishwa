import { SiTypescript, SiReact, SiTailwindcss, SiMongodb, SiFastapi, SiHtml5, SiGit, SiPostgresql, SiPython, SiJavascript, SiBootstrap, SiPowerbi, SiTableau, SiVercel, SiNetlify } from 'react-icons/si';
import { IconType } from 'react-icons';

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools';

export interface SkillItem {
  icon: IconType;
  title: string;
  color: string; // tailwind bg color for icon badge
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    title: 'Frontend Development',
    description:
      'Building responsive, accessible, and performant user interfaces with modern frameworks. I focus on pixel-perfect designs, smooth interactions, and component-driven architecture.',
    skills: [
      { icon: SiReact, title: 'React', color: 'bg-sky-500' },
      { icon: SiTypescript, title: 'TypeScript', color: 'bg-blue-600' },
      { icon: SiJavascript, title: 'JavaScript', color: 'bg-yellow-400' },
      { icon: SiTailwindcss, title: 'Tailwind CSS', color: 'bg-cyan-500' },
      { icon: SiBootstrap, title: 'Bootstrap', color: 'bg-purple-600' },
      { icon: SiHtml5, title: 'HTML / CSS', color: 'bg-orange-500' },
    ],
  },
  {
    category: 'Backend',
    title: 'Backend Development',
    description:
      'Designing scalable server-side architectures and robust REST APIs. I work with Python and modern database solutions to deliver reliable backends.',
    skills: [
      { icon: SiFastapi, title: 'FastAPI', color: 'bg-teal-600' },
      { icon: SiPython, title: 'Python', color: 'bg-yellow-500' },
      { icon: SiMongodb, title: 'MongoDB', color: 'bg-green-500' },
      { icon: SiPostgresql, title: 'PostgreSQL', color: 'bg-indigo-500' },
    ],
  },
  {
    category: 'Tools',
    title: 'Tools & Platforms',
    description:
      'Leveraging modern developer tooling and data platforms for efficient workflows — version control, deployment, and business intelligence to deliver end-to-end solutions.',
    skills: [
      { icon: SiGit, title: 'Git', color: 'bg-orange-600' },
      { icon: SiVercel, title: 'Vercel', color: 'bg-slate-800' },
      { icon: SiNetlify, title: 'Netlify', color: 'bg-teal-500' },
      { icon: SiPowerbi, title: 'Power BI', color: 'bg-amber-500' },
      { icon: SiTableau, title: 'Tableau', color: 'bg-blue-500' },
    ],
  },
];