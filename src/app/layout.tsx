/**
 * @fileoverview Layout principal de la aplicación
 * @description Configuración global del sitio web de Sonora La Cuca
 * @author Manus AI
 * @version 1.0.0
 */

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import WelcomeAudioPlayer from "@/components/audio/WelcomeAudioPlayer";
import ChatWidget from "@/components/contact/ChatWidget";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sonora La Cuca - La Reina de la Cumbia",
  description: "Sitio web oficial de Sonora La Cuca, la banda de cumbia más querida de Chile. Descubre nuestra música, próximos conciertos y mantente conectado con nosotros.",
  keywords: ["Sonora La Cuca", "cumbia", "música chilena", "banda", "conciertos", "música latina"],
  authors: [{ name: "Sonora La Cuca" }],
  creator: "Sonora La Cuca",
  publisher: "Sonora La Cuca",
  openGraph: {
    title: "Sonora La Cuca - La Reina de la Cumbia",
    description: "Sitio web oficial de Sonora La Cuca, la banda de cumbia más querida de Chile.",
    url: "https://sonoralacuca.com",
    siteName: "Sonora La Cuca",
    images: [
      {
        url: "/images/logo-sonora-la-cuca.png",
        width: 1200,
        height: 630,
        alt: "Sonora La Cuca Logo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonora La Cuca - La Reina de la Cumbia",
    description: "Sitio web oficial de Sonora La Cuca, la banda de cumbia más querida de Chile.",
    images: ["/images/logo-sonora-la-cuca.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

/**
 * Layout raíz de la aplicación
 * @param children - Componentes hijos a renderizar
 * @returns El layout principal renderizado
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased bg-brand-dark text-white">
        <Preloader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WelcomeAudioPlayer />
        <ChatWidget 
          avatarSrc="/images/band/juan-perez.jpg"
          welcomeMessage="¡Hola! Soy Juan de Sonora La Cuca. ¿En qué puedo ayudarte? ¿Quieres saber sobre nuestros próximos conciertos o tienes alguna pregunta?"
        />
      </body>
    </html>
  );
}

