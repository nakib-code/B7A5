interface Props {
  status: string;
}

const colors = {
  REQUESTED: "bg-yellow-100 text-yellow-700",
  ACCEPTED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-orange-100 text-orange-700",
  COMPLETED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default function StatusBadge({
  status,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        colors[status as keyof typeof colors]
      }`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}