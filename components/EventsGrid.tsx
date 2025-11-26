"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import PaymentModal from "./PaymentModal"; // Import du modal

const events = [
  {
    id: 1,
    title: "PRIMUD 2025",
    category: "Cérémonie",
    date: "10 Nov 2025",
    location: "Sofitel Ivoire, Abidjan",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3726?q=80&w=800&auto=format&fit=crop",
    price: "10.000 FCFA",
  },
  {
    id: 2,
    title: "CONCERT DES LÉGENDES",
    category: "Concert Live",
    date: "24 Déc 2025",
    location: "Palais de la Culture",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    price: "5.000 FCFA",
  },
  {
    id: 3,
    title: "ABIDJAN LAUGH FESTIVAL",
    category: "Humour",
    date: "05 Jan 2026",
    location: "Heden Golf Hotel",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=800&auto=format&fit=crop",
    price: "15.000 FCFA",
  },
];

export default function EventsGrid() {
  // État pour gérer l'ouverture du modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ name: "", price: "" });

  const handleOpenModal = (name: string, price: string) => {
    setSelectedEvent({ name, price });
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Prochains <span className="text-mred">Événements</span>
            </h2>
            <p className="text-gray-400">Réservez vos places ou accédez au VivaStream™.</p>
          </div>
          <button className="hidden md:block text-sm font-bold border-b border-mred pb-1 hover:text-mred transition-colors">
            VOIR TOUT L'AGENDA
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-mred/50 transition-colors"
            >
              <div className="absolute inset-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mblue-dark via-mblue-dark/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              </div>

              <div className="absolute top-4 left-4 bg-mred text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-mred/20">
                {event.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-mred text-sm font-bold mb-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-6">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                  {/* C'est ici qu'on branche le bouton au Modal */}
                  <button 
                    onClick={() => handleOpenModal(event.title, event.price)}
                    className="flex-1 bg-white text-black font-bold py-3 rounded-xl hover:bg-mred hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Ticket size={18} />
                    Réserver
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Le Modal est placé ici, invisible par défaut */}
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        eventName={selectedEvent.name}
        price={selectedEvent.price}
      />
    </section>
  );
}