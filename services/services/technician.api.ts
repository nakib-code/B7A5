import axiosInstance from "@/lib/axios";


export const getTechnicians = async () => {

  const { data } = await axiosInstance.get(
    "/api/admin/users"
  );


  const technicians = data.data.filter(
    (user: any) =>
      user.role === "TECHNICIAN"
  );


  return technicians;

};