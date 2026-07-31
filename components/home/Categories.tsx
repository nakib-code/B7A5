"use client";

import { useCategories } from "@/hooks/use-categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const { data, isLoading } = useCategories();
  
  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-20">
        <p>Loading...</p>
      </section>
    );
  }

  const categories = data?.data || [];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Service Categories
        </h2>

        <p className="mt-3 text-gray-500">
          Choose a category to find trusted professionals.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map((category: any) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}