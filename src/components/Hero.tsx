import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { fadeUp, staggerContainer, fadeIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 max-w-6xl mx-auto">
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex-1 flex items-center justify-center relative"
      >
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -z-10" />
        <img 
          src="/portrait.jpg" 
          alt="Your Name" 
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full bg-[#111113]"
        />
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 md:mt-0"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fafafa] leading-tight">
            Junior Fullstack<br/>Web Developer
          </h1>
          <p className="text-[#a1a1aa] max-w-md text-lg">
            Building modern, scalable, and user-focused web applications with clean code.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors self-start mt-2">
            Let's Work Together
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-row md:flex-col gap-3">
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#27272a] text-[#a1a1aa] hover:border-blue-500 hover:text-blue-400 transition-colors bg-[#111113]">
            <Github size={20} />
          </a>
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#27272a] text-[#a1a1aa] hover:border-blue-500 hover:text-blue-400 transition-colors bg-[#111113]">
            <Linkedin size={20} />
          </a>
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full border border-[#27272a] text-[#a1a1aa] hover:border-blue-500 hover:text-blue-400 transition-colors bg-[#111113]">
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
