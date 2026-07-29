export interface Technician {
  id: string;
  name: string;
  email: string;
  profileImg?: string | null;
  role: "TECHNICIAN";
  status: string;
}