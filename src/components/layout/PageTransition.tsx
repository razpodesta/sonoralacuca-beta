/**
 * @fileoverview Componente PageTransition para transiciones entre páginas
 * @description Proporciona animaciones suaves al navegar entre páginas
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Props para el componente PageTransition
 */
interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Componente que envuelve el contenido de las páginas con transiciones animadas
 * @param props - Las propiedades del componente
 * @returns  El componente PageTransition renderizado
 */
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

