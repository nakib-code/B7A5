"use client";

import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services/admin/admin.api";
import { ICategory } from "@/types/category";

export const useAdminCategories = () => {
  return useQuery<ICategory[]>({
    queryKey: ["admin-categories"],
    queryFn: getCategories,
  });
};