"use client";

import { Button } from "@/components/ui/button";
import { useBookings } from "@/hooks/use-bookings";
import { useCancelBooking } from "@/hooks/use-cancel-booking";

export default function CustomerBookings() {
  const { data: bookings, isLoading } = useBookings();

  const { mutate: cancelBooking } = useCancelBooking();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">
        My Bookings
      </h1>

      {bookings?.map((booking) => (
        <div
          key={booking.id}
          className="rounded-lg border p-5"
        >
          <h2 className="text-xl font-semibold">
            {booking.service.title}
          </h2>

          <p>
            Technician : {booking.technician.name}
          </p>

          <p>
            Date :{" "}
            {new Date(
              booking.bookingDate
            ).toLocaleDateString()}
          </p>

          <p>
            Time : {booking.startTime} -{" "}
            {booking.endTime}
          </p>

          <p>Address : {booking.address}</p>

          <p>Status : {booking.status}</p>

          <p>Amount : ৳{booking.totalAmount}</p>

          {booking.status === "REQUESTED" && (
            <Button
              variant="destructive"
              onClick={() =>
                cancelBooking(booking.id)
              }
            >
              Cancel Booking
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}