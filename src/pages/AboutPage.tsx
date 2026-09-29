import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { communitiesData } from '../data/experience';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <PageHeader
        title="About Me"
        description="Background, academic path, and how I approach systems and infrastructure engineering."
      />

      {/* Main Prose */}
      <section className="space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
        <p>
          I am an undergraduate student in Computer Science & Engineering at Kalinga Institute of Industrial Technology (KIIT) in Bhubaneswar, Odisha. I am currently in my 2nd year (3rd semester), maintaining a CGPA of 8.05/10.
        </p>
        <p>
          My technical work centers on two complementary domains: <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Cloud & DevOps infrastructure</strong> (Linux server administration, Docker, Kubernetes, CI/CD, and networking) and <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">applied Machine Learning</strong> (Transformers, retrieval-augmented generation, parameter-efficient fine-tuning with LoRA/QLoRA, and local quantized inference).
        </p>
        <p>
          I prefer learning by building end-to-end systems rather than following tutorials. When working with containers or clusters, I want to understand what the Linux kernel is doing with cgroups and namespaces under the hood. When implementing RAG, I want to inspect how vector similarity, embedding spaces, and attention matrices interact.
        </p>
      </section>

      {/* Engineering Principles */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 space-y-4 max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
          How I Work
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">1. Experimentation over passive study — </span>
            <span>Real comprehension comes from configuring services from scratch, breaking environments, observing failures, and fixing them. In CloudArena, I built an entire sandbox specifically to inject and remediate Kubernetes failure scenarios.</span>
          </div>
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">2. Respect the lower layers — </span>
            <span>Frameworks come and go, but operating system fundamentals, networking protocols, and basic data structures remain. Knowing how ports, processes, and memory allocators behave makes high-level debugging significantly faster.</span>
          </div>
          <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">3. Honest engineering & testing — </span>
            <span>I believe in writing verifiable code. During Smart India Hackathon for our project TAARAK, I wrote an offline-first SQLite synchronization engine backed by 440 automated tests. If a feature or project is in progress, I document it as in progress.</span>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 space-y-4 max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100">
          Technical Communities
        </h2>
        <div className="space-y-3 text-xs leading-relaxed">
          {communitiesData.map((comm) => (
            <div key={comm.id} className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-serif text-sm font-medium text-zinc-900 dark:text-zinc-100">{comm.organization}</span>
                <span className="font-mono text-zinc-500 dark:text-zinc-400">{comm.period}</span>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">{comm.role}</div>
              <p className="text-zinc-600 dark:text-zinc-400 pt-1 leading-relaxed">{comm.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8 flex items-center justify-between text-xs font-mono">
        <Link
          to="/projects"
          className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
        >
          View Projects →
        </Link>
        <Link
          to="/contact"
          className="text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-white"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
};
