"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

const bookingSchema = z
  .object({
    bookingDate: z.string().min(1, "Booking date is required"),

    startTime: z.string().min(1, "Start time is required"),

    endTime: z.string().min(1, "End time is required"),

    address: z
      .string()
      .min(5, "Address is required")
      .max(200),

    note: z.string().max(300).optional(),
  })
  .refine(
    (data) => data.endTime > data.startTime,
    {
      path: ["endTime"],
      message:
        "End time must be after start time",
    }
  );

type BookingForm = z.infer<
  typeof bookingSchema
>;

interface Props {
  serviceId: string;
}

export default function BookingDialog({
  serviceId,
}: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { mutate, isPending } =
    useCreateBooking();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),

    defaultValues: {
      bookingDate: "",
      startTime: "",
      endTime: "",
      address: "",
      note: "",
    },
  });

  const onSubmit = (
    values: BookingForm
  ) => {
    mutate(
      {
        serviceId,
        ...values,
      },
      {
        onSuccess: () => {
          toast.success(
            "Booking created successfully"
          );

          reset();

          setOpen(false);

          router.push(
            "/dashboard/customer/bookings"
          );
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
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger>
          Book Now
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Book Service
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Booking Date */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Booking Date
            </label>

            <Input
              type="date"
              min={
                new Date()
                  .toISOString()
                  .split("T")[0]
              }
              {...register(
                "bookingDate"
              )}
            />

            <p className="mt-1 text-sm text-red-500">
              {
                errors.bookingDate
                  ?.message
              }
            </p>
          </div>

          {/* Time */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Start Time
              </label>

              <Input
                type="time"
                {...register(
                  "startTime"
                )}
              />

              <p className="mt-1 text-sm text-red-500">
                {
                  errors.startTime
                    ?.message
                }
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                End Time
              </label>

              <Input
                type="time"
                {...register(
                  "endTime"
                )}
              />

              <p className="mt-1 text-sm text-red-500">
                {
                  errors.endTime
                    ?.message
                }
              </p>
            </div>
          </div>

          {/* Address */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Service Address
            </label>

            <Input
              placeholder="House No, Road, Area, District"
              {...register(
                "address"
              )}
            />

            <p className="mt-1 text-sm text-red-500">
              {
                errors.address
                  ?.message
              }
            </p>
          </div>

          {/* Note */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Special Instructions
              (Optional)
            </label>

            <textarea
              rows={4}
              maxLength={300}
              className="w-full rounded-md border p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              placeholder="Example: Please call before arriving."
              {...register("note")}
            />

            <p className="text-right text-xs text-slate-500">
              Max 300 characters
            </p>

            <p className="mt-1 text-sm text-red-500">
              {errors.note?.message}
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Creating Booking..."
              : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}