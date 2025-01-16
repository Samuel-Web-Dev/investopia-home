import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Users, ArrowRight } from "lucide-react";

export const InvestmentPlans = () => {
  const plans = [
    {
      name: "Starter Plan",
      returns: "10%",
      duration: "24 Hours",
      min: 20,
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

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Investment Plans</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect investment plan that suits your goals and start earning returns in as little as 24 hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${index === 1 ? 'border-primary' : ''}`}>
              {index === 1 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Popular</span>
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.returns}</span>
                  <span className="text-gray-600"> returns in</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{plan.duration}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span>Min: ${plan.min}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span>Max: ${plan.max}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>Ref Commission: {plan.commission}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Choose Plan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};