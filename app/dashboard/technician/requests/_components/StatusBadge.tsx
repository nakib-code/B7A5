interface Props {
  status: string;
}

export default function StatusBadge({
  status,
}: Props) {
  const styles = {
    REQUESTED:
      "bg-yellow-100 text-yellow-700",

    ACCEPTED:
      "bg-blue-100 text-blue-700",

    IN_PROGRESS:
      "bg-orange-100 text-orange-700",

    COMPLETED:
      "bg-green-100 text-green-700",

    CANCELLED:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}