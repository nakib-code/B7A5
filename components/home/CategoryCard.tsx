import Link from "next/link";
import { Wrench } from "lucide-react";
import { ICategory } from "@/types/category";

type Props = {
  category: ICategory;
};

export default function CategoryCard({
  category,
}: Props) {
  return (
    <Link
      href={`/services?category=${category.id}`}
      className="group rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
    >
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Wrench className="h-8 w-8 text-blue-600" />
        </div>
      </div>

      <h3 className="mt-4 text-center text-lg font-semibold">
        {category.name}
      </h3>
    </Link>
  );
}