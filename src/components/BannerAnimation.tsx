import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulseOffset: number;
}

interface PulsePacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export const BannerAnimation: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.parentElement?.clientWidth || 700;
    let height = canvas.parentElement?.clientHeight || 180;
    canvas.width = width;
    canvas.height = height;

    const colors = ['#60a5fa', '#38bdf8', '#818cf8', '#34d399', '#93c5fd'];
    let particles: Particle[] = [];

    const initParticles = () => {
      const count = Math.max(16, Math.min(Math.floor(width / 22), 34));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * (width - 20) + 10,
          y: Math.random() * (height - 20) + 10,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 1.8 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Use ResizeObserver for accurate, reliable responsive updates
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = Math.floor(entry.contentRect.width);
        const newHeight = Math.floor(entry.contentRect.height);
        if (newWidth > 0 && newHeight > 0) {
          width = canvas.width = newWidth;
          height = canvas.height = newHeight;
          if (particles.length === 0) {
            initParticles();
          } else {
            // Keep existing particles inside bounds
            particles.forEach((p) => {
              p.x = Math.max(10, Math.min(width - 10, p.x));
              p.y = Math.max(10, Math.min(height - 10, p.y));
            });
          }
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const pulses: PulsePacket[] = [];
    let lastPulseSpawn = Date.now();

    // Mouse tracking for subtle interactive magnetism
    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let step = 0;
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      try {
        step += 0.02;
        if (step > 10000) step = 0; // Prevent float overflow

        ctx.clearRect(0, 0, width, height);

        // 1. Draw animated flowing undulating sine waves across the banner
        ctx.save();
        for (let wave = 0; wave < 3; wave++) {
          ctx.beginPath();
          const yOffset = height * 0.45 + wave * 16;
          const alpha = 0.10 + wave * 0.04;
          ctx.strokeStyle =
            wave === 0
              ? `rgba(96, 165, 250, ${alpha})`
              : wave === 1
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(52, 211, 153, ${alpha})`;
          ctx.lineWidth = 1.3;

          for (let x = 0; x <= width; x += 8) {
            const y =
              yOffset +
              Math.sin(x * 0.012 + step * (wave + 1) * 0.7) * 12 +
              Math.cos(x * 0.02 - step) * 7;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();

        // 2. Update and draw nodes
        const maxDistance = 90;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Move
          p.x += p.vx;
          p.y += p.vy;

          // Bounce at boundaries
          if (p.x <= 10) {
            p.x = 10;
            p.vx = Math.abs(p.vx);
          } else if (p.x >= width - 10) {
            p.x = width - 10;
            p.vx = -Math.abs(p.vx);
          }
          if (p.y <= 10) {
            p.y = 10;
            p.vy = Math.abs(p.vy);
          } else if (p.y >= height - 10) {
            p.y = height - 10;
            p.vy = -Math.abs(p.vy);
          }

          // Mouse gentle repel
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80 && dist > 0.1) {
              const force = (80 - dist) / 80;
              p.x -= (dx / dist) * force * 1.5;
              p.y -= (dy / dist) * force * 1.5;
            }
          }

          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
              const lineAlpha = (1 - dist / maxDistance) * 0.25;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(147, 197, 253, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();

              // Spawn data pulse packet occasionally
              const now = Date.now();
              if (Math.random() < 0.003 && pulses.length < 8 && now - lastPulseSpawn > 180) {
                pulses.push({
                  fromNode: i,
                  toNode: j,
                  progress: 0,
                  speed: 0.015 + Math.random() * 0.02,
                });
                lastPulseSpawn = now;
              }
            }
          }

          // Draw node
          const pulse = (Math.sin(step * 2 + p.pulseOffset) + 1) * 0.5;
          const currentRadius = p.radius + pulse * 0.8;

          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // 3. Update and draw pulses
        for (let k = pulses.length - 1; k >= 0; k--) {
          const pulse = pulses[k];
          const p1 = particles[pulse.fromNode];
          const p2 = particles[pulse.toNode];

          if (!p1 || !p2) {
            pulses.splice(k, 1);
            continue;
          }

          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) {
            pulses.splice(k, 1);
            continue;
          }

          const curX = p1.x + (p2.x - p1.x) * pulse.progress;
          const curY = p1.y + (p2.y - p1.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#60a5fa';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      } catch (err) {
        console.error('Banner animation frame error:', err);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Auto-resume on tab visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden && isRunning) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full block pointer-events-auto cursor-crosshair ${className}`}
    />
  );
};
