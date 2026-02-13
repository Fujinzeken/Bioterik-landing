import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Approach from "@/app/components/Approach";
import Pillars from "@/app/components/Pillars";
import Indena from "@/app/components/Indena";
import Products from "@/app/components/Products";
import WhyChoose from "@/app/components/WhyChoose";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Pillars />
        <Indena />
        <Products />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
