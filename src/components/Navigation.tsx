import { LogIn, UserPlus, Info, HelpCircle, Menu, Phone, Coins, Shield, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = ({ isAuthenticated }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    navigate("/");
    window.location.reload(); // Ensures state resets after logout
  };


  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navItems = useMemo(() => [
    { to: "/about", icon: <Info className="w-4 h-4" />, label: t('nav.about') },
    { to: "/faq", icon: <HelpCircle className="w-4 h-4" />, label: t('nav.faq') },
    { to: "/contact", icon: <Phone className="w-4 h-4" />, label: t('nav.contact') },
    { to: "/how-to-invest", icon: <Coins className="w-4 h-4" />, label: t('nav.howToInvest') },
  ], [t]);

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-50 bg-primary-dark/95 text-white py-4 px-6 transition-all duration-300 ease-in-out ${scrolled ? 'shadow-lg backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105 duration-300">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="animate-fadeIn delay-100">Simplex</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/investor/dashboard" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
                <Menu className="w-4 h-4" />
                {t('nav.dashboard')}
              </Link>
              <Link to="/contact" className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                      {t('nav.contact')}
                    </Link>
              <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 transition-all duration-300">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </>
          ) : (
            <>
              {navItems.map((item) => (
                <Link key={item.label} to={item.to} className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              <Button variant="outline" asChild className="text-accent border-accent hover:bg-accent hover:text-white transition-all duration-300">
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  {t('nav.login')}
                </Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/90 transition-all duration-300">
                <Link to="/signup" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  {t('nav.signup')}
                </Link>
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary-dark text-white">
              <div className="flex flex-col gap-4 pt-10">
                {isAuthenticated ? (
                  <>
                  <Link to="/investor/dashboard" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn">
            <Menu className="w-4 h-4" />
            Dashboard
          </Link>
                    <Link to="/contact" className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                      {t('nav.contact')}
                    </Link>
                    <button onClick={handleLogout} className="flex items-center gap-2 p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    {navItems.map((item) => (
                      <Link key={item.label} to={item.to} className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors">
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                    <Link to="/login" className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors">
                      <LogIn className="w-4 h-4" />
                      {t('nav.login')}
                    </Link>
                    <Link to="/signup" className="flex items-center gap-2 p-2 bg-accent hover:bg-accent/90 rounded-lg transition-colors">
                      <UserPlus className="w-4 h-4" />
                      {t('nav.signup')}
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
