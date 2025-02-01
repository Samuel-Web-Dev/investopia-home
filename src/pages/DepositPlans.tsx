import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const DepositPlans = () => {
  const navigate = useNavigate();
  const userBalance = "$5,000.00";
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amount, setAmount] = useState("");

  const plans = [
    {
      name: "Starter Plan",
      returns: "10%",
      duration: "24 Hours",
      min: 20,
      max: 2999,
    },
    {
      name: "Pro Plan",
      returns: "35%",
      duration: "48 Hours",
      min: 3000,
      max: 4999,
    },
    {
      name: "Advanced Plan",
      returns: "50%",
      duration: "72 Hours",
      min: 5000,
      max: "Unlimited",
    },
  ];

  const paymentMethods = [
    { id: "bitcoin", name: "Bitcoin" },
    { id: "ethereum", name: "Ethereum" },
    { id: "usdt", name: "USDT" },
    { id: "litecoin", name: "Litecoin" },
    { id: "bybit", name: "Bybit" },
  ];

  const handleSubmit = () => {
    if (!selectedPlan || !selectedPayment || !amount) {
      return;
    }
    
    const selectedPlanDetails = plans.find(plan => plan.name === selectedPlan);
    
    navigate('/deposit-confirm', {
      state: {
        plan: selectedPlanDetails,
        paymentMethod: selectedPayment,
        amount: amount
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Make a Deposit</h1>
          <p className="text-gray-600 mt-2">Current Balance: {userBalance}</p>
        </div>

        <div className="space-y-8">
          {/* Investment Plans */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Select Investment Plan</h2>
              <RadioGroup
                value={selectedPlan}
                onValueChange={setSelectedPlan}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                      selectedPlan === plan.name
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:border-accent/50"
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <RadioGroupItem
                      value={plan.name}
                      id={plan.name}
                      className="absolute right-4 top-4"
                    />
                    <div className="space-y-2">
                      <h3 className="font-semibold">{plan.name}</h3>
                      <p className="text-2xl font-bold text-accent">{plan.returns}</p>
                      <div className="text-sm text-gray-500">
                        <p>Min: ${plan.min}</p>
                        <p>Max: ${plan.max}</p>
                        <p>Duration: {plan.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
              <RadioGroup
                value={selectedPayment}
                onValueChange={setSelectedPayment}
                className="grid grid-cols-2 md:grid-cols-5 gap-4"
              >
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                      selectedPayment === method.id
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:border-accent/50"
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    <RadioGroupItem
                      value={method.id}
                      id={method.id}
                      className="absolute right-2 top-2"
                    />
                    <div className="text-center">
                      <p className="font-medium">{method.name}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Amount Input */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Enter Amount</h2>
              <Input
                type="number"
                placeholder="Enter deposit amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="max-w-md"
              />
            </CardContent>
          </Card>

          <Button
            onClick={handleSubmit}
            disabled={!selectedPlan || !selectedPayment || !amount}
            className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white"
          >
            Spend
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepositPlans;