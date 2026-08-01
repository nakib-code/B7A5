"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useCreateBooking } from "@/hooks/use-create-booking";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const bookingSchema = z.object({
  bookingDate: z.string().min(1, "Booking date is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  address: z.string().min(3, "Address is required"),
  note: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

interface Props {
  serviceId: string;
}

export default function BookingDialog({
  serviceId,
}: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useCreateBooking();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (values: BookingForm) => {
    mutate(
      {
        serviceId,
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Booking created successfully!");

          reset();

          setOpen(false);

          router.push("/dashboard/customer/bookings");
        },

        onError: (error: any) => {
          toast.error(
            error?.response?.data?.message ??
              "Booking failed"
          );
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors" >
          Book Now
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Book Service
          </DialogTitle>
        </DialogHeader>

<form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-5"
>
  <div>
    <label className="mb-2 block text-sm font-medium">
      Booking Date
    </label>

    <Input
      type="date"
      min={new Date().toISOString().split("T")[0]}
      {...register("bookingDate")}
    />

    <p className="mt-1 text-sm text-red-500">
      {errors.bookingDate?.message}
    </p>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="mb-2 block text-sm font-medium">
        Start Time
      </label>

      <Input
        type="time"
        {...register("startTime")}
      />

      <p className="mt-1 text-sm text-red-500">
        {errors.startTime?.message}
      </p>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium">
        End Time
      </label>

      <Input
        type="time"
        {...register("endTime")}
      />

      <p className="mt-1 text-sm text-red-500">
        {errors.endTime?.message}
      </p>
    </div>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Service Address
    </label>

    <Input
      placeholder="House, Road, Area, District"
      {...register("address")}
    />

    <p className="mt-1 text-sm text-red-500">
      {errors.address?.message}
    </p>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Special Instructions (Optional)
    </label>

    <textarea
      className="min-h-24 w-full rounded-md border p-3"
      placeholder="Example: Please call before arriving."
      {...register("note")}
    />
  </div>

  <Button
    type="submit"
    className="w-full"
    disabled={isPending}
  >
    {isPending
      ? "Booking..."
      : "Confirm Booking"}
  </Button>
</form>
      </DialogContent>
    </Dialog>
  );
}