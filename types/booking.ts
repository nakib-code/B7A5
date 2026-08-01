import { Service } from "@/types/service";

export interface Booking {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;

  bookingDate: string;
  startTime: string;
  endTime: string;

  address: string;
  note: string;

  totalAmount: string;

  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

  createdAt: string;
  updatedAt: string;

  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    duration: number;

    category: {
      id: string;
      name: string;
      slug: string;
    };
  };

  technician: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    profileImg: string | null;
  };

  payment: unknown | null;
  review: unknown | null;
}

export interface CreateBookingPayload {
  serviceId: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  address: string;
  note?: string;
}


export interface IBooking {
  id: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  address: string;
  note: string;
  totalAmount: string;
  status: string;

  service: Service;

  technician: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    profileImg: string | null;
  };

  payment: any;
  review: any;
}