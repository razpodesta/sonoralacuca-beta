# Guía de Instalación y Desarrollo - Sonora La Cuca

## Introducción

Esta guía proporciona instrucciones detalladas para configurar el entorno de desarrollo del sitio web de Sonora La Cuca. Incluye todos los pasos necesarios desde la instalación inicial hasta el desarrollo activo, testing y deployment.

## Requisitos del Sistema

### Software Requerido

Antes de comenzar, asegúrate de tener instalado:

1. **Node.js** (versión 18.0 o superior)
   - Recomendado: Node.js 20.x LTS
   - Incluye npm automáticamente
   - Verificar: `node --version && npm --version`

2. **Git** (versión 2.0 o superior)
   - Para control de versiones
   - Verificar: `git --version`

3. **Editor de Código** (recomendado)
   - Visual Studio Code con extensiones de React/TypeScript
   - WebStorm
   - Cualquier editor con soporte para TypeScript

### Extensiones Recomendadas para VS Code

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

## Instalación Inicial

### 1. Clonar el Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/razpodesta/sonoralacuca.git
cd sonoralacuca

# Verificar la rama actual
git branch
```

### 2. Instalación de Dependencias

```bash
# Instalar todas las dependencias
npm install

# Verificar la instalación
npm list --depth=0
```

### 3. Configuración de Variables de Entorno

Crear el archivo `.env.local` en la raíz del proyecto:

```bash
# Copiar el template de variables de entorno
cp .env.example .env.local
```

Configurar las variables necesarias en `.env.local`:

```env
# Email Configuration
RESEND_API_KEY=your_resend_api_key_here

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Environment
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Verificación de la Instalación

```bash
# Ejecutar el servidor de desarrollo
npm run dev

# El sitio debería estar disponible en http://localhost:3000
```

## Estructura del Proyecto

### Directorios Principales

```
sonoralacuca/
├── .docs/                  # Documentación del proyecto
├── .next/                  # Build output (generado automáticamente)
├── node_modules/           # Dependencias (generado automáticamente)
├── public/                 # Assets estáticos
│   ├── images/            # Imágenes del sitio
│   ├── audio/             # Archivos de audio
│   └── favicon.ico        # Favicon
├── src/                   # Código fuente
│   ├── app/              # App Router de Next.js
│   ├── components/       # Componentes React
│   ├── config/           # Configuraciones
│   └── types/            # Definiciones de tipos
├── .env.local            # Variables de entorno (no versionado)
├── .gitignore            # Archivos ignorados por Git
├── eslint.config.mjs     # Configuración de ESLint
├── next.config.ts        # Configuración de Next.js
├── package.json          # Dependencias y scripts
├── postcss.config.mjs    # Configuración de PostCSS
├── README.md             # Documentación principal
├── tailwind.config.ts    # Configuración de Tailwind CSS
└── tsconfig.json         # Configuración de TypeScript
```

### Archivos de Configuración

#### package.json
Contiene todas las dependencias y scripts del proyecto:

```json
{
  "name": "sonora-la-cuca-portal",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

#### tsconfig.json
Configuración de TypeScript optimizada para Next.js:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Scripts de Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

### Desarrollo Activo

#### Servidor de Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev

# El servidor se iniciará en http://localhost:3000
# Hot reload automático al guardar cambios
```

#### Verificación de Tipos

```bash
# Verificar tipos sin compilar
npm run type-check

# Verificar y corregir linting
npm run lint
npm run lint -- --fix
```

## Flujo de Desarrollo

### 1. Crear una Nueva Rama

```bash
# Crear y cambiar a una nueva rama
git checkout -b feature/nueva-funcionalidad

# O para correcciones
git checkout -b fix/correccion-bug
```

### 2. Desarrollo de Funcionalidades

#### Crear un Nuevo Componente

```bash
# Crear el archivo del componente
touch src/components/categoria/NuevoComponente.tsx
```

Estructura básica del componente:

```typescript
/**
 * @fileoverview Descripción del nuevo componente
 * @description Funcionalidad detallada del componente
 * @author Tu Nombre
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props interface para el nuevo componente
 */
interface NuevoComponenteProps {
  // Definir props aquí
}

/**
 * Nuevo componente con funcionalidad específica
 * @param props - Props del componente
 * @returns El componente renderizado
 */
export default function NuevoComponente(props: NuevoComponenteProps) {
  return (
    <div>
      {/* Implementación del componente */}
    </div>
  );
}
```

#### Agregar Estilos

```typescript
// Usando Tailwind CSS
<div className="bg-brand-dark text-white p-4 rounded-lg">
  {/* Contenido */}
</div>

// Para estilos personalizados, agregar a globals.css
```

### 3. Testing Local

```bash
# Verificar que la aplicación compile sin errores
npm run build

# Verificar tipos
npm run type-check

# Verificar linting
npm run lint
```

### 4. Commit y Push

```bash
# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: agregar nuevo componente de funcionalidad"

# Push a la rama
git push origin feature/nueva-funcionalidad
```

## Configuración del Editor

### Visual Studio Code

#### settings.json
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

#### Snippets Personalizados

Crear snippets para componentes React en `.vscode/snippets.json`:

```json
{
  "React Component": {
    "prefix": "rfc",
    "body": [
      "/**",
      " * @fileoverview $1",
      " * @description $2",
      " * @author ${3:Tu Nombre}",
      " * @version 1.0.0",
      " */",
      "",
      "import React from 'react';",
      "",
      "/**",
      " * Props interface para $4",
      " */",
      "interface ${4:ComponentName}Props {",
      "  $5",
      "}",
      "",
      "/**",
      " * $6",
      " * @param props - Props del componente",
      " * @returns El componente renderizado",
      " */",
      "export default function $4(props: ${4:ComponentName}Props) {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  );",
      "}"
    ],
    "description": "Crear un componente React con documentación TSDoc"
  }
}
```

## Debugging

### Herramientas de Debug

#### React Developer Tools
```bash
# Instalar la extensión del navegador
# Chrome: React Developer Tools
# Firefox: React Developer Tools
```

#### Next.js Debug Mode
```bash
# Ejecutar con debug habilitado
DEBUG=* npm run dev

# O específico para Next.js
DEBUG=next:* npm run dev
```

#### TypeScript Debug
```bash
# Verificar configuración de TypeScript
npx tsc --showConfig

# Compilar con información detallada
npx tsc --noEmit --pretty
```

### Logging en Desarrollo

```typescript
// Usar console.log solo en desarrollo
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// Para logging más avanzado
import { logger } from '@/lib/logger';
logger.debug('Component mounted', { componentName: 'Header' });
```

## Solución de Problemas Comunes

### Error: Module not found

```bash
# Limpiar caché de Node.js
rm -rf node_modules package-lock.json
npm install

# Verificar paths en tsconfig.json
```

### Error: Port 3000 already in use

```bash
# Encontrar y terminar el proceso
lsof -ti:3000 | xargs kill -9

# O usar un puerto diferente
npm run dev -- -p 3001
```

### Error: TypeScript compilation

```bash
# Verificar configuración
npm run type-check

# Regenerar tipos de Next.js
rm -rf .next
npm run dev
```

### Error: Tailwind styles not loading

```bash
# Verificar configuración de PostCSS
cat postcss.config.mjs

# Verificar importación en globals.css
grep -n "tailwindcss" src/app/globals.css
```

## Performance y Optimización

### Análisis de Bundle

```bash
# Analizar el tamaño del bundle
npm run build
npx @next/bundle-analyzer
```

### Optimización de Imágenes

```typescript
// Usar Next.js Image component
import Image from 'next/image';

<Image
  src="/images/banda.jpg"
  alt="Sonora La Cuca"
  width={800}
  height={600}
  priority // Para imágenes above-the-fold
/>
```

### Lazy Loading de Componentes

```typescript
// Importación dinámica para componentes pesados
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

---

*Esta guía de desarrollo proporciona todo lo necesario para trabajar eficientemente en el proyecto Sonora La Cuca, desde la configuración inicial hasta el desarrollo avanzado.*

