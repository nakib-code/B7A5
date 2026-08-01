"use client";

import { cancelBooking } from "@/services/booking/booking.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBooking,

    onSuccess: () => {
      toast.success("Booking cancelled");

      queryClient.invalidateQueries({
        queryKey: ["my-bookings"],
      });
    },

    onError: () => {
      toast.error("Failed to cancel booking");
    },
  });
};