import { Button } from "@/components/ui/button";
import { UserPlus, Wallet, Clock, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const HowToInvest = () => {
  const steps = [
    {
      title: "Register",
      description: "Create your account to start investing",
      icon: <UserPlus className="w-12 h-12 text-accent" />,
      action: <Link to="/signup"><Button>Sign Up Now</Button></Link>
    },
    {
      title: "Make a deposit",
      description: "Fund your account to begin investing",
      icon: <Wallet className="w-12 h-12 text-accent" />,
      action: <Link to="/"><Button>Deposit</Button></Link>
    },
    {
      title: "Get Plan Profit",
      description: "Choose your investment plan and earn returns",
      icon: <Clock className="w-12 h-12 text-accent" />,
      action: <Button variant="outline">Wait for Duration</Button>
    },
    {
      title: "Instant Withdrawal",
      description: "Withdraw your earnings instantly",
      icon: <ArrowUpRight className="w-12 h-12 text-accent" />,
      action: <Button>Withdraw</Button>
    }
  ];

  const platforms = {
    market: [
      { name: "CoinBase", url: "https://www.coinbase.com" },
      { name: "BitGo", url: "https://www.bitgo.com" },
      { name: "LocalBitcoins", url: "https://localbitcoins.com" },
      { name: "BitFinex", url: "https://www.bitfinex.com" },
      { name: "Luno", url: "https://www.luno.com" },
      { name: "Cex.io", url: "https://cex.io" }
    ],
    wallets: [
      { name: "Bitcoin Wallet", url: "https://bitcoin.org" },
      { name: "Litecoin Wallet", url: "https://litecoin.org" },
      { name: "Ethereum Wallet", url: "https://ethereum.org" },
      { name: "PerfectMoney", url: "https://perfectmoney.com" },
      { name: "Advcash", url: "https://advcash.com" },
      { name: "Payeer", url: "https://payeer.com" }
    ],
    exchanges: [
      { name: "BestChange", url: "https://www.bestchange.com" },
      { name: "Wex.nz", url: "https://wex.nz" },
      { name: "E-Scrooge", url: "https://e-scrooge.com" },
      { name: "WorldChange", url: "https://worldchange.com" },
      { name: "ChangEX", url: "https://changex.com" },
      { name: "XmlGold", url: "https://xmlgold.eu" }
    ]
  };

  return (
    <div className="min-h-screen">
      <div 
        className="relative bg-cover bg-center bg-no-repeat h-[400px]"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Invest with Simplex
            </h1>
            <p className="text-xl text-gray-200">
              Start your investment journey with our simple step-by-step guide
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  {step.icon}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {step.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Where can I buy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Cryptocurrency Market</h3>
              <div className="space-y-4">
                {platforms.market.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors text-center"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Wallets</h3>
              <div className="space-y-4">
                {platforms.wallets.map((wallet, index) => (
                  <a
                    key={index}
                    href={wallet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors text-center"
                  >
                    {wallet.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Exchange</h3>
              <div className="space-y-4">
                {platforms.exchanges.map((exchange, index) => (
                  <a
                    key={index}
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors text-center"
                  >
                    {exchange.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToInvest;