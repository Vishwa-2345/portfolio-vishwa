import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { fadeInOnScroll } from '../utils/animations';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInOnScroll(sectionRef.current);
    fadeInOnScroll(headingRef.current, 0.2);
    fadeInOnScroll(projectsRef.current, 0.4);

    // Staggered animation for project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      const delay = 0.1 + index * 0.1;
      (card as HTMLElement).style.transitionDelay = `${delay}s`;
      fadeInOnScroll(card as HTMLElement, delay);
    });
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 transition-colors duration-300 dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg max-w-xl mx-auto dark:text-gray-300 text-gray-600">
            Check out some of my recent work
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;