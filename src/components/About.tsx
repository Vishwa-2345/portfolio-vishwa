import React, { useEffect, useRef } from 'react';
import { fadeInOnScroll } from '../utils/animations';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInOnScroll(sectionRef.current);
    fadeInOnScroll(imageRef.current, 0.3);
    fadeInOnScroll(contentRef.current, 0.5);
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 transition-colors duration-300 dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Me</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            ref={imageRef}
            className="w-full md:w-2/5 flex justify-center opacity-0 transform translate-y-10 transition-all duration-1000"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="../images/1000062569.webp" 
                  alt="Profile" 
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </div>
          </div>

          <div 
            ref={contentRef}
            className="w-full md:w-3/5 opacity-0 transform translate-y-10 transition-all duration-1000"
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
              Front-End-Web-Developer
            </h3>
            <p className="text-lg mb-6 dark:text-gray-300 text-gray-700 leading-relaxed">
              I'm a passionate web developer with expertise in creating stunning, functional websites and applications. With a strong foundation in front-end technologies, I bring ideas to life through clean code and creative solutions.
            </p>
            <p className="text-lg mb-6 dark:text-gray-300 text-gray-700 leading-relaxed">
              My journey in web development began 1 years ago, and since then, I've worked on a variety of projects that have sharpened my skills and broadened my expertise. I believe in continuous learning and staying updated with the latest trends and technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="dark:bg-gray-800 bg-white px-4 py-2 rounded-full dark:text-purple-400 text-purple-600 font-medium shadow-md">
                🎓 Artificial Intelligence and Data Science UnderGraduate
              </div>
              <div className="dark:bg-gray-800 bg-white px-4 py-2 rounded-full dark:text-pink-400 text-pink-600 font-medium shadow-md">
                💼 1 Years Experience
              </div>
              <div className="dark:bg-gray-800 bg-white px-4 py-2 rounded-full dark:text-purple-400 text-purple-600 font-medium shadow-md">
                🌎 Remote Worker
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;