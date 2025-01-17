import { Card, CardContent } from "@/components/ui/card";

export const PaymentMethods = () => {
  const methods = [
    {
      name: "Perfect Money",
      image: "/payment-logos/perfect-money.png",
    },
    {
      name: "Coinpayments",
      image: "/payment-logos/coinpayments.png",
    },
    {
      name: "Advcash",
      image: "/payment-logos/advcash.png",
    },
    {
      name: "Payeer",
      image: "/payment-logos/payeer.png",
    },
    {
      name: "Best Change",
      image: "/payment-logos/bestchange.png",
    },
    {
      name: "Block Chain",
      image: "/payment-logos/blockchain.png",
    },
    {
      name: "Coin Base",
      image: "/payment-logos/coinbase.png",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Payment Methods
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We support multiple payment methods for your convenience
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/50 group"
            >
              <CardContent className="p-4 flex flex-col items-center justify-center min-h-[140px] space-y-3">
                <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
                  <img 
                    src={method.image} 
                    alt={method.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <span className="font-semibold text-center text-sm text-gray-700">
                  {method.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};