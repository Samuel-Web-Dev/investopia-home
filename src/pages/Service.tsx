import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Lock, Briefcase, Headphones } from "lucide-react";

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="w-6 h-6 text-primary" />
                Portfolio Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Professional portfolio management with automated rebalancing and tax-efficient strategies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Secure Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Execute trades securely with real-time market data and advanced security measures.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Investment Advisory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Personalized investment advice from experienced financial advisors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="w-6 h-6 text-primary" />
                24/7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Round-the-clock customer support to assist you with any questions or concerns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;