import React, { useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { FiArrowLeft, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import {
  HiOutlineLightBulb,
  HiOutlineChip,
  HiOutlinePuzzle,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
  accent?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, children, index, accent = 'emerald' }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="cs-section-card"
  >
    <div className={`cs-section-icon cs-section-icon--${accent}`}>{icon}</div>
    <div className="flex-1 min-w-0">
      <h3 className="cs-section-title">{title}</h3>
      <div className="cs-section-body">{children}</div>
    </div>
  </motion.div>
);

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);
  const project = projectsData.find((p) => p.id === pid);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 60);
  };

  if (!project) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <button onClick={handleBack} className="cs-back-btn">
            <FiArrowLeft /> Back to Projects
          </button>
          <p className="text-slate-600 dark:text-slate-400 mt-6">Project not found.</p>
        </div>
      </section>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="cs-page">
      {/* ── Hero Banner ── */}
      <div className="cs-hero">
        <div className="cs-hero-image-wrap">
          <img src={project.image} alt={project.title} className="cs-hero-image" />
          <div className="cs-hero-overlay" />
        </div>
        <div className="cs-hero-content container-custom">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <button onClick={handleBack} className="cs-back-btn cs-back-btn--hero">
              <FiArrowLeft /> Back to Projects
            </button>
            <div className="cs-hero-badge">Case Study</div>
            <h1 className="cs-hero-title">{project.title}</h1>
            <div className="cs-tech-pills">
              {project.technologies.map((t, i) => (
                <span key={i} className="cs-tech-pill">{t}</span>
              ))}
            </div>
            <div className="cs-hero-actions">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn cs-btn--primary"
              >
                <SiGithub size={16} /> View Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn cs-btn--secondary"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="cs-body">
        <div className="container-custom">

          {/* Overview */}
          <SectionCard
            icon={<HiOutlineDocumentText size={22} />}
            title="Overview"
            index={0}
            accent="emerald"
          >
            <p>{caseStudy.overview}</p>
          </SectionCard>

          {/* Problem & Solution — side by side on large screens */}
          <div className="cs-two-col">
            <SectionCard
              icon={<HiOutlineLightBulb size={22} />}
              title="The Problem"
              index={1}
              accent="amber"
            >
              <p>{caseStudy.problem}</p>
            </SectionCard>

            <SectionCard
              icon={<HiOutlineSparkles size={22} />}
              title="The Solution"
              index={2}
              accent="teal"
            >
              <p>{caseStudy.solution}</p>
            </SectionCard>
          </div>

          {/* Key Features */}
          <SectionCard
            icon={<FiCheckCircle size={22} />}
            title="Key Features"
            index={3}
            accent="emerald"
          >
            <ul className="cs-feature-list">
              {caseStudy.features.map((f, i) => (
                <li key={i} className="cs-feature-item">
                  <span className="cs-feature-dot" />
                  {f}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Architecture */}
          <SectionCard
            icon={<HiOutlineChip size={22} />}
            title="Architecture"
            index={4}
            accent="violet"
          >
            <p>{caseStudy.architecture}</p>
          </SectionCard>

          {/* Tech Details */}
          <SectionCard
            icon={<HiOutlineCode size={22} />}
            title="Tech Stack & Implementation"
            index={5}
            accent="cyan"
          >
            <p>{caseStudy.techDetails}</p>
          </SectionCard>

          {/* Challenges */}
          <SectionCard
            icon={<HiOutlinePuzzle size={22} />}
            title="Challenges & Solutions"
            index={6}
            accent="rose"
          >
            <p>{caseStudy.challenges}</p>
          </SectionCard>

          {/* Outcome */}
          <SectionCard
            icon={<HiOutlineSparkles size={22} />}
            title="Outcome & Impact"
            index={7}
            accent="emerald"
          >
            <p>{caseStudy.outcome}</p>
          </SectionCard>

          {/* Bottom CTA */}
          <motion.div
            custom={8}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="cs-cta-row"
          >
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary cs-btn--lg"
            >
              <SiGithub size={18} /> View Full Code
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn cs-btn--secondary cs-btn--lg"
              >
                <FiExternalLink size={18} /> Live Demo
              </a>
            )}
            <button onClick={handleBack} className="cs-btn cs-btn--ghost cs-btn--lg">
              <FiArrowLeft size={18} /> All Projects
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
