import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About InvestPro</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">15+ years of investment excellence and market expertise</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-600">Bank-level security protecting your investments</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">100,000+ satisfied investors trust our platform</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            InvestPro is a leading investment platform that combines cutting-edge technology with financial expertise to help you achieve your investment goals. Our mission is to make professional investing accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;