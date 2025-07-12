# Documentación de Componentes - Sonora La Cuca

## Introducción

Esta documentación detalla todos los componentes React utilizados en el sitio web de Sonora La Cuca. Cada componente ha sido diseñado siguiendo los principios de reutilización, mantenibilidad y rendimiento, con documentación TSDoc completa para facilitar el desarrollo y mantenimiento.

## Estructura de Componentes

### Organización por Categorías

Los componentes están organizados en categorías funcionales para facilitar su localización y mantenimiento:

```
src/components/
├── audio/              # Componentes relacionados con audio
├── contact/            # Componentes de contacto e interacción
├── decorations/        # Elementos decorativos y visuales
├── emails/             # Templates para emails
├── home/               # Componentes específicos de la página principal
├── icons/              # Iconos SVG optimizados
└── layout/             # Componentes de estructura y layout
```

## Componentes de Layout

### Header Component

**Ubicación:** `src/components/layout/Header.tsx`

El componente Header proporciona la navegación principal del sitio con las siguientes características:

#### Funcionalidades Principales
- Navegación responsive con menú hamburguesa en móviles
- Logo de la banda con enlace a la página principal
- Menú de navegación con enlaces a todas las secciones
- Animaciones suaves en las transiciones
- Estado activo para la página actual

#### Props Interface
```typescript
interface HeaderProps {
  // No requiere props externos, usa configuración interna
}
```

#### Características Técnicas
- **Responsive Design**: Adaptación automática a diferentes tamaños de pantalla
- **Accessibility**: Navegación por teclado y screen readers
- **Performance**: Lazy loading de elementos no críticos
- **SEO**: Estructura semántica con elementos nav apropiados

#### Ejemplo de Uso
```typescript
import Header from '@/components/layout/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

### Footer Component

**Ubicación:** `src/components/layout/Footer.tsx`

El Footer proporciona información de contacto, enlaces importantes y redes sociales.

#### Funcionalidades
- Enlaces a redes sociales con iconos optimizados
- Información de copyright y legal
- Enlaces de navegación secundarios
- Diseño responsive con reorganización en móviles

#### Estructura del Contenido
1. **Sección Principal**: Logo y descripción breve
2. **Enlaces Rápidos**: Navegación a páginas importantes
3. **Redes Sociales**: Iconos con enlaces externos
4. **Copyright**: Información legal y derechos

### PageTransition Component

**Ubicación:** `src/components/layout/PageTransition.tsx`

Proporciona transiciones suaves entre páginas usando Framer Motion.

#### Props Interface
```typescript
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}
```

#### Animaciones Implementadas
- **Entrada**: Fade in con slide up sutil
- **Salida**: Fade out con slide down
- **Duración**: 300ms para transiciones rápidas pero suaves

### Preloader Component

**Ubicación:** `src/components/layout/Preloader.tsx`

Pantalla de carga inicial con animación del logo de la banda.

#### Características
- Animación del logo con efectos de escala y rotación
- Fade out automático después de la carga
- Indicador de progreso visual
- Optimización para Core Web Vitals

## Componentes de Audio

### WelcomeAudioPlayer Component

**Ubicación:** `src/components/audio/WelcomeAudioPlayer.tsx`

Reproductor de audio flotante para música de bienvenida.

#### Funcionalidades Principales
- Reproducción automática opcional
- Controles de play/pause
- Indicador visual de reproducción
- Posición flotante no intrusiva
- Capacidad de minimizar/cerrar

#### Props Interface
```typescript
interface WelcomeAudioPlayerProps {
  audioSrc?: string;
  autoPlay?: boolean;
  showControls?: boolean;
}
```

#### Estados del Componente
- `isPlaying`: Estado de reproducción
- `isVisible`: Visibilidad del widget
- `currentTime`: Tiempo actual de reproducción
- `duration`: Duración total del audio

#### Ejemplo de Implementación
```typescript
const WelcomeAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Implementación del reproductor */}
    </div>
  );
};
```

## Componentes de Contacto

### ChatWidget Component

**Ubicación:** `src/components/contact/ChatWidget.tsx`

Widget de chat interactivo para comunicación con los usuarios.

#### Props Interface
```typescript
interface ChatWidgetProps {
  avatarSrc: string;
  welcomeMessage: string;
  position?: 'bottom-right' | 'bottom-left';
}
```

#### Funcionalidades
- Chat simulado con respuestas predefinidas
- Avatar personalizable del miembro de la banda
- Animaciones de entrada y salida
- Responsive design para móviles
- Estado expandido/colapsado

#### Estados del Chat
- `isOpen`: Estado de apertura del chat
- `messages`: Array de mensajes
- `isTyping`: Indicador de escritura
- `unreadCount`: Contador de mensajes no leídos

### ContactTemplate Component

**Ubicación:** `src/components/emails/ContactTemplate.tsx`

Template HTML para emails de contacto enviados desde el formulario.

#### Props Interface
```typescript
interface ContactTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

#### Características del Template
- Diseño responsive para clientes de email
- Branding consistente con el sitio web
- Estructura semántica para mejor deliverability
- Estilos inline para compatibilidad máxima

## Componentes de la Página Principal

### Hero Component

**Ubicación:** `src/components/home/Hero.tsx`

Sección principal de bienvenida con imagen de fondo y call-to-action.

#### Funcionalidades
- Imagen de fondo responsive con overlay
- Texto principal con tipografía de marca
- Botones de call-to-action
- Animaciones de entrada escalonadas
- Integración con reproductor de audio

#### Estructura del Contenido
1. **Background**: Imagen de la banda con overlay
2. **Logo**: Logo principal de Sonora La Cuca
3. **Tagline**: Frase característica de la banda
4. **CTA Buttons**: Enlaces a música y fechas
5. **Social Proof**: Indicadores de popularidad

#### Responsive Behavior
- **Desktop**: Layout horizontal con imagen de fondo completa
- **Tablet**: Ajuste de tamaños de texto y botones
- **Mobile**: Layout vertical con imagen optimizada

## Componentes Decorativos

### Guirnaldas Component

**Ubicación:** `src/components/decorations/Guirnaldas.tsx`

Elementos decorativos animados que añaden personalidad visual al sitio.

#### Características
- Animaciones CSS puras para mejor rendimiento
- Múltiples variaciones de diseño
- Posicionamiento absoluto no intrusivo
- Responsive scaling

#### Tipos de Decoraciones
1. **Guirnaldas Musicales**: Notas musicales flotantes
2. **Elementos Geométricos**: Formas abstractas
3. **Partículas**: Efectos de partículas sutiles

## Componentes de Iconos

### SocialIcons Component

**Ubicación:** `src/components/icons/SocialIcons.tsx`

Colección de iconos SVG optimizados para redes sociales.

#### Iconos Incluidos
- Instagram
- Facebook
- TikTok
- YouTube
- Spotify
- Apple Music

#### Características Técnicas
- **SVG Optimizado**: Tamaño mínimo sin pérdida de calidad
- **Accesibilidad**: Títulos y descripciones apropiadas
- **Theming**: Colores adaptables según el contexto
- **Hover Effects**: Animaciones sutiles en interacción

#### Props Interface
```typescript
interface SocialIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}
```

## Patrones de Desarrollo

### Convenciones de Naming

Todos los componentes siguen convenciones consistentes:

1. **PascalCase** para nombres de componentes
2. **camelCase** para props y variables
3. **kebab-case** para archivos CSS
4. **UPPER_CASE** para constantes

### Estructura de Archivos

Cada componente sigue esta estructura:

```typescript
/**
 * @fileoverview Descripción del componente
 * @description Funcionalidad detallada
 * @author Manus AI
 * @version 1.0.0
 */

import React from 'react';
// Otros imports...

/**
 * Props interface con documentación TSDoc
 */
interface ComponentProps {
  // Props definidas...
}

/**
 * Componente principal con documentación
 * @param props - Props del componente
 * @returns El componente renderizado
 */
export default function Component(props: ComponentProps) {
  // Implementación...
}
```

### Testing Strategy

Aunque no implementado en la versión actual, la estructura está preparada para:

1. **Unit Tests**: Testing de componentes individuales
2. **Integration Tests**: Testing de interacciones entre componentes
3. **E2E Tests**: Testing de flujos completos de usuario
4. **Visual Regression Tests**: Testing de cambios visuales

---

*Esta documentación de componentes proporciona una guía completa para el desarrollo, mantenimiento y extensión del sistema de componentes de Sonora La Cuca.*

