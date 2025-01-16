import { Hero } from "@/components/Hero";
import { InvestmentPlans } from "@/components/InvestmentPlans";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CompanyDetails } from "@/components/CompanyDetails";
import { Testimonials } from "@/components/Testimonials";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InvestmentPlans />
      <CompanyDetails />
      <Features />
      <Stats />
      <Testimonials />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;