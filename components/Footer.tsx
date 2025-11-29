import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 inline-block">
              MGROUP<span className="text-mred">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              L'agence leader de l'événementiel et de la production audiovisuelle en Côte d'Ivoire. Créateur des PRIMUD.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-mred hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-mred transition-colors">Agence</Link></li>
              <li><Link href="#" className="hover:text-mred transition-colors">Billetterie</Link></li>
              <li><Link href="#" className="hover:text-mred transition-colors">VivaStream™</Link></li>
              <li><Link href="#" className="hover:text-mred transition-colors">Carrières</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-mred" />
                Cocody Rivera 2, Abidjan
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mred" />
                +225 27 22 00 00
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mred" />
                contact@mgroup.ci
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 MGROUP CI. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}