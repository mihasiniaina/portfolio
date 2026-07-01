export interface ProjectMeta {
  id: string;
  year: string;
  image: string;
  github: string;
}

export const projectsMeta: ProjectMeta[] = [
  { id: "safait", year: "2025", image: "/screenshots/surete.png", github: "#" },
  { id: "aink", year: "2026", image: "/screenshots/aink.png", github: "https://github.com/mihasiniaina/IHM_Backend" },
  { id: "izaro", year: "2026", image: "/screenshots/izaro.png", github: "#" },
  { id: "portfolio", year: "2026", image: "/screenshots/portfolio.png", github: "https://github.com/mihasiniaina/portfolio" },
];

export const projectTags: Record<string, string[]> = {
  safait: ["FastAPI", "LlamaIndex", "LangChain", "WebSockets", "Python", "pgvector", "Next.js", "Tailwind CSS", "PostgreSQL"],
  aink: ["FastAPI", "PostgreSQL", "pgvector", "WebSockets", "Python"],
  izaro: ["Express", "Next.js", "PostgreSQL", "OAuth2"],
  portfolio: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
};