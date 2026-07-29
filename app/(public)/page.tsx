import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import FeaturedServices from "@/components/home/FeaturedServices";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import TopTechnicians from "@/components/home/TopTechnicians";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedServices />
      <TopTechnicians />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}