/**
 * @fileoverview Configuración y datos del blog
 * @description Contiene los tipos y datos para las publicaciones del blog
 * @author Manus AI
 * @version 1.0.0
 */

/**
 * Interfaz para las publicaciones del blog
 */
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishDate: string;
  author: string;
}

/**
 * Datos de ejemplo para las publicaciones del blog
 */
export const blogData: Post[] = [
  {
    slug: "nuevo-album-2025",
    title: "¡Nuestro Nuevo Álbum Ya Está Aquí!",
    excerpt: "Después de meses de trabajo en el estudio, finalmente podemos compartir con ustedes nuestro nuevo álbum 'Ritmos del Corazón'.",
    content: `# ¡Nuestro Nuevo Álbum Ya Está Aquí!

Después de meses de trabajo intenso en el estudio, finalmente podemos compartir con ustedes nuestro nuevo álbum **"Ritmos del Corazón"**.

## Un Viaje Musical Único

Este álbum representa un viaje musical único que combina nuestras raíces tradicionales con sonidos contemporáneos. Cada canción cuenta una historia diferente, pero todas están unidas por el hilo conductor de la pasión y la autenticidad.

## Las Canciones

- **"Corazón Ardiente"** - Una balada que habla del amor verdadero
- **"Noches de Cumbia"** - Un tema bailable que te hará mover los pies
- **"Recuerdos del Alma"** - Una reflexión sobre nuestras raíces
- **"Fiesta en el Barrio"** - La celebración de la vida comunitaria

¡Esperamos que disfruten tanto escuchándolo como nosotros disfrutamos creándolo!`,
    coverImage: "/images/blog/nuevo-album-2025.jpg",
    publishDate: "15 de Julio, 2025",
    author: "Sonora La Cuca",
  },
  {
    slug: "gira-nacional-2025",
    title: "Anunciamos Nuestra Gira Nacional 2025",
    excerpt: "¡Nos vamos de gira por todo Chile! Conoce todas las fechas y ciudades donde podrás vernos en vivo.",
    content: `# Anunciamos Nuestra Gira Nacional 2025

¡Estamos emocionados de anunciar nuestra gira nacional que recorrerá todo Chile durante los próximos meses!

## Fechas Confirmadas

Hemos confirmado presentaciones en las principales ciudades del país, desde Arica hasta Punta Arenas. Cada show será una experiencia única con sorpresas especiales para nuestros fans.

## Entradas a la Venta

Las entradas ya están disponibles a través de PuntoTicket y en las boleterías de cada venue. ¡No te quedes sin la tuya!

## Repertorio Especial

En esta gira presentaremos canciones de nuestro nuevo álbum junto con todos los clásicos que tanto aman nuestros seguidores.`,
    coverImage: "/images/blog/gira-nacional-2025.jpg",
    publishDate: "10 de Julio, 2025",
    author: "Equipo de Producción",
  },
  {
    slug: "detras-de-camaras-estudio",
    title: "Detrás de Cámaras: En el Estudio de Grabación",
    excerpt: "Te llevamos detrás de cámaras para que veas cómo fue el proceso de grabación de nuestro nuevo álbum.",
    content: `# Detrás de Cámaras: En el Estudio de Grabación

El proceso de grabación de "Ritmos del Corazón" fue una experiencia increíble que queremos compartir contigo.

## El Estudio

Grabamos en los estudios SoundWave en Santiago, un lugar mágico donde la acústica perfecta se combina con la tecnología más avanzada.

## El Proceso Creativo

Cada día en el estudio era una nueva aventura. Desde las sesiones de brainstorming matutinas hasta las largas noches perfeccionando cada detalle.

## Momentos Especiales

Hubo momentos de pura magia musical que quedaron capturados para siempre en estas grabaciones. La química entre los miembros de la banda es algo que se puede sentir en cada nota.`,
    coverImage: "/images/blog/detras-camaras-estudio.jpg",
    publishDate: "5 de Julio, 2025",
    author: "Ana González",
  },
];

