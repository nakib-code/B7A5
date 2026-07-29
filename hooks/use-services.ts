import { getServices } from "@/services/services/service.api";
import { useQuery } from "@tanstack/react-query";


export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};