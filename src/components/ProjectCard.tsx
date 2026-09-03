import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { fadeUp } from '@/utils/animations';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col"
    >
      <div className="h-48 bg-[#18181b] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl font-bold text-[#27272a]">{project.title.charAt(0)}</span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-[#fafafa]">{project.title}</h3>
        <p className="text-sm text-[#a1a1aa] mt-2 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4 flex-1 content-start">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6 pt-4 border-t border-[#27272a]">
          {project.githubUrl && (
            <a href={project.githubUrl} className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-blue-400 transition-colors">
              <Github size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-blue-400 transition-colors">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
