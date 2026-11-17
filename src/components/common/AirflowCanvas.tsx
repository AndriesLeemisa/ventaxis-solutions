import React, { useEffect, useRef } from 'react';

export const AirflowCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    window.addEventListener('resize', handleResize);

    // Particle streamlines representing laminar air currents
    const particlesCount = Math.min(Math.floor(width / 22), 65);
    const particles: Array<{
      x: number;
      y: number;
      len: number;
      speed: number;
      opacity: number;
      color: string;
      curvePhase: number;
    }> = [];

    const colors = ['#20B8CE', '#1479D4', '#38E1F8', '#EEF3F7'];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        len: Math.random() * 80 + 40,
        speed: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.35 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        curvePhase: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speed;
        p.curvePhase += 0.015;
        // Subtle vertical oscillation mimicking fan aerodynamic eddy
        const yOffset = Math.sin(p.curvePhase) * 6;

        if (p.x - p.len > width) {
          p.x = -p.len;
          p.y = Math.random() * height;
        }

        // Draw streamline line
        ctx.beginPath();
        const grad = ctx.createLinearGradient(p.x, p.y + yOffset, p.x + p.len, p.y + yOffset);
        grad.addColorStop(0, 'rgba(32, 184, 206, 0)');
        grad.addColorStop(0.5, p.color);
        grad.addColorStop(1, 'rgba(20, 121, 212, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';

        ctx.moveTo(p.x, p.y + yOffset);
        ctx.quadraticCurveTo(
          p.x + p.len * 0.5,
          p.y + yOffset + Math.sin(p.curvePhase + 1) * 8,
          p.x + p.len,
          p.y + yOffset
        );
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 opacity-70 ${className}`}
    />
  );
};
