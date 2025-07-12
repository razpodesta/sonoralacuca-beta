import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactTemplate } from '@/components/emails/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Reemplaza con tu dominio verificado en Resend
      to: 'delivered@resend.dev', // Reemplaza con el email de destino (ej. tu email de contacto)
      subject: `Mensaje de Contacto: ${subject}`,
      replyTo: email,
      react: ContactTemplate({ name, email, subject, message }),
    });

    if (error) {
      console.error('Error al enviar email:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email enviado exitosamente.', data });
  } catch (error) {
    console.error('Error inesperado:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}


