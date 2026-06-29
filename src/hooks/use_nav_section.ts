import { useActiveSection } from '../context/header_active_section_context';
import type { Section } from '../context/header_active_section_context';

export const useNavSection = () => {
  const { activeSection, changeSection } = useActiveSection();

  const isActive = (section: Section) => activeSection === section;

  const handleSectionClick = (section: Section) => {
    changeSection(section);
  };

  return { isActive, handleSectionClick };
};