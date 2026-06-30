import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import type { IconType } from 'react-icons';

interface Position {
  x: number;
  y: number;
}

interface Path {
  from: Position;
  to: Position;
}

interface SkillNode {
  Icon: IconType;
  color: string;
  name: string;
  x: number;
  y: number;
  size: number;
  big?: boolean;
}

export function useCanvasAnimation(
  satellites: SkillNode[], 
  center: SkillNode
): RefObject<SVGSVGElement | null> {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const lightLineRef = useRef<SVGLineElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !center) return;

    // Créer le filtre de lueur
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow');
    filter.innerHTML = `
      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    `;
    defs.appendChild(filter);
    svg.insertBefore(defs, svg.firstChild);

    // Créer la ligne lumineuse
    const lightLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lightLine.setAttribute('stroke', '#A78BFA');
    lightLine.setAttribute('stroke-width', '0.6');
    lightLine.setAttribute('stroke-linecap', 'round');
    lightLine.setAttribute('filter', 'url(#glow)');
    lightLine.setAttribute('opacity', '0.9');

    // FIX 1 : initialiser la ligne directement sur le point de départ
    // (centre) pour éviter le trait fantôme de (0,0) à (0,0)
    lightLine.setAttribute('x1', center.x.toString());
    lightLine.setAttribute('y1', center.y.toString());
    lightLine.setAttribute('x2', center.x.toString());
    lightLine.setAttribute('y2', center.y.toString());

    svg.appendChild(lightLine);
    lightLineRef.current = lightLine;

    // Chemins à parcourir - centre -> chaque satellite
    const paths: Path[] = satellites.map((sat: SkillNode) => ({
      from: { x: center.x, y: center.y },
      to: { x: sat.x, y: sat.y }
    }));

    // FIX 2 : utiliser EXACTEMENT le même pas (i + 3) que celui
    // utilisé pour dessiner les lignes satellite -> satellite dans
    // SkillsSection, sinon le trait suit un trajet qui n'existe pas visuellement
    const SKIP = 3;
    for (let i = 0; i < satellites.length; i++) {
      const next = satellites[(i + SKIP) % satellites.length];
      paths.push({
        from: { x: satellites[i].x, y: satellites[i].y },
        to: { x: next.x, y: next.y }
      });
    }

    let currentPathIndex = 0;
    let progress = 0;
    const speed = 0.015;
    const tailLength = 0.04;

    function animate(): void {
      if (currentPathIndex >= paths.length) {
        currentPathIndex = 0;
        progress = 0;
      }

      const currentPath = paths[currentPathIndex];
      const from = currentPath.from;
      const to = currentPath.to;

      const headX = from.x + (to.x - from.x) * progress;
      const headY = from.y + (to.y - from.y) * progress;

      // FIX 3 : on ne va plus jamais chercher le segment précédent
      // (qui peut être géométriquement déconnecté -> flash au changement
      // de fil). On clamp simplement à 0 : la queue part de "from" et
      // grandit progressivement sur ce même segment.
      const tailProgress = Math.max(0, progress - tailLength);
      const tailX = from.x + (to.x - from.x) * tailProgress;
      const tailY = from.y + (to.y - from.y) * tailProgress;

      if (lightLineRef.current) {
        lightLineRef.current.setAttribute('x1', tailX.toString());
        lightLineRef.current.setAttribute('y1', tailY.toString());
        lightLineRef.current.setAttribute('x2', headX.toString());
        lightLineRef.current.setAttribute('y2', headY.toString());
      }

      progress += speed;

      if (progress >= 1) {
        progress = 0;
        currentPathIndex++;
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (lightLineRef.current && svg.contains(lightLineRef.current)) {
        svg.removeChild(lightLineRef.current);
      }
    };
  }, [satellites, center]);

  return svgRef;
}