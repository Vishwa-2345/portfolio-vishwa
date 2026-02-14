import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';
// removed resume download icon import (button removed)

const About: React.FC = () => {
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile photo — adaptive card that works with any image shape */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative group w-64 sm:w-72 md:w-80">
              {/* Glow ring behind the card */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Card container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/60 dark:border-slate-700/40 shadow-lg bg-white dark:bg-slate-900">
                {/* Gradient accent bar at top */}
                <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

                {/* Image wrapper — uses aspect-ratio so ANY image fits without distortion */}
                <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <img
                    src="./Profile2.png"
                    alt="Vishwa V"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML =
                          '<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"><span class="text-7xl font-display font-bold gradient-text">V</span></div>';
                      }
                    }}
                  />
                </div>

                {/* Name strip removed — only image shown as requested */}
              </div>
            </div>
          </motion.div>

          {/* Text + resume side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              Hey it's me, <span className="gradient-text">Vishwa V</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-4">
              I’m a Full Stack Developer who loves building complete, real-world systems — not just websites.I enjoy turning ideas into structured, scalable solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-4">
              I started with HTML, CSS, and JavaScript, but quickly moved into building full-stack applications using React, Node.js, and modern backend architectures. I focus on clean UI, strong system design, and practical problem-solving.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
              I enjoy building products that are not only functional but meaningful — tools that improve workflows, automate processes, and create impact. I’m constantly learning, experimenting with new technologies, and pushing myself to build better systems every day. 
              If you’re building something ambitious — let’s make it happen.
            </p>

            {/* Resume download removed per request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;