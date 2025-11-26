"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, CreditCard, CheckCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
  price: string;
}

export default function PaymentModal({ isOpen, onClose, eventName, price }: PaymentModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simuler le processus de paiement
  const handlePayment = (provider: string) => {
    setLoading(true);
    // On fait semblant d'attendre la validation Wave/Orange...
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Après 2 secondes de succès, on redirige vers le Live
      setTimeout(() => {
        router.push("/live");
      }, 2000);
    }, 2000); // 2 secondes de chargement
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Fond sombre flouté */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* La fenêtre de paiement */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-neutral-900 border border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-mblue-dark p-6 border-b border-white/10 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-lg">Guichet de Paiement</h3>
                <p className="text-gray-400 text-sm">Transaction sécurisée SSL</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {!success ? (
                <>
                  {/* Résumé */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6 flex justify-between items-center">
                    <div>
                      <p className="text-gray-400 text-xs uppercase font-bold">Événement</p>
                      <p className="text-white font-bold">{eventName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs uppercase font-bold">Montant</p>
                      <p className="text-mred font-bold text-xl">{price}</p>
                    </div>
                  </div>

                  {/* Choix du moyen de paiement */}
                  <p className="text-white mb-4 font-bold text-sm">Choisissez votre moyen de paiement :</p>
                  
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4">
                      <Loader2 size={48} className="text-mred animate-spin" />
                      <p className="text-white animate-pulse">Validation de la transaction en cours...</p>
                      <p className="text-gray-500 text-xs">Veuillez valider sur votre téléphone</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {/* Bouton Wave */}
                      <button 
                        onClick={() => handlePayment("Wave")}
                        className="bg-[#1dc4ff]/10 border border-[#1dc4ff]/30 hover:bg-[#1dc4ff] hover:text-black text-[#1dc4ff] p-4 rounded-xl flex flex-col items-center gap-2 transition-all font-bold"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#1dc4ff] flex items-center justify-center text-black font-bold text-xs">W</div>
                        Wave
                      </button>

                      {/* Bouton Orange Money */}
                      <button 
                        onClick={() => handlePayment("OM")}
                        className="bg-[#ff7900]/10 border border-[#ff7900]/30 hover:bg-[#ff7900] hover:text-black text-[#ff7900] p-4 rounded-xl flex flex-col items-center gap-2 transition-all font-bold"
                      >
                         <div className="w-8 h-8 rounded-full bg-[#ff7900] flex items-center justify-center text-black font-bold text-xs">OM</div>
                        Orange Money
                      </button>

                      {/* Bouton MTN */}
                      <button 
                         onClick={() => handlePayment("MTN")}
                         className="bg-[#ffcc00]/10 border border-[#ffcc00]/30 hover:bg-[#ffcc00] hover:text-black text-[#ffcc00] p-4 rounded-xl flex flex-col items-center gap-2 transition-all font-bold"
                      >
                         <div className="w-8 h-8 rounded-full bg-[#ffcc00] flex items-center justify-center text-black font-bold text-xs">M</div>
                        MTN MoMo
                      </button>

                      {/* Bouton Carte */}
                      <button 
                        onClick={() => handlePayment("VISA")}
                        className="bg-white/5 border border-white/20 hover:bg-white hover:text-black text-white p-4 rounded-xl flex flex-col items-center gap-2 transition-all font-bold"
                      >
                        <CreditCard size={24} />
                        Carte Visa
                      </button>
                    </div>
                  )}
                </>
              ) : (
                // Écran de Succès
                <div className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50"
                  >
                    <CheckCircle size={40} className="text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Paiement Réussi !</h3>
                  <p className="text-gray-400 mb-6">Votre billet a été envoyé par SMS.</p>
                  <p className="text-mred font-bold animate-pulse">Redirection vers le concert en direct...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}