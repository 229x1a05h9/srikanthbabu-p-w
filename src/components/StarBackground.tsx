import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Orange/gold color palette for stars
    const colorPalette = [
      { r: 255, g: 165, b: 0, a: 1 },      // Orange
      { r: 255, g: 200, b: 100, a: 0.9 },  // Light gold
      { r: 255, g: 140, b: 0, a: 0.95 },   // Dark orange
      { r: 255, g: 215, b: 0, a: 0.85 },   // Gold
      { r: 255, g: 255, b: 255, a: 0.8 },  // White
      { r: 255, g: 180, b: 50, a: 0.9 },   // Warm gold
      { r: 200, g: 120, b: 0, a: 0.7 },    // Deep orange
    ];

    interface Star {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: typeof colorPalette[0];
      twinkleSpeed: number;
      twinklePhase: number;
      driftRadius: number;
      driftAngle: number;
      driftSpeed: number;
      points: number;
    }

    const state = {
      stars: [] as Star[],
      pointer: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        isActive: false,
      },
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
    };

    const createStars = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const starCount = Math.floor((width * height) / 3000);

      state.stars = [];

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        
        state.stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: 0.5 + Math.random() * 3,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinklePhase: Math.random() * Math.PI * 2,
          driftRadius: 1 + Math.random() * 3,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.2 + Math.random() * 0.5,
          points: Math.random() > 0.7 ? 4 : (Math.random() > 0.5 ? 5 : 6),
        });
      }
    };

    const drawStar = (x: number, y: number, size: number, points: number, color: typeof colorPalette[0], alpha: number) => {
      const outerRadius = size;
      const innerRadius = size * 0.4;

      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI * i) / points - Math.PI / 2;
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, outerRadius * 1.5);
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * color.a})`);
      gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * color.a * 0.6})`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fill();

      // Add glow effect for larger stars
      if (size > 1.5) {
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.8})`;
        ctx.shadowBlur = size * 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const drawCircleStar = (x: number, y: number, size: number, color: typeof colorPalette[0], alpha: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * color.a})`);
      gradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * color.a * 0.5})`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    let animationId: number;

    const animate = (time: number) => {
      // Clear with dark background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      state.stars.forEach((star) => {
        // Update drift
        star.driftAngle += star.driftSpeed * 0.001;
        star.x = star.baseX + Math.cos(star.driftAngle) * star.driftRadius;
        star.y = star.baseY + Math.sin(star.driftAngle) * star.driftRadius;

        // Pointer interaction
        const dx = star.x - state.pointer.x;
        const dy = star.y - state.pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist && state.pointer.isActive) {
          const force = (1 - dist / maxDist) * 20;
          star.x += (dx / dist) * force;
          star.y += (dy / dist) * force;
        }

        // Calculate twinkle effect
        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase);
        const alpha = 0.3 + twinkle * 0.7;

        // Draw different star types
        if (star.size > 2) {
          drawStar(star.x, star.y, star.size, star.points, star.color, alpha);
        } else {
          drawCircleStar(star.x, star.y, star.size, star.color, alpha);
        }
      });

      // Add some shooting stars occasionally
      if (Math.random() < 0.002) {
        drawShootingStar(ctx, time);
      }

      animationId = requestAnimationFrame(animate);
    };

    const shootingStars: { x: number; y: number; vx: number; vy: number; life: number; color: typeof colorPalette[0] }[] = [];

    const drawShootingStar = (ctx: CanvasRenderingContext2D, _time: number) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight / 3);
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      
      shootingStars.push({
        x,
        y,
        vx: 3 + Math.random() * 5,
        vy: 2 + Math.random() * 3,
        life: 1,
        color,
      });
    };

    // Update shooting stars in animation loop
    const updateShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.02;

        if (s.life <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 10, s.y - s.vy * 10);
        gradient.addColorStop(0, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.life})`);
        gradient.addColorStop(1, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, 0)`);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 15, s.y - s.vy * 15);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    // Modify animate to include shooting stars
    const animateWithShootingStars = (time: number) => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      state.stars.forEach((star) => {
        star.driftAngle += star.driftSpeed * 0.001;
        star.x = star.baseX + Math.cos(star.driftAngle) * star.driftRadius;
        star.y = star.baseY + Math.sin(star.driftAngle) * star.driftRadius;

        const dx = star.x - state.pointer.x;
        const dy = star.y - state.pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist && state.pointer.isActive) {
          const force = (1 - dist / maxDist) * 20;
          star.x += (dx / dist) * force;
          star.y += (dy / dist) * force;
        }

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase);
        const alpha = 0.3 + twinkle * 0.7;

        if (star.size > 2) {
          drawStar(star.x, star.y, star.size, star.points, star.color, alpha);
        } else {
          drawCircleStar(star.x, star.y, star.size, star.color, alpha);
        }
      });

      // Shooting stars
      if (Math.random() < 0.003) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 3);
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        shootingStars.push({ x, y, vx: 3 + Math.random() * 5, vy: 2 + Math.random() * 3, life: 1, color });
      }
      updateShootingStars();

      animationId = requestAnimationFrame(animateWithShootingStars);
    };

    const updatePointer = (event: PointerEvent) => {
      state.pointer.x = event.clientX;
      state.pointer.y = event.clientY;
      state.pointer.isActive = true;
    };

    const handleLeave = () => {
      state.pointer.isActive = false;
      state.pointer.x = window.innerWidth / 2;
      state.pointer.y = window.innerHeight / 2;
    };

    resizeCanvas();
    animationId = requestAnimationFrame(animateWithShootingStars);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("pointerdown", updatePointer);
    window.addEventListener("pointerup", handleLeave);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerdown", updatePointer);
      window.removeEventListener("pointerup", handleLeave);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#0a0a0a' }}
    />
  );
};

export default StarBackground;
