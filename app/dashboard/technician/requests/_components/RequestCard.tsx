"use client";

import { Button } from "@/components/ui/button";
import StatusBadge from "./StatusBadge";

import { useUpdateBookingStatus } from "@/hooks/use-update-booking-status";

interface Props {
  booking: any;
}

export default function RequestCard({
  booking,
}: Props) {
  const { mutate, isPending } =
    useUpdateBookingStatus();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {booking.service.title}
        </h2>

        <StatusBadge
          status={booking.status}
        />
      </div>

      <div className="space-y-2 text-sm">
        <p>
          <b>Customer:</b>{" "}
          {booking.customer.name}
        </p>

        <p>
          <b>Email:</b>{" "}
          {booking.customer.email}
        </p>

        <p>
          <b>Address:</b>{" "}
          {booking.address}
        </p>

        <p>
          <b>Date:</b>{" "}
          {booking.bookingDate.slice(0, 10)}
        </p>

        <p>
          <b>Time:</b>{" "}
          {booking.startTime} -{" "}
          {booking.endTime}
        </p>

        <p>
          <b>Amount:</b> ৳
          {booking.totalAmount}
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        {booking.status === "REQUESTED" && (
          <Button
            disabled={isPending}
            onClick={() =>
              mutate({
                id: booking.id,
                status: "ACCEPTED",
              })
            }
          >
            Accept
          </Button>
        )}

        {booking.status === "ACCEPTED" && (
          <Button
            disabled={isPending}
            onClick={() =>
              mutate({
                id: booking.id,
                status: "IN_PROGRESS",
              })
            }
          >
            Start Job
          </Button>
        )}

        {booking.status ===
          "IN_PROGRESS" && (
          <Button
            disabled={isPending}
            onClick={() =>
              mutate({
                id: booking.id,
                status: "COMPLETED",
              })
            }
          >
            Complete
          </Button>
        )}
      </div>
    </div>
  );
}