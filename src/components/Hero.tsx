import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { fadeUp, staggerContainer, fadeIn } from '@/utils/animations';
import { personal } from '@/data/personal';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 max-w-6xl mx-auto">
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex-1 flex items-center justify-center relative"
      >
        {/* Blue glow behind portrait */}
        <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-blue-500/15 blur-3xl -z-10" />
        <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full bg-blue-400/10 blur-2xl -z-10" />

        {/* TODO: Place your portrait photo at /public/portrait.jpg */}
        <img 
          src={personal.portraitSrc}
          alt={personal.portraitAlt}
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full bg-[#111113] border-2 border-[#27272a]"
        />
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 md:mt-0"
      >
        {/* Left: Title + Description + CTA */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fafafa] leading-tight">
            {personal.role.split(' ').slice(0, -2).join(' ')}<br/>
            {personal.role.split(' ').slice(-2).join(' ')}
          </h1>
          <p className="text-[#a1a1aa] max-w-md text-lg">
            {personal.heroTagline}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors self-start mt-2"
          >
            Let's Work Together
            <ArrowUpRight size={20} />
          </a>
        </motion.div>

        {/* Right: Social links */}
        <motion.div variants={fadeUp} className="flex flex-row md:flex-col gap-3">
          {/* TODO: Update href in personal.ts */}
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#27272a] text-[#a1a1aa] hover:border-blue-500 hover:text-blue-400 transition-colors bg-[#111113]"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#27272a] text-[#a1a1aa] hover:border-blue-500 hover:text-blue-400 transition-colors bg-[#111113]"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#27272a] text-[#a1a1aa] hover:border-blue-500 hover:text-blue-400 transition-colors bg-[#111113]"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
