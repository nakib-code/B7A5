import axiosInstance from "@/lib/axios";
import { Service } from "@/types/service";

export const getServices = async (
  search?: string,
  category?: string
): Promise<Service[]> => {
  const params = new URLSearchParams();

  if (search) {
    params.append("searchTerm", search);
  }

  if (category) {
    params.append("category", category);
  }

  const { data } = await axiosInstance.get(
    `/services?${params.toString()}`
  );

  return data.data;
};