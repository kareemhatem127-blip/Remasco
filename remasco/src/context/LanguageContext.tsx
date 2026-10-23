import { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  lang: Language;
  t: typeof translations.en;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('remasko_lang');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('remasko_lang', lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};
