export interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Rail Booking System',
    description:
      'A fullstack railway ticket booking platform with authentication, passenger management, seat availability, and role-based administration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MySQL', 'JWT', 'Tailwind CSS'],
    features: ['User authentication', 'Seat management', 'Booking system', 'Admin dashboard'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/rail-booking.png',
  },
  {
    title: 'AI Multi-Chatbot',
    description:
      'A multi-provider AI chatbot application designed to interact with different AI models through a unified interface.',
    tags: ['React', 'TypeScript', 'Node.js', 'Docker', 'OpenRouter', 'Ollama'],
    features: ['Multi-model support', 'Unified interface', 'Docker deployment', 'Real-time chat'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/ai-chatbot.png',
  },
  {
    title: 'Admin Toko',
    description:
      'An administration system for managing products, inventory, purchases, invoices, and transaction statistics.',
    tags: ['Node.js', 'Express.js', 'EJS', 'SQLite'],
    features: ['Product management', 'Inventory tracking', 'Invoice generation', 'Statistics dashboard'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/admin-toko.png',
  },
  {
    title: 'SIAKAD',
    description:
      'An academic information system with role-based access for administrators, teachers, and students.',
    tags: ['Laravel', 'Tailwind CSS', 'SQLite'],
    features: ['Role-based access', 'Student management', 'Grade tracking', 'Admin panel'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/siakad.png',
  },
];
