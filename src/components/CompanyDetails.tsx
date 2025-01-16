import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Building } from "lucide-react";

export const CompanyDetails = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              The founders of our world-class cryptocurrency company got to know each other by using the same platform for buying and selling Bitcoins. As our crypto Trading company and its user base grew, new trade group were built up and several additional people hired, specifically programmers and engineers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The current members of our Epaisa team come from different scientific disciplines, but our common faith in cryptocurrencies has brought us together. We are all strong believers in the future of digital currencies and we love being part of this growing community!
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold">Expert Team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold">Market Leaders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold">Global Presence</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60" 
              alt="Team meeting" 
              className="rounded-xl col-span-2 animate-fade-in"
            />
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=60" 
              alt="Office" 
              className="rounded-xl animate-fade-in delay-100"
            />
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&auto=format&fit=crop&q=60" 
              alt="Analysis" 
              className="rounded-xl animate-fade-in delay-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};