import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsGrid from "@/components/EventsGrid";

export default function AgendaPage() {
  return (
    <main className="bg-mblue-dark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-40 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          AGENDA <span className="text-mred">OFFICIEL</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Découvrez tous les événements à venir signés MGroup.
        </p>
      </div>

      {/* On réutilise la grille, mais on pourrait la charger avec plus d'événements ici */}
      <EventsGrid />

      <Footer />
    </main>
  );
}