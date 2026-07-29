import axiosInstance from "@/lib/axios";
import { Technician } from "@/types/technician";


export const getTechnicians = async (): Promise<Technician[]> => {

  const { data } = await axiosInstance.get(
    "/technician/get-all"
  );


  return data.data;

};