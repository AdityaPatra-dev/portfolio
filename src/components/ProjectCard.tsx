import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] rounded p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-navy dark:hover:text-blue-400 transition-colors">
            <Link to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h3>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {project.status === 'in_progress' ? 'In Progress' : (project.period || 'Completed')}
          </span>
        </div>

        <p className="text-xs text-zinc-700 dark:text-zinc-300 font-mono leading-relaxed">
          {project.tagline}
        </p>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {project.summary}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
        <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
          {project.technologies.join(' · ')}
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <Link
            to={`/projects/${project.id}`}
            className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-medium underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
          >
            Technical details →
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-blue-400 transition-colors font-mono text-xs"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
