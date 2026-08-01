"use client";

import { useSingleService } from "@/hooks/use-single-service";
import BookingDialog from "@/components/booking/BookingDialog";

export default function ServiceDetails({
  id,
}: {
  id: string;
}) {
  const { data: service, isLoading } = useSingleService(id);


  if (isLoading) {
    return (
      <div className="container mx-auto py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto py-20 text-center">
        Service not found
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl py-10">
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{service.title}</h1>

          <p className="text-gray-600">{service.description}</p>

          <div className="grid gap-3 md:grid-cols-2">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {service.category.name}
            </p>

            <p>
              <span className="font-semibold">Price:</span> ৳
              {service.price}
            </p>

            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {service.duration} Minutes
            </p>

            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {service.isAvailable ? "Available" : "Unavailable"}
            </p>
          </div>

          <hr />

          <h2 className="text-2xl font-semibold">
            Technician Information
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {service.technician.user.name}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {service.technician.user.email}
            </p>

            <p>
              <span className="font-semibold">Location:</span>{" "}
              {service.technician.location}
            </p>

            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {service.technician.experience} Years
            </p>

            <p>
              <span className="font-semibold">Rating:</span> ⭐{" "}
              {service.technician.averageRating}
            </p>
          </div>

          <BookingDialog serviceId={service.id} />
        </div>
      </div>
    </div>
  );
}