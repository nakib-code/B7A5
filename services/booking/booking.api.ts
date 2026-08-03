import { axiosInstance } from "@/lib/axios";

export interface TCreateBooking {
  serviceId: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  address: string;
  note?: string;
}

export const createBooking = async (payload: TCreateBooking) => {
  const { data } = await axiosInstance.post("/bookings", payload);
  return data.data;
};

export const getMyBookings = async () => {
  const { data } = await axiosInstance.get("/bookings");
  return data.data;
};

export const cancelBooking = async (bookingId: string) => {
  const { data } = await axiosInstance.patch(
    `/bookings/${bookingId}/cancel`
  );

  return data.data;
};

