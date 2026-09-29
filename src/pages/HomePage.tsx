import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { certificationsData, educationData } from '../data/experience';
import { engineeringNotesData } from '../data/notes';
import { BannerAnimation } from '../components/BannerAnimation';
import { TypewriterText } from '../components/TypewriterText';
import { ProjectCard } from '../components/ProjectCard';
import { GithubHeatmap } from '../components/GithubHeatmap';
import { LiveStatus } from '../components/LiveStatus';
import { ContactTile } from '../components/ContactTile';
import { GithubIcon, LinkedinIcon } from '../components/icons';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const recentNotes = engineeringNotesData.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section with Banner & Avatar */}
      <section className="space-y-4">
        {/* Banner with continuous moving animation canvas */}
        <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden border border-dashed border-zinc-200 dark:border-zinc-800 bg-gradient-to-tr from-[#090d16] via-[#0f172a] to-[#0d1527] shadow-inner">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Continuous interactive moving animation canvas */}
          <BannerAnimation />

          {/* Subtle decorative telemetry tag */}
          <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5 z-10 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>systems-mesh // active nodes</span>
          </div>
        </div>

        {/* Profile Avatar & Header Row */}
        <div className="flex items-end justify-between px-1 -mt-12 sm:-mt-14 relative z-10 mb-2">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 border-[#fbfbf9] dark:border-[#121316] bg-gradient-to-tr from-zinc-900 to-zinc-800 shadow-sm flex items-center justify-center text-white overflow-hidden group">
              <span className="font-serif text-3xl sm:text-4xl text-zinc-100 font-normal tracking-tight">
                AP
              </span>
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Live active green indicator on avatar */}
            <span
              className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#121316]"
              title="Active & Available"
            />
          </div>

          <div className="text-right pb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-dashed border-zinc-300 dark:border-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Summer '26 Roles
            </span>
          </div>
        </div>

        {/* Name, Title & Bio */}
        <div className="space-y-3 pt-1">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-zinc-900 dark:text-zinc-50 font-normal">
              {profileData.name}
            </h1>
            <div className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1 flex flex-wrap items-center gap-1.5 min-h-[22px]">
              <span>B.Tech CSE @ KIIT</span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <TypewriterText
                phrases={[
                  'Cloud & Infrastructure',
                  'DevOps & Kubernetes',
                  'Machine Learning Systems',
                  'Linux & Chaos Engineering',
                  'RAG & LLM Workflows'
                ]}
                className="text-navy dark:text-blue-400 font-medium"
              />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
            {profileData.shortBio}
          </p>
        </div>

        {/* Real-time Status & Clock */}
        <div className="pt-2">
          <LiveStatus />
        </div>

        {/* Social / Contact Grid (Dashed micro-interaction tiles like Samworks) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <ContactTile
            label="GitHub"
            sublabel={`@${profileData.githubUsername}`}
            href={profileData.githubUrl}
            icon={<GithubIcon className="w-4 h-4" />}
          />
          <ContactTile
            label="LinkedIn"
            sublabel="in/aditya-patra"
            href={profileData.linkedinUrl}
            icon={<LinkedinIcon className="w-4 h-4" />}
          />
          <ContactTile
            label="Email"
            sublabel="Direct Message"
            href={`mailto:${profileData.email}`}
            icon={<Mail className="w-4 h-4" />}
          />
          <ContactTile
            label="Resume / CV"
            sublabel="PDF Document"
            href={profileData.resumePdfUrl}
            icon={<FileText className="w-4 h-4" />}
          />
        </div>
      </section>

      {/* GitHub Contribution Heatmap */}
      <section className="space-y-3">
        <GithubHeatmap />
      </section>

      {/* Current Focus (Clean & Honest) */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
            Current Focus
          </h2>
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
            Fall 2026 / 3rd Sem
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-blue-500" />
              Exploring & Learning
            </h3>
            <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
              {profileData.currentFocus.learning.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-400 dark:text-zinc-600">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Building & Testing
            </h3>
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

      {/* Featured Projects with Visual Mockups */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 space-y-6">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-zinc-900 dark:text-zinc-100">
              Featured Work
            </h2>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              Systems built with Kubernetes, PyTorch, and offline-first storage
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono inline-flex items-center gap-1"
          >
            <span>All projects ({projectsData.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Education & Certifications Snapshot */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-zinc-900 dark:text-zinc-100">
              Education & Certifications
            </h2>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              Academic degree & verified professional credentials
            </p>
          </div>
          <Link
            to="/experience"
            className="text-xs text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono inline-flex items-center gap-1"
          >
            <span>Full credentials</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3 text-xs leading-relaxed border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-5 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-dashed border-zinc-100 dark:border-zinc-800/80 pb-3">
            <div>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium font-serif text-sm">
                {educationData.degree}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400"> — {educationData.institution}</span>
            </div>
            <div className="font-mono text-zinc-600 dark:text-zinc-400 sm:text-right">
              {educationData.period} (CGPA: {educationData.cgpa})
            </div>
          </div>

          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-dashed border-zinc-100 dark:border-zinc-800/80 last:border-0 pb-3 last:pb-0"
            >
              <div>
                <span className="text-zinc-900 dark:text-zinc-100 font-medium font-serif text-sm">
                  {cert.title}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400"> — {cert.issuer}</span>
              </div>
              <div className="font-mono text-zinc-600 dark:text-zinc-400 sm:text-right">
                {cert.issueDate}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Notes */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-zinc-900 dark:text-zinc-100">
              Engineering Notes
            </h2>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              Technical breakdowns of Kubernetes, Linux, and LLM implementations
            </p>
          </div>
          <Link
            to="/notes"
            className="text-xs text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-mono inline-flex items-center gap-1"
          >
            <span>All notes</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {recentNotes.map((note) => (
            <article
              key={note.id}
              className="group border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 hover:bg-white dark:hover:bg-[#18191e] p-4 rounded-lg transition-all"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
                  <Link to={`/notes/${note.slug}`} className="flex items-center gap-1.5">
                    <span>{note.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-navy dark:text-blue-400" />
                  </Link>
                </h3>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                  {note.date}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mt-1">
                {note.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
