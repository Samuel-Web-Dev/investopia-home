
import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr';

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
    'nav.settings': 'Account Settings',
    'dashboard.totalBalance': 'Total Balance',
    'dashboard.activeInvestments': 'Active Investments',
    'dashboard.totalValue': 'Total value',
    'dashboard.earningsOverview': 'Earnings Overview',
    'dashboard.recentDeposit': 'Recent Deposit',
    'dashboard.recentWithdrawal': 'Recent Withdrawal',
    'dashboard.recentInvestment': 'Recent Investment',
    'settings.title': 'Account Settings',
    'settings.name': 'Full Name',
    'settings.email': 'Email',
    'settings.password': 'Password',
    'settings.save': 'Save Changes',
    'settings.success': 'Settings updated successfully',
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
    'nav.settings': 'Configuración de Cuenta',
    'dashboard.totalBalance': 'Balance Total',
    'dashboard.activeInvestments': 'Inversiones Activas',
    'dashboard.totalValue': 'Valor total',
    'dashboard.earningsOverview': 'Resumen de Ganancias',
    'dashboard.recentDeposit': 'Depósito Reciente',
    'dashboard.recentWithdrawal': 'Retiro Reciente',
    'dashboard.recentInvestment': 'Inversión Reciente',
    'settings.title': 'Configuración de Cuenta',
    'settings.name': 'Nombre Completo',
    'settings.email': 'Correo Electrónico',
    'settings.password': 'Contraseña',
    'settings.save': 'Guardar Cambios',
    'settings.success': 'Configuración actualizada con éxito',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.howToInvest': 'Comment Investir',
    'nav.login': 'Connexion',
    'nav.signup': "S'inscrire",
    'nav.dashboard': 'Tableau de Bord',
    'nav.admin': 'Panneau Admin',
    'nav.settings': 'Paramètres du Compte',
    'dashboard.totalBalance': 'Solde Total',
    'dashboard.activeInvestments': 'Investissements Actifs',
    'dashboard.totalValue': 'Valeur totale',
    'dashboard.earningsOverview': 'Aperçu des Gains',
    'dashboard.recentDeposit': 'Dépôt Récent',
    'dashboard.recentWithdrawal': 'Retrait Récent',
    'dashboard.recentInvestment': 'Investissement Récent',
    'settings.title': 'Paramètres du Compte',
    'settings.name': 'Nom Complet',
    'settings.email': 'Email',
    'settings.password': 'Mot de Passe',
    'settings.save': 'Enregistrer les Modifications',
    'settings.success': 'Paramètres mis à jour avec succès',
  }
};

export const languageNames = {
  en: '🇺🇸 English',
  es: '🇪🇸 Español',
  fr: '🇫🇷 Français'
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key as keyof typeof translations['en']] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
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
