import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Percent } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-primary-dark text-white py-24 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Invest in Crypto & Earn Daily Returns
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Start earning up to 50% returns in just 24-72 hours with our secure and reliable crypto investment plans.
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
              Start Investing Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              View Plans
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent" />
    </div>
  );
};