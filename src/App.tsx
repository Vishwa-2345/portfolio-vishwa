import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

/* ─────────────────────────────────────────────────────────────
   Immersive "Developer at work" intro scene
   — Shows a dev working at a desk with floating tool icons,
     animated code lines, and a glowing CTA button.
   ───────────────────────────────────────────────────────────── */

/* Floating tool / language icons (emoji + text based — zero deps) */
const FLOAT_ITEMS = [
  { emoji: '⚛️', label: 'React', x: 8, y: 15 },
  { emoji: '🟨', label: 'JS', x: 85, y: 12 },
  { emoji: '🐍', label: 'Python', x: 12, y: 72 },
  { emoji: '🎨', label: 'CSS', x: 90, y: 65 },
  { emoji: '📊', label: 'Data', x: 5, y: 42 },
  { emoji: '🚀', label: 'Deploy', x: 92, y: 38 },
  { emoji: '💾', label: 'DB', x: 18, y: 88 },
  { emoji: '☁️', label: 'Cloud', x: 80, y: 85 },
];

const DevScene: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  // show only particles + sentence for 2 seconds, then enter portfolio
  useEffect(() => {
    const t = setTimeout(() => onEnter(), 2000);
    return () => clearTimeout(t);
  }, [onEnter]);

  return (
    <motion.div className="intro-scene relative" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <div className="intro-orb intro-orb-1" />
      <div className="intro-orb intro-orb-2" />
      <div className="intro-orb intro-orb-3" />

      <div className="intro-particles" aria-hidden>
        {FLOAT_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className="intro-float-icon"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.8, 0.8, 0], scale: [0.8, 1, 1, 0.8] }}
            transition={{ duration: 4, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="intro-float-emoji">{item.emoji}</span>
            <span className="intro-float-label">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.h1 className="intro-sentence-text relative z-20 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg pointer-events-none" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
            Let's see the developer
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

/* ─────────── Main App ─────────── */

function App(): React.JSX.Element {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [introOpen, setIntroOpen] = useState(true);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = introOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [introOpen]);

  const toggleTheme = () => setTheme((p) => (p === 'dark' ? 'light' : 'dark'));
  const handleEnter = useCallback(() => setIntroOpen(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {introOpen && <DevScene onEnter={handleEnter} />}
      </AnimatePresence>

      {!introOpen && (
        <motion.div
          className="min-h-screen transition-colors duration-500"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="fixed top-0 left-0 h-0.5 z-50 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 origin-left"
            style={{ transformOrigin: 'left' }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
          />

          <BrowserRouter>
            <Navbar />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                  </main>
                }
              />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </motion.div>
      )}
    </>
  );
}

export default App;