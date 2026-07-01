import { useTranslation } from "../../hooks/use_translation";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-[#0D0B1A] font-sans text-[#E2D9F3] px-6 md:px-16 py-24 overflow-hidden flex items-center">
      
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -right-28 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] blur-[110px]" />
        <div className="absolute bottom-10 -left-28 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)] blur-[110px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-14 md:flex-row md:justify-between md:items-start">
        
        <div className="w-full md:w-[400px] lg:w-[480px] shrink-0 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="self-start px-4 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#A78BFA] bg-[#7C3AED]/10 border border-[#7C3AED]/30">
              {t.contact.badge}
            </span>
            
            <h2 className="text-[clamp(2.5rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-1.5px] text-white">
              {t.contact.titleNormal} <span className="text-[#A78BFA]">{t.contact.titleAccent}</span>
            </h2>
            
            <p className="text-[0.95rem] leading-[1.75] text-[#9D8EC5]">
              {t.contact.description}
            </p>
            
            <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-transparent mt-1" />
          </div>

          <div className="flex flex-col gap-4 mt-4 text-[0.85rem] text-[#9D8EC5]">
            
            {/* Téléphone */}
            <div className="flex items-center gap-3.5">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t.contact.phoneValue}</span>
            </div>

            {/* Gmail */}
            <a 
              href={`mailto:${t.contact.emailValue}`}
              className="flex items-center gap-3.5 hover:text-white transition-colors"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{t.contact.emailValue}</span>
            </a>

            {/* LinkedIn */}
            <a 
              href={`https://${t.contact.linkedinValue}`}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3.5 hover:text-[#A78BFA] transition-colors"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>{t.contact.linkedinValue}</span>
            </a>

          </div>
        </div>

        <form 
          className="w-full md:flex-1 max-w-[600px] flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-[0.75rem] font-semibold tracking-[0.1em] text-[#9D8EC5] uppercase ml-1">
              {t.contact.labelUsername}
            </label>
            <input
              type="text"
              id="username"
              required
              placeholder={t.contact.placeholderUsername}
              className="w-full bg-[#1A1530]/60 border border-[#7C3AED]/25 rounded-xl px-4 py-4 text-[0.95rem] text-white placeholder-[#9D8EC5]/30 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]/30 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="objective" className="text-[0.75rem] font-semibold tracking-[0.1em] text-[#9D8EC5] uppercase ml-1">
              {t.contact.labelObjective}
            </label>
            <input
              type="text"
              id="objective"
              required
              placeholder={t.contact.placeholderObjective}
              className="w-full bg-[#1A1530]/60 border border-[#7C3AED]/25 rounded-xl px-4 py-4 text-[0.95rem] text-white placeholder-[#9D8EC5]/30 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]/30 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-[0.75rem] font-semibold tracking-[0.1em] text-[#9D8EC5] uppercase ml-1">
              {t.contact.labelDescription}
            </label>
            <textarea
              id="description"
              required
              rows={6}
              placeholder={t.contact.placeholderDescription}
              className="w-full bg-[#1A1530]/60 border border-[#7C3AED]/25 rounded-xl px-4 py-4 text-[0.95rem] text-white placeholder-[#9D8EC5]/30 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]/30 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start px-8 py-4 mt-2 rounded-xl text-[0.8rem] font-bold uppercase tracking-[0.15em] bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C4B5FD] hover:bg-[#7C3AED] hover:text-white transition-all duration-200 shadow-sm shadow-[#7C3AED]/10"
          >
            {t.contact.send}
          </button>

        </form>
        
      </div>
    </section>
  );
}