"use client";

import { Button } from "@/components/ui/button";

import { useTechnicianBookings } from "@/hooks/use-technician-bookings";
import { useUpdateBookingStatus } from "@/hooks/use-update-booking-status";

import { TechnicianBooking } from "@/types/technician";


export default function TechnicianBookings() {

  const { 
    data: bookings = [], 
    isLoading 
  } = useTechnicianBookings();


  const { 
    mutate, 
    isPending 
  } = useUpdateBookingStatus();



  if (isLoading) {
    return (
      <p className="py-10 text-center">
        Loading...
      </p>
    );
  }



  if (!bookings.length) {
    return (
      <p className="py-10 text-center">
        No bookings found.
      </p>
    );
  }



  return (
    <div className="space-y-5">

      <h1 className="text-3xl font-bold">
        Booking Requests
      </h1>



      <div className="overflow-x-auto rounded-lg border">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-3 text-left">
                Customer
              </th>

              <th className="p-3 text-left">
                Service
              </th>

              <th className="p-3">
                Price
              </th>

              <th className="p-3">
                Date
              </th>

              <th className="p-3">
                Status
              </th>

              <th className="p-3">
                Action
              </th>

            </tr>

          </thead>



          <tbody>

            {bookings.map(
              (booking: TechnicianBooking) => (

              <tr
                key={booking.id}
                className="border-t"
              >

                <td className="p-3">

                  <p className="font-medium">
                    {booking.customer.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {booking.customer.email}
                  </p>

                </td>



                <td className="p-3">
                  {booking.service.title}
                </td>



                <td className="p-3 text-center">
                  ৳{booking.service.price}
                </td>



                <td className="p-3 text-center">

                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}

                </td>



                <td className="p-3 text-center">

                  <span
                    className={`
                      rounded-full px-3 py-1 text-xs font-semibold
                      ${
                        booking.status === "REQUESTED"
                          ? "bg-yellow-100 text-yellow-700"
                          : booking.status === "ACCEPTED"
                          ? "bg-blue-100 text-blue-700"
                          : booking.status === "PAID"
                          ? "bg-purple-100 text-purple-700"
                          : booking.status === "IN_PROGRESS"
                          ? "bg-indigo-100 text-indigo-700"
                          : booking.status === "COMPLETED"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >

                    {booking.status}

                  </span>

                </td>



                <td className="p-3 space-x-2">


                  {
                    booking.status === "REQUESTED" && (

                      <Button
                        size="sm"
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

                    )
                  }



                  {
                    booking.status === "ACCEPTED" && (

                      <Button
                        size="sm"
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

                    )
                  }




                  {
                    booking.status === "IN_PROGRESS" && (

                      <Button
                        size="sm"
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

                    )
                  }



                  {
                    booking.status === "COMPLETED" && (

                      <span className="font-medium text-green-600">
                        Completed
                      </span>

                    )
                  }



                  {
                    booking.status === "CANCELLED" && (

                      <span className="font-medium text-red-600">
                        Cancelled
                      </span>

                    )
                  }



                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}