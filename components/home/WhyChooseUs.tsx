export default function WhyChooseUs() {

  const features = [
    {
      title: "Verified Technicians",
      description:
        "All technicians are verified and skilled professionals.",
    },
    {
      title: "Quality Service",
      description:
        "We provide reliable and high quality home services.",
    },
    {
      title: "Fast Response",
      description:
        "Get quick support whenever you need help.",
    },
    {
      title: "Secure Payment",
      description:
        "Safe and secure online payment system.",
    },
  ];


  return (
    <section className="container mx-auto px-4 py-16">


      <div className="mb-10 text-center">

        <h2 className="text-3xl font-bold">
          Why Choose FixItNow?
        </h2>

        <p className="mt-2 text-gray-500">
          We make home services simple and trustworthy
        </p>

      </div>



      <div className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      ">


        {
          features.map((item)=>(
            
            <div
              key={item.title}
              className="
                rounded-xl
                border
                bg-white
                p-6
                shadow-sm
                transition
                hover:shadow-lg
              "
            >

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>


              <p className="mt-3 text-sm text-gray-500">
                {item.description}
              </p>


            </div>

          ))
        }


      </div>


    </section>
  );
}