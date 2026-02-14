import React from 'react';
import { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: IconComponent, title, description }) => {
  return (
    <div className="w-64 h-full glass-card p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 border-t-2 border-indigo-400 dark:border-indigo-600 shadow-xl">
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 dark:opacity-40 animate-pulse-slow rounded-full"></div>
        <IconComponent size={48} className="relative z-10 text-indigo-600 dark:text-indigo-400 drop-shadow-sm" />
      </div>

      <h4 className="text-xl font-bold font-display text-slate-800 dark:text-slate-100 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{description}</p>
    </div>
  );
};

export default SkillCard;