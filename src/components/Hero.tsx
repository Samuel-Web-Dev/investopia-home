import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Percent } from "lucide-react";
import { useState, useEffect } from "react";

const heroTexts = [
  "Invest in Crypto & Earn Daily Returns",
  "Secure Your Future with Crypto Investment",
  "Start Your Crypto Journey Today",
  "Join the Digital Currency Revolution"
];

const heroImages = [
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
];

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const [isImageFading, setIsImageFading] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsTextFading(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        setIsTextFading(false);
      }, 500);
    }, 5000);

    const imageInterval = setInterval(() => {
      setIsImageFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsImageFading(false);
      }, 500);
    }, 7000);

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-purple-900 to-primary text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h1 
              className={`text-5xl font-bold mb-6 transition-opacity duration-500 ${
                isTextFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {heroTexts[currentTextIndex]}
            </h1>
            <p className="text-xl mb-8 text-gray-300 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
              Start earning up to 50% returns in just 24-72 hours with our secure and reliable crypto investment plans.
            </p>
            <div className="flex gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
              <Button 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 
                  transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
              >
                Start Investing Now
                <ArrowRight className="w-5 h-5 animate-[bounceRight_1s_ease-in-out_infinite]" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-white 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View Plans
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div 
              className={`rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-500 ${
                isImageFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <img 
                src={heroImages[currentImageIndex]} 
                alt="Investor" 
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse" />
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl 
          animate-[pulse_4s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl 
          animate-[pulse_4s_ease-in-out_infinite_0.5s]" 
      />

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 animate-[float_6s_ease-in-out_infinite]">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <DollarSign className="w-6 h-6 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-[float_6s_ease-in-out_infinite_0.5s]">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <Percent className="w-6 h-6 text-accent" />
        </div>
      </div>
      <div className="absolute top-1/3 left-1/4 animate-[float_6s_ease-in-out_infinite_1s]">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <Clock className="w-6 h-6 text-accent" />
        </div>
      </div>
    </div>
  );
};