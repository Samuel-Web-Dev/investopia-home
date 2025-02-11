
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import Swal from "sweetalert2";

interface WithdrawModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WithdrawModal = ({ open, onOpenChange }: WithdrawModalProps) => {
  const handleWithdraw = useCallback(() => {
    Swal.fire({
      title: "Withdrawal Failed",
      text: "Withdrawal cannot be made now due to low balance",
      icon: "error",
    });
    onOpenChange(false);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw Funds</DialogTitle>
        </DialogHeader>
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
