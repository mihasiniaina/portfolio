import { useTranslation } from "../../hooks/use_translation";
import { useStatHover } from "../../hooks/use_stat_hover";
import { useSkillShine } from "../../hooks/use_skill_shine";
import { useIconGradientHover } from "../../hooks/use_icon_gradient_loop";
import { useTitleGradientLoop } from "../../hooks/use_title_gradient_loop";
import { TITLE_GRADIENT } from "../../animations/about_animation";

function StatCard({ value, label }: { value: string; label: string }) {
  const { cardRef, fillRef, onMouseEnter, onMouseLeave } = useStatHover();

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden rounded-xl border border-[#7C3AED]/25 bg-[#15122A] px-5 py-5 cursor-default"
    >
      <div
        ref={fillRef}
        aria-hidden
        className="absolute inset-0 bg-[#7C3AED]/25"
        style={{ transform: "scaleX(0)" }}
      />

      <p className="relative text-[1.6rem] font-bold leading-none mb-2 text-[#A78BFA]">
        {value}
      </p>
      <p className="relative text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-[#9D8EC5]">
        {label}
      </p>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  desc,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient: string;
}) {
  const { cardRef, shineRef, onMouseEnter: shineEnter, onMouseLeave: shineLeave } = useSkillShine();
  const { iconRef, onMouseEnter: iconEnter, onMouseLeave: iconLeave } = useIconGradientHover();

  const handleMouseEnter = () => {
    shineEnter();
    iconEnter();
  };

  const handleMouseLeave = () => {
    shineLeave();
    iconLeave();
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-2xl border border-[#7C3AED]/20 bg-[#15122A] p-7"
    >
      <div
        ref={shineRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(167,139,250,0.25) 50%, transparent 60%)",
        }}
      />

      <div
        ref={iconRef}
        className="relative w-11 h-11 flex items-center justify-center rounded-xl mb-5 text-[#A78BFA]"
        style={{ backgroundImage: gradient, backgroundSize: "300% 100%" }}
      >
        {icon}
      </div>
      <h3 className="relative text-[1.05rem] font-semibold text-white mb-2">{title}</h3>
      <p className="relative text-[0.85rem] leading-[1.7] text-[#9D8EC5]">{desc}</p>
    </div>
  );
}

export default function AboutSection() {
  const { t } = useTranslation();
  const { about } = t;
  const { titleRef } = useTitleGradientLoop();

  const icons = [
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
    </svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M9 18a6 6 0 0 0 6 0M6 9a6 6 0 1 1 12 0c0 3-2 4-2 7H8c0-3-2-4-2-7Z" />
    </svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>,
  ];

  const iconGradient = "linear-gradient(90deg, #a855f7, #ec4899, #38bdf8, #a855f7)";

  return (
    <section className="relative bg-[#0D0B1A] font-sans text-[#E2D9F3] px-16 py-24">
      <div className="max-w-[1400px] mx-auto">

        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] bg-[#7C3AED]/10 border border-[#7C3AED]/30">
          {about.badge}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 mb-14">
          <h2
            ref={titleRef}
            className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] tracking-[-1px] bg-clip-text text-transparent"
            style={{ backgroundImage: TITLE_GRADIENT }}
          >
            {about.title}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 text-[0.95rem] leading-[1.8] text-[#9D8EC5]">
          <div className="flex flex-col gap-4">
            <p>{about.paragraphs.intro}</p>
            <p>
              {about.paragraphs.chain}{" "}
              <em className="text-[#E2D9F3] not-italic font-medium">
                {about.paragraphs.approach}
              </em>
            </p>
          </div>

          <div>
            <p>{about.paragraphs.ai}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.skills.map((skill, i) => (
            <SkillCard
              key={skill.title}
              icon={icons[i]}
              title={skill.title}
              desc={skill.desc}
              gradient={iconGradient}
            />
          ))}
        </div>

      </div>
    </section>
  );
}