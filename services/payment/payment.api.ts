import { axiosInstance } from "@/lib/axios";

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

export const getMyPayments = async () => {
  const { data } = await axiosInstance.get(
    "/payments/my-payments"
  );

  return data.data;
};



export const getSinglePayment = async (id: string) => {
  const { data } = await axiosInstance.get(
    `/payments/${id}`
  );

  return data.data;
};