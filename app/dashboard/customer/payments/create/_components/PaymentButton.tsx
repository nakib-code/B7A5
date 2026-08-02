"use client";

import { Button } from "@/components/ui/button";
import { useCreatePayment } from "@/hooks/use-create-payment";

interface Props {
  bookingId: string;
}

export default function PaymentButton({
  bookingId,
}: Props) {
  const { mutate, isPending } =
    useCreatePayment();

  const handlePayment = () => {
    mutate({
      bookingId,
      provider: "SSLCOMMERZ",
    });
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={isPending}
    >
      {isPending
        ? "Redirecting..."
        : "Pay Now"}
    </Button>
  );
}