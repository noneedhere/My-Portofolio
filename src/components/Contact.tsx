import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { personal } from '@/data/personal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#09090b]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#fafafa] mb-6">
          {personal.contactHeading}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#a1a1aa] text-lg max-w-2xl mx-auto mb-10">
          {personal.contactSubtext}
        </motion.p>
        
        <motion.div variants={fadeUp} className="mb-12">
          {/* TODO: Update email in personal.ts */}
          <a
            href="https://wa.link/gqwmhp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
        
        <motion.div variants={fadeUp} className="flex justify-center items-center gap-6">
          {/* TODO: Update URLs in personal.ts */}
          <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-blue-400 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-blue-400 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href={`mailto:${personal.email}`} className="text-[#a1a1aa] hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
