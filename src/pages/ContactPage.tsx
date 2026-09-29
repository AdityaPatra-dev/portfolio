import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { profileData } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name || 'Anonymous'} (${formData.email || 'Not provided'})\n\n${formData.message}`
  )}`;

  return (
    <div className="space-y-10 max-w-2xl">
      <PageHeader
        title="Contact"
        description="Feel free to reach out regarding technical internships, collaborative projects, or discussions around Cloud/DevOps and ML."
      />

      <div className="space-y-6 text-sm">
        {/* Direct Channels */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
            Direct Channels
          </h2>

          <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-5 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none space-y-2 text-xs font-mono transition-colors">
            <div className="flex items-baseline justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/80 pb-2">
              <span className="text-zinc-500 dark:text-zinc-400">Email:</span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 font-sans text-sm"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={() => copyText(profileData.email, 'email')}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  {copied === 'email' ? '[copied]' : '[copy]'}
                </button>
              </div>
            </div>

            <div className="flex items-baseline justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/80 pb-2">
              <span className="text-zinc-500 dark:text-zinc-400">Phone:</span>
              <div className="flex items-center gap-3">
                <span className="text-zinc-800 dark:text-zinc-200">{profileData.phone}</span>
                <button
                  onClick={() => copyText(profileData.phone, 'phone')}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  {copied === 'phone' ? '[copied]' : '[copy]'}
                </button>
              </div>
            </div>

            <div className="flex items-baseline justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/80 pb-2">
              <span className="text-zinc-500 dark:text-zinc-400">GitHub:</span>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 inline-flex items-center gap-1 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400"
              >
                <span>{profileData.githubUsername}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
              </a>
            </div>

            <div className="flex items-baseline justify-between py-1">
              <span className="text-zinc-500 dark:text-zinc-400">LinkedIn:</span>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 inline-flex items-center gap-1 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400"
              >
                <span>Aditya Patra</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Composer */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
            Send an Email Message
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Fill in the details below to compose directly in your mail client:
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-5 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none space-y-3 text-xs transition-colors">
            <div>
              <label htmlFor="name" className="block text-zinc-600 dark:text-zinc-400 font-mono mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[#fbfbf9] dark:bg-[#121316] border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-navy dark:focus:border-blue-400 focus:bg-white dark:focus:bg-[#18191e]"
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-zinc-600 dark:text-zinc-400 font-mono mb-1">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[#fbfbf9] dark:bg-[#121316] border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-navy dark:focus:border-blue-400 focus:bg-white dark:focus:bg-[#18191e]"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-zinc-600 dark:text-zinc-400 font-mono mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[#fbfbf9] dark:bg-[#121316] border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-navy dark:focus:border-blue-400 focus:bg-white dark:focus:bg-[#18191e]"
                placeholder="Topic / Role / Project"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-zinc-600 dark:text-zinc-400 font-mono mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[#fbfbf9] dark:bg-[#121316] border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-navy dark:focus:border-blue-400 focus:bg-white dark:focus:bg-[#18191e]"
                placeholder="Write your message here..."
              />
            </div>

            <div className="pt-2">
              <a
                href={mailtoUrl}
                className="inline-block px-4 py-2 rounded bg-navy dark:bg-blue-600 hover:bg-navy-hover dark:hover:bg-blue-500 text-white font-mono text-xs transition-colors shadow-sm"
              >
                Open in Email Client →
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
