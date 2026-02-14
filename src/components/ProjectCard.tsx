import React from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '../utils/animations';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, description, image, technologies, demoLink, codeLink,
}) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group glass-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/90 text-slate-900 text-sm font-semibold hover:bg-white transition-colors"
          >
            <HiOutlineExternalLink size={16} /> Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900/90 text-white text-sm font-semibold hover:bg-slate-900 transition-colors"
          >
            <SiGithub size={15} /> Code
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-display font-bold mb-2 text-slate-900 dark:text-white group-hover:gradient-text transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;