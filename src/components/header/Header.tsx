import React from 'react';
import { AnimatedNavLink } from './AnimatedNavLink';
import { useNavSection } from '../../hooks/use_nav_section';
import { useTranslation } from '../../hooks/use_translation';
import type { Section } from '../../context/header_active_section_context';

export const Header: React.FC = () => {
  const { isActive, handleSectionClick } = useNavSection();
  const { t, language, toggleLanguage } = useTranslation();

  const NAV_ITEMS: { label: string; section: Section }[] = [
    { label: t.nav.home,     section: 'hero'     },
    { label: t.nav.about,    section: 'about'    },
    { label: t.nav.skills,   section: 'skills'   },
    { label: t.nav.projects, section: 'projects' },
    { label: t.nav.contact,  section: 'contact'  },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-md border-b border-white/5">
      <div className="max-w-8xl mx-auto px-10  h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <a href="#home" className="text-[20px] font-black tracking-widest text-white">
            AMS<span className="text-[#a855f7] drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">NIAINA</span>
          </a>
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map(({ label, section }) => (
            <AnimatedNavLink
              key={section}
              label={label}
              isActive={isActive(section)}
              onClick={() => handleSectionClick(section)}
            />
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="p-2 text-zinc-400 hover:text-white transition-colors text-xs font-semibold tracking-wider flex items-center gap-1 border border-zinc-800 rounded-md bg-zinc-950/50"
            aria-label="Changer de langue"
          >
            <span>{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          <button className="p-2 text-zinc-400 hover:text-white transition-colors border border-zinc-800 rounded-md bg-zinc-950/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>

          <a
            href="#download-cv"
            className="bg-[#a855f7] text-white font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 hover:bg-[#9333ea] rounded-md"
          >
            {t.nav.cv}
          </a>
        </div>
      </div>
    </header>
  );
};