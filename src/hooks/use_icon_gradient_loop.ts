import { useRef } from "react";
import { iconGradientHoverEnter, iconGradientHoverLeave } from "../animations/about_animation";

export function useIconGradientHover() {
  const iconRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const onMouseEnter = () => {
    if (iconRef.current) {
      tweenRef.current = iconGradientHoverEnter(iconRef.current);
    }
  };

  const onMouseLeave = () => {
    if (iconRef.current) {
      iconGradientHoverLeave(iconRef.current, tweenRef.current);
      tweenRef.current = null;
    }
  };

  return { iconRef, onMouseEnter, onMouseLeave };
}