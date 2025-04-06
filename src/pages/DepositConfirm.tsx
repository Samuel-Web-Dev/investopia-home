
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Bitcoin, CircleDollarSign } from "lucide-react";

const DepositConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, paymentMethod, amount, paymentAddress } = location.state || {};

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

  if (!plan || !paymentMethod || !amount || !paymentAddress) {
    navigate('/deposit-plans');
    return null;
  }

  const getPaymentIcon = () => {
    const method = paymentMethod.toLowerCase();
    if (method === "binance") return <Bitcoin className="h-8 w-8 mb-2" />;
    if (method === "ethereum") return <CircleDollarSign className="h-8 w-8 mb-2" />;
    if (method === "trons") return <CircleDollarSign className="h-8 w-8 mb-2 rotate-45" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4">
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
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Amount to Deposit</span>
                <span className="font-medium">${amount}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium">{paymentMethod}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex flex-col items-center mb-4">
                {getPaymentIcon()}
                <h3 className="font-medium text-lg">{paymentMethod} Payment Address</h3>
              </div>
              <p className="text-gray-600 break-all font-mono text-center bg-white p-4 rounded border">
                {paymentAddress}
              </p>
              <p className="mt-4 text-sm text-center text-gray-500">
                Please send your payment to the address above. The transaction will be processed after confirmation.
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
