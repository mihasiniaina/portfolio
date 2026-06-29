import { useLanguage } from '../context/langage_context';
import { translations } from '../data/translation_data';

export const useTranslation = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return { t, language, toggleLanguage };
};