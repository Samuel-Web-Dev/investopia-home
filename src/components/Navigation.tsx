import { LogIn, UserPlus, Info, Settings, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="bg-primary-dark text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">InvestPro</Link>
        <div className="flex items-center gap-6">
          <Link to="/about" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Info className="w-4 h-4" />
            About
          </Link>
          <Link to="/service" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Settings className="w-4 h-4" />
            Services
          </Link>
          <Link to="/design" className="flex items-center gap-2 hover:text-primary transition-colors">
            <LayoutGrid className="w-4 h-4" />
            Design
          </Link>
          <Button variant="outline" asChild className="text-white hover:text-primary-dark">
            <Link to="/login" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
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