"use client";

import { useTechnicianBookings } from "@/hooks/use-technician-bookings";
import RequestCard from "./RequestCard";

export default function TechnicianRequests() {
  const {
    data: bookings,
    isLoading,
  } = useTechnicianBookings();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!bookings?.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        <h2 className="text-2xl font-bold">
          No Booking Requests
        </h2>

        <p className="mt-2 text-gray-500">
          You don&apos;t have any booking requests yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Booking Requests
      </h1>

      <div className="space-y-6">
        {bookings.map((booking: any) => (
          <RequestCard
            key={booking.id}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
}