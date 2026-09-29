import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { educationData, certificationsData, communitiesData } from '../data/experience';
import { profileData } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Experience & Education"
        description="Formal computer science education at KIIT, verified certifications, hackathons, and student technical communities."
      />

      {/* CV Download Link */}
      <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-4 rounded-lg flex items-center justify-between text-xs transition-colors">
        <div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-serif text-sm">Curriculum Vitae</span>
          <span className="text-zinc-400 dark:text-zinc-600 mx-2">·</span>
          <span className="text-zinc-600 dark:text-zinc-400">Single-page printable PDF</span>
        </div>
        <a
          href={profileData.resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
        >
          <span>Download PDF</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
        </a>
      </div>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-2">
          Formal Education
        </h2>

        <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-5 rounded-lg space-y-2 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-base font-serif font-medium text-zinc-900 dark:text-zinc-100">
              {educationData.institution}
            </h3>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {educationData.period} · {educationData.location}
            </span>
          </div>

          <div className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
            {educationData.degree} · Current: {educationData.stage} · CGPA: {educationData.cgpa}
          </div>

          <div className="pt-2 text-xs text-zinc-600 dark:text-zinc-400 space-y-1 border-t border-dashed border-zinc-100 dark:border-zinc-800/80">
            <span className="font-mono text-zinc-700 dark:text-zinc-300">Relevant Coursework: </span>
            <span>{educationData.coursework.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4 border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6">
        <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-2">
          Certifications
        </h2>

        <div className="space-y-4 text-xs">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-5 rounded-lg space-y-1.5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-serif font-medium text-zinc-900 dark:text-zinc-100">
                  {cert.title}
                </h3>
                <span className="font-mono text-zinc-500 dark:text-zinc-400">
                  {cert.issuer} · {cert.issueDate}
                </span>
              </div>

              {cert.credentialId && (
                <div className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                  Credential ID: {cert.credentialId}
                </div>
              )}

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                {cert.description}
              </p>

              <div className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] pt-1">
                Skills covered: {cert.skillsCovered.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Communities & Hackathons */}
      <section className="space-y-4 border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6">
        <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-2">
          Communities & Hackathons
        </h2>

        <div className="space-y-4 text-xs">
          {communitiesData.map((comm) => (
            <div key={comm.id} className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-5 rounded-lg space-y-1.5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-serif font-medium text-zinc-900 dark:text-zinc-100">
                  {comm.organization}
                </h3>
                <span className="font-mono text-zinc-500 dark:text-zinc-400">
                  {comm.period}
                </span>
              </div>

              <div className="font-mono text-zinc-700 dark:text-zinc-300">
                {comm.role}
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                {comm.description}
              </p>

              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 pt-1">
                {comm.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-zinc-400 dark:text-zinc-600 font-mono">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
