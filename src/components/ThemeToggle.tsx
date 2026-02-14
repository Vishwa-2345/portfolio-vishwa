import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed z-50 bottom-6 right-6 w-12 h-12 rounded-2xl glass glow-sm flex items-center justify-center group"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <HiOutlineSun size={22} className="text-amber-400" />
        ) : (
          <HiOutlineMoon size={22} className="text-slate-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;