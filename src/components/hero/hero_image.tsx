import { useTilt } from "../../hooks/use_hero_image";

interface PortraitImageProps {
  src:        string;
  alt?:       string;
  className?: string;
}

export default function PortraitImage({ src, alt = "", className = "" }: PortraitImageProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxTilt: 7, scale: 1.025 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full h-full will-change-transform transition-transform duration-300 ease-out"
      style={{
        // @ts-expect-error custom CSS property
        "--glow-x": "50%",
        "--glow-y": "50%",
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full select-none pointer-events-none ${className}`}
        draggable={false}
      />

      {/* Lueur qui suit le curseur */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(167,139,250,0.25) 0%, transparent 55%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Liseré lumineux animé en bordure */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl ring-1 ring-[#A78BFA]/0 hover:ring-[#A78BFA]/40 transition-all duration-300 pointer-events-none"
      />
    </div>
  );
}