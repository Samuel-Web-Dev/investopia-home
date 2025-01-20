import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Percent } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-purple-900 to-primary text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {heroTexts.map((text, index) => (
                  <CarouselItem key={index}>
                    <h1 className="text-5xl font-bold mb-6">{text}</h1>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 7000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={image} 
                        alt="Investor"
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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