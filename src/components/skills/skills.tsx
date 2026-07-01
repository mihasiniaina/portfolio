import React from 'react';
import type { IconType } from 'react-icons';
import {
  SiPython, SiFastapi, SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiExpress, SiTailwindcss, SiPostgresql, SiMysql, SiSqlite, SiDocker,
  SiQdrant, SiSharp, SiDotnet, SiJavascript, SiHtml5,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useCanvasAnimation } from '../../hooks/use_canva_animation';
import { useHoverAnimation } from '../../hooks/use_hover_animation';
import { useTranslation } from '../../hooks/use_translation';
import SkillNode from './skill_node';
import InfoSection from './info_div';

interface SkillNodeData {
  Icon: IconType;
  color: string;
  name: string;
  x: number;
  y: number;
  size: number;
  big?: boolean;
}

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const nodes: SkillNodeData[] = [
    { Icon: SiPython, color: "#3776AB", name: "Python", x: 50, y: 48, size: 56, big: true },
    { Icon: SiFastapi, color: "#009688", name: "FastAPI", x: 32, y: 30, size: 42 },
    { Icon: SiReact, color: "#61DAFB", name: "React", x: 70, y: 24, size: 44 },
    { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js", x: 85, y: 42, size: 40 },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript", x: 78, y: 64, size: 40 },
    { Icon: SiNodedotjs, color: "#5FA04E", name: "Node.js", x: 60, y: 78, size: 42 },
    { Icon: SiExpress, color: "#FFFFFF", name: "Express", x: 38, y: 76, size: 38 },
    { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind", x: 18, y: 60, size: 40 },
    { Icon: SiHtml5, color: "#E34F26", name: "HTML5", x: 12, y: 38, size: 36 },
    { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript", x: 24, y: 16, size: 40 },
    { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL", x: 50, y: 10, size: 44 },
    { Icon: SiMysql, color: "#4479A1", name: "MySQL", x: 95, y: 20, size: 36 },
    { Icon: SiSqlite, color: "#7C3AED", name: "SQLite", x: 95, y: 70, size: 34 },
    { Icon: SiQdrant, color: "#A78BFA", name: "Qdrant", x: 65, y: 95, size: 38 },
    { Icon: SiDocker, color: "#2496ED", name: "Docker", x: 30, y: 95, size: 44 },
    { Icon: SiSharp, color: "#A179DC", name: "C#", x: 8, y: 80, size: 34 },
    { Icon: SiDotnet, color: "#512BD4", name: ".NET", x: 5, y: 12, size: 34 },
    { Icon: FaGithub, color: "#E2D9F3", name: "GitHub", x: 90, y: 90, size: 38 },
  ];

  const center: SkillNodeData = nodes[0];
  const satellites: SkillNodeData[] = nodes.slice(1);
  const svgRef = useCanvasAnimation(satellites, center);
  const { hoveredNode, handleMouseEnter, handleMouseLeave } = useHoverAnimation();

  return (
    <section className="relative bg-transparent font-sans text-[#E2D9F3] px-16 py-24">
      
      {/* MODIFICATION ICI : Remplacement par un dégradé elliptique très diffus qui meurt à 50% pour ne jamais toucher les bords nets */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.06)_0%,rgba(0,0,0,0)_50%)]" 
      />
      
      <div className="relative z-10 max-w-[1400px] mx-auto">

        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] bg-[#7C3AED]/10 border border-[#7C3AED]/30 hover:bg-[#7C3AED]/20 transition-all duration-300">
          {t.skills.badge}
        </span>

        <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-1px] text-white mb-14 max-w-[700px]">
          {t.skills.heading.line1}{" "}
          <span className="bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">
            {t.skills.heading.line2}
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-16 items-center">

          <div className="relative w-full aspect-square max-w-[640px] mx-auto">
            <svg
              ref={svgRef}
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              {satellites.map((n: SkillNodeData) => (
                <line
                  key={n.name}
                  x1={center.x}
                  y1={center.y}
                  x2={n.x}
                  y2={n.y}
                  stroke="#7C3AED"
                  strokeOpacity={hoveredNode === n.name ? 0.5 : 0.25}
                  strokeWidth={hoveredNode === n.name ? 0.5 : 0.3}
                  className="transition-all duration-500"
                />
              ))}
              
              {satellites.map((n: SkillNodeData, i: number) => {
                const next = satellites[(i + 3) % satellites.length];
                const isActive = hoveredNode === n.name || hoveredNode === next.name;
                return (
                  <line
                    key={`${n.name}-${next.name}`}
                    x1={n.x}
                    y1={n.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="#7C3AED"
                    strokeOpacity={isActive ? 0.3 : 0.12}
                    strokeWidth={isActive ? 0.4 : 0.2}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            <SkillNode
              {...center}
              isHovered={hoveredNode === center.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />

            {satellites.map((node: SkillNodeData) => (
              <SkillNode
                key={node.name}
                {...node}
                isHovered={node.name === hoveredNode}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>

          <InfoSection />

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;