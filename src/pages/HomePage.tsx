import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { certificationsData, educationData } from '../data/experience';
import { engineeringNotesData } from '../data/notes';
import { ProjectCard } from '../components/ProjectCard';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const recentNotes = engineeringNotesData.slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Intro / Header */}
      <section className="space-y-4 pt-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {profileData.name}
        </h1>

        <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400">
          B.Tech CSE Student @ KIIT · Bhubaneswar, India
        </p>

        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
          I am a 2nd-year computer science student focused on Cloud/DevOps infrastructure and machine learning systems. I learn mostly by building projects, configuring Linux servers, and understanding how tools work beneath their abstractions.
        </p>

        {/* Plain Quick Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-1">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            Email ↗
          </a>
          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            Download CV (PDF) ↗
          </a>
        </div>
      </section>

      {/* Currently (Clean & Honest) */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
          Current Focus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed">
          <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-4 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Exploring & Learning</h3>
            <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
              {profileData.currentFocus.learning.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-400 dark:text-zinc-600">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-4 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Building & Testing</h3>
            <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
              {profileData.currentFocus.building.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-400 dark:text-zinc-600">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
            Selected Projects
          </h2>
          <Link
            to="/projects"
            className="text-xs text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            All projects ({projectsData.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Education & Certifications Snapshot */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
            Education & Certifications
          </h2>
          <Link
            to="/experience"
            className="text-xs text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            Full record →
          </Link>
        </div>

        <div className="space-y-3 text-xs leading-relaxed border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-5 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-zinc-100 dark:border-zinc-800/80 pb-2.5">
            <div>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">{educationData.degree}</span>
              <span className="text-zinc-500 dark:text-zinc-400"> — {educationData.institution}</span>
            </div>
            <div className="font-mono text-zinc-600 dark:text-zinc-400 sm:text-right">
              {educationData.period} (CGPA: {educationData.cgpa})
            </div>
          </div>

          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-zinc-100 dark:border-zinc-800/80 last:border-0 pb-2.5 last:pb-0"
            >
              <div>
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">{cert.title}</span>
                <span className="text-zinc-500 dark:text-zinc-400"> — {cert.issuer}</span>
              </div>
              <div className="font-mono text-zinc-600 dark:text-zinc-400 sm:text-right">
                {cert.issueDate}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Notes */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
            Engineering Notes
          </h2>
          <Link
            to="/notes"
            className="text-xs text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            All notes →
          </Link>
        </div>

        <div className="space-y-4">
          {recentNotes.map((note) => (
            <article key={note.id} className="space-y-1 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-4 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-navy dark:hover:text-blue-400 transition-colors">
                  <Link to={`/notes/${note.slug}`} className="hover:underline underline-offset-4">
                    {note.title}
                  </Link>
                </h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">{note.date}</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                {note.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
