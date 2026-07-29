export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="mt-6 grid gap-5 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">
            Total Users
          </h3>

          <p className="mt-2 text-3xl font-bold">
            120
          </p>
        </div>


        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">
            Services
          </h3>

          <p className="mt-2 text-3xl font-bold">
            45
          </p>
        </div>


        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">
            Bookings
          </h3>

          <p className="mt-2 text-3xl font-bold">
            300
          </p>
        </div>

      </div>
    </div>
  );
}