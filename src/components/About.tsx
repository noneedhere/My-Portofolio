import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/utils/animations';
import SectionHeading from './SectionHeading';
import { Code2, Server, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
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
            <p>
              I'm a Junior Fullstack Web Developer with a passion for building modern, scalable, and user-focused web applications. My journey in software development started with a curiosity for how things work on the web, which quickly evolved into a deep commitment to mastering both frontend and backend technologies.
            </p>
            <p>
              I specialize in building applications using React, TypeScript, Next.js, and Node.js, with experience in database design and API development. I enjoy turning complex problems into clean, intuitive digital solutions.
            </p>
            <p>
              Currently seeking opportunities to grow as a developer, contribute to meaningful projects, and collaborate with teams that value clean code and great user experience.
            </p>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
