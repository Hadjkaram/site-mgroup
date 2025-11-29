import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Globe, Building } from "lucide-react";

export default function AgencePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      {/* Hero Agence */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mblue-dark/20 z-0"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            L'HISTOIRE <span className="text-mred">MGROUP</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fondée par <span className="text-white font-bold">Le Molare</span>, MGroup s'est imposée comme la référence incontournable de l'événementiel en Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-neutral-900 border-y border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Building, label: "Années d'expérience", value: "15+" },
            { icon: Award, label: "Prix Internationaux", value: "24" },
            { icon: Users, label: "Collaborateurs", value: "50+" },
            { icon: Globe, label: "Pays Couverts", value: "12" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <stat.icon className="text-mred mb-4" size={32} />
              <span className="text-3xl font-black text-white">{stat.value}</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Le Mot du PDG */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             {/* Placeholder pour photo Molare */}
            <div className="w-full h-[400px] bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mblue-dark/50"></div>
                <span className="relative z-10 text-gray-500 font-bold">Photo PDG Le Molare</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Une vision pour la culture ivoirienne</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              "Notre mission ne s'arrête pas à l'organisation d'événements. Nous créons des moments d'éternité. Avec les PRIMUD et nos concerts, nous célébrons l'excellence africaine. Aujourd'hui, avec VivaStream, nous exportons cette excellence dans le monde entier."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-mred"></div>
              <span className="font-bold text-white uppercase tracking-widest">Soumahoro Maury Féré</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}