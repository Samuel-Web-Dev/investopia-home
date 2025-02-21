
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useCallback } from "react";
import Swal from "sweetalert2";

interface WithdrawModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WithdrawModal = ({ open, onOpenChange }: WithdrawModalProps) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleWithdraw = useCallback(() => {
    if (!amount || !address) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all fields",
        icon: "error",
        didClose: () => {
          // Do nothing when the error alert closes
        }
      });
      return;
    }

    Swal.fire({
      title: "Withdrawal Failed",
      text: "Withdrawal cannot be made now due to low balance",
      icon: "error",
    });
    onOpenChange(false);
  }, [amount, address, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Wallet Address</label>
            <Input
              placeholder="Enter your wallet address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
};

export default WithdrawModal;
