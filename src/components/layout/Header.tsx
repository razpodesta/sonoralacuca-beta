/**
 * @fileoverview Componente Header principal del sitio web de Sonora La Cuca
 * @description Proporciona navegación principal, logo y elementos de UI del header
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/config/site";

/**
 * Componente Header que incluye navegación principal y logo
 * @returns  El componente Header renderizado
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  /**
   * Efecto para detectar el scroll y cambiar el estilo del header
   */
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Alterna el estado del menú móvil
   */
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Cierra el menú móvil
   */
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-sonora-la-cuca.png"
              alt="Sonora La Cuca Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-serif-brand text-xl text-white hidden sm:block">
              Sonora La Cuca
            </span>
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-brand-accent transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Abrir menú de navegación"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 border-t border-white/10 pt-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-white hover:text-brand-accent transition-colors duration-200 font-medium py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

