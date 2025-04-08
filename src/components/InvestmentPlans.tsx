import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InvestmentPlans = () => {
  const navigate = useNavigate()
  const plans = [
    {
      name: "Starter Plan",
      returns: "10%",
      duration: "24 Hours",
      min: 200,
      max: 2999,
      commission: "2.5%",
      features: ["Instant Withdrawals", "24/7 Support", "Real-time Tracking"],
    },
    {
      name: "Pro Plan",
      returns: "35%",
      duration: "48 Hours",
      min: 3000,
      max: 4999,
      commission: "5%",
      features: ["Priority Support", "Advanced Analytics", "Referral Bonuses"],
    },
    {
      name: "Advanced Plan",
      returns: "50%",
      duration: "72 Hours",
      min: 5000,
      max: "Unlimited",
      commission: "10%",
      features: ["VIP Support", "Custom Strategy", "Maximum Returns"],
    },
  ];

  const handleChoosePlan = () => {
    navigate('/investor/dashboard')
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Investment Plans
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect investment plan that suits your goals and start earning returns in as little as 24 hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                index === 1 ? 'border-accent shadow-lg' : 'hover:border-accent/50'
              }`}
            >
              {index === 1 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm animate-pulse">
                    Popular
                  </span>
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent">{plan.returns}</span>
                  <span className="text-gray-600"> returns in</span>
                  <div className="flex items-center gap-2 mt-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{plan.duration}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Min: ${plan.min}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Max: ${plan.max}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Ref Commission: {plan.commission}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={handleChoosePlan} className="w-full bg-accent hover:bg-accent/90 text-white group">
                  Choose Plan
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};