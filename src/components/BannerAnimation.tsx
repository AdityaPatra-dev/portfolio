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
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 180);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for distributed cluster / neural graph
    const particleCount = Math.min(Math.floor(width / 22), 36);
    const colors = ['#60a5fa', '#38bdf8', '#818cf8', '#34d399', '#93c5fd'];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Active pulses traveling between nodes
    const pulses: PulsePacket[] = [];
    let lastPulseSpawn = 0;

    // Mouse tracking for subtle interactive magnetism
    let mouse = { x: -1000, y: -1000, active: false };
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

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw animated flowing undulating sine waves in background
      ctx.save();
      for (let wave = 0; wave < 3; wave++) {
        ctx.beginPath();
        const yOffset = height * 0.45 + wave * 18;
        const alpha = 0.08 + wave * 0.04;
        ctx.strokeStyle = wave === 0 ? `rgba(96, 165, 250, ${alpha})` : wave === 1 ? `rgba(56, 189, 248, ${alpha})` : `rgba(52, 211, 153, ${alpha})`;
        ctx.lineWidth = 1.2;

        for (let x = 0; x <= width; x += 10) {
          const y = yOffset + Math.sin(x * 0.012 + step * (wave + 1) * 0.7) * 14 + Math.cos(x * 0.02 - step) * 8;
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

        // Bounce at boundaries with gentle padding
        if (p.x < 10) { p.x = 10; p.vx *= -1; }
        if (p.x > width - 10) { p.x = width - 10; p.vx *= -1; }
        if (p.y < 10) { p.y = 10; p.vy *= -1; }
        if (p.y > height - 10) { p.y = height - 10; p.vy *= -1; }

        // Mouse gentle repel
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const force = (80 - dist) / 80;
            p.x -= (dx / dist) * force * 2;
            p.y -= (dy / dist) * force * 2;
          }
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 197, 253, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Spawn data pulse packet occasionally
            if (Math.random() < 0.003 && pulses.length < 8 && Date.now() - lastPulseSpawn > 180) {
              pulses.push({
                fromNode: i,
                toNode: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
              lastPulseSpawn = Date.now();
            }
          }
        }

        // Draw node
        const pulse = (Math.sin(step * 2 + p.pulseOffset) + 1) * 0.5;
        const currentRadius = p.radius + pulse * 0.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
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

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
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
