import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/Project-3.png';
import project4Img from '../assets/Project4.png';
export const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Student Stress Detection System',
    description: 'An AI-driven system designed to detect student stress levels using forum activity analysis and real-time facial emotion recognition. The platform analyzes behavioral patterns to provide early insights into student wellbeing. This project was developed during a hackathon and won recognition at a Google & GeeksforGeeks event conducted at the college level.',
    image: project1Img,
    technologies: ['React', 'FastAPI', 'MongoDB', 'Machine Learning','OpenCV'],
    codeLink: 'https://github.com/Vishwa-2345/stress-detecting'
  },
  {
    id: 2,
    title: 'AI Mentor Platform',
    description: 'A full-stack AI-powered mentoring platform that provides personalized career guidance, resume analysis, learning path recommendations, and interview preparation support. Built with secure authentication and a scalable architecture, the platform delivers an interactive and intelligent user experience tailored to individual goals.',
    image: project2Img,
    technologies: ['React', 'TypeScript','Node.js','MongoDB','JWT', 'Tailwind CSS'],
    codeLink: 'https://github.com/JoysonStanly/new-ai-mentor'
  },
  {
    id: 3,
    title: 'ATOM Club Platform',
    description: 'A fully deployed, production-ready web platform built for ATOM Club, featuring a modern public website and a secure admin CMS. The system allows dynamic event management, gallery updates, coordinator profiles, and sub-club showcases with full CRUD functionality and image uploads. Designed with responsive UI, smooth animations, and optimized performance, it delivers a scalable and professional digital presence for the club.',
    image: project3Img,
    technologies: ['React','TypeScript','Tailwind CSS','Framer Motion','Firebase'],
    codeLink: 'https://github.com/dot-Dev-Club/Atom_Standalone'
  },
  {
    id: 4,
    title: 'Club Attendance Management System',
    description: 'A full-stack multi-club attendance management platform with role-based dashboards for admins and tutors. It supports session creation, time-window-based attendance marking, student management, performance analytics, and automated Google Sheets synchronization for structured reporting and data reliability.',
    image: project4Img,
    technologies: ['React','TypeScript','Tailwind CSS','FastAPI','SQLAlchemy','SQLite','Google Sheets API'],
    codeLink: 'https://github.com/dot-Dev-Club/Club-Attendance'
  }
];