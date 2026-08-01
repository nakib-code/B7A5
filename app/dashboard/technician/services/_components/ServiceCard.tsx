"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Service } from "@/types/service";

import { useDeleteService } from "@/hooks/use-delete-service";
import EditServiceDialog from "@/app/dashboard/technician/services/_components/EditServiceDialog";


interface Props {
  service: Service;
}

export default function ServiceCard({
  service,
}: Props) {
  const { mutate, isPending } =
    useDeleteService();

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          {service.title}
        </h2>

        <p className="text-sm text-gray-500">
          {service.description}
        </p>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium">
              Category:
            </span>{" "}
            {service.category.name}
          </p>

          <p>
            <span className="font-medium">
              Price:
            </span>{" "}
            ৳{service.price}
          </p>

          <p>
            <span className="font-medium">
              Duration:
            </span>{" "}
            {service.duration} Minutes
          </p>

          <p>
            <span className="font-medium">
              Status:
            </span>{" "}
            {service.isAvailable
              ? "Available"
              : "Unavailable"}
          </p>
        </div>

        <div className="flex gap-3 pt-3">
          <EditServiceDialog service={service} />

          <Button
            variant="destructive"
            className="flex-1"
            disabled={isPending}
            onClick={() => {
              if (
                confirm(
                  "Are you sure you want to delete this service?"
                )
              ) {
                mutate(service.id);
              }
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}