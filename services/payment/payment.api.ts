import axiosInstance from "@/lib/axios";

export interface CreatePaymentPayload {
  bookingId: string;
  provider: "SSLCOMMERZ" | "STRIPE";
}

export const createPayment = async (
  payload: CreatePaymentPayload
) => {
  const { data } = await axiosInstance.post(
    "/payments/create",
    payload
  );

  return data.data;
};