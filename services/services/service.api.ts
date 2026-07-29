import axiosInstance from "@/lib/axios";

export const getServices = async () => {
  const { data } = await axiosInstance.get("/services");

  return data;
};