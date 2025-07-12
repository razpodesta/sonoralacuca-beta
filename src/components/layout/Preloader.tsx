/**
 * @fileoverview Componente Preloader para la carga inicial del sitio
 * @description Muestra una animación de carga mientras se inicializa la aplicación
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Componente Preloader que se muestra durante la carga inicial
 * @returns  El componente Preloader renderizado
 */
export default function Preloader() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-brand-dark flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/images/logo-sonora-la-cuca.png"
                alt="Sonora La Cuca Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif-brand text-3xl text-white mb-4"
            >
              Sonora La Cuca
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center space-x-1"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="w-2 h-2 bg-brand-accent rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

