import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, DollarSign, Headphones, Server, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Earn Hourly Profit",
      description: "Get returns on your investment as quickly as every hour",
    },
    {
      icon: DollarSign,
      title: "Instant Payments",
      description: "Deposit and withdraw your funds instantly",
    },
    {
      icon: Shield,
      title: "SSL Security",
      description: "Your investments are protected by EV SSL certification",
    },
    {
      icon: Server,
      title: "DDOS Protection",
      description: "Strong protection against DDOS attacks",
    },
    {
      icon: Users,
      title: "Registered Company",
      description: "Fully registered and compliant company",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support and assistance",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Best Features
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide the best features and security for your crypto investments
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/50 group"
            >
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};