import { createContext, useState, useContext, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';

export type Section = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

interface ActiveSectionContextProps {
  activeSection: Section;
  changeSection: (section: Section) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextProps | undefined>(undefined);

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const changeSection = useCallback((section: Section) => {
    setActiveSection(section);
  }, []);

  const value = useMemo(
    () => ({ activeSection, changeSection }),
    [activeSection, changeSection]
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};