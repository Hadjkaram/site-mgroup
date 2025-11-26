"use client";
import { useState } from "react"; // On importe juste useState
import Navbar from "@/components/Navbar";
import { Send, Heart, Users, Share2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LivePage() {
  // Faux messages pour simuler l'ambiance
  const [messages, setMessages] = useState([
    { user: "Sarah K.", text: "Le son est incroyable 🔥", color: "text-mred" },
    { user: "Marc O.", text: "Molare est le boss !", color: "text-blue-400" },
    { user: "Awa T.", text: "Depuis Paris on est là ❤️", color: "text-yellow-400" },
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [likes, setLikes] = useState(1540);

  // CORRECTION ICI : On utilise "React.FormEvent" pour éviter les erreurs
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { user: "Moi", text: newMessage, color: "text-white" }]);
    setNewMessage("");
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      
      {/* Container Principal */}
      <div className="flex-1 flex flex-col lg:flex-row pt-20 h-screen overflow-hidden">
        
        {/* SECTION GAUCHE : LE PLAYER VIDÉO */}
        <div className="flex-1 bg-black flex flex-col relative">
          
          <div className="relative flex-1 bg-neutral-900 flex items-center justify-center overflow-hidden group">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-with-lights-2083-large.mp4" type="video/mp4" />
            </video>

            <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
              <span className="bg-red-600 px-3 py-1 text-xs font-bold rounded flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                EN DIRECT
              </span>
              <span className="bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-bold rounded flex items-center gap-2">
                <Users size={14} />
                12,405 spectateurs
              </span>
            </div>
          </div>

          <div className="p-6 bg-mblue-dark border-b border-white/10 lg:border-none">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">PRIMUD 2025 - La Grande Soirée</h1>
                <p className="text-gray-400 text-sm">Organisé par MGroup • En direct depuis Sofitel Ivoire</p>
              </div>
              <div className="flex gap-3">
                 <button onClick={handleLike} className="flex items-center gap-2 bg-white/10 hover:bg-mred px-4 py-2 rounded-full transition-colors group">
                    <Heart size={20} className={`group-hover:fill-white transition-all ${likes % 2 === 0 ? 'scale-100' : 'scale-110'}`} />
                    <span className="font-bold">{likes}</span>
                 </button>
                 <button className="flex items-center gap-2 bg-white/10 hover:bg-mblue px-4 py-2 rounded-full transition-colors">
                    <Share2 size={20} />
                    Partager
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DROITE : LE CHAT */}
        <div className="w-full lg:w-[400px] bg-neutral-900 border-l border-white/10 flex flex-col h-[50vh] lg:h-full">
          
          <div className="p-4 border-b border-white/10 bg-neutral-900 z-10 flex justify-between items-center">
            <h3 className="font-bold text-lg flex items-center gap-2">
                <MessageCircle size={20} className="text-mred" />
                Chat en direct
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
                {messages.map((msg, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3"
                >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-white/10 text-white`}>
                        {msg.user.charAt(0)}
                    </div>
                    <div>
                        <span className={`text-xs font-bold ${msg.color} mr-2`}>{msg.user}</span>
                        <p className="text-sm text-gray-300 inline">{msg.text}</p>
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="p-4 border-t border-white/10 bg-black">
            <form onSubmit={handleSendMessage} className="relative">
                <input 
                    type="text" 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Participez au chat..."
                    className="w-full bg-neutral-800 text-white rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-mred text-sm"
                />
                <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-mred p-2 rounded-full hover:bg-white hover:text-mred transition-colors"
                >
                    <Send size={16} />
                </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}