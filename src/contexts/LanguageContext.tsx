import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr';

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
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about Simplex\'s cryptocurrency investment platform',
    // Add more translations as needed
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
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Encuentre respuestas a preguntas comunes sobre la plataforma de inversión en criptomonedas de Simplex',
    // Add more translations as needed
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
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Trouvez des réponses aux questions courantes sur la plateforme d\'investissement en cryptomonnaie de Simplex',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
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