import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 pb-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          NOTRE <span className="text-mblue">EXPERTISE</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Découvrez notre parc matériel de pointe disponible à la location pour vos événements.
        </p>
      </div>

      {/* On réutilise le composant existant */}
      <ServicesSection />

      {/* Section Contact Rapide */}
      <section className="py-20 bg-neutral-900 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Besoin d'un devis technique ?</h2>
            <button className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-mblue hover:text-white transition-all">
                Télécharger le catalogue PDF
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}