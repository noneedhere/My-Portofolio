import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personal } from '@/data/personal';
import type { ReactNode } from 'react';

// ── Typed social links data ──────────────────────────────────
interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: personal.githubUrl,
    icon: <GithubIcon size={16} />,
  },
  {
    label: 'LinkedIn',
    href: personal.linkedinUrl,
    icon: <LinkedinIcon size={16} />,
  },
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: <Mail size={16} />,
  },
];

// ── Animation variants ───────────────────────────────────────
const portraitVariants = {
  hidden: { opacity: 0, y: 30, scale: 1.03 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.3 },
  },
};

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

// ── Hero Component ───────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#02030B]"
    >
      <div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-[1] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }}
      />
      <motion.img
        src={personal.portraitSrc}
        alt={personal.portraitAlt}
        variants={portraitVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-[2] w-full h-full object-cover object-top pointer-events-none select-none"
      />
      <div
        className="absolute top-0 inset-x-0 h-36 md:h-44 z-[20] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.4) 50%, rgba(9,9,11,0) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-40 md:h-52 z-[5] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,0.6) 40%, rgba(9,9,11,0) 100%)',
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-1/4 z-[3] pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0) 100%)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/4 z-[3] pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(to left, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0) 100%)',
        }}
      />
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute z-[10] bottom-10 sm:bottom-12 md:bottom-14 lg:bottom-16 left-6 sm:left-10 md:left-14 lg:left-20 xl:left-28 max-w-xs sm:max-w-sm md:max-w-md"
      >
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-bold text-[#fafafa] leading-[1.1] tracking-tight">
          {personal.role}
        </h1>

        <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-[#a1a1aa] leading-relaxed max-w-sm">
          {personal.heroTagline}
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 mt-5 md:mt-7 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium px-6 py-3 rounded-full transition-colors"
        >
          Let's Work Together
          <ArrowUpRight size={18} />
        </motion.a>
      </motion.div>
      <motion.div
        variants={socialContainerVariants}
        initial="hidden"
        animate="visible"
        className="absolute z-[10] bottom-10 sm:bottom-12 md:bottom-14 lg:bottom-16 right-6 sm:right-10 md:right-14 lg:right-20 xl:right-28 flex flex-row md:flex-col gap-2.5 md:gap-3"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={
              link.href.startsWith('mailto:')
                ? undefined
                : 'noopener noreferrer'
            }
            variants={socialItemVariants}
            whileHover={{ x: -4, transition: { duration: 0.2 } }}
            className="flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#27272a] bg-[#111113]/70 backdrop-blur-sm text-[#e4e4e7] text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-colors"
          >
            {link.icon}
            <span className="hidden sm:inline">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
