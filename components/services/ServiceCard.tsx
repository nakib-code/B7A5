"use client";

import { Clock, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { Service } from "@/types/service";
import { Button } from "@/components/ui/button";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
          {service.category.name}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs ${
            service.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {service.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      <h2 className="text-xl font-bold">{service.title}</h2>

      <p className="mt-2 line-clamp-2 text-sm text-gray-500">
        {service.description}
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p className="font-semibold text-blue-600">
          ৳ {service.price}
        </p>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {service.duration} mins
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {service.technician.location}
        </div>

        <div className="flex items-center gap-2">
          <Star size={16} />
          {service.technician.averageRating}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-medium">
          Technician: {service.technician.user.name}
        </p>
      </div>

      <Link href={`/services/${service.id}`}>
        <Button className="mt-6 w-full">
          View Details
        </Button>
      </Link>
    </div>
  );
}