import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-dark via-purple-900 to-primary text-white pt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Welcome to Simplex
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Your trusted partner in cryptocurrency investment and trading
              </p>
              <Button className="bg-accent hover:bg-accent/90">
                Start Your Journey <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Professional Investor"
                className="rounded-lg shadow-xl h-[400px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Simplex Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-dark">About Simplex</h2>
              <p className="text-gray-600">
                Crypto-currencies are set to take the online world by storm as their popularity 
                and uses increases and its financial future seems veritably bright around the globe. 
                With the arrival of crypto-curriences, we are moving to the world that uses currencies 
                secured by crypto-graphical systems.
              </p>
              <p className="text-gray-600">
                Since the creation of the virtual currency Bitcoin, dozens of companies and startups 
                founded and have been constantly developing in the BTC field which helped to strengthen 
                the currency and set up successful projects that harnessed the power lies within the 
                Blockchain to create attractive products.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Crypto Investment"
                className="rounded-lg shadow-xl h-[300px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are & What We Do Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Who We Are</h3>
              <p className="text-gray-600 mb-4">
                Simplex is an online investment platform, which welcomes all the investors worldwide. 
                We are founded by a team of qualified experts, professional traders and analysts 
                specialized in the field of crypto-currency trading having more than 6 years of 
                trading experience in crypto-currency market with successful trading records.
              </p>
              <p className="text-gray-600">
                At Simplex, we believe in trust and transparency. Our key objective is to increase 
                return on your investment through our platform. The knowledge and practical skills 
                of our experts formulate strategic advanced plans of investment, which guarantee 
                success on your investments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">What We Do</h3>
              <p className="text-gray-600 mb-4">
                Simplex is engaged with leading crypto currency trading. It has no doubt that market 
                of Bitcoin is incredibly increasing, So we offer our customers different and suitable 
                investment plans tailored to meet the needs of both small and big investors.
              </p>
              <p className="text-gray-600">
                We ensure maximal profit to each of our investors and keep possible risks by effective 
                ways to their investments at the lowest levels. We put all the efforts to secure the 
                deposit of investments upon achieving maximum business profitability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Invest With Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
            Why Invest With Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg italic">
                "Bitcoin is merely not a money, It's a movement - a crusade in the costume of currency. 
                Bitcoin has changed the people's attitude and there are many supporters who believe 
                that crypto-currency is the future."
              </p>
              <p className="text-gray-600">
                Considering the futuristic demand, Simplex has come up with an automated platform 
                dedicated to emerging Bitcoin market investments guided by strong and dynamic technical 
                and financial management team fruitful to work in field of crypto-currency trading.
              </p>
              <p className="text-gray-600">
                We offer unique and amazing investment plans to people worldwide who want to be our 
                investors to get reliable and stable source of income. Your accruals will be progressive 
                daily on an ongoing basis and makes profit every hour with an ability to withdraw any time. 
                Our proposal is a best opportunity for Bitcoin beginners and excellent option for 
                experienced investors.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Team Discussion"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Business Meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Stats />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default About;
