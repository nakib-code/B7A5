import { XCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PaymentFailPage = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="rounded-xl border p-10 text-center shadow-sm">
        <XCircle className="mx-auto h-16 w-16 text-red-500" />

        <h1 className="mt-5 text-3xl font-bold">
          Payment Failed
        </h1>

        <p className="mt-3 text-muted-foreground">
          Your payment could not be completed.
        </p>

        <Link href="/dashboard/customer/bookings">
          <Button className="mt-6">
            Try Again
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailPage;