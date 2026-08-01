"use client";

import { useEffect, useState } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { Input } from "@/components/ui/input";
import { useCategories } from "@/hooks/use-categories";
import { ICategory } from "@/types/category";

export default function ServicesFilter() {
  const { data: categories = [] } = useCategories();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentSearch = searchParams.get("search") ?? "";

      if (search === currentSearch) return;

      const params = new URLSearchParams(
        searchParams.toString()
      );

      if (search.trim()) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const handleCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (e.target.value) {
      params.set("category", e.target.value);
    } else {
      params.delete("category");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2">
      <Input
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="h-10 rounded-md border border-input bg-background px-3 text-sm"
        value={searchParams.get("category") ?? ""}
        onChange={handleCategory}
      >
        <option value="">All Categories</option>

        {categories.map((category: ICategory) => (
          <option
            key={category.id}
            value={category.name}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}