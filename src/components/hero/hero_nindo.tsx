import { motion } from "framer-motion";
import { useNindoTypewriter } from "../../animations/hero_animation";

interface NindoBlockProps {
  phrases: string[];
  label?: string; 
}

export default function NindoBlock({ phrases, label = "Nindo" }: NindoBlockProps) {
  const { displayed } = useNindoTypewriter(phrases);

  return (
    <div>
      {/* Label */}
      <p className="text-[0.67rem] font-bold tracking-[0.22em] uppercase text-[#4B3A7A] mb-2">
        {label}
      </p>

      {/* Texte + curseur */}
      <div className="flex items-center gap-3">
        {/* Point lumineux */}
        <motion.span
          aria-hidden
          className="shrink-0 w-2 h-2 rounded-full bg-[#7C3AED]"
          animate={{ boxShadow: ["0 0 4px 2px rgba(124,58,237,0.4)", "0 0 12px 4px rgba(124,58,237,0.85)", "0 0 4px 2px rgba(124,58,237,0.4)"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Texte tapé */}
        <span className="text-[1.05rem] font-semibold text-[#A78BFA]">
          {displayed}

          {/* Curseur clignotant */}
          <motion.span
            aria-hidden
            className="inline-block w-[2px] h-[1em] bg-[#A78BFA] ml-0.5 align-text-bottom"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
        </span>
      </div>
    </div>
  );
}