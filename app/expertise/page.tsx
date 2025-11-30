import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ExpertisePage() {
  return (
    <main className="bg-mblue-dark min-h-screen text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          L'EXPERTISE <span className="text-mblue-light">TECHNIQUE</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          MGroup possède le plus grand parc de matériel scénique de Côte d'Ivoire.
          Sonorisation, lumières, écrans géants : nous avons tout pour vos événements.
        </p>
      </section>

      {/* Catalogue Section */}
      <section className="py-12 bg-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image 
                   src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop" 
                   alt="Matériel de sonorisation"
                   fill
                   className="object-cover"
                />
            </div>
            <div>
                <h3 className="text-3xl font-bold mb-6">Sonorisation Haute Fidélité</h3>
                <ul className="space-y-4">
                    {["Systèmes Line Array L-Acoustics", "Consoles numériques Yamaha & DiGiCo", "Microphones Shure & Sennheiser", "Systèmes de retour In-Ear"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="text-mred" size={20} />
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="mt-8 bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-mred hover:text-white transition-all">
                    Demander un devis SON
                </button>
            </div>
        </div>
      </section>

      {/* Lumière Section (Inversée) */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6">Lumières & Effets Spéciaux</h3>
                <ul className="space-y-4">
                    {["Lyres Beam, Spot et Wash", "Projecteurs architecturaux LED", "Machines à fumée lourde & CO2", "Lasers RGB haute puissance"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="text-mblue-light" size={20} />
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="mt-8 border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                    Demander un devis LUMIÈRE
                </button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image 
                   src="https://images.unsplash.com/photo-1504198358623-85c1e2d5f44b?q=80&w=1000&auto=format&fit=crop" 
                   alt="Jeux de lumières"
                   fill
                   className="object-cover"
                />
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}