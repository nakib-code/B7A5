"use client";

import { useSearchParams } from "next/navigation";

import ServicesFilter from "@/components/services/ServicesFilter";
import ServiceCard from "@/components/services/ServiceCard";
import { useServices } from "@/hooks/use-services";

export default function ServicesPage() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";

  const { data: services, isLoading, isError } =
    useServices(search, category);

  // loading/error আগের মতো থাকবে

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Our Services
        </h1>

        <p className="mt-2 text-gray-500">
          Find the perfect service for your home.
        </p>
      </div>

      <ServicesFilter />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services?.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}