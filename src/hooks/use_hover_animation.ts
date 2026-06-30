import { useState, useCallback } from 'react';

interface UseHoverAnimationReturn {
  hoveredNode: string | null;
  handleMouseEnter: (nodeName: string) => void;
  handleMouseLeave: () => void;
}

export function useHoverAnimation(): UseHoverAnimationReturn {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const handleMouseEnter = useCallback((nodeName: string): void => {
    setHoveredNode(nodeName);
  }, []);

  const handleMouseLeave = useCallback((): void => {
    setHoveredNode(null);
  }, []);

  return {
    hoveredNode,
    handleMouseEnter,
    handleMouseLeave
  };
}