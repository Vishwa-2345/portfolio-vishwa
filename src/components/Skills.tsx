import React, { useEffect, useRef } from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skillsData';
import { fadeInOnScroll } from '../utils/animations';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInOnScroll(sectionRef.current);
    fadeInOnScroll(headingRef.current, 0.2);
    fadeInOnScroll(cardsRef.current, 0.4);

    // Staggered animation for skill cards
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card, index) => {
      const delay = 0.1 + index * 0.1;
      (card as HTMLElement).style.transitionDelay = `${delay}s`;
      fadeInOnScroll(card as HTMLElement, delay);
    });
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 transition-colors duration-300 dark:bg-gray-900 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg max-w-xl mx-auto dark:text-gray-300 text-gray-600">
            Here are some of the technologies and tools I specialize in
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;