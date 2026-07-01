import React, { useEffect, useRef } from "react";

interface PortfolioWrapperProps {
  children: React.ReactNode;
}

interface WaterRipple {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxSize: number;
  alpha: number;
  decay: number;
  growth: number;
}

export default function PortfolioWrapper({ children }: PortfolioWrapperProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<WaterRipple[]>([]);
  const lastMouseRef = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    
    const animate = () => {
      // Nettoyage rapide du fond pour éviter l'accumulation persistante
      ctx.fillStyle = "rgba(13, 11, 26, 0.15)"; // #0D0B1A avec rafraîchissement rapide
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Freinage immédiat pour simuler la résistance de la surface de l'eau
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.88; 
        p.vy *= 0.88;

        // Expansion rapide de l'onde (effleurement)
        if (p.size < p.maxSize) {
          p.size += p.growth;
        }

        // Dissipation très rapide
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Rendu en anneau/onde vaporeuse douce
        const gradient = ctx.createRadialGradient(p.x, p.y, p.size * 0.2, p.x, p.y, p.size);
        
        // Couleurs plus subtiles et transparentes (effet eau/reflet)
        gradient.addColorStop(0, "rgba(13, 11, 26, 0)"); 
        gradient.addColorStop(0.5, `rgba(167, 139, 250, ${p.alpha * 0.15})`); // Éclat de l'onde
        gradient.addColorStop(1, "rgba(13, 11, 26, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const lastMouse = lastMouseRef.current;

    const dx = x - lastMouse.x;
    const dy = y - lastMouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Déclenchement uniquement sur mouvement réel
    if (distance > 2) {
      // Simule plusieurs points de contact légers (comme des doigts qui effleurent)
      const fingerCount = 3; 
      
      for (let i = 0; i < fingerCount; i++) {
        // Dispersion perpendiculaire à la trajectoire pour créer une vraie ride d'eau
        const angle = Math.atan2(dy, dx) + Math.PI / 2 + (Math.random() - 0.5) * 0.5;
        const spread = (Math.random() - 0.5) * 20; // Écartement des "doigts"

        const spawnX = x + Math.cos(angle) * spread;
        const spawnY = y + Math.sin(angle) * spread;

        particlesRef.current.push({
          x: spawnX,
          y: spawnY,
          // Légère impulsion vers l'extérieur
          vx: Math.cos(angle) * (Math.random() * 1.5),
          vy: Math.sin(angle) * (Math.random() * 1.5),
          size: 2,
          maxSize: Math.random() * 25 + 20, // Ondes plus petites et discrètes
          alpha: 0.8,
          decay: 0.025 + Math.random() * 0.015, // Disparaît en quelques millisecondes
          growth: 2.5 + Math.random() * 2,     // L'onde s'élargit vite à l'impact
        });
      }
    }

    lastMouseRef.current = { x, y, time: now };
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#0D0B1A] overflow-x-hidden selection:bg-[#7C3AED]/30"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 bg-[#0D0B1A]"
      />
      <div className="relative z-10 w-full bg-transparent">
        {children}
      </div>
    </div>
  );
}