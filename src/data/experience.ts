export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

export interface Certification {
  title: string;
  provider: string;
  year: string;
}

export const experience: Experience[] = [
  {
    company: 'PT Kadelmindo Saraya Mapan',
    role: 'IT Support Intern',
    period: '2024',
    description:
      'Contributed to IT infrastructure and web development projects during internship.',
    responsibilities: [
      'Website maintenance and updates',
      'WordPress development',
      'Odoo ERP implementation',
      'Dashboard development',
      'Data management and organization',
      'Technical troubleshooting',
      'Remote technical support',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'SMK',
    degree: 'Vocational High School',
    field: 'Rekayasa Perangkat Lunak (RPL)',
    period: '',
  },
];

export const certifications: Certification[] = [
  {
    title: 'BNSP Fullstack Web Development with Python Django',
    provider: 'DigiUp',
    year: '2024',
  },
  {
    title: 'Data Science Online Course',
    provider: 'DigiCourse',
    year: '2024',
  },
];
