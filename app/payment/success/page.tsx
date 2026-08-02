import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="rounded-xl border p-10 text-center shadow-sm">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />

        <h1 className="mt-5 text-3xl font-bold">
          Payment Successful 🎉
        </h1>

        <p className="mt-3 text-muted-foreground">
          Your payment has been completed successfully.
        </p>

        <Link href="/dashboard/customer/bookings">
          <Button className="mt-6">
            Go to My Bookings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;