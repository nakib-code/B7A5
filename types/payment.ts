export interface IPayment {
  id: string;
  bookingId: string;
  userId?: string;
  amount: number;
  provider: string;
  transactionId?: string;
  status: "PENDING" | "PAID" | "FAILED";
  createdAt: string;
  updatedAt: string;
}