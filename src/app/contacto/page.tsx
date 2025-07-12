/**
 * @fileoverview Página de contacto
 * @description Formulario de contacto y información de la banda
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { InstagramIcon, FacebookIcon, TikTokIcon, YouTubeIcon } from "@/components/icons/SocialIcons";
import PageTransition from "@/components/layout/PageTransition";

/**
 * Interfaz para los datos del formulario
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Página de contacto
 * @returns La página de contacto renderizada
 */
export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  /**
   * Maneja los cambios en los campos del formulario
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            ¿Tienes alguna pregunta o quieres ponerte en contacto con nosotros? 
            ¡Nos encantaría saber de ti!
          </motion.p>
        </section>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/50 rounded-lg p-8"
            >
              <h2 className="font-serif-brand text-3xl mb-6 text-brand-accent">
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="contrataciones">Contrataciones</option>
                    <option value="prensa">Prensa y Medios</option>
                    <option value="colaboraciones">Colaboraciones</option>
                    <option value="fan">Mensaje de Fan</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-400 resize-vertical"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {/* Estado del envío */}
                {submitStatus === "success" && (
                  <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-4 text-green-300">
                    ¡Mensaje enviado exitosamente! Te responderemos pronto.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-600/20 border border-red-600/50 rounded-lg p-4 text-red-300">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-accent hover:bg-brand-accent/80 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Información Directa */}
              <div className="bg-gray-900/50 rounded-lg p-8">
                <h2 className="font-serif-brand text-3xl mb-6 text-brand-accent">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contrataciones</h3>
                    <p className="text-gray-300 mb-2">
                      Para eventos, conciertos y presentaciones
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.bookingEmail}`}
                      className="text-brand-accent hover:text-white transition-colors duration-200"
                    >
                      {siteConfig.contact.bookingEmail}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prensa y Medios</h3>
                    <p className="text-gray-300 mb-2">
                      Para entrevistas, notas de prensa y material promocional
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.pressEmail}`}
                      className="text-brand-accent hover:text-white transition-colors duration-200"
                    >
                      {siteConfig.contact.pressEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="bg-gray-900/50 rounded-lg p-8">
                <h2 className="font-serif-brand text-3xl mb-6 text-brand-accent">
                  Síguenos
                </h2>
                
                <p className="text-gray-300 mb-6">
                  Mantente al día con nuestras últimas noticias, conciertos y lanzamientos
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <InstagramIcon className="w-6 h-6 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                  
                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FacebookIcon className="w-6 h-6 text-blue-500" />
                    <span>Facebook</span>
                  </a>
                  
                  <a
                    href={siteConfig.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <TikTokIcon className="w-6 h-6 text-white" />
                    <span>TikTok</span>
                  </a>
                  
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <YouTubeIcon className="w-6 h-6 text-red-500" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

