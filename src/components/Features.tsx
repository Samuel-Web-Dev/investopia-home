import { Briefcase, Shield, TrendingUp, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Portfolio Management",
      description: "Automated rebalancing and tax-efficient investing strategies.",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your investments are protected with state-of-the-art security.",
    },
    {
      icon: Briefcase,
      title: "Diversified Investments",
      description: "Access to stocks, bonds, ETFs, and alternative investments.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get support from our team of financial advisors.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          Why Choose Our Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};