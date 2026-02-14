import React, { useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);
  const project = projectsData.find((p) => p.id === pid);

  if (!project) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <button onClick={() => navigate('/#projects')} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm">← Back</button>
          <p className="text-slate-600">Project not found.</p>
        </div>
      </section>
    );
  }

  useEffect(() => {
    // ensure content is scrolled into view below the fixed navbar
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <section className="section-padding pt-24 md:pt-28">
      <div className="container-custom">
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById('projects');
              if (el) {
                const offset = 80;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }, 60);
          }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow">
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-[420px] lg:h-[520px] object-cover" />
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-2xl font-display font-bold mb-3">{project.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>

            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold"
            >
              <SiGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
