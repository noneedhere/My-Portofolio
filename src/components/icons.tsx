// Brand icons via react-icons (consistent with lucide-react for UI icons)
// Re-exported with a uniform interface so consumers don't need to change.

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface IconProps {
  size?: number;
  className?: string;
}

export function GithubIcon({ size = 24, className }: IconProps) {
  return <FaGithub size={size} className={className} />;
}

export function LinkedinIcon({ size = 24, className }: IconProps) {
  return <FaLinkedin size={size} className={className} />;
}

export function InstagramIcon({ size = 24, className }: IconProps) {
  return <FaInstagram size={size} className={className} />;
}
