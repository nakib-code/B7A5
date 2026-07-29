import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto grid min-h-[90vh] items-center gap-12 px-4 py-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🔧 Trusted Home Service Marketplace
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            Find Trusted
            <span className="block text-blue-600">
              Home Service Experts
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Book verified professionals for plumbing, electrical,
            AC repair, cleaning, painting and more. Fast booking,
            secure payments and trusted technicians.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services">
              <Button size="lg">
                Browse Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/auth/register">
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-500">Technicians</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">1500+</h3>
              <p className="text-gray-500">Services</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500">Customers</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full bg-blue-100">
            <Wrench className="h-44 w-44 text-blue-600" />
          </div>

          <div className="absolute left-0 top-20 rounded-xl bg-white p-4 shadow-xl">
            <ShieldCheck className="mx-auto h-8 w-8 text-green-500" />
            <p className="mt-2 text-sm font-semibold">
              Verified Professionals
            </p>
          </div>

          <div className="absolute bottom-12 right-0 rounded-xl bg-white p-4 shadow-xl">
            <Star className="mx-auto h-8 w-8 fill-yellow-400 text-yellow-400" />
            <p className="mt-2 text-sm font-semibold">
              4.9 Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}