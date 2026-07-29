"use client";

import { useServices } from "@/hooks/use-services";
import Image from "next/image";


export default function FeaturedServices() {

  const {
    data: services,
    isLoading,
    isError,
  } = useServices();


  if (isLoading) {
    return (
      <section className="container mx-auto py-16 text-center">
        Loading services...
      </section>
    );
  }


  if (isError) {
    return (
      <section className="container mx-auto py-16 text-center text-red-500">
        Failed to load services
      </section>
    );
  }


  return (
    <section className="container mx-auto px-4 py-16">


      <div className="mb-10 text-center">

        <h2 className="text-3xl font-bold">
          Featured Services
        </h2>

        <p className="mt-2 text-gray-500">
          Explore our popular home services
        </p>

      </div>


      <div className="
        grid 
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      ">


        {
          services?.slice(0,6).map((service:any)=>(

            <div
              key={service.id}
              className="
              overflow-hidden
              rounded-xl
              border
              bg-white
              shadow-sm
              transition
              hover:shadow-lg
              "
            >

              {
                service.image && (

                  <Image
                    src={service.image}
                    alt={service.name}
                    width={500}
                    height={300}
                    className="h-48 w-full object-cover"
                  />

                )
              }


              <div className="p-5">


                <h3 className="text-xl font-semibold">
                  {service.name}
                </h3>


                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {service.description}
                </p>


                <div className="mt-4 flex justify-between">

                  <span className="font-bold text-blue-600">
                    ${service.price}
                  </span>


                  <span>
                    {service.category?.name}
                  </span>

                </div>


              </div>


            </div>

          ))
        }


      </div>


    </section>
  );
}