import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    console.error('Método no permitido');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    console.error('Faltan campos obligatorios:', { email, subject, message });
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    console.log('Preparando transporte SMTP...');
    // Configuración del transporte con logs y depuración
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: false, // Usar `true` para SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true, // Habilitar logs de Nodemailer
      debug: true, // Mostrar detalles de la conexión
    });

    console.log('Configuración del transporte SMTP completada.');
    console.log('Verificando conexión al servidor SMTP...');

    // Verificar conexión al servidor SMTP
    await transporter.verify();
    console.log('Conexión al servidor SMTP exitosa.');

    console.log('Preparando correos para envío...');
    const mailOptions = [
      {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_USER, // Tu correo para recibir el mensaje
        subject: `Nuevo mensaje de: ${email} - ${subject}`,
        text: message,
        html: `<p><strong>Email:</strong> ${email}</p><p><strong>Asunto:</strong> ${subject}</p><p>${message}</p>`,
      },
      {
        from: process.env.EMAIL_FROM,
        to: email, // Copia para el usuario
        subject: `Copia de tu mensaje: ${subject}`,
        text: message,
        html: `<p>Gracias por contactarnos. Aquí está una copia de tu mensaje:</p><p>${message}</p>`,
      },
    ];

    console.log('Enviando correos...');
    await Promise.all(mailOptions.map((mail) => transporter.sendMail(mail)));
    console.log('Correos enviados exitosamente.');

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res
      .status(500)
      .json({ error: 'Error al enviar el correo', details: error });
  }
}
