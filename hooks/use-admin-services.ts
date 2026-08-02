"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "@/services/admin/admin.api";

export const useAdminServices = () => {
  return useQuery({
    queryKey: ["admin-services"],
    queryFn: getAllServices,
  });
};