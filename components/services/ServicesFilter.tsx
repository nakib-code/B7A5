"use client";

import { Input } from "@/components/ui/input";
import { useCategories } from "@/hooks/use-categories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ServicesFilter() {
  const { data: categories } = useCategories();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2">
      <Input
        placeholder="Search service..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <select
        className="rounded-md border p-2"
        defaultValue={searchParams.get("category") ?? ""}
        onChange={(e) => handleCategory(e.target.value)}
      >
        <option value="">All Categories</option>

        {categories?.map((category: { id: string; slug: string; name: string }) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}