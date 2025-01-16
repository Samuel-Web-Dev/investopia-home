import { Card, CardContent } from "@/components/ui/card";

export const PaymentMethods = () => {
  const methods = [
    {
      name: "Perfect Money",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=300&auto=format&fit=crop&q=60",
    },
    {
      name: "Coinpayments",
      image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=300&auto=format&fit=crop&q=60",
    },
    {
      name: "Advcash",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=300&auto=format&fit=crop&q=60",
    },
    {
      name: "Payeer",
      image: "https://images.unsplash.com/photo-1617791160588-241658c0f566?w=300&auto=format&fit=crop&q=60",
    },
    {
      name: "Best Change",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=300&auto=format&fit=crop&q=60",
    },
    {
      name: "Block Chain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&auto=format&fit=crop&q=60",
    },
    {
      name: "Coin Base",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=300&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Payment Methods</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We support multiple payment methods for your convenience
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-4 flex flex-col items-center justify-center min-h-[140px] space-y-3">
                <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
                  <img 
                    src={method.image} 
                    alt={method.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-center text-sm">
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