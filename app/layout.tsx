import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MGROUP | Leader de l'Événementiel & VivaStream",
  description: "Agence événementielle MGroup. Billetterie, Location de matériel et Diffusion Live VivaStream™.",
  icons: {
    icon: "/favicon.ico", // On utilisera le logo par défaut pour l'instant
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}