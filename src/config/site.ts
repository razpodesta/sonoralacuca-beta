/**
 * Tipado para los enlaces de navegación.
 */
export interface NavLink {
  name: string;
  href: string;
}

/**
 * Tipado para los miembros de la banda.
 */
export interface BandMember {
  name: string;
  role: string;
  imageUrl: string;
}

// Este archivo centraliza la configuración del sitio para fácil mantenimiento.
export const navLinks: NavLink[] = [
  { name: "Inicio", href: "/" },
  { name: "Biografía", href: "/biografia" },
  { name: "Música", href: "/musica" },
  { name: "Fechas", href: "/fechas" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "/contacto" },
  { name: "Press Kit", href: "/press-kit" },
];

export const siteConfig = {
  socials: {
    instagram: "https://instagram.com/sonoralacuca",
    facebook: "https://facebook.com/sonoralacuca",
    tiktok: "https://tiktok.com/@sonoralacuca",
    youtube: "https://youtube.com/sonoralacuca",
  },
  contact: {
    bookingEmail: "contrataciones@sonoralacuca.com",
    pressEmail: "prensa@sonoralacuca.com",
  },
  bandMembers: [
    {
      name: 'Juan "Cucaracho" Pérez',
      role: "Vocalista y Güiro",
      imageUrl: "/images/band/juan-perez.jpg",
    },
    {
      name: 'Ana "La Tecla" González',
      role: "Piano y Coros",
      imageUrl: "/images/band/ana-gonzalez.jpg",
    },
    {
      name: 'Carlos "El Bajo" Soto',
      role: "Bajo Eléctrico",
      imageUrl: "/images/band/carlos-soto.jpg",
    },
    {
      name: 'Sofía "La Timbalera" Rojas',
      role: "Timbales y Percusión",
      imageUrl: "/images/band/sofia-rojas.jpg",
    },
  ] as BandMember[],
};

