import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { heroTextReveal } from '../utils/animations';

const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer'];

const FloatingOrb: React.FC<{ size: string; color: string; delay: number; position: string }> = ({
  size, color, delay, position,
}) => (
  <motion.div
    className={`absolute ${position} ${size} rounded-full blur-3xl opacity-20 dark:opacity-15 pointer-events-none`}
    style={{ background: color }}
    animate={{ y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 10, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: number | undefined;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => { if (timeout) clearTimeout(timeout); };
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 mesh-gradient" style={{ y: y1 }} />

      <FloatingOrb size="w-96 h-96" color="rgba(16, 185, 129, 0.3)" delay={0} position="top-10 -left-48" />
      <FloatingOrb size="w-80 h-80" color="rgba(6, 182, 212, 0.25)" delay={2} position="top-1/3 -right-40" />
      <FloatingOrb size="w-64 h-64" color="rgba(245, 158, 11, 0.15)" delay={4} position="bottom-20 left-1/4" />
      <FloatingOrb size="w-72 h-72" color="rgba(16, 185, 129, 0.2)" delay={3} position="-bottom-20 right-1/4" />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(250,250,248,0.85)_80%)] dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,15,26,0.85)_80%)]"
        style={{ y: y2 }}
      />

      <motion.div style={{ opacity: heroOpacity }} className="container-custom relative z-10 text-center">
        {/* Availability badge removed per request */}

        <motion.h1
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
        >
          <span className="text-slate-900 dark:text-white">Hi, I'm </span>
          <span className="gradient-text">Vishwa</span>
        </motion.h1>

        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="h-12 md:h-14 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-600 dark:text-slate-400">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-7 md:h-8 ml-1 bg-emerald-500 align-middle"
            />
          </span>
        </motion.div>

        <motion.p
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="text-lg md:text-xl max-w-2xl mx-auto text-slate-500 dark:text-slate-400 mb-12 text-balance leading-relaxed"
        >
          I craft modern, performant web applications with clean code and
          pixel-perfect designs that deliver exceptional user experiences.
        </motion.p>

        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary font-display"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary font-display"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <HiOutlineChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default Hero;