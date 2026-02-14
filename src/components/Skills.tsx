import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skillsData';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg max-w-xl mx-auto text-slate-500 dark:text-slate-400">
            Technologies I use to build scalable and performant applications
          </p>
        </motion.div>

        {/* Alternating rows: even index → description left / skills right; odd → flipped */}
        <div className="space-y-20">
          {skillGroups.map((group, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={group.category}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                {/* Description side */}
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.1}
                  className="w-full lg:w-1/2"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3">
                    {group.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                    {group.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {group.description}
                  </p>
                </motion.div>

                {/* Skills grid side */}
                <motion.div
                  variants={isEven ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.2}
                  className="w-full lg:w-1/2"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {group.skills.map((skill, i) => (
                      <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="glass-card p-5 flex flex-col items-center gap-3 text-center cursor-default"
                      >
                        <div className={`w-11 h-11 rounded-xl ${skill.color} flex items-center justify-center shadow-sm`}>
                          <skill.icon size={22} className="text-white" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.title}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;