import { useProjectCardAnimation } from "../../hooks/use_project_card.animation";

interface Project {
  id: string;
  title: string;
  desc: string;
  type: string;
  context: string;
  tags: string[];
  year: string;
  image: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  viewProjectLabel: string;
  privateCodeLabel: string;
}

export function ProjectCard({ project, viewProjectLabel, privateCodeLabel }: ProjectCardProps) {
  const isPrivate = !project.github || project.github === "#";
  const { cardRef, overlayRef } = useProjectCardAnimation();

  const handleClick = (): void => {
    if (!isPrivate) {
      window.open(project.github, "_blank", "noreferrer");
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`flex flex-col h-full rounded-[18px] border border-[#7C3AED]/20 bg-[#15122A] overflow-hidden relative ${
        isPrivate ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {/* Overlay d'animation avec effet Glassmorphism & Flou intense */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center translate-y-full opacity-0 backdrop-blur-xl p-6 text-center transition-all"
        style={{
          // Fond très transparent pour laisser voir la carte derrière
          backgroundColor: isPrivate ? "rgba(15, 11, 26, 0.45)" : "rgba(124, 58, 237, 0.25)"
        }}
      >
        {isPrivate ? (
          /* Effet rétroéclairé Rouge/Rose pour le code privé */
          <div 
            className="flex flex-col items-center gap-3 animate-pulse"
            style={{ filter: "drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))" }}
          >
            <span className="text-sm font-black uppercase tracking-widest text-red-400">
              {privateCodeLabel}
            </span>
          </div>
        ) : (
          /* Effet rétroéclairé Violet/Cyan néon pour le code public */
          <div 
            className="flex flex-col items-center gap-3"
            style={{ filter: "drop-shadow(0 0 15px rgba(167, 139, 250, 0.9))" }}
          >
            <span className="text-lg font-black uppercase tracking-widest text-white">
              {viewProjectLabel}
            </span>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#15122A] to-transparent" />
        <span className="absolute top-3 right-3 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#C4B5FD] bg-[#7C3AED]/35 border border-[#A78BFA]/30 px-2.5 py-1 rounded-full backdrop-blur-sm z-20">
          {project.type}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 z-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#9D8EC5]">
            {project.year}
          </span>
          <span className="h-px w-3.5 bg-[#7C3AED]/35" />
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#9D8EC5]">
            {project.context}
          </span>
        </div>

        <h3 className="text-[1.05rem] font-black text-white mb-2">
          {project.title}
        </h3>

        <p className="text-[0.78rem] leading-[1.75] text-[#9D8EC5] flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full text-[#C4B5FD] border border-[#7C3AED]/25 bg-[#7C3AED]/07"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}