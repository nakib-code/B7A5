import axiosInstance from "@/lib/axios";
import { ICategory } from "@/types/category";

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axiosInstance.get("/categories");

  return data.data;
};