export default function CustomerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Customer Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Manage your services, bookings and profile.
      </p>


      <div className="mt-6 grid gap-5 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold">
            Total Bookings
          </h2>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>


        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold">
            Completed Services
          </h2>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>


        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold">
            Reviews
          </h2>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

      </div>
    </div>
  );
}