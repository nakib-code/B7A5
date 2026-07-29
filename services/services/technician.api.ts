import axiosInstance from "@/lib/axios";

export const getTechnicians = async () => {
  const { data } = await axiosInstance.get("/technician");

  return data;
};