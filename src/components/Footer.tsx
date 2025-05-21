import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 transition-colors duration-300 dark:bg-gray-900/90 bg-gray-100/90 backdrop-blur-sm border-t dark:border-gray-800 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-lg font-bold mb-4 md:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Vishwa
            </span>
          </div>
          
          <div className="flex items-center dark:text-gray-400 text-gray-600">
            <p>© {currentYear} Vishwa. All rights reserved.</p>
            <Heart size={16} className="mx-2 text-red-500" />
            <p>Made with Love</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 rounded-full dark:bg-gray-800 bg-white dark:text-purple-400 text-purple-600 dark:hover:bg-purple-500 hover:bg-purple-500 dark:hover:text-white hover:text-white transition-all duration-300"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;