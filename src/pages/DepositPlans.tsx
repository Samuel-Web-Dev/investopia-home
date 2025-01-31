import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const DepositPlans = () => {
  const navigate = useNavigate();
  const userBalance = "$5,000.00"; // This would come from your user state/context

  const plans = [
    {
      name: "Starter Plan",
      returns: "10%",
      duration: "24 Hours",
      min: 20,
      max: 2999,
      features: ["Instant Withdrawals", "24/7 Support", "Real-time Tracking"],
    },
    {
      name: "Pro Plan",
      returns: "35%",
      duration: "48 Hours",
      min: 3000,
      max: 4999,
      features: ["Priority Support", "Advanced Analytics", "Referral Bonuses"],
    },
    {
      name: "Advanced Plan",
      returns: "50%",
      duration: "72 Hours",
      min: 5000,
      max: "Unlimited",
      features: ["VIP Support", "Custom Strategy", "Maximum Returns"],
    },
  ];

  const handlePlanSelect = (plan: typeof plans[0]) => {
    navigate('/deposit-confirm', { 
      state: { 
        plan,
        amount: 0 // This will be updated in the next step
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Choose Your Investment Plan</h1>
          <p className="text-gray-600 mt-2">Current Balance: {userBalance}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                index === 1 ? 'border-accent shadow-lg' : 'hover:border-accent/50'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent">{plan.returns}</span>
                  <span className="text-gray-600"> / {plan.duration}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600">Min: ${plan.min}</p>
                  <p className="text-gray-600">Max: ${plan.max}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white group"
                  onClick={() => handlePlanSelect(plan)}
                >
                  Select Plan
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Bitcoin', 'Ethereum', 'USDT', 'Litecoin', 'Bybit'].map((method, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg">
                <span className="font-medium">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPlans;