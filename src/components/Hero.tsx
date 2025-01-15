import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-primary-dark text-white py-20 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Invest in Your Future with Confidence
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Access professional investment strategies, diversified portfolios, and expert guidance all in one platform.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
            Start Investing Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent" />
    </div>
  );
};