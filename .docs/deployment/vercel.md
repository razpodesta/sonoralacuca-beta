# Guía de Despliegue en Vercel - Sonora La Cuca

## Introducción

Esta guía detalla el proceso completo de despliegue del sitio web de Sonora La Cuca en Vercel, incluyendo la configuración inicial, resolución de errores comunes, y mejores prácticas para deployments en producción.

## Preparación para el Despliegue

### Verificación Pre-Deploy

Antes de realizar el despliegue, es crucial verificar que el proyecto esté listo:

#### 1. Build Local Exitoso

```bash
# Verificar que el proyecto compile sin errores
npm run build

# Verificar tipos de TypeScript
npm run type-check

# Verificar linting
npm run lint

# Probar el build localmente
npm run start
```

#### 2. Verificación de Archivos Críticos

Asegurarse de que estos archivos estén correctamente configurados:

- `next.config.ts` - Configuración de Next.js
- `package.json` - Dependencias y scripts
- `tsconfig.json` - Configuración de TypeScript
- `.env.example` - Template de variables de entorno

#### 3. Limpieza del Repositorio

```bash
# Eliminar archivos innecesarios
rm -rf .next node_modules

# Verificar .gitignore
cat .gitignore

# Commit final antes del deploy
git add .
git commit -m "chore: prepare for deployment"
git push origin main
```

## Configuración en Vercel

### 1. Conexión del Repositorio

#### Opción A: Desde el Dashboard de Vercel

1. Ir a [vercel.com](https://vercel.com) y hacer login
2. Click en "New Project"
3. Importar el repositorio de GitHub
4. Seleccionar el repositorio `razpodesta/sonoralacuca`

#### Opción B: Usando Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login en Vercel
vercel login

# Inicializar el proyecto
vercel

# Seguir las instrucciones interactivas
```

### 2. Configuración del Proyecto

#### Build Settings

Vercel detectará automáticamente que es un proyecto Next.js, pero verificar:

```yaml
# Configuración automática detectada
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

#### Variables de Entorno

Configurar las variables de entorno en el dashboard de Vercel:

```env
# Production Environment Variables
RESEND_API_KEY=your_production_resend_api_key
NEXT_PUBLIC_SITE_URL=https://sonoralacuca.vercel.app
NODE_ENV=production

# Optional Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 3. Configuración de Dominio

#### Dominio Personalizado (Opcional)

```bash
# Agregar dominio personalizado
vercel domains add sonoralacuca.com

# Configurar DNS records
# A record: @ -> 76.76.19.61
# CNAME record: www -> cname.vercel-dns.com
```

## Resolución del Error Original

### Problema Identificado

El error original en el deploy era:

```
Route "src/app/api/send/route.tsx" does not match the required types of a Next.js Route.
"BlogPostDetailPage" is not a valid Route export field.
```

### Causa del Error

El archivo `src/app/api/send/route.tsx` contenía código de una página de blog en lugar de la lógica de API route, causando conflictos de tipos en Next.js 15.

### Solución Implementada

#### 1. Corrección del Archivo API

```typescript
// src/app/api/send/route.ts (corregido)
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactTemplate } from '@/components/emails/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validaciones
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Envío del email
    const { data, error } = await resend.emails.send({
      from: 'Sonora La Cuca <contact@sonoralacuca.com>',
      to: 'info@sonoralacuca.com',
      subject: `Mensaje de Contacto: ${subject}`,
      replyTo: email,
      html: ContactTemplate({ name, email, subject, message }),
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      data: { id: data?.id }
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### 2. Corrección de Rutas Dinámicas

```typescript
// src/app/blog/[slug]/page.tsx (corregido para Next.js 15)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // Promise en Next.js 15
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = getPostData(slug);
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Promise en Next.js 15
}) {
  const { slug } = await params;
  const { post, prevPost, nextPost } = getPostData(slug);
  // ... resto del componente
}
```

#### 3. Corrección de Tipos TypeScript

```typescript
// Eliminación de referencias JSX.Element obsoletas
// Antes:
export default function Component(): JSX.Element {

// Después:
export default function Component() {
```

## Configuración Avanzada

### next.config.ts Optimizado

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de imagen
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Optimizaciones de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects para SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

### Optimizaciones de Performance

#### 1. Configuración de Caché

```typescript
// Configuración de caché en headers
export const revalidate = 3600; // Revalidar cada hora

// Para páginas estáticas
export const dynamic = 'force-static';

// Para páginas dinámicas
export const dynamic = 'force-dynamic';
```

#### 2. Optimización de Imágenes

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
};
```

## Monitoreo y Analytics

### Vercel Analytics

```bash
# Instalar Vercel Analytics
npm install @vercel/analytics

# Agregar al layout
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Speed Insights

```bash
# Instalar Speed Insights
npm install @vercel/speed-insights

# Agregar al layout
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Proceso de Deploy

### Deploy Automático

Vercel realiza deploy automático en cada push a la rama principal:

```bash
# Push a main triggerea deploy automático
git push origin main

# Vercel detecta el push y inicia el build
# Build logs disponibles en el dashboard
```

### Deploy Manual

```bash
# Deploy usando CLI
vercel --prod

# Deploy de una rama específica
vercel --prod --branch feature/nueva-funcionalidad
```

### Preview Deployments

```bash
# Cada push a ramas no-main crea un preview
git push origin feature/nueva-funcionalidad

# URL de preview: https://sonoralacuca-git-feature-nueva-funcionalidad.vercel.app
```

## Troubleshooting

### Errores Comunes y Soluciones

#### 1. Build Timeout

```bash
# Error: Build exceeded maximum duration
# Solución: Optimizar el build process

# En next.config.ts
const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/api/**/*': ['./node_modules/**/*.wasm'],
    },
  },
};
```

#### 2. Memory Limit Exceeded

```bash
# Error: JavaScript heap out of memory
# Solución: Aumentar memoria en package.json

{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}
```

#### 3. Environment Variables Not Found

```bash
# Verificar variables en Vercel dashboard
vercel env ls

# Agregar variable faltante
vercel env add RESEND_API_KEY
```

#### 4. TypeScript Errors

```bash
# Error: Type check failed
# Solución: Verificar tipos localmente

npm run type-check

# Corregir errores antes del deploy
```

### Logs y Debugging

#### Acceso a Logs

```bash
# Ver logs en tiempo real
vercel logs

# Ver logs de una función específica
vercel logs --function=api/send

# Ver logs de un deployment específico
vercel logs [deployment-url]
```

#### Debug Mode

```typescript
// Habilitar debug en producción (temporalmente)
console.log('Debug info:', process.env.NODE_ENV);

// Usar Vercel's built-in debugging
import { logger } from '@vercel/logger';
logger.info('Function executed successfully');
```

## Mejores Prácticas

### 1. Estrategia de Branching

```bash
# Desarrollo en ramas feature
git checkout -b feature/nueva-funcionalidad

# Preview deploy automático
git push origin feature/nueva-funcionalidad

# Merge a main para production deploy
git checkout main
git merge feature/nueva-funcionalidad
git push origin main
```

### 2. Testing Pre-Deploy

```bash
# Script de pre-deploy
#!/bin/bash
echo "Running pre-deploy checks..."

# Type check
npm run type-check
if [ $? -ne 0 ]; then
  echo "Type check failed"
  exit 1
fi

# Lint check
npm run lint
if [ $? -ne 0 ]; then
  echo "Lint check failed"
  exit 1
fi

# Build check
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi

echo "All checks passed!"
```

### 3. Rollback Strategy

```bash
# Rollback a deployment anterior
vercel rollback [deployment-url]

# O revertir commit y re-deploy
git revert HEAD
git push origin main
```

## Configuración de Dominio Personalizado

### DNS Configuration

```dns
# Configuración DNS para dominio personalizado
Type    Name    Value
A       @       76.76.19.61
CNAME   www     cname.vercel-dns.com
```

### SSL Certificate

Vercel proporciona SSL automático:
- Certificados Let's Encrypt automáticos
- Renovación automática
- HTTP/2 habilitado por defecto

## Performance Optimization

### Core Web Vitals

Optimizaciones implementadas para mejorar Core Web Vitals:

1. **Largest Contentful Paint (LCP)**
   - Optimización de imágenes con Next.js Image
   - Preload de recursos críticos
   - CDN automático de Vercel

2. **First Input Delay (FID)**
   - Code splitting automático
   - Lazy loading de componentes no críticos
   - Optimización de JavaScript

3. **Cumulative Layout Shift (CLS)**
   - Dimensiones explícitas en imágenes
   - Reserva de espacio para contenido dinámico
   - Fuentes optimizadas

### Monitoring

```typescript
// Web Vitals reporting
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Enviar métricas a analytics
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

*Esta guía de despliegue asegura un proceso de deploy robusto y confiable para el sitio web de Sonora La Cuca en Vercel, con todas las optimizaciones y mejores prácticas implementadas.*

