import CreatePayment from "@/app/dashboard/customer/payments/create/_components/CreatePayment";

export default async function Page({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;

  return <CreatePayment bookingId={bookingId} />;
}