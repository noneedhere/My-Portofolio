import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '@/data/skills';
import { fadeUp, staggerContainer } from '@/utils/animations';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        
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
              <h3 className="text-lg font-semibold text-[#fafafa] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string, skillIdx: number) => (
                  <span
                    key={skillIdx}
                    className="inline-block bg-[#18181b] text-[#a1a1aa] px-3 py-1.5 rounded-lg text-sm border border-[#27272a] hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {skill}
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
