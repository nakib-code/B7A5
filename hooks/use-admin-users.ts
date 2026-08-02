"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/services/admin/admin.api";

export const useAdminUsers = () => {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: getAllUsers,
  });
};