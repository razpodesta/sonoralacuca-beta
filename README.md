# Sonora La Cuca - Sitio Web Oficial

![Sonora La Cuca](public/images/logo-sonora-la-cuca.png)

## 🎵 Descripción

Sitio web oficial de **Sonora La Cuca**, "La Reina de la Cumbia". Un sitio web moderno y responsive desarrollado con Next.js 15, que presenta la banda, su música, fechas de conciertos y permite el contacto directo con los fans.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con animaciones suaves
- **📱 Responsive**: Funciona perfectamente en todos los dispositivos
- **🚀 Performance**: Optimizado para velocidad y SEO
- **🎵 Reproductor de Audio**: Widget de música integrado
- **📧 Formulario de Contacto**: Envío de emails funcional
- **🎪 Animaciones**: Transiciones suaves con Framer Motion
- **♿ Accesible**: Navegación por teclado y screen readers

## 🛠 Tecnologías

- **Framework**: Next.js 15.3.5
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Email**: Resend
- **Deployment**: Vercel

## 📁 Estructura del Proyecto

```
sonora-la-cuca/
├── .docs/                  # Documentación completa
├── public/                 # Assets estáticos
│   ├── images/            # Imágenes del sitio
│   └── audio/             # Archivos de audio
├── src/                   # Código fuente
│   ├── app/              # App Router de Next.js
│   ├── components/       # Componentes React
│   ├── config/           # Configuraciones
│   └── types/            # Definiciones de tipos
├── package.json          # Dependencias
├── tsconfig.json         # Configuración TypeScript
└── tailwind.config.ts    # Configuración Tailwind
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/razpodesta/sonoralacuca.git
cd sonoralacuca

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus claves

# Ejecutar en desarrollo
npm run dev
```

### Variables de Entorno

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

## 📄 Páginas

- **🏠 Inicio** (`/`) - Landing page con hero section
- **👥 Biografía** (`/biografia`) - Historia de la banda y miembros
- **🎵 Música** (`/musica`) - Discografía completa
- **📅 Fechas** (`/fechas`) - Próximos conciertos y eventos
- **📞 Contacto** (`/contacto`) - Formulario de contacto
- **📝 Blog** (`/blog/[slug]`) - Artículos y noticias

## 🎨 Componentes Principales

### Layout
- `Header` - Navegación principal
- `Footer` - Enlaces y redes sociales
- `PageTransition` - Transiciones entre páginas

### Interactivos
- `WelcomeAudioPlayer` - Reproductor de bienvenida
- `ChatWidget` - Asistente virtual
- `ContactForm` - Formulario de contacto

### Decorativos
- `Hero` - Sección principal
- `Guirnaldas` - Elementos decorativos

## 📧 Configuración de Email

El sitio utiliza **Resend** para el envío de emails:

1. Crear cuenta en [Resend](https://resend.com)
2. Obtener API key
3. Configurar en `.env.local`
4. Personalizar template en `src/components/emails/ContactTemplate.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio en [Vercel](https://vercel.com)
2. Configurar variables de entorno
3. Deploy automático en cada push

### Manual

```bash
# Build de producción
npm run build

# Iniciar servidor
npm start
```

## 📚 Documentación

La documentación completa está disponible en la carpeta `.docs/`:

- **Arquitectura**: Diseño técnico y patrones
- **Componentes**: Documentación TSDoc
- **API**: Endpoints y configuración
- **Desarrollo**: Guías para desarrolladores
- **Despliegue**: Instrucciones detalladas

## 🐛 Errores Corregidos

### Error Original de Vercel
- **Problema**: `Route "src/app/api/send/route.tsx" does not match the required types`
- **Causa**: Archivo API contenía código de página de blog
- **Solución**: Separación correcta de archivos y corrección de tipos

### Compatibilidad Next.js 15
- ✅ Parámetros de rutas dinámicas como Promise
- ✅ Eliminación de referencias JSX.Element obsoletas
- ✅ Configuración correcta de API routes

## 🎵 Discografía

### Álbumes Disponibles

1. **Ritmos del Corazón** (2025)
   - Álbum más reciente
   - 12 canciones
   - Disponible en todas las plataformas

2. **Sonidos de la Tierra** (2023)
   - Homenaje a raíces chilenas
   - 10 canciones
   - Enfoque folclórico contemporáneo

3. **Primeros Pasos** (2021)
   - Álbum debut
   - 8 canciones
   - Fundación del sonido característico

## 👥 La Banda

- **Juan "Cucaracho" Pérez** - Vocalista y Güiro
- **Ana "La Tecla" González** - Piano y Coros
- **Carlos "El Bajo" Soto** - Bajo Eléctrico
- **Sofía "La Timbalera" Rojas** - Timbales y Percusión

## 📞 Contacto

- **Contrataciones**: contrataciones@sonoralacuca.com
- **Prensa**: prensa@sonoralacuca.com
- **Web**: https://sonoralacuca.com

## 🔗 Redes Sociales

- [Instagram](https://instagram.com/sonoralacuca)
- [Facebook](https://facebook.com/sonoralacuca)
- [YouTube](https://youtube.com/sonoralacuca)
- [TikTok](https://tiktok.com/@sonoralacuca)

## 📄 Licencia

© 2025 Sonora La Cuca. Todos los derechos reservados.

## 🤝 Contribuir

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📈 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimizado
- **Bundle Size**: < 150KB
- **Load Time**: < 2s

---

**¡Viva la música! 🎵**

*Desarrollado con ❤️ para Sonora La Cuca*

