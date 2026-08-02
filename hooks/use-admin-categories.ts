"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/admin/admin.api";

export const useAdminCategories = () => {
  return useQuery({
    queryKey: ["admin-categories"],
    queryFn: getCategories,
  });
};