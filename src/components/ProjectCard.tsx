import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { GithubIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/60 hover:bg-white dark:hover:bg-[#18191e] rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between group">
      {/* Top Visual Preview / Mockup */}
      <Link to={`/projects/${project.id}`} className="block relative overflow-hidden">
        <ProjectMockup
          projectId={project.id}
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Header & Status */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-serif tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
              <Link to={`/projects/${project.id}`} className="flex items-center gap-1.5">
                <span>{project.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-navy dark:text-blue-400" />
              </Link>
            </h3>

            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-dashed border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
              {project.status === 'in_progress' ? '• In Progress' : '• Verified'}
            </span>
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed line-clamp-1">
            {project.tagline}
          </p>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Tech Pills (Dotted Borders like Samworks) */}
        <div className="pt-3 border-t border-dashed border-zinc-100 dark:border-zinc-800/80 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-dotted border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50/80 dark:bg-zinc-900/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400 dark:text-zinc-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between text-xs pt-1">
            <Link
              to={`/projects/${project.id}`}
              className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono text-[11px] underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
            >
              Architecture & Details →
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-navy dark:hover:text-blue-400 transition-colors font-mono text-[11px]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
