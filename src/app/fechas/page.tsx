/**
 * @fileoverview Página de fechas de conciertos
 * @description Muestra los próximos conciertos y fechas pasadas
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { tourData, type TourEvent } from "@/config/tour";
import PageTransition from "@/components/layout/PageTransition";

/**
 * Componente para mostrar un evento individual
 */
function EventCard({ event }: { event: TourEvent }) {
  const eventDate = new Date(event.date);
  const today = new Date();
  const isPast = eventDate < today;

  const getStatusColor = (status: TourEvent["status"]) => {
    switch (status) {
      case "Disponible":
        return "bg-green-600";
      case "Vendido":
        return "bg-red-600";
      case "Cancelado":
        return "bg-gray-600";
      case "Pasado":
        return "bg-gray-500";
      default:
        return "bg-gray-600";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-900/50 rounded-lg p-6 border border-white/10 hover:border-brand-accent/50 transition-all duration-300 ${
        isPast ? "opacity-75" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                event.status
              )}`}
            >
              {event.status}
            </span>
            <span className="text-gray-400 text-sm">
              {formatDate(event.date)}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">
            {event.city}
          </h3>
          <p className="text-gray-300">{event.venue}</p>
        </div>
        
        <div className="flex-shrink-0">
          {event.ticketLink && event.status === "Disponible" ? (
            <a
              href={event.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-brand-accent/80 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 inline-block"
            >
              Comprar Entradas
            </a>
          ) : event.status === "Vendido" ? (
            <span className="bg-gray-600 text-white px-6 py-2 rounded-lg font-medium">
              Agotado
            </span>
          ) : event.status === "Pasado" ? (
            <span className="text-gray-500 px-6 py-2">
              Finalizado
            </span>
          ) : (
            <span className="bg-gray-700 text-white px-6 py-2 rounded-lg font-medium">
              Próximamente
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Página de fechas de conciertos
 * @returns La página de fechas renderizada
 */
export default function FechasPage() {
  const [showPastEvents, setShowPastEvents] = useState(false);

  const today = new Date();
  const upcomingEvents = tourData.filter(event => new Date(event.date) >= today);
  const pastEvents = tourData.filter(event => new Date(event.date) < today);

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-dark text-white pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif-brand text-6xl md:text-8xl mb-6 text-brand-accent"
          >
            Próximos Shows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            ¡No te pierdas la oportunidad de vivir la experiencia Sonora La Cuca en vivo! 
            Revisa nuestras próximas fechas y asegura tu lugar.
          </motion.p>
        </section>

        {/* Próximos Conciertos */}
        <section className="container mx-auto px-4 pb-16">
          <h2 className="font-serif-brand text-4xl mb-8 text-center">
            Próximos Conciertos
          </h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="space-y-4 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No hay conciertos programados en este momento. 
                ¡Mantente atento a nuestras redes sociales para nuevos anuncios!
              </p>
            </div>
          )}
        </section>

        {/* Eventos Pasados */}
        {pastEvents.length > 0 && (
          <section className="bg-gray-900/30 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="font-serif-brand text-4xl mb-4">
                  Eventos Pasados
                </h2>
                <button
                  onClick={() => setShowPastEvents(!showPastEvents)}
                  className="text-brand-accent hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto"
                >
                  {showPastEvents ? "Ocultar" : "Ver"} eventos pasados
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-200 ${showPastEvents ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {showPastEvents && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 max-w-4xl mx-auto"
                >
                  {pastEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* Información de Contacto para Contrataciones */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gray-900/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="font-serif-brand text-3xl mb-4 text-brand-accent">
              ¿Quieres contratarnos?
            </h2>
            <p className="text-gray-300 mb-6">
              Si estás interesado en contratar a Sonora La Cuca para tu evento, 
              no dudes en contactarnos. Estaremos encantados de hacer vibrar 
              a tu audiencia con nuestra música.
            </p>
            <a
              href="mailto:contrataciones@sonoralacuca.com"
              className="bg-brand-accent hover:bg-brand-accent/80 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
            >
              Contactar para Contrataciones
            </a>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

