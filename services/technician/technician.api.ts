import axiosInstance from "@/lib/axios";
import { Technician } from "@/types/technician";


export const getTechnicians = async (): Promise<Technician[]> => {

  const { data } = await axiosInstance.get(
    "/technician/get-all"
  );


  return data.data;

};

export const updateBookingStatus = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  const { data } = await axiosInstance.patch(
    `/technician/bookings/${id}`,
    {
      status,
    }
  );

  return data.data;
};

export const getTechnicianBookings = async () => {
  const { data } = await axiosInstance.get("/technician/bookings");

  return data.data;
};