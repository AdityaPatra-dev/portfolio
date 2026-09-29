import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ProjectMockup } from '../components/ProjectMockup';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="space-y-10">
      {/* Back link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Visual Mockup Header */}
      <div className="rounded-lg overflow-hidden border border-dashed border-zinc-200 dark:border-zinc-800 shadow-sm">
        <ProjectMockup projectId={project.id} />
      </div>

      {/* Title & Metadata */}
      <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-6 space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="capitalize">{project.category.replace('_', ' / ')}</span>
          <span className="px-2 py-0.5 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50">
            {project.status === 'in_progress' ? 'Status: In Progress' : (project.period || 'Status: Completed')}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-zinc-900 dark:text-zinc-50 font-normal">
          {project.title}
        </h1>

        <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400">
          {project.tagline}
        </p>

        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
          {project.summary}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
            >
              <span>Live Deployment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Technologies */}
      <section className="space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
          Stack & Technologies
        </h2>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded border border-dotted border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/70 dark:bg-zinc-900/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 space-y-4">
        <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
          Problem & Implementation
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono text-xs block mb-1">
              THE PROBLEM
            </span>
            <span>{project.problem}</span>
          </div>
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono text-xs block mb-1">
              THE SOLUTION
            </span>
            <span>{project.solution}</span>
          </div>
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono text-xs block mb-1">
              MY ENGINEERING ROLE
            </span>
            <span>{project.myRole}</span>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      {project.architectureFlow && project.architectureFlow.length > 0 && (
        <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
            System Architecture
          </h2>
          <div className="space-y-2 text-xs">
            {project.architectureFlow.map((step, idx) => (
              <div
                key={idx}
                className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <span className="font-mono text-zinc-400 dark:text-zinc-500 mr-2">[{idx + 1}]</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{step.title}</span>
                  <span className="text-zinc-400 dark:text-zinc-600 mx-1.5">—</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{step.description}</span>
                </div>
                {step.badge && (
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 shrink-0 self-start sm:self-center border border-dotted border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 px-2 py-0.5 rounded">
                    {step.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Engineering Decisions */}
      {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
        <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
            Engineering Decisions
          </h2>
          <div className="space-y-3 text-xs leading-relaxed">
            {project.engineeringDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg space-y-1"
              >
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono text-xs">
                  {decision.title}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenges & Break-Fix Logs */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
            What Broke & How It Was Resolved
          </h2>
          <div className="space-y-3 text-xs leading-relaxed">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-navy dark:border-blue-400 pl-4 py-2 border-y border-r border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 rounded-r-lg space-y-1"
              >
                <div className="text-zinc-800 dark:text-zinc-200">
                  <strong className="text-zinc-900 dark:text-zinc-100 font-semibold font-mono text-xs block mb-0.5">
                    SYMPTOM / CHALLENGE
                  </strong>
                  {item.challenge}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 pt-1">
                  <strong className="text-zinc-800 dark:text-zinc-300 font-medium font-mono text-xs block mb-0.5">
                    RESOLUTION
                  </strong>
                  {item.resolution}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What Was Learned */}
      {project.whatILearned && project.whatILearned.length > 0 && (
        <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
            Key Learnings
          </h2>
          <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.whatILearned.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-zinc-400 dark:text-zinc-600 font-mono">—</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Bottom Nav */}
      <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 flex items-center justify-between text-xs font-mono">
        <Link
          to="/projects"
          className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 inline-flex items-center gap-1 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-blue-400 inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
          </a>
        )}
      </div>
    </div>
  );
};
