import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsGrid from "@/components/EventsGrid";

export default function EventsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          AGENDA <span className="text-mred">OFFICIEL</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Retrouvez tous les concerts, festivals et cérémonies signés MGroup.
        </p>
      </div>

      {/* La grille avec le système de paiement intégré */}
      <EventsGrid />

      <Footer />
    </main>
  );
}