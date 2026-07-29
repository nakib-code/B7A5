import { getTechnicians } from "@/services/services/technician.api";
import { useQuery } from "@tanstack/react-query";


export const useTechnicians = () => {
  return useQuery({
    queryKey: ["technicians"],
    queryFn: getTechnicians,
  });
};