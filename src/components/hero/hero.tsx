import NindoBlock from "./hero_nindo";
import PortraitImage from "./hero_image";
import heroImg from "../../assets/avatar.jpeg";
import { useTranslation } from "../../hooks/use_translation";

export default function HeroSection() {
  const { t } = useTranslation();

  const nameParts = t.hero.nom.split(" ");
  const firstName = nameParts[0];
  const restName = nameParts.slice(1).join(" ");

  return (
    <section className="relative min-h-screen bg-[#0D0B1A] font-sans text-[#E2D9F3] overflow-hidden">
      
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-28 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] blur-[110px]" />
        <div className="absolute -bottom-20 right-[8%] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.13)_0%,transparent_70%)] blur-[110px]" />
      </div>

      <div className="relative z-10 flex items-center justify-around gap-14 px-16 py-20 min-h-screen flex-col md:flex-row">

        <div className="flex-1 max-w-[500px] flex flex-col gap-7">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#7C3AED]">
            {t.hero.introduction}
          </p>

          <h1 className="text-[clamp(2.8rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-1.5px] text-white capitalize">
            {firstName.toLowerCase()}{" "}
            <span className="text-[#A78BFA]">{restName}</span>
          </h1>

          <p className="text-[0.95rem] leading-[1.8] text-[#9D8EC5] max-w-[420px]">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2 text-[0.82rem] text-[#9D8EC5]">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Antananarivo, MG
            </div>

            <a href="mailto:randrewsravalo@gmail.com"
               className="flex items-center gap-2 text-[0.82rem] text-[#9D8EC5] hover:text-white transition-colors">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              randrewsravalo@gmail.com
            </a>

            <a href="https://linkedin.com/in/andrews-richarts-11257a361"
               target="_blank" rel="noreferrer"
               className="flex items-center gap-2 text-[0.82rem] text-[#9D8EC5] hover:text-[#A78BFA] transition-colors">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              Andrews Richarts
            </a>

            <a href="https://github.com/mihasiniaina"
               target="_blank" rel="noreferrer"
               className="flex items-center gap-2 text-[0.82rem] text-[#9D8EC5] hover:text-[#A78BFA] transition-colors">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
              Mihasiniaina
            </a>
          </div>

          <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-transparent" />

          <NindoBlock phrases={t.hero.nindo} />
        </div>

        <div className="shrink-0 w-[360px] lg:w-[390px]">
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#7C3AED]/30 bg-[#1A1530] shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_0_50px_rgba(124,58,237,0.2)]">
              <div className="shrink-0 w-[360px] lg:w-[390px]">
                <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#7C3AED]/30 bg-[#1A1530] shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_0_50px_rgba(124,58,237,0.2)]">
                  <PortraitImage
                    src={heroImg}
                    alt={t.hero.nom}
                    className="object-cover object-top"
                  />
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}