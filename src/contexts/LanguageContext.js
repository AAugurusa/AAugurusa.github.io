import { createContext, useContext, useMemo, useState } from 'react';
import app from '../translations/pages/app.json';
import projects from '../translations/pages/projects.json';
import extra from '../translations/pages/extra.json';
import aboutMe from '../translations/pages/aboutMe.json';
import contactModal from '../translations/pages/contactModal.json';
import projectCard from '../translations/pages/projectCard.json';
import contactPage from '../translations/pages/contactPage.json';
import projectsData from '../translations/pages/projectsData.json';

const sources = {
  app,
  projects,
  extra,
  aboutMe,
  contactModal,
  projectCard,
  contactPage,
  projectsData,
};

const buildTranslations = (lang) =>
  Object.fromEntries(
    Object.entries(sources).map(([key, value]) => [key, value[lang] || value.en || {}])
  );

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  translations: buildTranslations('en'),
  t: (path) => path,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const value = useMemo(() => {
    const translations = buildTranslations(lang);

    const t = (path) => {
      const parts = path.split('.');
      let cur = translations;
      for (let p of parts) {
        if (!cur) return path;
        cur = cur[p];
      }
      return cur ?? path;
    };

    return { lang, setLang, translations, t };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
