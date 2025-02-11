
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useCallback, memo } from "react";
import { toast } from "@/hooks/use-toast";

interface WithdrawModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WithdrawModal = memo(({ open, onOpenChange }: WithdrawModalProps) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleWithdraw = useCallback(() => {
    if (!amount || !address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Withdrawal Failed",
      description: "Withdrawal cannot be made now due to low balance",
      variant: "destructive",
    });
    onOpenChange(false);
  }, [amount, address, onOpenChange]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
          <DialogDescription>
            Enter the amount you want to withdraw and your wallet address.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => handleInputChange(e, setAmount)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Wallet Address</label>
            <Input
              placeholder="Enter your wallet address"
              value={address}
              onChange={(e) => handleInputChange(e, setAddress)}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleWithdraw}>Withdraw</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
});

WithdrawModal.displayName = "WithdrawModal";

export default WithdrawModal;

