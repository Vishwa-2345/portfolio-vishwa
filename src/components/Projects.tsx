import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Projects: React.FC = () => {
  

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg max-w-xl mx-auto text-slate-500 dark:text-slate-400">
            A selection of recent work that I'm proud of
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              codeLink={project.codeLink}
            />
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;