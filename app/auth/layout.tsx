import Logo from "@/components/shared/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <section className="hidden lg:flex items-center justify-center bg-primary text-white">
        <div className="max-w-md space-y-6">
          <Logo />

          <h1 className="text-5xl font-bold">
            Your Trusted Home Service Platform
          </h1>

          <p className="text-lg opacity-90">
            Book trusted technicians, manage services,
            and track bookings—all in one place.
          </p>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex items-center justify-center p-8">
        {children}
      </section>
    </main>
  );
}