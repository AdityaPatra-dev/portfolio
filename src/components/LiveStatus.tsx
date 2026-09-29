import React, { useState, useEffect } from 'react';

export const LiveStatus: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata timezone (Bhubaneswar, Odisha, India)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 px-4 rounded-lg bg-zinc-50/70 dark:bg-zinc-900/60 border border-dashed border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
      {/* Real-time local clock */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium text-zinc-800 dark:text-zinc-200">Bhubaneswar, IN</span>
        <span className="text-zinc-400 dark:text-zinc-600">•</span>
        <span>{timeString || 'Loading...'} IST</span>
      </div>

      {/* Live availability status */}
      <div className="flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-navy dark:bg-blue-400"></span>
        <span className="text-zinc-700 dark:text-zinc-300">
          Available for Summer '26 Internships
        </span>
      </div>
    </div>
  );
};
