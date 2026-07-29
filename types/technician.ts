export interface Technician {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  profileImg?: string | null;
  role: "TECHNICIAN";
  status: "ACTIVE" | "INACTIVE";
}