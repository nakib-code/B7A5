import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Booking = {
  id: string;
  bookingDate: string;
  status: string;
  customer: {
    name: string;
  };
  service: {
    title: string;
  };
};

type Props = {
  bookings: Booking[];
};

const RecentBookings = ({ bookings }: Props) => {
  return (
    <div className="rounded-xl border bg-background p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        <p className="text-sm text-muted-foreground">
          Latest booking requests
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.customer.name}</TableCell>

                <TableCell>{booking.service.title}</TableCell>

                <TableCell>
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <Badge>{booking.status}</Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8">
                No bookings found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentBookings;