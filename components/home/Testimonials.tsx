export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed",
      review: "Excellent service. Technician was very professional.",
    },
    {
      name: "Rahim",
      review: "Fast response and affordable pricing.",
    },
    {
      name: "Karim",
      review: "Very easy booking experience.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Customer Reviews</h2>

          <p className="mt-2 text-gray-500">What our customers say</p>
        </div>

        <div
          className="
grid
gap-6
               md:grid-cols-3
"
        >
          {reviews.map((item) => (
            <div
              key={item.name}
              className="
     rounded-xl
       bg-white
             p-6
shadow-sm
"
            >
              <p className="text-gray-600">&ldquo;{item.review}&rdquo;</p>

              <h3 className="mt-4 font-semibold">- {item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
