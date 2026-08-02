"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StatusBadge from "./StatusBadge";
import PaymentBadge from "./PaymentBadge";
import { useAdminBookings } from "@/hooks/use-admin-bookings";

const BookingsTable = () => {
  const { data: bookings = [], isLoading } =
    useAdminBookings();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!bookings.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        <h2 className="text-2xl font-bold">
          No Bookings Found
        </h2>

        <p className="mt-2 text-muted-foreground">
          There are no bookings available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Booking Management
        </h1>

        <p className="text-muted-foreground">
          View and manage all bookings.
        </p>
      </div>

      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Technician</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings.map((booking: any) => (
              <TableRow key={booking.id}>
                <TableCell>
                  {booking.customer?.name}
                </TableCell>

                <TableCell>
                  {booking.technician?.name}
                </TableCell>

                <TableCell>
                  {booking.service?.title}
                </TableCell>

                <TableCell>
                  ৳{booking.totalAmount}
                </TableCell>

                <TableCell>
                  <StatusBadge
                    status={booking.status}
                  />
                </TableCell>

                <TableCell>
                  <PaymentBadge
                    status={booking.payment?.status}
                  />
                </TableCell>

                <TableCell>
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingsTable;
