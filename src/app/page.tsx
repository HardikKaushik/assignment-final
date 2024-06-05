import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen antialiased">
        <Hero/>
        <Features/>
        <Testimonials/>
        <Gallery/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </main>
  );
}
