"use client";

import { useMutation } from "@tanstack/react-query";
import {
  createBooking,
  TCreateBooking,
} from "@/services/booking/booking.api";

export const useCreateBooking = () => {
  return useMutation({
    mutationFn: (payload: TCreateBooking) =>
      createBooking(payload),
  });
};