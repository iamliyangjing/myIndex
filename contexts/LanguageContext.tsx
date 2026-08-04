import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'cn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (en: string, cn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Key for localStorage
const LANGUAGE_STORAGE_KEY = 'myindex-language';

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (saved === 'en' || saved === 'cn') {
    return saved;
  }
  // Fallback to system language
  const sysLang = navigator.language || '';
  return sysLang.toLowerCase().startsWith('zh') ? 'cn' : 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'cn' : 'en'));
  };

  // Persist language preference
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  // Helper function to return string based on current language
  const t = (en: string, cn: string) => {
    return language === 'en' ? en : cn;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
