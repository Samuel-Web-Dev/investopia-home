import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Percent } from "lucide-react";
import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroTexts = [
  "Invest in Crypto & Earn Daily Returns",
  "Secure Your Future with Crypto Investment",
  "Start Your Crypto Journey Today",
  "Join the Digital Currency Revolution"
] as const;

const heroImages = [
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
] as const;

export const Hero = ({ isAuthenticated }) => {
  const navigate = useNavigate()
  // Memoize carousel plugin to prevent recreation on each render
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    []
  );

  // Memoize button click handlers
  const handleStartInvesting = useCallback(() => {
    // Handle start investing action
     if(isAuthenticated) {
       navigate('/investor/dashboard')
     } else {
       navigate('/login')
     }
  }, [isAuthenticated, navigate]);

  const handleViewPlans = useCallback(() => {
    navigate('/investor/dashboard')
  }, [navigate]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-purple-900 to-primary text-white mt-16 will-change-transform">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin]}
              className="w-full"
            >
              <CarouselContent>
                {heroTexts.map((text, index) => (
                  <CarouselItem key={index} className="will-change-transform">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">{text}</h1>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in">
              Start earning up to 50% returns in just 24-72 hours with our secure and reliable crypto investment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                onClick={handleStartInvesting}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-4 text-lg rounded-lg flex items-center justify-center gap-2 
                  transition-transform duration-300 hover:translate-x-1 hover:shadow-lg w-full sm:w-auto will-change-transform"
              >
                Start Investing Now
                <ArrowRight className="w-5 h-5 animate-bounce" />
              </Button>
              <Button 
                variant="outline"
                onClick={handleViewPlans}
                className="px-6 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white 
                  transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto will-change-transform"
              >
                View Plans
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 7000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index} className="will-change-transform">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={image} 
                        alt="Investor"
                        className="w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Optimized background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 will-change-transform" />
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl will-change-transform" 
        style={{ animation: 'pulse 4s ease-in-out infinite' }}
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl will-change-transform" 
        style={{ animation: 'pulse 4s ease-in-out infinite 0.5s' }}
      />

      {/* Optimized floating elements */}
      {[
        { Icon: DollarSign, position: "top-1/4 right-1/4", delay: "0s" },
        { Icon: Percent, position: "bottom-1/4 right-1/3", delay: "0.5s" },
        { Icon: Clock, position: "top-1/3 left-1/4", delay: "1s" }
      ].map(({ Icon, position, delay }, index) => (
        <div 
          key={index}
          className={`absolute ${position} will-change-transform`}
          style={{ animation: `float 6s ease-in-out infinite ${delay}` }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <Icon className="w-6 h-6 text-accent" />
          </div>
        </div>
      ))}
    </div>
  );
};
