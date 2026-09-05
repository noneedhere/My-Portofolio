import { motion } from 'motion/react';
import { fadeUp } from '@/utils/animations';
import SectionHeading from './SectionHeading';
import { personal } from '@/data/personal';

interface FeaturedSkill {
  name: string;
  icon: string;
  color: string;
  invert?: boolean;
}

const featuredStack: FeaturedSkill[] = [
  { name: 'Next.js', icon: '/icon/Next.js.svg', color: '#ffffff', invert: true },
  { name: 'React.js', icon: '/icon/React.svg', color: '#61DAFB' },
  { name: 'Node.js', icon: '/icon/Node.js.svg', color: '#83CD29' },
  { name: 'Express.js', icon: '/icon/Express.svg', color: '#a1a1aa', invert: true },
  { name: 'MySQL', icon: '/icon/MySQL.svg', color: '#00618A' },
  { name: 'Git', icon: '/icon/Git.svg', color: '#F34F29' },
  { name: 'GitHub', icon: '/icon/GitHub.svg', color: '#e4e4e7', invert: true },
];

const iconCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" />

        <div className="md:grid md:grid-cols-2 gap-12 items-center">
          {/* about content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center justify-center mb-8 md:mb-0"
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#27272a]">
              <img
                src={personal.aboutImageSrc}
                alt={personal.portraitAlt}
                className="w-full h-auto object-cover"
                draggable={false}
              />
              {/* subtle gradient overlay at the bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(17,17,19,0.6) 0%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Description - right column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col justify-center gap-6 text-[#a1a1aa] text-lg leading-relaxed"
          >
            {personal.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>


      {/* tech icons */}
      <div className='max-w-6xl mx-auto px-6 pt-20 flex flex-wrap gap-8 relative items-center justify-center'>
        {featuredStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={iconCardVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.25, ease: 'easeOut' },
            }}
            className="group relative flex flex-col items-center gap-3 w-[100px] sm:w-[110px] py-5 rounded-2xl border border-[#27272a] bg-[#111113] cursor-default transition-colors duration-300 hover:border-opacity-60"
          >
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 40%, ${tech.color}12 0%, transparent 70%)`,
                boxShadow: `inset 0 0 0 1px ${tech.color}30`,
                borderRadius: 'inherit',
              }}
            />
            <img
              src={tech.icon}
              alt={tech.name}
              width={36}
              height={36}
              className="relative select-none"
              style={tech.invert ? { filter: 'brightness(0) invert(1)' } : undefined}
              draggable={false}
            />
            <span className="relative text-xs font-medium text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
