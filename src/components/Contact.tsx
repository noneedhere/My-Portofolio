import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/utils/animations';

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
          Have a project in mind?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#a1a1aa] text-lg max-w-2xl mx-auto mb-10">
          I'm always open to new opportunities, collaborations, and interesting projects. Let's connect and build something great together.
        </motion.p>
        
        <motion.div variants={fadeUp} className="mb-12">
          <a
            href="mailto:contact@yourname.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
        
        <motion.div variants={fadeUp} className="flex justify-center items-center gap-6">
          <a href="#" className="text-[#a1a1aa] hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-[#a1a1aa] hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-[#a1a1aa] hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
