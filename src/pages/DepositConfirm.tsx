import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useState } from 'react';

const DepositConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    toast({
      title: "Processing Deposit",
      description: "Please wait for a few minutes before the funds reflect in your account.",
    });
    navigate('/deposit-plans');
  };

  const handleCancel = () => {
    navigate('/deposit-plans');
  };

  if (!plan) {
    navigate('/deposit-plans');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6">Confirm Your Deposit</h1>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Selected Plan</span>
                <span className="font-medium">{plan.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Expected Profit</span>
                <span className="font-medium text-green-600">{plan.returns}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Principal Return</span>
                <span className="font-medium">Yes</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Principal Withdraw</span>
                <span className="font-medium">Available with 0.00% fee</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deposit Amount
              </label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Min: $${plan.min} - Max: $${plan.max}`}
                className="w-full"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-2">Payment Address</h3>
              <p className="text-gray-600 break-all">
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={handleDeposit}
                className="flex-1 bg-accent hover:bg-accent/90"
              >
                Confirm Deposit
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DepositConfirm;