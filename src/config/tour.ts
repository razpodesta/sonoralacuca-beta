// Tipamos los datos para cada evento
export interface TourEvent {
  date: string; // Formato AAAA-MM-DD para poder comparar fechas
  city: string;
  venue: string;
  ticketLink: string | null; // Puede no haber link aún
  status: "Vendido" | "Disponible" | "Cancelado" | "Pasado";
}

// Lista completa de eventos, pasados y futuros
export const tourData: TourEvent[] = [
  // --- Próximos Conciertos ---
  {
    date: "2025-09-17",
    city: "Santiago, Chile",
    venue: 'Fonda Permanente "La Popular"',
    ticketLink: "https://www.puntoticket.com/",
    status: "Disponible",
  },
  {
    date: "2025-09-18",
    city: "Rancagua, Chile",
    venue: "Medialuna Monumental",
    ticketLink: "https://www.puntoticket.com/",
    status: "Disponible",
  },
  {
    date: "2025-09-20",
    city: "Valparaíso, Chile",
    venue: "La Quinta Vergara",
    ticketLink: null, // Aún no disponible
    status: "Disponible",
  },
  {
    date: "2025-10-05",
    city: "Concepción, Chile",
    venue: "Teatro Biobío",
    ticketLink: "https://www.puntoticket.com/",
    status: "Vendido",
  },

  // --- Fechas Pasadas ---
  {
    date: "2025-07-01",
    city: "Antofagasta, Chile",
    venue: "Estadio Sokol",
    ticketLink: null,
    status: "Pasado",
  },
  {
    date: "2025-06-15",
    city: "La Serena, Chile",
    venue: "Coliseo Monumental",
    ticketLink: null,
    status: "Pasado",
  },
];

// ===============================================================================================
// MEJORAS FUTURAS:
// - Conectar esto a una API de un servicio de ticketing como Bandsintown o Songkick.
// - Añadir un mapa interactivo con pines para cada ubicación de concierto.
// - Permitir a los usuarios suscribirse para recibir notificaciones de nuevos conciertos en su ciudad.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================

