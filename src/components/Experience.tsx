import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { experience } from '@/data/experience';
import { fadeUp, staggerContainer } from '@/utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Experience" subtitle="Professional background" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="border-l-2 border-blue-500/30 pl-6 ml-3 space-y-12"
        >
          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={fadeUp} className="relative">
              <div className="absolute -left-7.25 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#09090b]" />
              
              <h3 className="text-lg font-semibold text-[#fafafa]">{exp.company}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 mb-3">
                <span className="text-blue-400 text-sm font-medium">{exp.role}</span>
                <span className="hidden sm:inline text-[#71717a]">•</span>
                <span className="text-[#71717a] text-sm">{exp.period}</span>
              </div>
              
              <p className="text-[#a1a1aa] text-sm mb-3">
                {exp.description}
              </p>
              
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="list-disc ml-4 space-y-1 text-[#a1a1aa] text-sm marker:text-[#71717a]">
                  {exp.responsibilities.map((resp: string, i: number) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
