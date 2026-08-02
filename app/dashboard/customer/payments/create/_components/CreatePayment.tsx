"use client";

import { Button } from "@/components/ui/button";
import { useCreatePayment } from "@/hooks/use-create-payment";

interface Props {
  bookingId: string;
}

export default function CreatePayment({
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
    <div className="mx-auto mt-20 max-w-lg rounded-xl border bg-white p-8 shadow">
      <h1 className="mb-4 text-2xl font-bold">
        Complete Payment
      </h1>

      <p className="mb-8 text-slate-600">
        Click below to continue payment using
        SSLCommerz.
      </p>

      <Button
        className="w-full"
        onClick={handlePayment}
        disabled={isPending}
      >
        {isPending
          ? "Redirecting..."
          : "Pay with SSLCommerz"}
      </Button>
    </div>
  );
}