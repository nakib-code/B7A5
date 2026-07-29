import axiosInstance from "@/lib/axios";

export const getCategories = async () => {
  const { data } = await axiosInstance.get("/categories");

  return data;
};