import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  stretchOnHoverEnter,
  stretchOnHoverLeave,
  startActiveGradientLoop,
  activateEnterAnimation,
  deactivateLeaveAnimation,
} from '../../animations/navLink_animations';

interface NavLinkProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ACTIVE_GRADIENT =
  'linear-gradient(90deg, #a855f7, #ec4899, #38bdf8, #a855f7)';

export const AnimatedNavLink = ({ label, isActive = false, onClick }: NavLinkProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const lettersWrapperRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const gradientRef = useRef<HTMLSpanElement>(null);

  const wasActiveRef = useRef(isActive);
  const loopTweenRef = useRef<gsap.core.Tween | null>(null);

  // État initial des deux couches, fixé une seule fois au montage (GSAP prend le relais après)
  useGSAP(() => {
    if (!gradientRef.current || !lettersWrapperRef.current) return;

    if (isActive) {
      gsap.set(gradientRef.current, { opacity: 1, scale: 1.3333 });
      gsap.set(lettersWrapperRef.current, { opacity: 0 });
      loopTweenRef.current = startActiveGradientLoop(gradientRef.current);
    } else {
      gsap.set(gradientRef.current, { opacity: 0, scale: 0.666 });
      gsap.set(lettersWrapperRef.current, { opacity: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Détecte les transitions d'état actif <-> inactif et joue l'animation adéquate
  useEffect(() => {
    const wasActive = wasActiveRef.current;
    wasActiveRef.current = isActive;

    if (wasActive === isActive) return;
    if (!gradientRef.current || !lettersWrapperRef.current) return;

    if (!wasActive && isActive) {
      // INACTIF -> ACTIF
      const tl = activateEnterAnimation(
        lettersRef.current,
        gradientRef.current,
        lettersWrapperRef.current,
        () => {
          if (gradientRef.current) {
            loopTweenRef.current = startActiveGradientLoop(gradientRef.current);
          }
        }
      );
      return () => {
        tl.kill();
      };
    }

    // ACTIF -> INACTIF
    loopTweenRef.current?.kill();
    loopTweenRef.current = null;
    const tl = deactivateLeaveAnimation(gradientRef.current, lettersWrapperRef.current);
    return () => {
      tl.kill();
    };
  }, [isActive]);

  const handleMouseEnter = () => {
    if (isActive) return;
    stretchOnHoverEnter(lettersRef.current);
  };

  const handleMouseLeave = () => {
    if (isActive) return;
    stretchOnHoverLeave(lettersRef.current);
  };

  const baseClasses = 'relative px-1 py-2 font-bold tracking-widest uppercase';
  const inactiveClasses = 'text-zinc-500 hover:text-zinc-300 text-[15px] font-extrabold';
  const activeClasses = 'text-[20px] font-extrabold';

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {/* Couche dégradé (état actif) — toujours montée, pilotée par opacity/scale via GSAP */}
      <span
        ref={gradientRef}
        className="absolute inset-0 flex items-center justify-center bg-[length:300%_auto] bg-clip-text text-transparent whitespace-nowrap"
        style={{
          backgroundImage: ACTIVE_GRADIENT,
          pointerEvents: 'none',
        }}
      >
        {label}
      </span>

      {/* Couche lettres séparées (état inactif / hover) — toujours montée */}
      <span ref={lettersWrapperRef} className="inline-flex">
        {label.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
            className="inline-block"
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char}
          </span>
        ))}
      </span>
    </button>
  );
};