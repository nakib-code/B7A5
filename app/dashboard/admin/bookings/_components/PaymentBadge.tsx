interface Props {
  status?: string;
}

export default function PaymentBadge({
  status,
}: Props) {
  if (!status) {
    return (
      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
        Unpaid
      </span>
    );
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        status === "PAID"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
}