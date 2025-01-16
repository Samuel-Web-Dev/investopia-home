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
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Best Features</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide the best features and security for your crypto investments
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};