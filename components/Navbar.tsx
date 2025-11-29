"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-mblue-dark/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-mblue/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO IMAGE */}
        <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16 transition-transform hover:scale-105">
          <Image
            src="/logo-mgroup.png" 
            alt="MGROUP Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {["Agence", "Services", "Events"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-bold text-white/90 hover:text-mred transition-colors uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-mred transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
            <Link href="/live" className="text-white hover:text-mred transition-colors text-sm font-extrabold flex items-center gap-2 bg-mblue-dark/50 px-4 py-2 rounded-full border border-white/10 hover:border-mred/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mred opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-mred"></span>
                </span>
                LIVE
            </Link>
            
            {/* CORRECTION ICI : C'est maintenant un LINK vers /events */}
            <Link 
              href="/events"
              className="bg-mred text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-mred transition-all shadow-lg shadow-mred/20 flex items-center gap-2"
            >
              <Ticket size={18} strokeWidth={2.5} />
              BILLETTERIE
            </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-mblue-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {["Agence", "Services", "Events", "Live"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white text-xl font-bold tracking-wider hover:text-mred transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
             {/* CORRECTION ICI AUSSI : Lien Mobile */}
             <Link 
                href="/events"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-mred text-white w-full py-4 rounded-full font-bold text-lg mt-4 text-center block"
             >
                BILLETTERIE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}