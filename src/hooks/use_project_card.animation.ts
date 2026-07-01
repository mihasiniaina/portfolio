import { useRef, useEffect } from "react";
import gsap from "gsap";

export function useProjectCardAnimation() {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;

    if (!card || !overlay) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    })
    .to(card, {
      boxShadow: "0 10px 40px -10px rgba(124, 58, 237, 0.5)",
      borderColor: "rgba(167, 139, 250, 0.6)",
      duration: 0.2,
      ease: "power1.out",
    }, "<");

    const onMouseEnter = () => tl.play();
    const onMouseLeave = () => tl.reverse();

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return { cardRef, overlayRef };
}