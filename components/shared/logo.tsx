import Link from "next/link";
import { Wrench } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-2xl font-bold"
    >
      <Wrench className="text-primary h-7 w-7" />

      <span>FixItNow</span>
    </Link>
  );
}