import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineHeart, HiOutlineArrowUp } from 'react-icons/hi';
import { FiCode } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-12 pb-8 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <FiCode size={16} />
            </div>
            <span className="font-display font-bold text-slate-900 dark:text-white">
              Vishwa<span className="gradient-text">.</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <span>&copy; {currentYear} Vishwa V</span>
            <span></span>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl glass glow-sm flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="Back to top"
          >
            <HiOutlineArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;