export type UserRole = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImg: string | null;
  role: UserRole;
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
}