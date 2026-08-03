import { axiosInstance } from "@/lib/axios";

export interface TCreateReview {
  bookingId: string;
  rating: number;
  comment?: string;
}

export const createReview = async (
  payload: TCreateReview
) => {
  const { data } = await axiosInstance.post(
    "/reviews",
    payload
  );

  return data.data;
};