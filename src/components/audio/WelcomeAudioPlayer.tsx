/**
 * @fileoverview Componente WelcomeAudioPlayer
 * @description Reproductor de audio de bienvenida con controles básicos
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Componente de reproductor de audio de bienvenida
 * @returns  El componente WelcomeAudioPlayer renderizado
 */
export default function WelcomeAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear el elemento de audio
    audioRef.current = new Audio("/audio/intro-snippet.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  /**
   * Alterna la reproducción del audio
   */
  const togglePlay = (): void => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Error al reproducir audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  /**
   * Cierra el reproductor
   */
  const closePlayer = (): void => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setIsVisible(false);
  };

  if (!isVisible) return <></>;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-40 bg-brand-dark/90 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white shadow-lg"
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-10 h-10 bg-brand-accent rounded-full hover:bg-brand-accent/80 transition-colors duration-200"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <div className="text-sm">
            <p className="font-medium">¡Bienvenido!</p>
            <p className="text-gray-300">Sonora La Cuca</p>
          </div>
          
          <button
            onClick={closePlayer}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Cerrar reproductor"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

