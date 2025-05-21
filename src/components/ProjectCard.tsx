import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card group h-full overflow-hidden rounded-xl shadow-lg dark:bg-gray-800/80 bg-white backdrop-blur-sm opacity-0 transform translate-y-10 transition-all duration-500 hover:shadow-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm dark:text-gray-300 text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs rounded-full dark:bg-gray-700 bg-gray-100 dark:text-purple-300 text-purple-600"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
          >
            Live Demo <ExternalLink size={16} className="ml-1" />
          </a>
          <a 
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300"
          >
            View Code <Github size={16} className="ml-1" />
          </a>
        </div>
      </div>

      <div 
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-700/90 to-pink-700/90 p-6 transition-all duration-500 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-4">{description}</p>
          <button className="px-4 py-2 bg-white text-purple-700 rounded-full font-medium flex items-center mx-auto">
            View Details <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;