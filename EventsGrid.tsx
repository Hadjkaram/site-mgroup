"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";

// Données fictives pour la démo
const events = [
  {
    id: 1,
    title: "PRIMUD 2025",
    category: "Cérémonie",
    date: "10 Nov 2025",
    location: "Sofitel Ivoire, Abidjan",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3726?q=80&w=800&auto=format&fit=crop", // Image concert générique
    price: "À partir de 10.000 FCFA",
  },
  {
    id: 2,
    title: "CONCERT DES LÉGENDES",
    category: "Concert Live",
    date: "24 Déc 2025",
    location: "Palais de la Culture",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    price: "À partir de 5.000 FCFA",
  },
  {
    id: 3,
    title: "ABIDJAN LAUGH FESTIVAL",
    category: "Humour",
    date: "05 Jan 2026",
    location: "Heden Golf Hotel",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=800&auto=format&fit=crop",
    price: "À partir de 15.000 FCFA",
  },
];

export default function EventsGrid() {
  return (
    <section className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        {/* Header de section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Prochains <span className="text-yellow-500">Événements</span>
            </h2>
            <p className="text-gray-400">Réservez vos places ou accédez au VivaStream™.</p>
          </div>
          <button className="hidden md:block text-sm font-bold border-b border-yellow-500 pb-1 hover:text-yellow-500 transition-colors">
            VOIR TOUT L'AGENDA
          </button>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image de fond avec effet de zoom au survol */}
              <div className="absolute inset-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dégradé noir pour lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Badge Catégorie */}
              <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {event.category}
              </div>

              {/* Contenu (Bas de carte) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 leading-tight">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-6">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                {/* Bouton qui apparaît au survol */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                  <button className="flex-1 bg-white text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                    <Ticket size={18} />
                    Réserver
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bouton mobile uniquement */}
        <div className="mt-8 text-center md:hidden">
            <button className="text-sm font-bold border-b border-yellow-500 pb-1 text-white">
                VOIR TOUT L'AGENDA
            </button>
        </div>
      </div>
    </section>
  );
}