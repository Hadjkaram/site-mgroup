"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          MGROUP<span className="text-yellow-500">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {["Agence", "Services", "Events"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
            <Link href="/live" className="text-white hover:text-yellow-400 transition-colors text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                LIVE
            </Link>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-2">
            <Ticket size={16} />
            BILLETTERIE
            </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {["Agence", "Services", "Events", "Live"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}