import axiosInstance from "@/lib/axios";
import { Service, TCreateService } from "@/types/service";

export const getServices = async (
  search?: string,
  category?: string
): Promise<Service[]> => {
  const params = new URLSearchParams();

  if (search) {
    params.append("searchTerm", search);
  }

  if (category) {
    params.append("category", category);
  }

  const { data } = await axiosInstance.get(
    `/services?${params.toString()}`
  );

  return data.data;
};

export const getSingleService = async (id: string) => {
  const { data } = await axiosInstance.get(`/services/${id}`);
  return data.data;
};

export const createService = async (
  payload: TCreateService
) => {
  const { data } = await axiosInstance.post(
    "/services",
    payload
  );

  return data.data;
};

export const getMyServices = async () => {
  const { data } = await axiosInstance.get(
    "/services/my-services"
  );

  return data.data;
};

export const updateService = async ({
  id,
  payload,
}: {
  id: string;
  payload: Partial<TCreateService>;
}) => {
  const { data } = await axiosInstance.patch(
    `/services/${id}`,
    payload
  );

  return data.data;
};

export const deleteService = async (id: string) => {
  await axiosInstance.delete(`/services/${id}`);
};