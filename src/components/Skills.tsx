import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/data/skills';
import { fadeUp, staggerContainer } from '@/utils/animations';

// ── Featured tech stack using SVG files from /icon/ ─────────
interface FeaturedSkill {
  name: string;
  icon: string; // path to SVG in /public/icon/
  color: string; // hover glow color
  invert?: boolean; // invert dark icons for visibility on dark bg
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

// ── Animation variants ───────────────────────────────────────
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        {/* ── Featured tech stack icons ── */}
        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-14"
        >
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
        </motion.div>

        {/* ── Detailed skill categories ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-[#111113] border border-[#27272a] rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#fafafa] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-block bg-[#18181b] text-[#a1a1aa] px-3 py-1.5 rounded-lg text-sm border border-[#27272a] hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
