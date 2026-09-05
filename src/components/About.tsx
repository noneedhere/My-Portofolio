import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/utils/animations';
import SectionHeading from './SectionHeading';
import { Code2, Server, BookOpen } from 'lucide-react';
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
    <section id="about" className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" />

        <div className="md:grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-6 text-[#a1a1aa] text-lg leading-relaxed"
          >
            {personal.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12 md:mt-0 flex flex-col gap-4"
          >
            <motion.div variants={fadeUp} className="bg-[#111113] border border-[#27272a] p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-[#fafafa] font-semibold text-lg">4+ Projects</h3>
                <p className="text-[#a1a1aa] text-sm mt-1">Built full-stack applications with modern tech.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111113] border border-[#27272a] p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500">
                <Server size={24} />
              </div>
              <div>
                <h3 className="text-[#fafafa] font-semibold text-lg">Fullstack Focus</h3>
                <p className="text-[#a1a1aa] text-sm mt-1">Experience in both frontend UI and backend APIs.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111113] border border-[#27272a] p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-[#fafafa] font-semibold text-lg">Always Learning</h3>
                <p className="text-[#a1a1aa] text-sm mt-1">Continuously improving my skills and knowledge.</p>
              </div>
            </motion.div>
            <motion.div
              variants={iconContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-14"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* tech icons */}
      <div className='max-w-6xl mx-auto px-6 flex flex-wrap gap-8 relative items-center justify-center'>
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
