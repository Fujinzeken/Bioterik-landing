import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Pillars from "./components/Pillars";
import Indena from "./components/Indena";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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
