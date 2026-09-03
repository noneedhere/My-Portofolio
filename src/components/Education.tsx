import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { education, certifications } from '@/data/experience';
import { fadeUp, staggerContainer } from '@/utils/animations';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Education & Certifications" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-xl font-bold text-[#fafafa] mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-[#111113] border border-[#27272a] rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-[#fafafa]">{edu.institution}</h4>
                  <p className="text-blue-400 text-sm mt-1">{edu.degree}</p>
                  <p className="text-[#a1a1aa] text-sm mt-2">{edu.field}</p>
                  <p className="text-[#71717a] text-sm mt-4">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-xl font-bold text-[#fafafa] mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-[#111113] border border-[#27272a] rounded-2xl p-6">
                  <h4 className="text-[#fafafa] font-medium mb-4">{cert.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-md">{cert.provider}</span>
                    <span className="text-xs bg-[#18181b] text-[#a1a1aa] border border-[#27272a] px-2.5 py-1 rounded-md">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
