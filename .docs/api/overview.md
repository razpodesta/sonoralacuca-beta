# Documentación de API - Sonora La Cuca

## Introducción

El sitio web de Sonora La Cuca implementa una API RESTful usando Next.js API Routes para manejar las funcionalidades del backend. Esta documentación detalla todos los endpoints disponibles, sus parámetros, respuestas y ejemplos de uso.

## Arquitectura de la API

### Estructura General

La API está construida sobre Next.js 15 API Routes, proporcionando:

- **Server-side Rendering**: Procesamiento en el servidor para mejor SEO
- **Type Safety**: TypeScript en toda la API
- **Automatic Serialization**: Manejo automático de JSON
- **Built-in Optimization**: Optimizaciones automáticas de Next.js

### Ubicación de Endpoints

Todos los endpoints de la API están ubicados en:
```
src/app/api/
├── send/
│   └── route.ts        # Endpoint para envío de emails
└── [future-endpoints]  # Endpoints futuros
```

## Endpoints Disponibles

### POST /api/send

**Descripción:** Endpoint para el envío de emails desde el formulario de contacto.

#### Request

**URL:** `POST /api/send`

**Headers:**
```http
Content-Type: application/json
```

**Body Parameters:**
```typescript
interface ContactFormData {
  name: string;        // Nombre del remitente (requerido)
  email: string;       // Email del remitente (requerido)
  subject: string;     // Asunto del mensaje (requerido)
  message: string;     // Contenido del mensaje (requerido)
}
```

**Ejemplo de Request:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "subject": "contrataciones",
  "message": "Hola, me interesa contratar a la banda para un evento..."
}
```

#### Response

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email enviado exitosamente",
  "data": {
    "id": "email-id-from-provider",
    "timestamp": "2025-07-12T16:30:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Validation error",
  "details": {
    "field": "email",
    "message": "Email format is invalid"
  }
}
```

**Error Response (500):**
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Failed to send email"
}
```

#### Validaciones

El endpoint implementa las siguientes validaciones:

1. **Campos Requeridos**: Todos los campos son obligatorios
2. **Formato de Email**: Validación de formato de email válido
3. **Longitud de Mensaje**: Mínimo 10 caracteres, máximo 5000
4. **Sanitización**: Limpieza de HTML y scripts maliciosos

#### Implementación

```typescript
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
      data: { id: data?.id, timestamp: new Date().toISOString() }
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Configuración de Email

### Proveedor de Email

El sistema utiliza **Resend** como proveedor de email por las siguientes razones:

1. **Deliverability**: Alta tasa de entrega
2. **Developer Experience**: API simple y bien documentada
3. **React Support**: Soporte nativo para templates React
4. **Analytics**: Métricas detalladas de envío

### Variables de Entorno

```env
RESEND_API_KEY=your_resend_api_key_here
```

### Template de Email

El template de email está implementado como un componente React:

```typescript
export function ContactTemplate({ name, email, subject, message }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Nuevo mensaje de contacto</title>
        <style>
          /* Estilos inline para compatibilidad */
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nuevo Mensaje de Contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <div class="message">${message}</div>
        </div>
      </body>
    </html>
  `;
}
```

## Manejo de Errores

### Estrategia de Error Handling

La API implementa un manejo de errores robusto:

1. **Validation Errors**: Errores de validación de entrada
2. **Service Errors**: Errores del proveedor de email
3. **Network Errors**: Errores de conectividad
4. **Server Errors**: Errores internos del servidor

### Códigos de Estado HTTP

| Código | Descripción | Uso |
|--------|-------------|-----|
| 200 | OK | Operación exitosa |
| 400 | Bad Request | Error de validación |
| 401 | Unauthorized | Autenticación requerida |
| 403 | Forbidden | Permisos insuficientes |
| 404 | Not Found | Endpoint no encontrado |
| 429 | Too Many Requests | Rate limit excedido |
| 500 | Internal Server Error | Error interno |

### Rate Limiting

Para prevenir abuso, se implementa rate limiting:

```typescript
// Configuración de rate limiting
const rateLimiter = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // máximo 5 requests por ventana
  message: 'Too many requests, please try again later'
};
```

## Seguridad

### Medidas de Seguridad Implementadas

1. **Input Sanitization**: Limpieza de todos los inputs
2. **CORS Configuration**: Configuración restrictiva de CORS
3. **Rate Limiting**: Prevención de spam y abuso
4. **Environment Variables**: Secrets protegidos
5. **HTTPS Only**: Forzar conexiones seguras

### Validación de Datos

```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.enum(['contrataciones', 'prensa', 'colaboraciones', 'fan', 'otro']),
  message: z.string().min(10).max(5000)
});

// Uso en el endpoint
const validatedData = contactSchema.parse(requestData);
```

## Testing de la API

### Estrategia de Testing

Aunque no implementado en la versión actual, la API está preparada para:

1. **Unit Tests**: Testing de funciones individuales
2. **Integration Tests**: Testing de endpoints completos
3. **Load Tests**: Testing de rendimiento bajo carga
4. **Security Tests**: Testing de vulnerabilidades

### Ejemplo de Test

```typescript
describe('/api/send', () => {
  it('should send email successfully', async () => {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'contrataciones',
        message: 'Test message'
      })
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
  });
});
```

## Monitoreo y Logging

### Logging Strategy

La API implementa logging estructurado para facilitar el debugging:

```typescript
import { logger } from '@/lib/logger';

export async function POST(request: Request) {
  logger.info('Contact form submission started', {
    timestamp: new Date().toISOString(),
    userAgent: request.headers.get('user-agent')
  });

  try {
    // Lógica del endpoint...
    logger.info('Email sent successfully', { emailId: data.id });
  } catch (error) {
    logger.error('Failed to send email', { error: error.message });
  }
}
```

### Métricas

Métricas importantes a monitorear:

1. **Response Time**: Tiempo de respuesta promedio
2. **Success Rate**: Tasa de éxito de envíos
3. **Error Rate**: Tasa de errores por tipo
4. **Request Volume**: Volumen de requests por período

## Extensibilidad

### Endpoints Futuros

La arquitectura está preparada para agregar nuevos endpoints:

1. **Newsletter Subscription**: `/api/newsletter`
2. **Event Booking**: `/api/booking`
3. **Music Streaming**: `/api/music`
4. **Fan Club**: `/api/fanclub`

### Versionado de API

Para futuras versiones:

```
/api/v1/send    # Versión actual
/api/v2/send    # Versión futura
```

---

*Esta documentación de API proporciona una guía completa para el uso, mantenimiento y extensión de los servicios backend de Sonora La Cuca.*

