/**
 * @fileoverview Página principal del sitio web
 * @description Página de inicio de Sonora La Cuca
 * @author Manus AI
 * @version 1.0.0
 */

import Hero from "@/components/home/Hero";
import PageTransition from "@/components/layout/PageTransition";

/**
 * Página principal del sitio web
 * @returns La página principal renderizada
 */
export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
}

