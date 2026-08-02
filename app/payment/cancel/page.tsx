import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PaymentCancelPage = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="rounded-xl border p-10 text-center shadow-sm">
        <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500" />

        <h1 className="mt-5 text-3xl font-bold">
          Payment Cancelled
        </h1>

        <p className="mt-3 text-muted-foreground">
          You cancelled the payment process.
        </p>

        <Link href="/dashboard/customer/bookings">
          <Button className="mt-6">
            Back to Bookings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancelPage;