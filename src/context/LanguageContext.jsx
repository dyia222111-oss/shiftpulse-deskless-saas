import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    title: "Deskless Workforce Hub",
    activeShift: "Active Shift",
    tasks: "Field Tasks",
    announcements: "Shift Bulletin",
    clockIn: "Clock In",
    clockOut: "Clock Out",
    dir: "ltr"
  },
  de: {
    title: "Schicht- & Team-Hub",
    activeShift: "Aktive Schicht",
    tasks: "Aufgaben im Feld",
    announcements: "Schicht-Mitteilungen",
    clockIn: "Einstempeln",
    clockOut: "Ausstempeln",
    dir: "ltr"
  },
  ar: {
    title: "منصة العمال الميدانيين",
    activeShift: "الوردية الحالية",
    tasks: "المهام الميدانية",
    announcements: "نشريات الوردية",
    clockIn: "بدء الوردية",
    clockOut: "إنهاء الوردية",
    dir: "rtl"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.dir = translations[lang].dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir: translations[lang].dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);