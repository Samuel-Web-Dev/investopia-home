import { LogIn, UserPlus, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        bg-primary-dark/95 text-white py-4 px-6 fixed w-full top-0 z-50 
        transition-all duration-300 ease-in-out animate-fadeIn
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
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/about" 
            className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn delay-200"
          >
            <Info className="w-4 h-4" />
            About
          </Link>
          <Link 
            to="/faq" 
            className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 animate-fadeIn delay-300"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </Link>
          <Button 
            variant="outline" 
            asChild 
            className="text-accent border-accent hover:bg-accent hover:text-white transition-all duration-300 animate-fadeIn delay-400"
          >
            <Link to="/login" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </Button>
          <Button 
            asChild 
            className="bg-accent hover:bg-accent/90 transition-all duration-300 animate-fadeIn delay-500"
          >
            <Link to="/signup" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};