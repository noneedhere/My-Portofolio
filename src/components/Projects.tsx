import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { staggerContainer } from '@/utils/animations';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Projects" subtitle="Featured work and side projects" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.id || idx} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
