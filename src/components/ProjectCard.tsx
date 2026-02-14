import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerItem } from '../utils/animations';
// removed unused icon import
import { SiGithub } from 'react-icons/si';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id, title, description, image, codeLink,
}) => {
  return (
    <Link to={`/projects/${id}`} className="group">
      <motion.div
        variants={staggerItem}
        initial={false}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="glass-card flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
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
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900/90 text-white text-sm font-semibold hover:bg-slate-900 transition-colors"
          >
            <SiGithub size={15} /> Code
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <h3 className="text-lg font-display font-bold mb-2 text-slate-900 dark:text-white group-hover:gradient-text transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tools removed from the card — see project detail page for full list */}
      </div>
    </motion.div>
    </Link>
  );
};

export default ProjectCard;