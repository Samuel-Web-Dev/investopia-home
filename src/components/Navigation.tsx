
import { LogIn, UserPlus, Info, HelpCircle, Menu, Phone, Coins, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState, useCallback, useMemo } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = useMemo(() => [
    { to: "/about", icon: <Info className="w-4 h-4" />, label: t('nav.about') },
    { to: "/faq", icon: <HelpCircle className="w-4 h-4" />, label: t('nav.faq') },
    { to: "/contact", icon: <Phone className="w-4 h-4" />, label: t('nav.contact') },
    { to: "/how-to-invest", icon: <Coins className="w-4 h-4" />, label: t('nav.howToInvest') },
    { to: "/dashboard", icon: <Menu className="w-4 h-4" />, label: t('nav.dashboard') },
    { to: "/admin", icon: <Shield className="w-4 h-4" />, label: t('nav.admin') },
  ], [t]);

  return (
    <nav 
      className={`
        fixed w-full top-0 left-0 right-0 z-50
        bg-primary-dark/95 text-white py-4 px-6
        transition-all duration-300 ease-in-out will-change-transform
        ${scrolled ? 'shadow-lg backdrop-blur-sm' : ''}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105 duration-300"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="animate-fadeIn delay-100">Simplex</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.to} 
              className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          <Button 
            variant="outline" 
            asChild 
            className="text-accent border-accent hover:bg-accent hover:text-white transition-all duration-300"
          >
            <Link to="/login" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              {t('nav.login')}
            </Link>
          </Button>
          <Button 
            asChild 
            className="bg-accent hover:bg-accent/90 transition-all duration-300"
          >
            <Link to="/signup" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              {t('nav.signup')}
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary-dark text-white">
              <div className="flex flex-col gap-4 pt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/login"
                  className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-2 p-2 bg-accent hover:bg-accent/90 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserPlus className="w-4 h-4" />
                  {t('nav.signup')}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
