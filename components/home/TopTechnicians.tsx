"use client";

import Image from "next/image";
import { Wrench } from "lucide-react";
import { useTechnicians } from "@/hooks/use-technicians";

export default function TopTechnicians() {
  const { data: technicians, isLoading, isError } = useTechnicians();

  if (isLoading) {
    return (
      <section className="py-16 text-center">Loading technicians...</section>
    );
  }

  if (isError) {
    return (
      <section className="py-16 text-center text-red-500">
        Failed to load technicians
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Top Technicians</h2>

        <p className="mt-2 text-gray-500">Meet our professional technicians</p>
      </div>

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
      >
        {technicians?.slice(0, 4).map((tech: any) => (
          <div
            key={tech.id}
            className="
              rounded-xl
              border
              bg-white
              p-6
              text-center
              shadow-sm
              transition
              hover:shadow-lg
            "
          >
            {tech.profileImg ? (
              <Image
                src={tech.profileImg}
                alt={tech.name}
                width={100}
                height={100}
                className="
                    mx-auto
                    h-24
                    w-24
                    rounded-full
                    object-cover
                  "
              />
            ) : (
              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-100
                  "
              >
                <Wrench className="text-blue-600" />
              </div>
            )}

            <h3 className="mt-4 font-semibold">{tech.name}</h3>

            <p className="mt-1 text-sm text-gray-500">{tech.email}</p>

            <span
              className="
              mt-3
              inline-block
              rounded-full
              bg-green-100
              px-3
              py-1
              text-xs
              text-green-700
              "
            >
              Available
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
