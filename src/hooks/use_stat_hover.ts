import { useRef } from "react";
import { statHoverEnter, statHoverLeave } from "../animations/about_animation";

export function useStatHover() {
  const cardRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (cardRef.current && fillRef.current) {
      statHoverEnter(fillRef.current, cardRef.current);
    }
  };

  const onMouseLeave = () => {
    if (cardRef.current && fillRef.current) {
      statHoverLeave(fillRef.current, cardRef.current);
    }
  };

  return { cardRef, fillRef, onMouseEnter, onMouseLeave };
}