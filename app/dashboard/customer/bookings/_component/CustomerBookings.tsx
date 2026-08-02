"use client";

import { Button } from "@/components/ui/button";

import { useBookings } from "@/hooks/use-bookings";
import { useCancelBooking } from "@/hooks/use-cancel-booking";

import ReviewDialog from "@/components/review/ReviewDialog";
import PaymentButton from "@/app/dashboard/customer/payments/create/_components/PaymentButton";

export default function CustomerBookings() {
  const { data: bookings, isLoading } = useBookings();

  const { mutate: cancelBooking } = useCancelBooking();

  if (isLoading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (!bookings?.length) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">No bookings found</h2>

        <p className="mt-2 text-slate-500">Book your first service.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Bookings</h1>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="space-y-4 rounded-xl border bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{booking.service.title}</h2>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium
              ${
                booking.status === "REQUESTED"
                  ? "bg-yellow-100 text-yellow-700"
                  : booking.status === "ACCEPTED"
                    ? "bg-blue-100 text-blue-700"
                    : booking.status === "IN_PROGRESS"
                      ? "bg-purple-100 text-purple-700"
                      : booking.status === "COMPLETED"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "CANCELLED"
                          ? "bg-red-100 text-red-700"
                          : "bg-slate-100 text-slate-700"
              }`}
            >
              {booking.status}
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <p>
              <span className="font-semibold">Technician :</span>{" "}
              {booking.technician.name}
            </p>

            <p>
              <span className="font-semibold">Date :</span>{" "}
              {new Date(booking.bookingDate).toLocaleDateString()}
            </p>

            <p>
              <span className="font-semibold">Time :</span> {booking.startTime}{" "}
              - {booking.endTime}
            </p>

            <p>
              <span className="font-semibold">Address :</span> {booking.address}
            </p>

            <p>
              <span className="font-semibold">Amount :</span> ৳
              {booking.totalAmount}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
  {booking.status === "REQUESTED" && (
    <Button
      variant="destructive"
      onClick={() => cancelBooking(booking.id)}
    >
      Cancel Booking
    </Button>
  )}

  {booking.status === "ACCEPTED" && (
    <PaymentButton bookingId={booking.id} />
  )}

  {booking.status === "COMPLETED" &&
    !booking.review && (
      <ReviewDialog bookingId={booking.id} />
  )}
</div>

          {booking.review && (
            <div className="rounded-lg border bg-green-50 p-4">
              <h3 className="font-semibold">Your Review</h3>

              <p className="mt-2">⭐ {booking.review.rating}/5</p>

              {booking.review.comment && (
                <p className="mt-2 text-slate-600">{booking.review.comment}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
