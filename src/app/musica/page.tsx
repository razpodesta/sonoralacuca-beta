/**
 * @fileoverview Página de música y discografía
 * @description Muestra los álbumes y canciones de Sonora La Cuca
 * @author Manus AI
 * @version 1.0.0
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { discographyData, type Album } from "@/config/discography";
import PageTransition from "@/components/layout/PageTransition";

/**
 * Componente para mostrar un álbum individual
 */
function AlbumCard({ album }: { album: Album }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-300"
    >
      <div className="relative aspect-square">
        <Image
          src={album.coverImage}
          alt={`Portada del álbum ${album.title}`}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif-brand text-2xl text-white mb-2">
              {album.title}
            </h3>
            <p className="text-brand-accent font-medium">{album.year}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-brand-accent hover:text-white transition-colors duration-200"
            aria-label={isExpanded ? "Contraer información" : "Expandir información"}
          >
            <svg 
              className={`w-6 h-6 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {album.description}
        </p>

        {/* Enlaces de Streaming */}
        <div className="flex flex-wrap gap-2 mb-4">
          {album.streamingLinks.spotify && (
            <a
              href={album.streamingLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition-colors duration-200"
            >
              Spotify
            </a>
          )}
          {album.streamingLinks.appleMusic && (
            <a
              href={album.streamingLinks.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors duration-200"
            >
              Apple Music
            </a>
          )}
          {album.streamingLinks.youtube && (
            <a
              href={album.streamingLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs transition-colors duration-200"
            >
              YouTube
            </a>
          )}
        </div>

        {/* Lista de Canciones */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 pt-4"
          >
            <h4 className="text-white font-medium mb-3">Lista de Canciones:</h4>
            <ul className="space-y-2">
              {album.tracks.map((track) => (
                <li key={track.number} className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">
                    {track.number}. {track.title}
                  </span>
                  <span className="text-gray-500">{track.duration}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Página de música y discografía
 * @returns La página de música renderizada
 */
export default function MusicaPage() {
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
            Nuestra Música
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Descubre nuestra discografía completa, desde nuestros primeros pasos 
            hasta nuestras creaciones más recientes.
          </motion.p>
        </section>

        {/* Discografía */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discographyData.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>

        {/* Sección de Streaming */}
        <section className="bg-gray-900/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif-brand text-4xl mb-8 text-brand-accent">
              Escúchanos en Todas las Plataformas
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestra música está disponible en todas las principales plataformas 
              de streaming. ¡Síguenos para no perderte ningún lanzamiento!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://open.spotify.com/artist/sonoralacuca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Spotify
              </a>
              <a
                href="https://music.apple.com/artist/sonoralacuca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Apple Music
              </a>
              <a
                href="https://youtube.com/sonoralacuca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                YouTube Music
              </a>
              <a
                href="https://deezer.com/artist/sonoralacuca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Deezer
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

