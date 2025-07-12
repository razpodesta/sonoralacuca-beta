# Rutas y Recomendaciones para Archivos Multimedia

Este documento detalla las rutas recomendadas para la organización de archivos multimedia dentro del proyecto, así como las características y dimensiones óptimas para cada tipo de imagen.

## 📁 Estructura de Directorios Multimedia

Todos los archivos multimedia deben ubicarse dentro del directorio `public/` para ser accesibles directamente por el navegador.

```
public/
├── images/                 # Imágenes generales del sitio
│   ├── albums/             # Portadas de álbumes
│   ├── band/               # Fotos de la banda y miembros
│   ├── blog/               # Imágenes para artículos del blog
│   ├── gallery/            # Imágenes para la galería (si aplica)
│   ├── hero/               # Imágenes para la sección Hero
│   └── icons/              # Iconos y favicons
├── audio/                  # Archivos de audio (ej. snippets, intros)
├── videos/                 # Archivos de video (si aplica)
└── downloads/              # Archivos descargables (ej. press kits)
```

## 🖼️ Recomendaciones para Imágenes

Para asegurar un rendimiento óptimo y una buena calidad visual, se recomienda seguir las siguientes directrices para cada tipo de imagen. Siempre que sea posible, utiliza el componente `next/image` para el manejo automático de optimización y responsive.

### 1. Imágenes de la Sección Hero (Fondo Principal)

- **Ruta**: `public/images/hero/`
- **Descripción**: Imágenes de gran tamaño utilizadas como fondo principal en la página de inicio o secciones destacadas.
- **Dimensiones Recomendadas**: `1920px` de ancho (o más, hasta `3840px` para pantallas 4K) x `1080px` de alto (o relación de aspecto 16:9).
- **Formato**: `WebP` o `AVIF` para mejor compresión y calidad. `JPG` como fallback.
- **Tamaño de Archivo**: Menos de `300 KB`.
- **Características**: Alta resolución, buena iluminación, temática relevante a la banda o conciertos.

### 2. Portadas de Álbumes

- **Ruta**: `public/images/albums/`
- **Descripción**: Imágenes cuadradas que representan las portadas de los álbumes de la banda.
- **Dimensiones Recomendadas**: `600px` x `600px` (mínimo) hasta `1000px` x `1000px`.
- **Formato**: `WebP` o `JPG`.
- **Tamaño de Archivo**: Menos de `100 KB`.
- **Características**: Diseño claro, legible, colores vibrantes.

### 3. Fotos de la Banda y Miembros

- **Ruta**: `public/images/band/`
- **Descripción**: Retratos individuales de los miembros y fotos grupales de la banda.
- **Dimensiones Recomendadas**:
    - **Retratos (vertical)**: `800px` de ancho x `1200px` de alto (relación 2:3).
    - **Grupales (horizontal)**: `1200px` de ancho x `800px` de alto (relación 3:2).
- **Formato**: `WebP` o `JPG`.
- **Tamaño de Archivo**: Menos de `150 KB`.
- **Características**: Profesional, buena iluminación, expresiones carismáticas.

### 4. Imágenes para Artículos del Blog

- **Ruta**: `public/images/blog/`
- **Descripción**: Imágenes utilizadas como miniaturas o dentro del contenido de los artículos del blog.
- **Dimensiones Recomendadas**:
    - **Miniaturas (horizontal)**: `800px` de ancho x `450px` de alto (relación 16:9).
    - **Dentro del artículo**: Ancho máximo del contenedor de texto (ej. `700px`), altura variable.
- **Formato**: `WebP` o `JPG`.
- **Tamaño de Archivo**: Menos de `100 KB`.
- **Características**: Relevantes al contenido del artículo, atractivas visualmente.

### 5. Iconos y Favicons

- **Ruta**: `public/images/icons/` (o directamente en `public/` para favicons)
- **Descripción**: Pequeñas imágenes para iconos de redes sociales, navegación, favicons, etc.
- **Dimensiones Recomendadas**:
    - **Favicon**: `16x16px`, `32x32px`, `48x48px`, `180x180px` (Apple Touch Icon).
    - **Iconos de UI**: `24x24px`, `32x32px`, `48x48px`.
- **Formato**: `PNG` (para transparencia), `SVG` (para escalabilidad), `ICO` (para favicon).
- **Tamaño de Archivo**: Menos de `10 KB`.
- **Características**: Diseño simple, reconocible, optimizado para tamaños pequeños.

### 6. Imágenes de Galería (si aplica)

- **Ruta**: `public/images/gallery/`
- **Descripción**: Fotos de conciertos, eventos, sesiones de fotos, etc., para una sección de galería.
- **Dimensiones Recomendadas**: `1200px` de ancho (altura variable según relación de aspecto original).
- **Formato**: `WebP` o `JPG`.
- **Tamaño de Archivo**: Menos de `200 KB`.
- **Características**: Alta calidad, variadas, que capturen la energía de la banda.

## 🔊 Recomendaciones para Archivos de Audio

- **Ruta**: `public/audio/`
- **Descripción**: Snippets de canciones, intros, efectos de sonido, etc.
- **Formato**: `MP3` (para compatibilidad amplia) o `OGG` (para mejor compresión).
- **Tasa de Bits**: `128 kbps` a `192 kbps` para web.
- **Tamaño de Archivo**: Optimizar para la duración. Un snippet de 30 segundos a 128 kbps debería ser menos de `500 KB`.
- **Características**: Calidad de audio clara, volumen balanceado.

## 📹 Recomendaciones para Archivos de Video

- **Ruta**: `public/videos/`
- **Descripción**: Clips cortos, teasers, o videos promocionales. Para videos largos, se recomienda usar plataformas como YouTube o Vimeo e incrustarlos.
- **Formato**: `MP4` (H.264) para compatibilidad. `WebM` para mejor compresión.
- **Resolución**: `720p` (`1280x720px`) o `1080p` (`1920x1080px`).
- **Tasa de Bits**: Optimizar para la calidad visual deseada. `1 Mbps` a `5 Mbps` para web.
- **Tamaño de Archivo**: Mantener lo más bajo posible. Menos de `5 MB` para clips cortos.
- **Características**: Buena calidad de imagen y sonido, duración concisa.

## 📦 Recomendaciones para Archivos Descargables (Press Kits, etc.)

- **Ruta**: `public/downloads/`
- **Descripción**: Documentos PDF, ZIPs de imágenes de alta resolución, etc.
- **Formato**: `PDF`, `ZIP`.
- **Tamaño de Archivo**: Dependerá del contenido, pero se recomienda comprimir lo máximo posible.
- **Características**: Contenido relevante y bien organizado.

---

