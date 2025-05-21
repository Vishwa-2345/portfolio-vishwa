import React from 'react';
import * as LucideIcons from 'lucide-react';

interface SkillCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
 
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  const IconComponent = LucideIcons[icon];
  
  return (
    <div className="skill-card group h-full dark:bg-gray-800/50 bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm opacity-0 transform translate-y-10 transition-all duration-500 hover:shadow-xl dark:hover:bg-gray-800 hover:bg-white hover:-translate-y-2">
      <div className="w-16 h-16 mb-6 p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
        {IconComponent && (
          <IconComponent 
            className="w-full h-full text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300" 
          />
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
        {description}
      </p>
      
    
    </div>
  );
};

export default SkillCard;