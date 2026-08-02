import axiosInstance from "@/lib/axios";

export const getAllUsers = async () => {
  const { data } = await axiosInstance.get("/admin/users");

  return data.data;
};

export const updateUserStatus = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  const { data } = await axiosInstance.patch(
    `/admin/users/${id}/status`,
    {
      status,
    }
  );

  return data.data;
};

export const getAllBookings = async () => {
  const { data } = await axiosInstance.get("/admin/bookings");

  return data.data;
};

export const getAllServices = async () => {
  const { data } = await axiosInstance.get(
    "/admin/services"
  );

  return data.data;
};

export const deleteService = async (
  id: string
) => {
  const { data } = await axiosInstance.delete(
    `/admin/services/${id}`
  );

  return data.data;
};

export const getCategories = async () => {
  const { data } = await axiosInstance.get(
    "/admin/categories"
  );

  return data.data;
};

