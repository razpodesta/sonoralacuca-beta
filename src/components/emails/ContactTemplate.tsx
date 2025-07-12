/**
 * @fileoverview Template de email para formulario de contacto
 * @description Plantilla HTML para emails de contacto
 * @author Manus AI
 * @version 1.0.0
 */

/**
 * Props para el template de email
 */
interface ContactTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Template de email para el formulario de contacto
 * @param props - Datos del formulario
 * @returns {string} HTML del email
 */
export function ContactTemplate({ name, email, subject, message }: ContactTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto - Sonora La Cuca</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e94560;
        }
        .logo {
          color: #c59d42;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .content {
          margin-bottom: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f9f9f9;
          border-left: 4px solid #e94560;
        }
        .field-label {
          font-weight: bold;
          color: #c59d42;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333;
        }
        .message-content {
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          white-space: pre-wrap;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Sonora La Cuca</div>
          <h2>Nuevo Mensaje de Contacto</h2>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">Nombre:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Asunto:</div>
            <div class="field-value">${subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Mensaje:</div>
            <div class="message-content">${message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Este mensaje fue enviado desde el formulario de contacto del sitio web de Sonora La Cuca.</p>
          <p>Fecha: ${new Date().toLocaleDateString('es-CL', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

