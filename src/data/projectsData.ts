import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/Project-3.png';
import project4Img from '../assets/project4.png';

export interface CaseStudySection {
  heading: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeLink: string;
  liveLink?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    architecture: string;
    techDetails: string;
    challenges: string;
    outcome: string;
    sections?: CaseStudySection[];
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Student Stress Detection System',
    description: 'An AI-driven system designed to detect student stress levels using forum activity analysis and real-time facial emotion recognition. The platform analyzes behavioral patterns to provide early insights into student wellbeing. This project was developed during a hackathon and won recognition at a Google & GeeksforGeeks event conducted at the college level.',
    image: project1Img,
    technologies: ['React', 'FastAPI', 'MongoDB', 'Machine Learning', 'OpenCV'],
    codeLink: 'https://github.com/Vishwa-2345/stress-detecting',
    caseStudy: {
      overview:
        'The AI-Powered Student Stress Detection System is a real-time, multi-modal platform that monitors student wellbeing by combining facial emotion recognition with behavioral text analysis from discussion forums. Built and presented during a hackathon, it earned recognition at a Google & GeeksforGeeks college-level event.',
      problem:
        'Student mental health is a growing concern in academic institutions, yet early stress signals often go unnoticed until they escalate. Traditional self-reporting tools are limited by stigma and low engagement. There was a clear need for a passive, non-intrusive system that could flag stress indicators early and allow counselors to intervene proactively.',
      solution:
        'We built a dual-channel AI system: (1) a real-time webcam feed processed by an OpenCV + deep learning pipeline to classify facial emotions (stressed, neutral, calm, anxious), and (2) a natural language processing module that analyzes student forum posts for linguistic stress markers such as negative sentiment, urgency, and distress keywords. Both signals are fused into a unified stress score per student, surfaced on an admin dashboard.',
      features: [
        'Real-time facial emotion recognition via webcam using OpenCV and a pre-trained CNN model',
        'Forum activity analysis with NLP-based sentiment scoring and stress-keyword detection',
        'Dual-channel stress score fusion for holistic student wellbeing assessment',
        'Admin dashboard with per-student stress trend visualizations and historical data',
        'Alert system to flag students who exceed configurable stress thresholds',
        'Secure REST API built with FastAPI for fast async data processing',
        'MongoDB for flexible storage of emotion logs and forum activity records',
        'React-based frontend with responsive design for use on any device',
      ],
      architecture:
        'The system follows a microservices-inspired architecture. The React frontend captures webcam frames at regular intervals and sends them to the FastAPI backend over a REST endpoint. The backend runs inference using an OpenCV + Keras model and returns emotion labels with confidence scores. In parallel, a text analysis service processes forum posts using a lightweight NLP pipeline (tokenization, stopword removal, sentiment scoring). Both outputs feed into a stress aggregation service that computes a combined stress index stored in MongoDB. The admin dashboard polls aggregated scores and renders charts and alerts.',
      techDetails:
        'Frontend: React with real-time webcam integration via the MediaDevices API and Axios for API communication. Backend: FastAPI (Python) for high-throughput async endpoints. ML: OpenCV for frame capture and preprocessing; a CNN trained on FER-2013 for emotion classification; scikit-learn and NLTK for text feature extraction and sentiment analysis. Database: MongoDB (Atlas) for schema-flexible document storage. Deployment: Uvicorn ASGI server; containerization-ready setup.',
      challenges:
        'The key challenge was achieving low-latency emotion inference on consumer hardware. We optimized the model to MobileNet-V2 for speed without significant accuracy loss. Fusing two heterogeneous signal types (image embeddings vs. text sentiment scores) required careful normalization and weighting. Ensuring privacy was critical — we implemented frame-only processing with no image persistence, and forum analysis was performed on anonymized posts.',
      outcome:
        'The project won recognition at the Google & GeeksforGeeks hackathon held at our college. Judges praised the dual-modal approach and the actionable dashboard interface. The system demonstrated an average emotion detection latency of under 300 ms and a text analysis throughput of 500+ posts per minute in benchmarks.',
    },
  },
  {
    id: 2,
    title: 'AI Mentor Platform',
    description: 'A full-stack AI-powered mentoring platform that provides personalized career guidance, resume analysis, learning path recommendations, and interview preparation support. Built with secure authentication and a scalable architecture, the platform delivers an interactive and intelligent user experience tailored to individual goals.',
    image: project2Img,
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    codeLink: 'https://github.com/JoysonStanly/new-ai-mentor',
    caseStudy: {
      overview:
        'AI Mentor Platform is a comprehensive, full-stack mentoring solution that leverages AI to provide personalized career guidance, resume analysis, customized learning paths, and interview preparation — all within a secure, modern web application.',
      problem:
        'Students and early-career professionals often lack access to quality mentorship and personalized career advice. Generic resources don\'t account for individual skills, goals, or gaps. Building a platform that delivers truly tailored, AI-driven guidance at scale — while remaining secure and easy to use — was the core challenge.',
      solution:
        'We designed a full-stack platform where users build a profile (skills, interests, career goals) and interact with an AI mentor chatbot. The AI tailors its responses to the user\'s context — giving career advice, analyzing uploaded resumes, suggesting learning paths, and simulating mock interview scenarios. A secure JWT-based authentication system protects all personalized data.',
      features: [
        'AI mentor chatbot for personalized career guidance conversations',
        'Resume upload and analysis with professional feedback and improvement suggestions',
        'Resume builder with guided, step-by-step assistance',
        'Customized learning path recommendations based on career goals and skill gaps',
        'Interview preparation with mock Q&A simulation',
        'Secure authentication: JWT tokens, protected routes, and persistent sessions',
        'Light/dark mode toggle for accessibility',
        'Fully responsive UI for desktop and mobile',
        'RESTful API with Express.js and MongoDB for scalable data persistence',
      ],
      architecture:
        'A classic client-server architecture: the React (TypeScript) SPA communicates with an Express.js REST API over JSON. The backend handles authentication (JWT issuance and verification via middleware), stores user profiles and chat history in MongoDB (Mongoose ODM), and routes AI prompt requests. The AI layer processes user messages and profile context to generate relevant, personalized responses. Static assets and the frontend build are served separately via Vite.',
      techDetails:
        'Frontend: React 18 with TypeScript, Tailwind CSS for styling, Framer Motion for animations, and React Router for client-side navigation. Backend: Node.js with Express.js, MongoDB with Mongoose for data modeling, JWT (jsonwebtoken + bcrypt) for secure auth. Build: Vite for fast HMR and optimized production bundles. API: RESTful design with dedicated routes for auth, user profile, chat, resume, and learning paths.',
      challenges:
        'Maintaining conversational context across AI interactions while keeping API calls efficient required implementing session-scoped message history passed with each request. Resume parsing was tackled by accepting PDF uploads, extracting text server-side, and feeding structured content to the AI. Balancing the depth of personalization against response latency required prompt engineering and streaming response techniques.',
      outcome:
        'The platform successfully delivers a cohesive mentoring experience with feature-complete authentication, resume tooling, and AI-guided career support. The modular architecture makes it straightforward to extend with new mentoring modules or integrate upgraded AI models. Detailed documentation covers API contracts, auth flow, database schema, and development setup.',
    },
  },
  {
    id: 3,
    title: 'ATOM Club Platform',
    description: 'A fully deployed, production-ready web platform built for ATOM Club, featuring a modern public website and a secure admin CMS. The system allows dynamic event management, gallery updates, coordinator profiles, and sub-club showcases with full CRUD functionality and image uploads. Designed with responsive UI, smooth animations, and optimized performance, it delivers a scalable and professional digital presence for the club.',
    image: project3Img,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
    codeLink: 'https://github.com/dot-Dev-Club/Atom_Standalone',
    liveLink: 'https://atom-2026.web.app',
    caseStudy: {
      overview:
        'ATOM Club Platform is a production-deployed, full-featured web presence for the Association of Technology Oriented Minds at Karunya Institute of Technology and Sciences. It combines a polished public-facing website with a secure Content Management System (CMS) that lets club admins manage all content without touching the codebase.',
      problem:
        'ATOM Club needed a professional digital home that non-technical club members could update independently. Manual HTML edits were error-prone and required developer involvement for every content change — event posters, coordinator lists, gallery photos, and sub-club descriptions. The solution needed to be fast, visually impressive, and maintainable by students.',
      solution:
        'We built a React SPA on Firebase Hosting with Firestore as the backend database and Firebase Auth for admin access control. The public site renders all content dynamically from Firestore, falling back to bundled constants when offline. Admins log in at `/admin` using Firebase Auth accounts with a custom `admin` claim — no credentials are hard-coded anywhere.',
      features: [
        'Public website: event listings, coordinator profiles, gallery, and sub-club showcases',
        'Admin CMS at /admin for events, gallery images, coordinators, and club management',
        'Full CRUD operations with real-time Firestore sync — no page reload required',
        'Image uploads with Firebase Storage integration',
        'Time-window-based event registration with validation',
        'Smooth animations via Framer Motion, GSAP, and OGL (3-D canvas effects)',
        'TanStack Query for efficient data fetching, caching, and background refetching',
        'Zod schema validation for all Firestore writes',
        'Fully responsive — mobile-first design with Tailwind CSS and shadcn/ui (Radix)',
        'Firebase Hosting CDN for fast global delivery',
        'Vitest + Testing Library test suite with strict TypeScript (tsc --noEmit)',
      ],
      architecture:
        'Single-page React application hosted on Firebase Hosting. All reads and writes go through a `dataService` abstraction layer backed by Firestore, which makes it easy to swap the data source. `TanStack Query` manages server state, providing automatic caching and stale-while-revalidate patterns. `AuthContext` wraps Firebase Auth, exposing login state and admin status to the whole tree. Firestore Security Rules enforce that only authenticated admin users can write; all reads are public. Environment variables (via `.env`) hold Firebase project credentials — never committed to source.',
      techDetails:
        'Stack: TypeScript 5.8 (strict), React 18, React Router 6, Vite 5 (SWC), Tailwind 3, shadcn/ui (Radix), Framer Motion, GSAP, OGL, TanStack Query, Zod, Vitest, Testing Library, Firebase (Firestore + Auth + Hosting). CI: GitHub Actions enforces `typecheck` and `test` on every PR. Deployment: `npm run build && npx firebase deploy --only hosting`; Firestore rules deploy separately.',
      challenges:
        'Ensuring zero credentials in the client bundle required migrating away from an earlier design that embedded a hardcoded admin password. We implemented proper Firebase Auth custom claims (`admin: true`) and enforced server-side Firestore rules. Making the site work without Firebase configured (content fallback to bundled constants) needed careful conditional logic in the data service to avoid runtime errors when env vars are absent.',
      outcome:
        'The platform is live at https://atom-2026.web.app and actively used by ATOM Club. Admins can independently update all content through the CMS. The codebase follows strict contributor conventions documented in CLAUDE.md, with a living bug log (FIXES.md) and status tracker (STATUS.md) to maintain long-term quality.',
    },
  },
  {
    id: 4,
    title: 'Club Attendance Management System',
    description: 'A full-stack multi-club attendance management platform with role-based dashboards for admins and tutors. It supports session creation, time-window-based attendance marking, student management, performance analytics, and automated Google Sheets synchronization for structured reporting and data reliability.',
    image: project4Img,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Google Sheets API'],
    codeLink: 'https://github.com/dot-Dev-Club/Club-Attendance',
    caseStudy: {
      overview:
        'Club Attendance Management System is a production-grade, full-stack web application that centralizes attendance tracking for multiple clubs at Karunya Institute of Technology and Sciences. It provides role-scoped dashboards, automated Google Sheets reporting, and a rich analytics layer — eliminating manual spreadsheet management entirely.',
      problem:
        'Managing attendance across multiple clubs (DotDev, Unbiased Club, etc.) was done through scattered spreadsheets with no access control, no analytics, and constant risk of data inconsistency. Tutors and admins needed a single, role-aware platform where data for one club could never bleed into another, and where Google Sheets remained the source of truth for administration and audit.',
      solution:
        'We built a React + TypeScript frontend backed by a FastAPI + SQLAlchemy REST API with SQLite as the operational database. Each club\'s data is strictly isolated. Google Sheets integration auto-syncs sessions, students, and attendance records to per-club spreadsheets using gspread (service account or OAuth2). A time-window system ensures attendance can only be marked within 2 hours of a session start, preventing retroactive edits.',
      features: [
        'Role-based access: Admins and Tutors with per-club data isolation enforced server-side',
        'Session management: create, edit, delete — auto-synced to Google Sheets on every change',
        'Student management: add, edit, remove — roster synced to a dedicated Students spreadsheet',
        'Time-window attendance marking (2-hour window): Present / Late / Absent per student per session',
        'Explicit "Save to Sheet" button for attendance — controlled sync after bulk marking',
        'Google Sheets structure: yearly worksheets for sessions, weekly attendance tabs, flat student roster',
        'Analytics dashboard: attendance rate charts, session history, student performance trends',
        'Per-session and per-student attendance history views',
        'Full dark/light mode with Tailwind CSS and Framer Motion animations',
        'Fully responsive — desktop and mobile',
        'Service account and OAuth2 auth paths for Google Sheets API',
      ],
      architecture:
        'The frontend (React 18 + TypeScript + Vite) communicates with a FastAPI backend over a REST API. All business logic lives in the backend: `crud.py` handles database operations via SQLAlchemy, `sheets.py` owns the Google Sheets sync logic, and `schemas.py` (Pydantic) validates all request and response bodies. The database layer uses SQLite by default (swappable via `DATABASE_URL`). Google Sheets sync is triggered on CUD operations and on explicit save actions — never on reads — to minimize API quota usage. The seed script (`seed.py`) provisions clubs and default users so the app is ready to use immediately.',
      techDetails:
        'Frontend: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Recharts (dashboard charts), Lucide React (icons). Backend: FastAPI, SQLAlchemy (ORM), SQLite (default DB), Pydantic (validation), Passlib + bcrypt (password hashing), gspread (Google Sheets), google-auth (OAuth2). Sheets auth supports both a Service Account JSON key and an interactive OAuth2 flow via `/sheets/oauth/start`. Environment variables control the DB URL, CORS origin, and all Google auth file paths.',
      challenges:
        'Achieving per-club data isolation without a multi-tenant database required careful foreign-key design and server-side club-scoped query filters on every endpoint. Google Sheets quota limits (100 req/100 s) required batching writes and deferring non-critical syncs. The OAuth2 flow for Sheets needed a redirect URI that worked both locally and in deployed environments, solved via a configurable `OAUTH_REDIRECT_URI` env var.',
      outcome:
        'The system is in active use by DotDev and Unbiased Club at Karunya. Attendance data for every session is automatically available in structured Google Sheets within seconds of being saved. Admins reported a significant reduction in administrative overhead and data errors compared to the previous manual process.',
    },
  },
];