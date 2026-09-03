import { motion } from 'motion/react';
import { fadeUp } from '@/utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="mb-12 md:mb-16"
    >
      <div className="h-1 w-12 rounded-full bg-blue-500 mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-[#a1a1aa] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
