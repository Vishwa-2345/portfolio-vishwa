import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { fadeInOnScroll } from '../utils/animations';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  useEffect(() => {
    fadeInOnScroll(sectionRef.current);
    fadeInOnScroll(headingRef.current, 0.2);
    fadeInOnScroll(formRef.current, 0.4);
    fadeInOnScroll(socialRef.current, 0.6);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 transition-colors duration-300 dark:bg-gray-900 bg-gray-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 dark:bg-purple-600/10 bg-purple-600/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 dark:bg-pink-600/10 bg-pink-600/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headingRef} className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Touch</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg max-w-xl mx-auto dark:text-gray-300 text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div 
            ref={formRef}
            className="w-full lg:w-3/5 opacity-0 transform translate-y-10 transition-all duration-1000"
          >
            <div className="h-full dark:bg-gray-800/50 bg-white backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 dark:text-white text-gray-900 flex items-center">
                <Mail className="mr-2 text-purple-500" /> Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:border-transparent transition-all duration-300"
                    placeholder="your@gmail.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center w-full"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
                
                {formStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div 
            ref={socialRef}
            className="w-full lg:w-2/5 opacity-0 transform translate-y-10 transition-all duration-1000"
          >
            <div className="h-full dark:bg-gray-800/50 bg-white backdrop-blur-sm rounded-xl shadow-lg p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-6 dark:text-white text-gray-900">
                Connect With Me
              </h3>
              
              <p className="dark:text-gray-300 text-gray-600 mb-8">
                Feel free to connect with me on social media or check out my work on GitHub.
              </p>
              
              <div className="space-y-6 mt-auto">
                <a 
                  href="https://github.com/Vishwa-2345" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 dark:bg-gray-700/50 bg-gray-100 rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <Github className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium dark:text-white text-gray-900">GitHub</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-600">@Vishwa-2345</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/vishwa-v-bb450b319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 dark:bg-gray-700/50 bg-gray-100 rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Linkedin className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium dark:text-white text-gray-900">LinkedIn</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Vishwa</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:vishwav@karunya.edu.in" 
                  className="flex items-center p-4 dark:bg-gray-700/50 bg-gray-100 rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                    <Mail className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium dark:text-white text-gray-900">Email</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-600">vishwav@karunya.edu.in</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;