import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        const opacity = Math.max(1 - scrollPos / 700, 0);
        const translateY = scrollPos * 0.4;
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 dark:from-purple-900/60 dark:to-pink-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('C:\Users\God\Downloads\1000062569.webp ?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center bg-no-repeat"></div>
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center transition-all duration-300"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          <span className="block">Hi, I'm</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            VISHWA V
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto text-white/90 mb-10 drop-shadow-md">
        Front-End-Web-Developer
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;