import { useTranslation } from "../../hooks/use_translation";
import { useHorizontalScroll } from "../../hooks/use_scroll_horizontal";
import { projectsMeta, projectTags } from "../../data/project_meta_data";
import { ProjectCard } from "./card";

interface ProjectItemTranslation {
  id: string;
  title: string;
  desc: string;
  type: string;
  context: string;
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const { badge, titleLine1, titleLine2, description, viewProject, privateCode, items } = t.projects;

  const scrollRef = useHorizontalScroll();

  // Typage strict du mapping des données avec la traduction
  const projects = items.map((item: ProjectItemTranslation) => {
    const meta = projectsMeta.find((m) => m.id === item.id);
    return {
      id: item.id,
      title: item.title,
      desc: item.desc,
      type: item.type,
      context: item.context,
      tags: projectTags[item.id] ?? [],
      year: meta?.year ?? "",
      image: meta?.image ?? "",
      github: meta?.github ?? "#",
    };
  });

  return (
    <section className="relative bg-[#0D0B1A] font-sans text-[#E2D9F3] px-6 md:px-16 py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] bg-[#7C3AED]/10 border border-[#7C3AED]/30">
          {badge}
        </span>

        <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-1px] text-white mb-4">
          {titleLine1} <span className="text-[#A78BFA]">{titleLine2}</span>
        </h2>

        <p className="text-[0.85rem] md:text-[0.95rem] leading-relaxed text-[#9D8EC5] mb-14 max-w-[650px]">
          {description}
        </p>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#7C3AED]/20 scrollbar-track-transparent"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[290px] sm:w-[340px] md:w-[380px] shrink-0 snap-start"
            >
              <ProjectCard 
                project={project} 
                viewProjectLabel={viewProject} 
                privateCodeLabel={privateCode} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}