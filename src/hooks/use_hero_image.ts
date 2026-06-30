import { useRef, useCallback } from "react";

interface TiltOptions {
  maxTilt?: number;   // degrés d'inclinaison max
  scale?: number;     
}

export function useTilt({ maxTilt = 8, scale = 1.03 }: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 → 1
    const py = (e.clientY - rect.top) / rect.height;  // 0 → 1

    const tiltX = (py - 0.5) * -2 * maxTilt;
    const tiltY = (px - 0.5) * 2 * maxTilt;

    // On écrit directement sur le style → pas de re-render React
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
    el.style.setProperty("--glow-x", `${px * 100}%`);
    el.style.setProperty("--glow-y", `${py * 100}%`);
  }, [maxTilt, scale]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.setProperty("--glow-x", "50%");
    el.style.setProperty("--glow-y", "50%");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}