import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsGrid from "@/components/EventsGrid";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <EventsGrid />
      
      {/* Placeholder pour la prochaine section */}
      <section className="py-20 bg-neutral-900 flex items-center justify-center text-white border-t border-white/10">
        <p className="text-gray-500">Section Services & Matériel (Prochaine étape)</p>
      </section>
    </main>
  );
}