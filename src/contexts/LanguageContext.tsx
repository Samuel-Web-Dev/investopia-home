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
    'dashboard.totalBalance': 'Total Balance',
    'dashboard.activeInvestments': 'Active Investments',
    'dashboard.totalValue': 'Total value',
    'dashboard.earningsOverview': 'Earnings Overview',
    'dashboard.recentDeposit': 'Recent Deposit',
    'dashboard.recentWithdrawal': 'Recent Withdrawal',
    'dashboard.recentInvestment': 'Recent Investment',
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
    'dashboard.totalBalance': 'Balance Total',
    'dashboard.activeInvestments': 'Inversiones Activas',
    'dashboard.totalValue': 'Valor total',
    'dashboard.earningsOverview': 'Resumen de Ganancias',
    'dashboard.recentDeposit': 'Depósito Reciente',
    'dashboard.recentWithdrawal': 'Retiro Reciente',
    'dashboard.recentInvestment': 'Inversión Reciente',
  },
  // Add more languages as needed
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

export { languageNames };
