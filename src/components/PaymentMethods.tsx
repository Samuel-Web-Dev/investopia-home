import { Card, CardContent } from "@/components/ui/card";

export const PaymentMethods = () => {
  const methods = [
    "Perfect Money",
    "Coinpayments",
    "Advcash",
    "Payeer",
    "Best Change",
    "Block Chain",
    "Coin Base",
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-center min-h-[100px]">
                <span className="font-semibold text-center">{method}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};