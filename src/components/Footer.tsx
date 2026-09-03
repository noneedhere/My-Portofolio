import { navLinks } from '@/data/navigation';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#27272a] bg-[#09090b] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-[#fafafa]">Your Name</span>
            <p className="text-sm text-[#71717a] mt-1">Junior Fullstack Web Developer</p>
          </div>
          
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-[#a1a1aa] hover:text-blue-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#71717a] hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-[#71717a] hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-[#71717a] hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-xs text-[#71717a]">
          © {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
