/**
 * @fileoverview Configuración y datos de la discografía
 * @description Contiene los tipos y datos para los álbumes de la banda
 * @author Manus AI
 * @version 1.0.0
 */

/**
 * Interfaz para los álbumes de la discografía
 */
export interface Album {
  id: number;
  title: string;
  year: number;
  coverImage: string;
  description: string;
  tracks: Track[];
  streamingLinks: StreamingLinks;
}

/**
 * Interfaz para las canciones de un álbum
 */
export interface Track {
  number: number;
  title: string;
  duration: string;
}

/**
 * Interfaz para los enlaces de streaming
 */
export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  deezer?: string;
}

/**
 * Datos de la discografía de Sonora La Cuca
 */
export const discographyData: Album[] = [
  {
    id: 1,
    title: "Ritmos del Corazón",
    year: 2025,
    coverImage: "/images/albums/ritmos-del-corazon.jpg",
    description: "Nuestro álbum más reciente que combina tradición y modernidad en una propuesta musical única. Cada canción es un viaje emocional que conecta con el alma del oyente.",
    tracks: [
      { number: 1, title: "Corazón Ardiente", duration: "3:45" },
      { number: 2, title: "Noches de Cumbia", duration: "4:12" },
      { number: 3, title: "Recuerdos del Alma", duration: "3:28" },
      { number: 4, title: "Fiesta en el Barrio", duration: "3:55" },
      { number: 5, title: "Melodías de Amor", duration: "4:03" },
      { number: 6, title: "Ritmo Tropical", duration: "3:38" },
      { number: 7, title: "Sueños de Libertad", duration: "4:20" },
      { number: 8, title: "Danza del Viento", duration: "3:52" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/ritmos-del-corazon",
      appleMusic: "https://music.apple.com/album/ritmos-del-corazon",
      youtube: "https://youtube.com/playlist?list=ritmos-del-corazon",
      deezer: "https://deezer.com/album/ritmos-del-corazon",
    },
  },
  {
    id: 2,
    title: "Sonidos de la Tierra",
    year: 2023,
    coverImage: "/images/albums/sonidos-de-la-tierra.jpg",
    description: "Un homenaje a nuestras raíces chilenas y latinoamericanas. Este álbum explora los sonidos tradicionales con un enfoque contemporáneo.",
    tracks: [
      { number: 1, title: "Tierra Madre", duration: "4:15" },
      { number: 2, title: "Vientos del Sur", duration: "3:42" },
      { number: 3, title: "Canto Ancestral", duration: "4:28" },
      { number: 4, title: "Raíces Profundas", duration: "3:55" },
      { number: 5, title: "Montañas Sagradas", duration: "4:08" },
      { number: 6, title: "Río de Melodías", duration: "3:33" },
      { number: 7, title: "Cielo Estrellado", duration: "4:45" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/sonidos-de-la-tierra",
      appleMusic: "https://music.apple.com/album/sonidos-de-la-tierra",
      youtube: "https://youtube.com/playlist?list=sonidos-de-la-tierra",
    },
  },
  {
    id: 3,
    title: "Primeros Pasos",
    year: 2021,
    coverImage: "/images/albums/primeros-pasos.jpg",
    description: "Nuestro álbum debut que marcó el inicio de esta increíble aventura musical. Canciones llenas de energía y pasión que definieron nuestro sonido característico.",
    tracks: [
      { number: 1, title: "Nuevo Amanecer", duration: "3:22" },
      { number: 2, title: "Caminos de Esperanza", duration: "4:01" },
      { number: 3, title: "Ritmo de Vida", duration: "3:48" },
      { number: 4, title: "Corazón Valiente", duration: "3:35" },
      { number: 5, title: "Sueños Cumplidos", duration: "4:12" },
      { number: 6, title: "Melodía Eterna", duration: "3:58" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/primeros-pasos",
      appleMusic: "https://music.apple.com/album/primeros-pasos",
      youtube: "https://youtube.com/playlist?list=primeros-pasos",
    },
  },
];

