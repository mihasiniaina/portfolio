import React from 'react';
import { useTranslation } from '../../hooks/use_translation'; 

const InfoSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">

      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-gradient-to-r from-[#7C3AED] to-transparent" />
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
            {t.skills.arsenal.eyebrow}
          </span>
        </div>
        <h3 className="text-[1.5rem] font-bold text-white leading-snug">
          {t.skills.arsenal.title}
        </h3>
      </div>

      <p className="text-[0.92rem] leading-[1.85] text-[#9D8EC5] pl-[3.25rem] border-l-2 border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-colors duration-300">
        {t.skills.arsenal.text}
      </p>

      <div className="flex flex-col gap-3 pl-[3.25rem]">
        {t.skills.stacks.map((row) => (
          <div 
            key={row.label} 
            className="group relative"
          >
            <div className="
              absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-transparent
              rounded-lg opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
            " />
            <div className="relative flex items-center gap-4 p-3 rounded-lg border border-transparent group-hover:border-[#7C3AED]/20 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-[#A78BFA] shrink-0 group-hover:shadow-[0_0_8px_rgba(167,139,250,0.5)] transition-all duration-300" />
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white w-[100px] shrink-0 group-hover:text-[#A78BFA] transition-colors duration-300">
                {row.label}
              </span>
              <span className="text-[0.82rem] text-[#9D8EC5] group-hover:text-white/90 transition-colors duration-300 flex-1">
                {row.detail}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default InfoSection;