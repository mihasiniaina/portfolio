import { useEffect, useRef } from "react";
import { startTitleGradientLoop, stopTitleGradientLoop } from "../animations/about_animation";

export function useTitleGradientLoop() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      tweenRef.current = startTitleGradientLoop(titleRef.current);
    }
    return () => stopTitleGradientLoop(tweenRef.current);
  }, []);

  return { titleRef };
}