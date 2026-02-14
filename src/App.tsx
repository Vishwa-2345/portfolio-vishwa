import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

/* Code snippets that scroll on the "monitor" */
const MONITOR_LINES = [
  'const App = () => {',
  '  const [data, setData] = useState([]);',
  '  useEffect(() => {',
  '    fetchProjects().then(setData);',
  '  }, []);',
  '  return <Layout>{data.map(renderCard)}</Layout>;',
  '};',
  '',
  'export default App;',
  '',
  '// Building something amazing...',
  'function fetchProjects() {',
  '  return api.get("/projects");',
  '}',
];

/* Progress steps that appear sequentially */
const BUILD_STEPS = [
  { icon: '📦', text: 'Initializing...', delay: 0.2 },
  { icon: '⚙️', text: 'Compiling...', delay: 0.6 },
  { icon: '🎨', text: 'Styling...', delay: 1.0 },
  { icon: '✅', text: 'Ready!', delay: 1.4 },
];

const DevScene: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [showCta, setShowCta] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const [devCentered, setDevCentered] = useState(false);
  const [showSentence, setShowSentence] = useState(false);

  // Animate build steps one by one and auto-run the reveal sequence
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BUILD_STEPS.forEach((step, i) => {
      timers.push(setTimeout(() => setCurrentStep(i), step.delay * 1000));
    });

    // After the last build step, wait 2s then show the centered sentence overlay,
    // then after 2s transition to the portfolio.
    const afterBuildMs = (BUILD_STEPS[BUILD_STEPS.length - 1].delay + 0.4) * 1000;
    timers.push(setTimeout(() => setShowCta(true), afterBuildMs));

    // show the big centered sentence 2s after build completes
    timers.push(setTimeout(() => {
      setShowSentence(true);
      // dim/hide floating particles while the sentence is visible
      setRevealing(true);
    }, afterBuildMs + 2000));

    // enter portfolio 2s after the sentence appears
    timers.push(setTimeout(() => onEnter(), afterBuildMs + 2000 + 2000));

    return () => timers.forEach(clearTimeout);
  }, [onEnter]);

  return (
    <motion.div
      className="intro-scene"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background gradient orbs */}
      <div className="intro-orb intro-orb-1" />
      <div className="intro-orb intro-orb-2" />
      <div className="intro-orb intro-orb-3" />
      <div className="intro-scanlines" />

      {/* Floating tool icons around the edges */}
      <div className="intro-particles" aria-hidden>
        {FLOAT_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className="intro-float-icon"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={revealing ? { opacity: 0 } : {
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.5, 1, 1, 0.5],
              y: [0, -15, -15, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="intro-float-emoji">{item.emoji}</span>
            <span className="intro-float-label">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Center content */}
      <div className="intro-center" style={{ maxWidth: 720 }}>
        {/* Status indicator */}
        <motion.div
          className="intro-status"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="intro-status-dot" />
          <span>a developer is crafting something...</span>
        </motion.div>

        {/* Developer workspace illustration */}
        <motion.div
          className="intro-workspace"
          initial={{ opacity: 0, y: 24 }}
          animate={revealing ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Desk scene */}
          <div className="intro-desk">
            {/* Monitor */}
            <div className="intro-monitor">
              <div className="intro-monitor-screen">
                {/* Code scrolling inside the monitor */}
                <div className="intro-monitor-code">
                  {MONITOR_LINES.map((line, i) => (
                    <div
                      key={i}
                      className={`intro-monitor-line ${
                        i === 0 ? 'intro-monitor-line-active' : ''
                      }`}
                    >
                      <span className="intro-monitor-ln">{i + 1}</span>
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>
                {/* Glow reflection */}
                <div className="intro-monitor-glow" />
              </div>
              {/* Monitor stand */}
              <div className="intro-monitor-stand" />
              <div className="intro-monitor-base" />
            </div>

            {/* Developer figure (simplified CSS art) */}
            <motion.div
              className="intro-dev-figure"
              initial={{ y: 0, scale: 1, opacity: 1 }}
              animate={devCentered ? { y: -140, scale: 1.28, opacity: 1 } : { y: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              style={{ zIndex: devCentered ? 9999 : undefined }}
            >
              <div className="intro-dev-head" />
              <div className="intro-dev-body" />
              <div className="intro-dev-arm intro-dev-arm-l" />
              <div className="intro-dev-arm intro-dev-arm-r" />
            </motion.div>

            {/* Desk surface */}
            <div className="intro-desk-surface" />

            {/* Coffee mug */}
            <div className="intro-coffee">
              <div className="intro-coffee-steam" />
              ☕
            </div>

            {/* Small items on desk */}
            <div className="intro-desk-plant">🪴</div>
          </div>
        </motion.div>

        {/* Build progress steps */}
        <div className="intro-build-steps">
          {BUILD_STEPS.map((step, i) => (
            <motion.div
              key={i}
              className={`intro-step ${i <= currentStep ? 'intro-step-done' : ''}`}
              initial={{ opacity: 0, x: -12 }}
              animate={i <= currentStep ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <span className="intro-step-icon">{step.icon}</span>
              <span>{step.text}</span>
              {i <= currentStep && i < BUILD_STEPS.length - 1 && (
                <motion.span
                  className="intro-step-check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA removed — intro now auto-reveals the developer and opens portfolio */}
      </div>

      {/* Full-screen centered sentence overlay (appears after 2s, then auto-navigates) */}
      <AnimatePresence>
        {showSentence && (
          <motion.div
            className="intro-sentence-overlay"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <motion.h1
              className="intro-sentence-text"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.5, type: 'spring', stiffness: 120 }}
            >
              Let's see the developer
            </motion.h1>
          </motion.div>
        )}
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

          <Navbar theme={theme} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;