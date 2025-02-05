import React, { createContext, useContext, useState } from 'react';

export type Language = string;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.howToInvest': 'How to Invest',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    'nav.admin': 'Admin Panel',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about Simplex\'s cryptocurrency investment platform',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.contact': 'Contacto',
    'nav.howToInvest': 'Cómo Invertir',
    'nav.login': 'Iniciar Sesión',
    'nav.signup': 'Registrarse',
    'nav.dashboard': 'Panel de Control',
    'nav.admin': 'Panel de Administración',
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Encuentre respuestas a preguntas comunes sobre la plataforma de inversión en criptomonedas de Simplex',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.howToInvest': 'Comment Investir',
    'nav.login': 'Connexion',
    'nav.signup': 'S\'inscrire',
    'nav.dashboard': 'Tableau de Bord',
    'nav.admin': 'Panneau d\'administration',
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Trouvez des réponses aux questions courantes sur la plateforme d\'investissement en cryptomonnaie de Simplex',
  },
  // Add more languages
  de: { /* German translations */ },
  it: { /* Italian translations */ },
  pt: { /* Portuguese translations */ },
  nl: { /* Dutch translations */ },
  pl: { /* Polish translations */ },
  ru: { /* Russian translations */ },
  ar: { /* Arabic translations */ },
  hi: { /* Hindi translations */ },
  zh: { /* Chinese translations */ },
  ja: { /* Japanese translations */ },
  ko: { /* Korean translations */ },
  tr: { /* Turkish translations */ },
  vi: { /* Vietnamese translations */ },
  th: { /* Thai translations */ },
  id: { /* Indonesian translations */ },
  ms: { /* Malay translations */ },
  fil: { /* Filipino translations */ },
  bn: { /* Bengali translations */ },
  ur: { /* Urdu translations */ },
  fa: { /* Persian translations */ },
  he: { /* Hebrew translations */ },
  el: { /* Greek translations */ },
  sv: { /* Swedish translations */ },
  da: { /* Danish translations */ },
  fi: { /* Finnish translations */ },
  no: { /* Norwegian translations */ },
  cs: { /* Czech translations */ },
  hu: { /* Hungarian translations */ },
  ro: { /* Romanian translations */ },
  bg: { /* Bulgarian translations */ },
  uk: { /* Ukrainian translations */ },
  hr: { /* Croatian translations */ },
  sr: { /* Serbian translations */ },
  sk: { /* Slovak translations */ },
};

const languageNames = {
  en: '🇺🇸 English',
  es: '🇪🇸 Español',
  fr: '🇫🇷 Français',
  de: '🇩🇪 Deutsch',
  it: '🇮🇹 Italiano',
  pt: '🇵🇹 Português',
  nl: '🇳🇱 Nederlands',
  pl: '🇵🇱 Polski',
  ru: '🇷🇺 Русский',
  ar: '🇸🇦 العربية',
  hi: '🇮🇳 हिन्दी',
  zh: '🇨🇳 中文',
  ja: '🇯🇵 日本語',
  ko: '🇰🇷 한국어',
  tr: '🇹🇷 Türkçe',
  vi: '🇻🇳 Tiếng Việt',
  th: '🇹🇭 ไทย',
  id: '🇮🇩 Bahasa Indonesia',
  ms: '🇲🇾 Bahasa Melayu',
  fil: '🇵🇭 Filipino',
  bn: '🇧🇩 বাংলা',
  ur: '🇵🇰 اردو',
  fa: '🇮🇷 فارسی',
  he: '🇮🇱 עברית',
  el: '🇬🇷 Ελληνικά',
  sv: '🇸🇪 Svenska',
  da: '🇩🇰 Dansk',
  fi: '🇫🇮 Suomi',
  no: '🇳🇴 Norsk',
  cs: '🇨🇿 Čeština',
  hu: '🇭🇺 Magyar',
  ro: '🇷🇴 Română',
  bg: '🇧🇬 Български',
  uk: '🇺🇦 Українська',
  hr: '🇭🇷 Hrvatski',
  sr: '🇷🇸 Српски',
  sk: '🇸🇰 Slovenčina',
};

export { languageNames };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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