/**
 * @fileoverview Componente ChatWidget
 * @description Widget de chat flotante para interacción con usuarios
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Props para el componente ChatWidget
 */
interface ChatWidgetProps {
  avatarSrc: string;
  welcomeMessage: string;
}

/**
 * Widget de chat flotante para interacción con usuarios
 * @param props - Las propiedades del componente
 * @returns  El componente ChatWidget renderizado
 */
export default function ChatWidget({ avatarSrc, welcomeMessage }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Alterna la visibilidad del chat
   */
  const toggleChat = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-lg shadow-xl p-4 w-80 max-w-sm"
          >
            <div className="flex items-start space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={avatarSrc}
                  alt="Avatar del chat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 text-sm leading-relaxed">
                  {welcomeMessage}
                </p>
                <div className="mt-3 flex space-x-2">
                  <Link
                    href="/contacto"
                    className="inline-block bg-brand-accent text-white px-3 py-1 rounded text-xs hover:bg-brand-accent/80 transition-colors duration-200"
                  >
                    Contactar
                  </Link>
                  <Link
                    href="/fechas"
                    className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300 transition-colors duration-200"
                  >
                    Ver Fechas
                  </Link>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Cerrar chat"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón del Chat */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-brand-accent rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center"
        aria-label="Abrir chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Indicador de notificación */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-brand-primary rounded-full border-2 border-white"
          />
        )}
      </motion.button>
    </div>
  );
}

