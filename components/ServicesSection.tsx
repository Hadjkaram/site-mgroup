"use client";
import { motion } from "framer-motion";
import { Speaker, Zap, Mic2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Speaker size={40} />,
    title: "Sonorisation",
    description: "Systèmes Line Array dernière génération pour concerts, festivals et conférences.",
  },
  {
    icon: <Zap size={40} />,
    title: "Lumières & FX",
    description: "Mise en lumière architecturale, scènes dynamiques et effets pyrotechniques.",
  },
  {
    icon: <Mic2 size={40} />,
    title: "Scène & Booking",
    description: "Podiums modulaires et gestion complète de vos artistes (Booking & Régie).",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-mblue-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow effect (Bleu au lieu de Jaune) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mblue/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              L'Expertise <span className="text-mblue">Technique</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Au-delà de l'organisation, MGroup fournit l'infrastructure technique des plus grands événements d'Afrique de l'Ouest.
            </p>
          </div>
          <button className="flex items-center gap-2 text-white font-bold border border-white/20 px-6 py-3 rounded-full hover:bg-mblue hover:border-mblue transition-all">
            Louer du matériel <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/40 p-8 rounded-2xl border border-white/10 hover:border-mred/50 transition-colors group cursor-pointer backdrop-blur-sm"
            >
              {/* Icône en Magenta */}
              <div className="mb-6 text-mred bg-mred/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}