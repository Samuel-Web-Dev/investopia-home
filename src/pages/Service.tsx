import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, Lock, Briefcase, Headphones, 
  Shield, Users, TrendingUp, DollarSign,
  PieChart, LineChart, ArrowRight
} from "lucide-react";

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Investment Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive investment solutions tailored to your financial goals. 
            From portfolio management to personalized advisory services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="w-6 h-6 text-primary" />
                Portfolio Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Professional portfolio management with automated rebalancing and tax-efficient strategies.
                Our expert team ensures your investments are optimized for maximum returns.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Secure Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Execute trades securely with real-time market data and advanced security measures.
                Bank-level encryption protects your investments 24/7.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Investment Advisory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Personalized investment advice from experienced financial advisors.
                Get expert guidance tailored to your unique financial situation.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Advanced risk assessment and management strategies to protect your investments.
                Regular portfolio monitoring and rebalancing.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-6 h-6 text-primary" />
                Diversification Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Strategic asset allocation across multiple investment classes.
                Access to global markets and alternative investments.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="w-6 h-6 text-primary" />
                24/7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Round-the-clock customer support to assist you with any questions or concerns.
                Dedicated account managers for premium clients.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary-dark text-white rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
              <p className="text-gray-300 mb-6">
                Join thousands of successful investors who trust our platform for their financial future.
                Get started today with our professional investment services.
              </p>
              <Button className="bg-white text-primary-dark hover:bg-gray-100">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/20 p-6 rounded-xl">
                <Users className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold mb-1">10K+</h3>
                <p className="text-gray-300">Active Clients</p>
              </div>
              <div className="bg-primary/20 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold mb-1">25%</h3>
                <p className="text-gray-300">Avg. Returns</p>
              </div>
              <div className="bg-primary/20 p-6 rounded-xl">
                <DollarSign className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold mb-1">$1B+</h3>
                <p className="text-gray-300">Assets Managed</p>
              </div>
              <div className="bg-primary/20 p-6 rounded-xl">
                <LineChart className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold mb-1">15+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;