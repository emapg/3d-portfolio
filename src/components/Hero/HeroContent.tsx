import { Github, Linkedin, Mail } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white z-10">
        <h1 className="text-6xl font-bold mb-4">John Doe</h1>
        <p className="text-xl mb-8">Full Stack Developer & 3D Enthusiast</p>
        <div className="flex space-x-6 justify-center">
          <a href="https://github.com" className="hover:text-indigo-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-indigo-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-indigo-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};