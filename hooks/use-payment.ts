"use client";

import { useQuery } from "@tanstack/react-query";

import { getSinglePayment } from "@/services/payment/payment.api";

export const usePayment = (id: string) => {
  return useQuery({
    queryKey: ["payment", id],
    queryFn: () => getSinglePayment(id),
    enabled: !!id,
  });
};