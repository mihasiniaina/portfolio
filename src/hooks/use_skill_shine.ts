import { useRef } from "react";
import { skillShineEnter, skillShineLeave } from "../animations/about_animation";

export function useSkillShine() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (cardRef.current && shineRef.current) {
      skillShineEnter(shineRef.current, cardRef.current);
    }
  };

  const onMouseLeave = () => {
    if (cardRef.current && shineRef.current) {
      skillShineLeave(shineRef.current, cardRef.current);
    }
  };

  return { cardRef, shineRef, onMouseEnter, onMouseLeave };
}