import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Percent } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-purple-900 to-primary text-white py-24 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Invest in Crypto & Earn Daily Returns
          </h1>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in delay-100">
            Start earning up to 50% returns in just 24-72 hours with our secure and reliable crypto investment plans.
          </p>
          <div className="flex gap-4 animate-fade-in delay-200">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transition-transform hover:scale-105">
              Start Investing Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-white transition-all hover:scale-105">
              View Plans
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    </div>
  );
};