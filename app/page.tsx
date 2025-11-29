import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsGrid from "@/components/EventsGrid";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <EventsGrid />
      <ServicesSection />
      <Footer />
    </main>
  );
}