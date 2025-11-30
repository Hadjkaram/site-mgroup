"use client";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-mblue-dark">
      
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        {/* Overlay pour assombrir la vidéo et faire ressortir le texte */}
        <div className="absolute inset-0 bg-mblue-dark/70 z-10" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Vidéo de concert libre de droit (Placeholder en attendant celle de MGroup) */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-with-lights-2083-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest mb-8 uppercase shadow-lg shadow-mblue/20">
            L'Agence Leader en Côte d'Ivoire
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-tight">
            VIVRE L'INSTANT <br />
            {/* Correction couleur : Plus de violet, on utilise le dégradé MGroup */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-mred">
              SANS LIMITES
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            De la conception à la diffusion <span className="text-white font-bold">VivaStream™</span>. 
            MGroup propulse vos événements dans une nouvelle dimension.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/agenda" className="group bg-mred text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-mred transition-all flex items-center gap-2 w-full md:w-auto justify-center shadow-lg shadow-mred/30">
              Voir l'agenda
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/live" className="group px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2 w-full md:w-auto justify-center">
              <PlayCircle className="text-mred" />
              Démo Live
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </motion.div>
    </section>
  );
}