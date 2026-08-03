export interface Technician {
  id: string;
  name: string;
  email: string;
  phone?: string;
  profileImg?: string;
  role: "TECHNICIAN";
  status: "ACTIVE" | "BLOCKED";
}

export interface TechnicianProfile {
  id: string;
  userId: string;

  bio?: string;
  experience: number;
  location: string;

  averageRating: number;
  completedJobs: number;

  createdAt: string;
  updatedAt: string;

  user: Technician;
}

export interface UpdateTechnicianProfile {
  bio?: string;
  experience?: number;
  location?: string;
  profileImg?: string;
}

export interface TechnicianBooking {
  id: string;

  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "DECLINED"
    | "CANCELLED";

  bookingDate: string;
  startTime: string;
  endTime: string;

  address: string;
  totalAmount: number;

  customer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };

  service: {
    id: string;
    title: string;
    price: number;
  };

  payment?: {
    id: string;
    amount: number;
    provider: string;
    status: string;
    paidAt?: string;
  };

  review?: {
    id: string;
    rating: number;
    comment?: string;
  };
}