import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Header} from './components/header/Header'
import AboutSection from './components/about/about'
import SkillsSection from './components/skills/skills'
import HeroSection from './components/hero/hero'
import {ActiveSectionProvider} from './context/header_active_section_context'
import {LanguageProvider} from './context/langage_context'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className=" bg-black h-screen w-screen">
      <ActiveSectionProvider>
      <LanguageProvider>
        <Header></Header>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
      </LanguageProvider>
      </ActiveSectionProvider>
    </main>
  </StrictMode>,
)
