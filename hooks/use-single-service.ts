"use client";

import { getSingleService } from "@/services/services/service.api";
import { useQuery } from "@tanstack/react-query";


export const useSingleService = (id: string) => {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => getSingleService(id),
    enabled: !!id,
  });
};