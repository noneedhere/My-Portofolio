export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Python' },
      { name: 'Django' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'Prisma' },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Vite' },
      { name: 'WordPress' },
      { name: 'Odoo' },
    ],
  },
];
